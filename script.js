/* ------- Configuration ------- */
const ANIMATION_CURVES = ['sine','quad','cubic','quart','quint','expo','circ','back','elastic','bounce'];
const ANIMATION_SPEEDS = ['in','out','inout']; // speed direction variants
const DEFAULT_BARS = 40;

/* Map named curves to easing strings suitable for CSS/Web Animations.
   These are approximations — chosen to represent the named curves.
*/
const EASING_MAP = {
  sine: {
    in:   'cubic-bezier(.47,0,.745,.715)',
    out:  'cubic-bezier(.39,.575,.565,1)',
    inout:'cubic-bezier(.445,.05,.55,.95)'
  },
  quad: {
    in: 'cubic-bezier(.55,.085,.68,.53)',
    out:'cubic-bezier(.25,.46,.45,.94)',
    inout:'cubic-bezier(.455,.03,.515,.955)'
  },
  cubic: {
    in:'cubic-bezier(.55,.055,.675,.19)',
    out:'cubic-bezier(.215,.61,.355,1)',
    inout:'cubic-bezier(.645,.045,.355,1)'
  },
  quart: {
    in:'cubic-bezier(.895,.03,.685,.22)',
    out:'cubic-bezier(.165,.84,.44,1)',
    inout:'cubic-bezier(.77,0,.175,1)'
  },
  quint: {
    in:'cubic-bezier(.755,.05,.855,.06)',
    out:'cubic-bezier(.23,1,.32,1)',
    inout:'cubic-bezier(.86,0,.07,1)'
  },
  expo: {
    in:'cubic-bezier(.95,.05,.795,.035)',
    out:'cubic-bezier(.19,1,.22,1)',
    inout:'cubic-bezier(1,0,0,1)'
  },
  circ: {
    in:'cubic-bezier(.6,.04,.98,.335)',
    out:'cubic-bezier(.075,.82,.165,1)',
    inout:'cubic-bezier(.785,.135,.15,.86)'
  },
  back: {
    in:'cubic-bezier(.6,-0.28,.735,.045)',
    out:'cubic-bezier(.175,.885,.32,1.275)',
    inout:'cubic-bezier(.68,-0.55,.265,1.55)'
  },
  elastic: {
    in:'cubic-bezier(.7, -0.6, .35, 1.6)',
    out:'cubic-bezier(.3, -0.6, .2, 1.6)',
    inout:'cubic-bezier(.75, -0.4, .2, 1.35)'
  },
  bounce: {
    in:'cubic-bezier(.36, .07, .19, .97)',
    out:'cubic-bezier(.4, .0, .2, 1.0)',
    inout:'cubic-bezier(.36, .07, .19, .97)'
  }
};

/* ------- Player State ------- */
const state = {
  audio: new Audio(),
  playlist: [],        // {src, title, artist, art}
  currentIndex: -1,
  isPlaying: false,
  shuffle: false,
  repeatMode: 0, // 0=off, 1=all, 2=one
  animCurve: null,
  animSpeed: null,
  animLabel: null,
  visualBars: DEFAULT_BARS,
  analyser: null,
  audioContext: null,
  sourceNode: null,
  rafId: null
};

/* ------- Elements ------- */
const playBtn = document.getElementById('playBtn');
const playIconPath = document.getElementById('playPath');
const stopBtn = document.getElementById('stopBtn');
const rewBtn = document.getElementById('rewBtn');
const fwdBtn = document.getElementById('fwdBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const fileInput = document.getElementById('fileInput');
const seekRange = document.getElementById('seekRange');
const timeDisplay = document.getElementById('timeDisplay');
const statusDisplay = document.getElementById('statusDisplay');
const playlistEl = document.getElementById('playlist');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist');
const albumArtImg = document.getElementById('albumArtImg');
const musicNoteSVG = document.getElementById('musicNoteSVG');
const visualiser = document.getElementById('visualiser');
const animLabel = document.getElementById('animLabel');
const curveLabel = document.getElementById('curveLabel');
const liquidBlob = document.getElementById('liquidBlob');

/* ------- Utilities ------- */
function fmtTime(s){
  if(!isFinite(s)) return '00:00';
  s = Math.floor(s);
  const m = Math.floor(s/60);
  const sec = s % 60;
  return String(m).padStart(2,'0') + ':' + String(sec).padStart(2,'0');
}

function chooseRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

/* ------- Initialise random animations (runs on load) ------- */
function initRandomAnimations(){
  const curve = chooseRandom(ANIMATION_CURVES);
  const speed = chooseRandom(ANIMATION_SPEEDS);
  state.animCurve = curve;
  state.animSpeed = speed;
  animLabel.textContent = `${curve}-${speed}`;
  curveLabel.textContent = `${curve} / ${speed}`;

  // Apply to liquid blob: transform scale + rotate animated with randomised duration & easing
  const duration = 4500 + Math.floor(Math.random()*5000); // 4.5s - 9.5s
  const easing = (EASING_MAP[curve] && EASING_MAP[curve][speed]) || 'cubic-bezier(.33,.66,.66,1)';

  liquidBlob.animate([
    { transform: 'scale(0.9) rotate(0deg) translate(0,0)', opacity:0.6 },
    { transform: 'scale(1.06) rotate(6deg) translate(6px,-6px)', opacity:0.85 },
    { transform: 'scale(0.95) rotate(-6deg) translate(-8px,4px)', opacity:0.65 }
  ],{
    duration: duration,
    iterations: Infinity,
    direction: 'alternate',
    easing: easing
  });

  // Visualiser appearance randomisation: number of bars
  state.visualBars = 20 + Math.floor(Math.random()*60);
  buildVisualiserBars(state.visualBars);

  // Pulse the play button glow slightly with random timing
  const playPulseDuration = 1600 + Math.floor(Math.random()*2400);
  playBtn.animate([
    { boxShadow: '0 14px 40px rgba(0,160,255,0.12), 0 0 0 0 rgba(0,160,255,0.0)' },
    { boxShadow: '0 18px 48px rgba(0,160,255,0.20), 0 0 40px 8px rgba(0,160,255,0.06)' },
    { boxShadow: '0 14px 40px rgba(0,160,255,0.12), 0 0 0 0 rgba(0,160,255,0.0)' }
  ],{
    duration: playPulseDuration,
    iterations: Infinity,
    easing: easing
  });

  // Subtle background gradient drift
  document.querySelector('.player').animate([
    { transform: 'translateY(0px)'},
    { transform: 'translateY(-6px)'},
    { transform: 'translateY(0px)'}
  ], {
    duration: 20000 + Math.floor(Math.random()*16000),
    iterations: Infinity,
    easing: 'linear'
  });
}

/* ------- Visualiser creation & update ------- */
function buildVisualiserBars(count){
  visualiser.innerHTML = '';
  for(let i=0;i<count;i++){
    const b = document.createElement('div');
    b.className = 'bar';
    b.style.height = (6 + Math.floor(Math.random()*14)) + '%';
    b.style.width = Math.max(3, Math.floor(160/count)) + 'px';
    visualiser.appendChild(b);
  }
}

function setupAudioContext(){
  if(state.audioContext) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ac = new AudioContext();
    state.audioContext = ac;
    const analyser = ac.createAnalyser();
    analyser.fftSize = 256;
    const source = ac.createMediaElementSource(state.audio);
    source.connect(analyser);
    analyser.connect(ac.destination);
    state.analyser = analyser;
    state.sourceNode = source;
  } catch(e){
    // AudioContext may be blocked; visualiser will degrade gracefully
    console.warn('AudioContext failed:', e);
  }
}

function startVisualiser(){
  if(!state.analyser) return;
  const bufferLength = state.analyser.frequencyBinCount;
  const data = new Uint8Array(bufferLength);
  const bars = Array.from(document.querySelectorAll('.bar'));
  function frame(){
    state.analyser.getByteFrequencyData(data);
    const step = Math.max(1, Math.floor(bufferLength / bars.length));
    for(let i=0;i<bars.length;i++){
      const val = data[i*step] / 255;
      const minH = 6;
      const maxH = 100;
      const h = Math.round(minH + val * (maxH - minH));
      bars[i].style.height = h + '%';
    }
    state.rafId = requestAnimationFrame(frame);
  }
  if(state.rafId) cancelAnimationFrame(state.rafId);
  frame();
}

/* ------- Playlist helpers ------- */
function addTrackToPlaylist(track){
  // Prevent duplicates using title + size (stable across loads)
  if (state.playlist.some(t => t.hash === track.hash)) {
    return; // exact duplicate – do not add
  }

  state.playlist.push(track);
  renderPlaylist();

  if (state.currentIndex === -1) {
    state.currentIndex = 0;
    loadTrack(0, {autoplay:false});
  }
}

function renderPlaylist() {
  playlistEl.innerHTML = '';

  state.playlist.forEach((track, index) => {
    const el = document.createElement('div');
    el.className = 'track' + (index === state.currentIndex ? ' active' : '');
    el.tabIndex = 0;
    el.style.position = 'relative'; // for trash icon positioning

    // Track content
    el.innerHTML = `
      <div style="flex-shrink:0;width:36px;height:36px;border-radius:6px;background:linear-gradient(180deg, rgba(255,255,255,0.02),transparent);display:grid;place-items:center;border:1px solid rgba(255,255,255,0.02)">
        ${index + 1}
      </div>
      <div style="min-width:0; flex-grow:1; overflow:hidden;">
        <div style="font-weight:600; font-size:14px; color: #e9fbff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
          ${escapeHtml(track.title || track.src.split('/').pop() || 'Untitled')}
        </div>
        <div style="font-size:12px; color:rgba(235,245,255,0.7); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
          ${escapeHtml(track.artist || '')}
        </div>
      </div>
    `;

    // Add trash icon
    const trash = document.createElement('div');
    trash.className = 'track-trash';
    trash.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round" style="color:#FFD700; filter: drop-shadow(0 0 4px #FFD700);">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6L18.3333 20.3333C18.2908 21.1078 17.6289 21.6667 16.8522 21.6667H7.14776C6.37107 21.6667 5.70919 21.1078 5.66667 20.3333L5 6"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>
    `;
    trash.style.position = 'absolute';
    trash.style.top = '50%';
    trash.style.transform = 'translateY(-50%)';
    trash.style.opacity = '0';
    trash.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    trash.style.pointerEvents = 'none';
    el.appendChild(trash);

    // Single tap: load track
    el.addEventListener('click', () => {
      loadTrack(index, { autoplay: true });
      scrollActiveTrackIntoView();
    });

    // Double-tap / double-click: remove track
    let lastTap = 0;
    el.addEventListener('dblclick', () => removeTrack(index));
    el.addEventListener('touchend', (e) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      if (tapLength < 400 && tapLength > 0) {
        removeTrack(index);
        e.preventDefault();
      }
      lastTap = currentTime;
    });

    // Swipe handling
    let startX = 0;
    let currentX = 0;
    let isSwiping = false;

    el.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      el.style.transition = '';
      isSwiping = false;
    }, { passive: true });

    el.addEventListener('touchmove', (e) => {
      currentX = e.touches[0].clientX;
      const dx = currentX - startX;
      if (Math.abs(dx) > 5) isSwiping = true;
      if (isSwiping) {
        el.style.transform = `translateX(${dx}px)`;
        el.style.opacity = `${Math.max(0.3, 1 - Math.abs(dx)/150)}`;

        // Show trash icon on swipe side
        trash.style.opacity = '1';
        trash.style.top = '50%';
        trash.style.transform = 'translateY(-50%)';
        if (dx > 0) { // swipe right
          trash.style.right = '10px';
          trash.style.left = 'auto';
        } else { // swipe left
          trash.style.left = '10px';
          trash.style.right = 'auto';
        }
      }
    }, { passive: true });

    el.addEventListener('touchend', () => {
      if (isSwiping) {
        const dx = currentX - startX;
        const threshold = 80;
        el.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        if (Math.abs(dx) > threshold) {
          // Animate out and remove
          el.style.transform = `translateX(${dx > 0 ? 500 : -500}px)`;
          el.style.opacity = '0';
          setTimeout(() => removeTrack(index), 300);
        } else {
          // Snap back
          el.style.transform = 'translateX(0)';
          el.style.opacity = '1';
        }
        trash.style.opacity = '0';
      }
      isSwiping = false;
    });

    playlistEl.appendChild(el);
    animateTrackIn(el);
  });
}

function removeTrack(index){
  const isCurrent = index === state.currentIndex;

  if(isCurrent){
    stopAudio();
    state.audio.src = '';
    titleEl.textContent = 'No song loaded';
    artistEl.textContent = 'Drop an audio file';
    albumArtImg.style.display = 'none';
    musicNoteSVG.style.display = 'block';
    seekRange.value = 0;
    buildVisualiserBars(state.visualBars);
  }

  state.playlist.splice(index, 1);

  if(state.currentIndex > index){
    state.currentIndex--;
  } else if(isCurrent){
    state.currentIndex = -1;
  }

  renderPlaylist();
}

function animateTrackIn(el) {
  const effects = ['fade', 'slide-left', 'slide-right', 'scale'];
  const effect = effects[Math.floor(Math.random() * effects.length)];
  const duration = 400 + Math.floor(Math.random() * 300);
  const curve = chooseRandom(ANIMATION_CURVES);
  const speed = chooseRandom(ANIMATION_SPEEDS);
  const easing = (EASING_MAP[curve] && EASING_MAP[curve][speed]) || 'ease-out';

  // We use keyframes only so we don't break the layout with permanent inline styles
  let keyframes = [];
  switch(effect) {
    case 'fade': keyframes = [{ opacity: 0 }, { opacity: 1 }]; break;
    case 'slide-left': keyframes = [{ transform: 'translateX(-20px)', opacity: 0 }, { transform: 'translateX(0)', opacity: 1 }]; break;
    case 'slide-right': keyframes = [{ transform: 'translateX(20px)', opacity: 0 }, { transform: 'translateX(0)', opacity: 1 }]; break;
    case 'scale': keyframes = [{ transform: 'scale(0.95)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }]; break;
  }

  el.animate(keyframes, { duration, easing, fill: 'both' });
}
function escapeHtml(s){
  return String(s || '').replace(/[&<>"'\/]/g, function (c) {
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;'}[c];
  });
}

/* ------- Load track into audio element ------- */
function loadTrack(index, opts={autoplay:false}){
  if(index < 0 || index >= state.playlist.length) return;
  state.currentIndex = index;

  const track = state.playlist[index];
  state.audio.src = track.src;

  titleEl.textContent = track.title || (track.src.split('/').pop() || 'Untitled');
  artistEl.textContent = track.artist || '';

  if(track.art){
    albumArtImg.src = track.art;
    albumArtImg.style.display = 'block';
    musicNoteSVG.style.display = 'none';
  } else {
    albumArtImg.style.display = 'none';
    musicNoteSVG.style.display = 'block';
  }

  refreshActiveTrackUI();
  scrollActiveTrackIntoView(); // ✅ ADD THIS

  statusDisplay.textContent = 'Loaded';

  if(opts.autoplay){
    playAudio();
  } else {
    pauseAudio();
  }

  setupAudioContext();
  buildVisualiserBars(state.visualBars);
}

/* ------- Playback controls ------- */
function playAudio(){
  if (!state.audio.src) return;

  if(state.audioContext && state.audioContext.state === 'suspended'){
    state.audioContext.resume().catch(()=>{});
  }

  state.audio.play().catch(err=>{
    console.warn('Play prevented', err);
    statusDisplay.textContent = 'Play blocked (interaction required)';
  });
}

function pauseAudio(){
  state.audio.pause();
}

function stopAudio(){
  state.audio.pause();
  state.audio.currentTime = 0;
  state.isPlaying = false;
  statusDisplay.textContent = 'Stopped';
  togglePlayIcon(false);
  if(state.rafId) cancelAnimationFrame(state.rafId);
}

/* Icon toggle (play/pause) */
function togglePlayIcon(playing){
  if(playing){
    // Pause Icon: Two rounded vertical bars
    playIconPath.setAttribute('d','M4 5C4 3.89543 4.89543 3 6 3H10C11.1046 3 12 3.89543 12 5V19C12 20.1046 11.1046 21 10 21H6C4.89543 21 4 20.1046 4 19V5ZM16 5C16 3.89543 16.89543 3 18 3H22C23.1046 3 24 3.89543 24 5V19C24 20.1046 23.1046 21 22 21H18C16.89543 21 16 20.1046 16 19V5Z');
  } else {
    // Play Icon: Smooth Triangle
    playIconPath.setAttribute('d','M5 3.86603C5 2.71133 6.25 1.98968 7.25 2.56667L21.25 10.644C22.25 11.221 22.25 12.6643 21.25 13.2413L7.25 21.3187C6.25 21.8957 5 21.174 5 20.0193V3.86603Z');
  }
}

/* Next / previous logic with shuffle & repeat handling */
function jumpToNext(){
  if(state.shuffle && state.playlist.length > 1){
    // random index different from current
    let idx = state.currentIndex;
    while(idx === state.currentIndex){
      idx = Math.floor(Math.random()*state.playlist.length);
    }
    loadTrack(idx, {autoplay:true});
    return;
  }
  if(state.currentIndex >= state.playlist.length - 1){
    if(state.repeatMode === 1){ // repeat all
      loadTrack(0, {autoplay:true});
    } else {
      stopAudio();
    }
  } else {
    loadTrack(state.currentIndex + 1, {autoplay:true});
  }
}

function jumpToPrev(){
  // If more than 5 seconds into the song, restart it
  if (state.audio.currentTime > 5) {
    state.audio.currentTime = 0;
    playAudio();
    return;
  }

  // Shuffle behaviour
  if(state.shuffle && state.playlist.length > 1){
    let idx = state.currentIndex;
    while(idx === state.currentIndex){
      idx = Math.floor(Math.random() * state.playlist.length);
    }
    loadTrack(idx, { autoplay: true });
    return;
  }

  // Normal previous-track behaviour
  if(state.currentIndex <= 0){
    if(state.repeatMode === 1){
      loadTrack(state.playlist.length - 1, { autoplay: true });
    } else {
      state.audio.currentTime = 0;
      playAudio();
    }
  } else {
    loadTrack(state.currentIndex - 1, { autoplay: true });
  }
}

function scrollActiveTrackIntoView() {
  const playlist = playlistEl;
  const active = playlist.querySelector('.track.active');
  if (!active) return;

  const playlistRect = playlist.getBoundingClientRect();
  const activeRect = active.getBoundingClientRect();

  const currentScroll = playlist.scrollTop;

  const offset =
    activeRect.top
    - playlistRect.top
    - (playlistRect.height / 2)
    + (activeRect.height / 2);

  playlist.scrollTo({
    top: currentScroll + offset,
    behavior: 'smooth'
  });
}

/* ------- Event wiring ------- */
playBtn.addEventListener('click', ()=>{
  if(state.isPlaying) { pauseAudio(); } else { playAudio(); }
});
stopBtn.addEventListener('click', stopAudio);

rewBtn.addEventListener('click', (ev)=>{
  // modifier behaviours
  if(ev.ctrlKey){
    // previous song
    jumpToPrev();
    return;
  }
  const secs = ev.shiftKey ? 10 : 5;
  state.audio.currentTime = Math.max(0, state.audio.currentTime - secs);
});

fwdBtn.addEventListener('click', (ev)=>{
  if(ev.ctrlKey){
    jumpToNext();
    return;
  }
  const secs = ev.shiftKey ? 10 : 5;
  state.audio.currentTime = Math.min(state.audio.duration || 0, state.audio.currentTime + secs);
});

shuffleBtn.addEventListener('click', ()=>{
  state.shuffle = !state.shuffle;
  
  // Toggle the 'active' class for the Golden Neon glow
  shuffleBtn.classList.toggle('active', state.shuffle);
  
  // Accessibility and Title update
  shuffleBtn.title = `Shuffle: ${state.shuffle ? 'on' : 'off'}`;
});

repeatBtn.addEventListener('click', ()=>{
  // Cycle: 0 (Off) -> 1 (All) -> 2 (One)
  state.repeatMode = (state.repeatMode + 1) % 3;
  
  // Logic for visual states (CSS handled)
  if(state.repeatMode === 0) {
    repeatBtn.classList.remove('active', 'active-one');
    repeatBtn.title = "Repeat: Off";
  } else if (state.repeatMode === 1) {
    repeatBtn.classList.add('active');
    repeatBtn.classList.remove('active-one');
    repeatBtn.title = "Repeat: All";
  } else {
    // Both active (for glow) and active-one (to show the "1" badge)
    repeatBtn.classList.add('active', 'active-one');
    repeatBtn.title = "Repeat: One";
  }
});

/* Seek range */
seekRange.addEventListener('input', (e)=>{
  const pct = Number(seekRange.value);
  if(state.audio.duration && isFinite(state.audio.duration)){
    state.audio.currentTime = (pct/100) * state.audio.duration;
  }
});

/* Load local file(s) */
fileInput.addEventListener('change', async (ev)=>{
  const files = Array.from(ev.target.files || []);
  for (const f of files) {
    const url = URL.createObjectURL(f);
    const hash = await hashFile(f);

    addTrackToPlaylist({
      src: url,
      title: f.name.replace(/\.[^/.]+$/, ""),
      artist: '',
      art: '',
      hash
    });
  }
  fileInput.value = '';
});

/* Audio element time update & duration handling */
state.audio.preload = 'metadata'; // do not autoplay; load metadata only
state.audio.addEventListener('timeupdate', ()=>{
  const cur = state.audio.currentTime || 0;
  const dur = state.audio.duration || 0;
  timeDisplay.textContent = `${fmtTime(cur)} / ${fmtTime(dur)}`;
  if(dur){
    seekRange.value = String(Math.floor((cur/dur)*100));
  }
});
state.audio.addEventListener('loadedmetadata', ()=>{
  const dur = state.audio.duration || 0;
  timeDisplay.textContent = `00:00 / ${fmtTime(dur)}`;
});
state.audio.addEventListener('ended', ()=>{
  if(state.repeatMode === 1){
    // repeat all
    jumpToNext();
  } else if(state.repeatMode === 2){
    // repeat one
    loadTrack(state.currentIndex, {autoplay:true});
  } else {
    // if shuffle and playlist, jump to next random
    if(state.shuffle && state.playlist.length>1){
      jumpToNext();
    } else {
      stopAudio();
    }
  }
});
state.audio.addEventListener('play', syncPlaybackStateFromAudio);
state.audio.addEventListener('pause', syncPlaybackStateFromAudio);
state.audio.addEventListener('ended', syncPlaybackStateFromAudio);


/* Keyboard support: space toggles play/pause */
window.addEventListener('keydown', (ev)=>{
  if(ev.code === 'Space' && (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')){
    ev.preventDefault();
    if(state.isPlaying) pauseAudio(); else playAudio();
  }
});

/* Audio file drag & drop onto left panel */
const leftPanel = document.getElementById('leftPanel');
leftPanel.addEventListener('dragover', (e)=>{ e.preventDefault(); leftPanel.style.opacity = 0.98; });
leftPanel.addEventListener('dragleave', ()=>{ leftPanel.style.opacity = 1; });
leftPanel.addEventListener('drop', async (e)=>{
  e.preventDefault();
  leftPanel.style.opacity = 1;
  const items = Array.from(e.dataTransfer.files || []);
  for (const file of items) {
    if (file.type.startsWith('audio/')) {
      const url = URL.createObjectURL(file);
      const hash = await hashFile(file);

      addTrackToPlaylist({
        src: url,
        title: file.name,
        artist: '',
        art: '',
        hash
      });
    }
  }
});

/* Helper to update active track highlight */
function refreshActiveTrackUI(){
  Array.from(document.querySelectorAll('.track')).forEach((el, i) => {
    if(i === state.currentIndex) el.classList.add('active'); else el.classList.remove('active');
  });
}

/* When new tracks are loaded into playlist, render UI */
const observer = new MutationObserver(()=> refreshActiveTrackUI());
observer.observe(playlistEl, { childList:true, subtree:false });

/* ------- Initialise on load ------- */
document.addEventListener('DOMContentLoaded', ()=> {
  initRandomAnimations();

  // Build placeholder visualiser bars
  buildVisualiserBars(state.visualBars);

  // show initial labels
  animLabel.textContent = state.animLabel || (state.animCurve + '-' + state.animSpeed);
  curveLabel.textContent = `${state.animCurve || '—'}`;

  // Make sure play does not auto-start; audio.preload set to 'metadata' above

  // Accessibility: make play button focusable quickly
  playBtn.setAttribute('aria-pressed','false');
});

/* ------- Misc small helpers ------- */
// allow clicking the upload label to open file input (prevent native label default to avoid double dialog)
document.querySelector('label[for="fileInput"]').addEventListener('click', (e) => { e.preventDefault(); fileInput.click(); });

function syncPlaybackStateFromAudio(){
  const playing = !state.audio.paused && !state.audio.ended;

  state.isPlaying = playing;
  togglePlayIcon(playing);
  playBtn.setAttribute('aria-pressed', String(playing));

  if(playing){
    statusDisplay.textContent = 'Playing';
    if(state.analyser) startVisualiser();
  } else {
    statusDisplay.textContent = state.audio.ended ? 'Stopped' : 'Paused';
    if(state.rafId) cancelAnimationFrame(state.rafId);
  }
}

async function hashFile(file) {
  const buf = await file.arrayBuffer();
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2,"0"))
    .join("");
}

function setupMultiTapButton(button, singleCallback, doubleCallback, tripleCallback) {
  if (!('ontouchstart' in window)) return; // Only mobile/touch

  let tapCount = 0;
  let timer = null;

  button.addEventListener('touchend', (e) => {
    e.preventDefault();
    tapCount++;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      if (tapCount === 1) singleCallback();
      else if (tapCount === 2) doubleCallback();
      else if (tapCount >= 3) tripleCallback();
      tapCount = 0;
    }, 125); // 0.125s delay to check for double/triple tap
  });
}

// Mobile multi-tap behaviour
setupMultiTapButton(rewBtn,
  () => { // single tap
    const secs = 5;
    state.audio.currentTime = Math.max(0, state.audio.currentTime - secs);
  },
  () => { // double tap = shift+click
    const secs = 10;
    state.audio.currentTime = Math.max(0, state.audio.currentTime - secs);
  },
  () => { // triple tap = ctrl+click
    jumpToPrev();
  }
);

setupMultiTapButton(fwdBtn,
  () => { // single tap
    const secs = 5;
    state.audio.currentTime = Math.min(state.audio.duration || 0, state.audio.currentTime + secs);
  },
  () => { // double tap = shift+click
    const secs = 10;
    state.audio.currentTime = Math.min(state.audio.duration || 0, state.audio.currentTime + secs);
  },
  () => { // triple tap = ctrl+click
    jumpToNext();
  }
);
