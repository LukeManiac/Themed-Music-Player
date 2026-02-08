/* ------- Configuration ------- */
const ANIMATION_CURVES = ['sine','quad','cubic','quart','quint','expo','circ','back','elastic','bounce'];
const ANIMATION_SPEEDS = ['in','out','inout']; // speed direction variants
const DEFAULT_BARS = 40;

/* ------- Theme Definitions ------- */
const THEMES = {
  'basic-titanium': {
    name: 'Natural Titanium',
    colors: {
      titaniumDark: '#0a0a0c',
      titaniumLight: '#18181a',
      titaniumBorder: 'rgba(192, 192, 192, 0.15)',
      
      primaryColor: '#C0C0C0',
      primaryBright: '#FFFFFF',
      primarySheen: '#E8E8E8',
      primaryDeep: '#808080',
      primaryGlow: 'rgba(192, 192, 192, 0.6)',
      
      textMain: '#f5f5f7',
      textMuted: '#a8a8aa'
    }
  },
  'gothic-gold': {
    name: 'Gothic Gold',
    colors: {
      titaniumDark: '#1a1410',
      titaniumLight: '#2a2318',
      titaniumBorder: 'rgba(255, 215, 0, 0.12)',
      
      primaryColor: '#FFD700',
      primaryBright: '#FFFFFF',
      primarySheen: '#FFF5B7',
      primaryDeep: '#B8860B',
      primaryGlow: 'rgba(255, 215, 0, 0.5)',
      
      textMain: '#f5f5f7',
      textMuted: '#c9b896'
    }
  },
  'brilliant-bronze': {
    name: 'Brilliant Bronze',
    colors: {
      titaniumDark: '#1a1310',
      titaniumLight: '#2a211c',
      titaniumBorder: 'rgba(205, 127, 50, 0.12)',
      
      primaryColor: '#CD7F32',
      primaryBright: '#F4E4D7',
      primarySheen: '#E6BC98',
      primaryDeep: '#8B4513',
      primaryGlow: 'rgba(205, 127, 50, 0.5)',
      
      textMain: '#f5f5f7',
      textMuted: '#c9a882'
    }
  },
    'desert-titanium': {
    name: 'Desert Titanium',
    colors: {
      titaniumDark: '#1e1b18',
      titaniumLight: '#2d2824',
      titaniumBorder: 'rgba(212, 175, 155, 0.15)',
      primaryColor: '#d4af9b',      // iPhone 16 Pro Desert Gold
      primaryBright: '#f2e2d9',
      primarySheen: '#e1c6b8',
      primaryDeep: '#a67c65',
      primaryGlow: 'rgba(212, 175, 155, 0.4)',
      textMain: '#f5f5f7',
      textMuted: '#9a8e85'
    }
  },
  'midnight-nebula': {
    name: 'Midnight Nebula',
    colors: {
      titaniumDark: '#05050a',
      titaniumLight: '#0d0d1a',
      titaniumBorder: 'rgba(138, 43, 226, 0.2)',
      primaryColor: '#8a2be2',      // Deep Purple
      primaryBright: '#e0b0ff',
      primarySheen: '#b388eb',
      primaryDeep: '#4b0082',
      primaryGlow: 'rgba(138, 43, 226, 0.6)',
      textMain: '#ffffff',
      textMuted: '#8b8bbd'
    },
    animated: true
  },
  'emerald-isle': {
    name: 'Emerald Isle',
    colors: {
      titaniumDark: '#06110a',
      titaniumLight: '#0e1f14',
      titaniumBorder: 'rgba(0, 255, 127, 0.1)',
      primaryColor: '#00ff7f',      // Spring Green
      primaryBright: '#ccffea',
      primarySheen: '#66ffb3',
      primaryDeep: '#008f47',
      primaryGlow: 'rgba(0, 255, 127, 0.4)',
      textMain: '#f0fff4',
      textMuted: '#7ca68a'
    }
  },
  'cyber-pulse': {
    name: 'Cyber Pulse',
    colors: {
      titaniumDark: '#000000',
      titaniumLight: '#111111',
      titaniumBorder: 'rgba(255, 0, 255, 0.2)',
      primaryColor: '#ff00ff',      // Neon Magenta
      primaryBright: '#ffffff',
      primarySheen: '#ff77ff',
      primaryDeep: '#880088',
      primaryGlow: 'rgba(255, 0, 255, 0.7)',
      textMain: '#ffffff',
      textMuted: '#ff99ff'
    },
    animated: true
  },
  'frozen-glacier': {
    name: 'Frozen Glacier',
    colors: {
      titaniumDark: '#0f172a',
      titaniumLight: '#1e293b',
      titaniumBorder: 'rgba(186, 230, 253, 0.2)',
      primaryColor: '#7dd3fc',      // Sky Blue
      primaryBright: '#f0f9ff',
      primarySheen: '#bae6fd',
      primaryDeep: '#0369a1',
      primaryGlow: 'rgba(125, 211, 252, 0.5)',
      textMain: '#f8fafc',
      textMuted: '#94a3b8'
    }
  },
  'crimson-stealth': {
    name: 'Crimson Stealth',
    colors: {
      titaniumDark: '#120000',
      titaniumLight: '#220000',
      titaniumBorder: 'rgba(255, 0, 0, 0.15)',
      primaryColor: '#ff3131',      // Racing Red
      primaryBright: '#ffcccc',
      primarySheen: '#ff6666',
      primaryDeep: '#800000',
      primaryGlow: 'rgba(255, 49, 49, 0.5)',
      textMain: '#ffffff',
      textMuted: '#a67b7b'
    }
  },
  'rolex-everose': {
    name: 'Rolex Everose',
    colors: {
      titaniumDark: '#1c1716',
      titaniumLight: '#292321',
      titaniumBorder: 'rgba(224, 172, 155, 0.1)',
      primaryColor: '#e0ac9b',      // Luxury Rose Gold
      primaryBright: '#f5e1da',
      primarySheen: '#ead2c9',
      primaryDeep: '#a8796a',
      primaryGlow: 'rgba(224, 172, 155, 0.3)',
      textMain: '#fffaf8',
      textMuted: '#9c8d88'
    }
  },
  'obsidian-black': {
    name: 'Obsidian Black',
    colors: {
      titaniumDark: '#080808',
      titaniumLight: '#121212',
      titaniumBorder: 'rgba(255, 255, 255, 0.05)',
      primaryColor: '#444444',      // Gunmetal Gray
      primaryBright: '#999999',
      primarySheen: '#666666',
      primaryDeep: '#222222',
      primaryGlow: 'rgba(255, 255, 255, 0.1)',
      textMain: '#ffffff',
      textMuted: '#666666'
    }
  },
  'solar-flare': {
    name: 'Solar Flare',
    colors: {
      titaniumDark: '#1a0f00',
      titaniumLight: '#2a1a00',
      titaniumBorder: 'rgba(255, 165, 0, 0.2)',
      primaryColor: '#ffa500',      // Orange Gold
      primaryBright: '#fff4e0',
      primarySheen: '#ffcc66',
      primaryDeep: '#cc8400',
      primaryGlow: 'rgba(255, 165, 0, 0.5)',
      textMain: '#fffaf0',
      textMuted: '#a69580'
    },
    animated: true
  },
  'rainbow-pulse': {
    name: 'Rainbow Pulse',
    animated: true,
    cycleTime: 1000, // 1 second per color
    colorCycle: [
      {
        primaryColor: '#FF0000',      // Red
        primaryBright: '#FFFFFF',
        primarySheen: '#FF9999',
        primaryDeep: '#CC0000',
        primaryGlow: 'rgba(255, 0, 0, 0.5)'
      },
      {
        primaryColor: '#FF8800',      // Orange
        primaryBright: '#FFFFFF',
        primarySheen: '#FFCC99',
        primaryDeep: '#CC6600',
        primaryGlow: 'rgba(255, 136, 0, 0.5)'
      },
      {
        primaryColor: '#FFFF00',      // Yellow
        primaryBright: '#FFFFFF',
        primarySheen: '#FFFF99',
        primaryDeep: '#CCCC00',
        primaryGlow: 'rgba(255, 255, 0, 0.5)'
      },
      {
        primaryColor: '#88FF00',      // Lime
        primaryBright: '#FFFFFF',
        primarySheen: '#CCFF99',
        primaryDeep: '#66CC00',
        primaryGlow: 'rgba(136, 255, 0, 0.5)'
      },
      {
        primaryColor: '#00FF00',      // Green
        primaryBright: '#FFFFFF',
        primarySheen: '#99FF99',
        primaryDeep: '#00CC00',
        primaryGlow: 'rgba(0, 255, 0, 0.5)'
      },
      {
        primaryColor: '#0088FF',      // Blue
        primaryBright: '#FFFFFF',
        primarySheen: '#99CCFF',
        primaryDeep: '#0066CC',
        primaryGlow: 'rgba(0, 136, 255, 0.5)'
      },
      {
        primaryColor: '#00FFFF',      // Cyan
        primaryBright: '#FFFFFF',
        primarySheen: '#99FFFF',
        primaryDeep: '#00CCCC',
        primaryGlow: 'rgba(0, 255, 255, 0.5)'
      },
      {
        primaryColor: '#FF00FF',      // Pink/Magenta
        primaryBright: '#FFFFFF',
        primarySheen: '#FF99FF',
        primaryDeep: '#CC00CC',
        primaryGlow: 'rgba(255, 0, 255, 0.5)'
      },
      {
        primaryColor: '#8800FF',      // Purple
        primaryBright: '#FFFFFF',
        primarySheen: '#CC99FF',
        primaryDeep: '#6600CC',
        primaryGlow: 'rgba(136, 0, 255, 0.5)'
      }
    ],
    colors: {
      titaniumDark: '#0f0f11',
      titaniumLight: '#1a1a1c',
      titaniumBorder: 'rgba(255, 255, 255, 0.08)',
      
      // Starting with red
      primaryColor: '#FF0000',
      primaryBright: '#FFFFFF',
      primarySheen: '#FF9999',
      primaryDeep: '#CC0000',
      primaryGlow: 'rgba(255, 0, 0, 0.5)',
      
      textMain: '#f5f5f7',
      textMuted: '#a1a1a6'
    }
  },
};

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
  rafId: null,
  currentTheme: 'gothic-gold', // Default theme (matches the original design)
  rainbowInterval: null,
  rainbowIndex: 0
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
const themeBtn = document.getElementById('themeBtn');
const themePanel = document.getElementById('themePanel');
const themeList = document.getElementById('themeList');
const themeImportInput = document.getElementById('themeImportInput');

state.isChangingTheme = false

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
  const theme = THEMES[state.currentTheme];
  const glowColor = theme.colors.primaryGlow;
  
  playBtn.animate([
    { boxShadow: `0 14px 40px ${glowColor.replace('0.5', '0.12')}, 0 0 0 0 ${glowColor.replace('0.5', '0.0')}` },
    { boxShadow: `0 18px 48px ${glowColor.replace('0.5', '0.20')}, 0 0 40px 8px ${glowColor.replace('0.5', '0.06')}` },
    { boxShadow: `0 14px 40px ${glowColor.replace('0.5', '0.12')}, 0 0 0 0 ${glowColor.replace('0.5', '0.0')}` }
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
  // Store existing tracks with their hash to identify which are new
  const existingTracks = Array.from(playlistEl.querySelectorAll('.track'));
  const existingHashes = new Set(existingTracks.map(el => el.dataset.trackHash));
  
  playlistEl.innerHTML = '';

  state.playlist.forEach((track, index) => {
    const isNewTrack = !existingHashes.has(track.hash);
    const el = document.createElement('div');
    el.className = 'track' + (index === state.currentIndex ? ' active' : '');
    el.tabIndex = 0;
    el.style.position = 'relative'; // for trash icon positioning
    el.dataset.trackHash = track.hash; // Store hash to identify this track later

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

    // Right-click: remove track
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      removeTrack(index);
    });

    // Double-tap on mobile: remove track
    let lastTap = 0;
    el.addEventListener('touchend', (e) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      if (tapLength < 400 && tapLength > 0) {
        removeTrack(index);
        e.preventDefault();
      }
      lastTap = currentTime;
    });

    // Drag and drop reordering (Desktop)
    el.draggable = true;
    
    el.addEventListener('dragstart', (e) => {
      el.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', index);
    });
    
    el.addEventListener('dragend', () => {
      el.classList.remove('dragging');
      document.querySelectorAll('.track').forEach(t => t.classList.remove('drag-over'));
    });
    
    el.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      
      const dragging = document.querySelector('.dragging');
      if (dragging && dragging !== el) {
        el.classList.add('drag-over');
      }
    });
    
    el.addEventListener('dragleave', () => {
      el.classList.remove('drag-over');
    });
    
    el.addEventListener('drop', (e) => {
      e.preventDefault();
      el.classList.remove('drag-over');
      
      const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
      const toIndex = index;
      
      if (fromIndex !== toIndex) {
        reorderTrack(fromIndex, toIndex);
      }
    });

    // Touch drag and drop (Mobile)
    let longPressTimer = null;
    let isDragging = false;
    let dragStartY = 0;
    let dragCurrentY = 0;
    let originalIndex = index;
    
    el.addEventListener('touchstart', (e) => {
      if (isSwiping) return;
      
      dragStartY = e.touches[0].clientY;
      
      longPressTimer = setTimeout(() => {
        isDragging = true;
        el.classList.add('dragging');
        el.style.zIndex = '1000';
        // Haptic feedback if available
        if (navigator.vibrate) navigator.vibrate(50);
      }, 800); // Hold for 800ms to start dragging
    }, { passive: true });
    
    el.addEventListener('touchmove', (e) => {
      if (!isDragging) {
        clearTimeout(longPressTimer);
        return;
      }
      
      dragCurrentY = e.touches[0].clientY;
      const deltaY = dragCurrentY - dragStartY;
      
      el.style.transform = `translateY(${deltaY}px)`;
      el.style.opacity = '0.8';
      
      // Find which track we're hovering over
      const tracks = Array.from(playlistEl.querySelectorAll('.track'));
      tracks.forEach(t => t.classList.remove('drag-over'));
      
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      
      tracks.forEach((track, idx) => {
        if (track === el) return;
        const trackRect = track.getBoundingClientRect();
        if (centerY > trackRect.top && centerY < trackRect.bottom) {
          track.classList.add('drag-over');
          originalIndex = idx;
        }
      });
    });
    
    el.addEventListener('touchend', () => {
      clearTimeout(longPressTimer);
      
      if (isDragging) {
        isDragging = false;
        el.classList.remove('dragging');
        el.style.transform = '';
        el.style.opacity = '';
        el.style.zIndex = '';
        
        document.querySelectorAll('.track').forEach(t => t.classList.remove('drag-over'));
        
        if (originalIndex !== index) {
          reorderTrack(index, originalIndex);
        }
      }
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
          setTimeout(() => removeTrack(index, true), 300);
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
    
    // ONLY animate new tracks, not existing ones
    if (isNewTrack) {
      animateTrackIn(el);
    }
  });
}

function removeTrack(index, skipAnimation = false){
  const isCurrent = index === state.currentIndex;
  
  // Find the track element to animate
  const trackElements = Array.from(playlistEl.querySelectorAll('.track'));
  const trackEl = trackElements[index];
  
  if(trackEl && !skipAnimation){
    // Animate the track out before removing
    const effects = ['fade', 'slide-left', 'slide-right', 'scale'];
    const effect = effects[Math.floor(Math.random() * effects.length)];
    const duration = 300;
    const curve = chooseRandom(ANIMATION_CURVES);
    const speed = chooseRandom(ANIMATION_SPEEDS);
    const easing = (EASING_MAP[curve] && EASING_MAP[curve][speed]) || 'ease-in';
    
    let keyframes = [];
    switch(effect) {
      case 'fade': 
        keyframes = [{ opacity: 1 }, { opacity: 0 }]; 
        break;
      case 'slide-left': 
        keyframes = [
          { transform: 'translateX(0)', opacity: 1 }, 
          { transform: 'translateX(-50px)', opacity: 0 }
        ]; 
        break;
      case 'slide-right': 
        keyframes = [
          { transform: 'translateX(0)', opacity: 1 }, 
          { transform: 'translateX(50px)', opacity: 0 }
        ]; 
        break;
      case 'scale': 
        keyframes = [
          { transform: 'scale(1)', opacity: 1 }, 
          { transform: 'scale(0.8)', opacity: 0 }
        ]; 
        break;
    }
    
    const animation = trackEl.animate(keyframes, { duration, easing, fill: 'forwards' });
    
    animation.onfinish = () => {
      // After animation completes, update the state and re-render
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
    };
  } else {
    // No animation - immediate removal (for swipe or if element not found)
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
}

function reorderTrack(fromIndex, toIndex) {
  // Get the track element being moved
  const trackElements = Array.from(playlistEl.querySelectorAll('.track'));
  const movingTrack = trackElements[fromIndex];
  
  if (movingTrack) {
    // Animate the track moving to its new position
    const duration = 400;
    const curve = chooseRandom(ANIMATION_CURVES);
    const speed = chooseRandom(ANIMATION_SPEEDS);
    const easing = (EASING_MAP[curve] && EASING_MAP[curve][speed]) || 'ease-out';
    
    // Calculate the vertical distance to animate
    const fromRect = movingTrack.getBoundingClientRect();
    
    // Update the playlist order first
    const [track] = state.playlist.splice(fromIndex, 1);
    state.playlist.splice(toIndex, 0, track);
    
    // Update current index if needed
    if (state.currentIndex === fromIndex) {
      state.currentIndex = toIndex;
    } else if (fromIndex < state.currentIndex && toIndex >= state.currentIndex) {
      state.currentIndex--;
    } else if (fromIndex > state.currentIndex && toIndex <= state.currentIndex) {
      state.currentIndex++;
    }
    
    // Re-render to get new positions
    renderPlaylist();
    
    // Get the new position
    const newTrackElements = Array.from(playlistEl.querySelectorAll('.track'));
    const newTrack = newTrackElements[toIndex];
    
    if (newTrack) {
      const toRect = newTrack.getBoundingClientRect();
      const deltaY = fromRect.top - toRect.top;
      
      // Animate from old position to new position
      newTrack.animate([
        { 
          transform: `translateY(${deltaY}px)`,
          opacity: 0.8
        },
        { 
          transform: 'translateY(0)',
          opacity: 1
        }
      ], {
        duration,
        easing,
        fill: 'both'
      });
      
      // Also animate the tracks that shifted
      newTrackElements.forEach((t, idx) => {
        if (idx === toIndex) return; // Skip the main track
        
        // Animate tracks that were displaced
        if ((fromIndex < toIndex && idx > fromIndex && idx <= toIndex) ||
            (fromIndex > toIndex && idx >= toIndex && idx < fromIndex)) {
          t.animate([
            { 
              transform: fromIndex < toIndex ? 'translateY(-40px)' : 'translateY(40px)',
              opacity: 0.9
            },
            { 
              transform: 'translateY(0)',
              opacity: 1
            }
          ], {
            duration: duration * 0.7,
            easing,
            fill: 'both'
          });
        }
      });
    }
  } else {
    // Fallback without animation
    const [track] = state.playlist.splice(fromIndex, 1);
    state.playlist.splice(toIndex, 0, track);
    
    if (state.currentIndex === fromIndex) {
      state.currentIndex = toIndex;
    } else if (fromIndex < state.currentIndex && toIndex >= state.currentIndex) {
      state.currentIndex--;
    } else if (fromIndex > state.currentIndex && toIndex <= state.currentIndex) {
      state.currentIndex++;
    }
    
    renderPlaylist();
  }
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

/* ------- Theme System ------- */
function startRainbowAnimation() {
  // Stop any existing rainbow animation
  stopRainbowAnimation();
  
  const theme = THEMES[state.currentTheme];
  if (!theme.animated || !theme.colorCycle) return;
  
  const cycleTime = theme.cycleTime || 1000;
  const totalColors = theme.colorCycle.length;
  let startTime = Date.now();
  
  // Helper function to interpolate between two hex colors
  function interpolateColor(color1, color2, factor) {
    // Convert hex to RGB
    const hex1 = color1.replace('#', '');
    const hex2 = color2.replace('#', '');
    
    const r1 = parseInt(hex1.substring(0, 2), 16);
    const g1 = parseInt(hex1.substring(2, 4), 16);
    const b1 = parseInt(hex1.substring(4, 6), 16);
    
    const r2 = parseInt(hex2.substring(0, 2), 16);
    const g2 = parseInt(hex2.substring(2, 4), 16);
    const b2 = parseInt(hex2.substring(4, 6), 16);
    
    // Linear interpolation
    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
  
  // Helper to create rgba from hex and opacity
  function hexToRgba(hex, opacity) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  
  function updateColors() {
    const elapsed = Date.now() - startTime;
    const totalCycleTime = cycleTime * totalColors;
    const normalizedTime = (elapsed % totalCycleTime) / totalCycleTime;
    
    // Calculate which two colors we're interpolating between
    const colorPosition = normalizedTime * totalColors;
    const currentIndex = Math.floor(colorPosition);
    const nextIndex = (currentIndex + 1) % totalColors;
    const factor = colorPosition - currentIndex;
    
    const currentColor = theme.colorCycle[currentIndex];
    const nextColor = theme.colorCycle[nextIndex];
    
    // Interpolate all color properties
    const primaryColor = interpolateColor(currentColor.primaryColor, nextColor.primaryColor, factor);
    const primarySheen = interpolateColor(currentColor.primarySheen, nextColor.primarySheen, factor);
    const primaryDeep = interpolateColor(currentColor.primaryDeep, nextColor.primaryDeep, factor);
    const primaryGlow = hexToRgba(primaryColor, 0.5);
    
    const root = document.documentElement;
    
    // Apply interpolated colors
    root.style.setProperty('--gold-primary', primaryColor);
    root.style.setProperty('--gold-bright', '#FFFFFF');
    root.style.setProperty('--gold-sheen', primarySheen);
    root.style.setProperty('--gold-deep', primaryDeep);
    root.style.setProperty('--gold-glow', primaryGlow);
    
    // Continue animation
    state.rainbowInterval = requestAnimationFrame(updateColors);
  }
  
  // Start the animation loop
  updateColors();
  
  // Update play button animation initially
  setTimeout(() => {
    updatePlayButtonAnimation();
  }, 100);
}

function stopRainbowAnimation() {
  if (state.rainbowInterval) {
    cancelAnimationFrame(state.rainbowInterval);
    state.rainbowInterval = null;
  }
}

function updatePlayButtonAnimation() {
  // Cancel existing animation
  const animations = playBtn.getAnimations();
  animations.forEach(anim => {
    if (anim.effect && anim.effect.getKeyframes) {
      const keyframes = anim.effect.getKeyframes();
      if (keyframes.some(kf => kf.boxShadow)) {
        anim.cancel();
      }
    }
  });
  
  // Create new animation with current theme color
  const playPulseDuration = 1600 + Math.floor(Math.random()*2400);
  const theme = THEMES[state.currentTheme];
  const glowColor = theme.colors.primaryGlow;
  const curve = state.animCurve || 'sine';
  const speed = state.animSpeed || 'inout';
  const easing = (EASING_MAP[curve] && EASING_MAP[curve][speed]) || 'cubic-bezier(.33,.66,.66,1)';
  
  // Parse the glow color to extract RGB values
  let baseColor = glowColor;
  
  // Function to create shadow with specific opacity
  const createShadow = (opacity1, opacity2) => {
    // Replace the opacity value in rgba
    const shadow1 = baseColor.replace(/[\d.]+\)$/, opacity1 + ')');
    const shadow2 = baseColor.replace(/[\d.]+\)$/, opacity2 + ')');
    return `0 14px 40px ${shadow1}, 0 0 0 0 ${shadow2}`;
  };
  
  playBtn.animate([
    { boxShadow: createShadow(0.12, 0.0) },
    { boxShadow: `0 18px 48px ${baseColor.replace(/[\d.]+\)$/, '0.20)')}, 0 0 40px 8px ${baseColor.replace(/[\d.]+\)$/, '0.06)')}` },
    { boxShadow: createShadow(0.12, 0.0) }
  ],{
    duration: playPulseDuration,
    iterations: Infinity,
    easing: easing
  });
}

function applyTheme(themeKey, animate = true) {
  const theme = THEMES[themeKey];
  if (!theme || state.isThemeChanging) return;

  // Use the global transition overlay
  let overlay = document.getElementById('theme-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'theme-overlay';
    document.body.appendChild(overlay);
    
    // Initial Styles for Overlay
    Object.assign(overlay.style, {
      position: 'fixed',
      inset: '0',
      zIndex: '10000', // Higher than theme panel
      backdropFilter: 'blur(0px)',
      backgroundColor: 'rgba(0,0,0,0)',
      pointerEvents: 'none',
      transition: 'backdrop-filter 0.6s ease, background-color 0.6s ease'
    });
  }

  if (animate) {
    state.isThemeChanging = true;
    overlay.style.backdropFilter = 'blur(30px)';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.3)';
    overlay.style.pointerEvents = 'auto'; // Locks clicks

    // Mid-point: Change colors while screen is fully blurred
    setTimeout(() => {
      executeColorSwap(themeKey, theme);
      
      // Fade out
      overlay.style.backdropFilter = 'blur(0px)';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      overlay.style.pointerEvents = 'none';

      setTimeout(() => {
        state.isThemeChanging = false;
      }, 600);
    }, 400);
  } else {
    executeColorSwap(themeKey, theme);
  }
}

function executeColorSwap(themeKey, theme) {
  const root = document.documentElement;
  const colors = theme.colors;
  
  state.currentTheme = themeKey;

  // Map theme colors to CSS variables
  root.style.setProperty('--titanium-dark', colors.titaniumDark);
  root.style.setProperty('--titanium-light', colors.titaniumLight);
  root.style.setProperty('--gold-primary', colors.primaryColor);
  root.style.setProperty('--gold-bright', colors.primaryBright);
  root.style.setProperty('--gold-deep', colors.primaryDeep);
  root.style.setProperty('--gold-glow', colors.primaryGlow);
  root.style.setProperty('--gold-sheen', colors.primarySheen);
  root.style.setProperty('--text-main', colors.textMain);
  root.style.setProperty('--text-muted', colors.textMuted);

  // Manage animations
  stopRainbowAnimation();
  if (theme.animated) startRainbowAnimation();
  
  updateThemeListUI();
  localStorage.setItem('selectedTheme', themeKey);
}

function performThemeVariableSwap(themeKey, theme) {
  const root = document.documentElement;
  const colors = theme.colors;
  
  state.currentTheme = themeKey;
  
  // These variables now control the playback circle too
  root.style.setProperty('--gold-primary', colors.primaryColor);
  root.style.setProperty('--gold-bright', colors.primaryBright);
  root.style.setProperty('--gold-deep', colors.primaryDeep);
  root.style.setProperty('--gold-glow', colors.primaryGlow);
  root.style.setProperty('--gold-sheen', colors.primarySheen);
  
  // Update other UI elements
  updateThemeListUI();
  localStorage.setItem('selectedTheme', themeKey);
}

function exportTheme(themeKey) {
  const theme = THEMES[themeKey];
  if (!theme) return;
  
  const themeData = JSON.stringify(theme, null, 2);
  const blob = new Blob([themeData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${themeKey}-theme.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importTheme(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const themeData = JSON.parse(e.target.result);
      
      // Validate theme structure
      if (!themeData.name || !themeData.colors) {
        alert('Invalid theme file format');
        return;
      }
      
      // Generate a unique key
      const themeKey = 'custom-' + Date.now();
      THEMES[themeKey] = themeData;
      
      // Render the new theme in the list
      renderThemeList();
      
      // Apply the imported theme
      applyTheme(themeKey, true);
      
    } catch (error) {
      alert('Error parsing theme file: ' + error.message);
    }
  };
  reader.readAsText(file);
}

function renderThemeList() {
  themeList.innerHTML = '';
  
  Object.keys(THEMES).forEach(themeKey => {
    const theme = THEMES[themeKey];
    const themeItem = document.createElement('div');
    themeItem.className = 'theme-item' + (state.currentTheme === themeKey ? ' active' : '');
    themeItem.dataset.themeKey = themeKey;
    
    // Create color preview
    const preview = document.createElement('div');
    preview.className = 'theme-preview';
    
    // Special rainbow gradient for animated theme
    if (theme.animated && theme.colorCycle) {
      preview.style.background = `linear-gradient(135deg, #FF0000, #FF8800, #FFFF00, #88FF00, #00FF00, #0088FF, #00FFFF, #FF00FF, #8800FF)`;
      preview.style.backgroundSize = '200% 200%';
      preview.style.animation = 'rainbow-preview 3s linear infinite';
    } else {
      preview.style.background = `linear-gradient(135deg, ${theme.colors.primaryColor}, ${theme.colors.primaryDeep})`;
    }
    
    const name = document.createElement('div');
    name.className = 'theme-name';
    name.textContent = theme.name;
    
    themeItem.appendChild(preview);
    themeItem.appendChild(name);
    
    // Left click: apply theme
    themeItem.addEventListener('click', (e) => {
      applyTheme(themeKey, true);
    });
    
    // Right click: export theme
    themeItem.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      exportTheme(themeKey);
    });
    
    themeList.appendChild(themeItem);
  });
  
  // Add import button
  const importBtn = document.createElement('div');
  importBtn.className = 'theme-item import-theme';
  importBtn.innerHTML = `
    <div class="theme-preview" style="background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05)); border: 2px dashed rgba(255,255,255,0.3);">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
      </svg>
    </div>
    <div class="theme-name">Import Theme</div>
  `;
  
  importBtn.addEventListener('click', () => {
    themeImportInput.click();
  });
  
  themeList.appendChild(importBtn);
}

function setTheme(themeKey) {
  if (state.isChangingTheme) return; // Block if already transitioning
  
  const theme = THEMES[themeKey];
  if (!theme) return;

  state.isChangingTheme = true;
  const player = document.querySelector('.player');
  const duration = 600; // Matches --transition-duration in CSS

  // 1. Start Blur
  player.classList.add('blur-transition');

  // 2. Wait for the blur to reach maximum (halfway through the duration)
  setTimeout(() => {
    // 3. Apply the theme colors while screen is blurred
    state.currentTheme = themeKey;
    applyThemeColors(theme);
    updateThemeListUI();

    // 4. Remove blur
    player.classList.remove('blur-transition');

    // 5. Unlock theme switching after transition finishes
    setTimeout(() => {
      state.isChangingTheme = false;
    }, duration / 2);

  }, duration / 2);
}

function updateThemeListUI() {
  const items = document.querySelectorAll('.theme-item');
  items.forEach(item => {
    // Check if the dataset matches the current state
    if (item.dataset.themeKey === state.currentTheme) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function toggleThemePanel() {
  const isOpen = themePanel.classList.contains('open');
  
  if (isOpen) {
    themePanel.classList.remove('open');
    themeBtn.classList.remove('active');
  } else {
    themePanel.classList.add('open');
    themeBtn.classList.add('active');
  }
}

function applyTheme(themeKey, animate = true) {
  const theme = THEMES[themeKey];
  if (!theme || state.isTransitioning) return; // Prevent overlapping transitions

  const root = document.documentElement;
  const player = document.querySelector('.player');

  if (animate) {
    state.isTransitioning = true;
    player.classList.add('theme-transitioning');

    // Wait for the blur to reach its peak before swapping colors
    setTimeout(() => {
      performThemeSwap(themeKey, theme);
      
      // Remove blur
      player.classList.remove('theme-transitioning');
      
      // Unlock after the blur fades out
      setTimeout(() => {
        state.isTransitioning = false;
      }, 600);
    }, 300); 
  } else {
    performThemeSwap(themeKey, theme);
  }
}

// Helper to handle the actual variable swapping
function performThemeSwap(themeKey, theme) {
  const root = document.documentElement;
  const colors = theme.colors;
  
  stopRainbowAnimation();
  state.currentTheme = themeKey;

  root.style.setProperty('--titanium-dark', colors.titaniumDark);
  root.style.setProperty('--titanium-light', colors.titaniumLight);
  root.style.setProperty('--titanium-border', colors.titaniumBorder);
  root.style.setProperty('--gold-primary', colors.primaryColor);
  root.style.setProperty('--gold-bright', colors.primaryBright);
  root.style.setProperty('--gold-sheen', colors.primarySheen);
  root.style.setProperty('--gold-deep', colors.primaryDeep);
  root.style.setProperty('--gold-glow', colors.primaryGlow);
  root.style.setProperty('--text-main', colors.textMain);
  root.style.setProperty('--text-muted', colors.textMuted);

  updatePlayButtonAnimation();
  if (theme.animated) startRainbowAnimation();
  
  localStorage.setItem('selectedTheme', themeKey);
  updateThemeListUI();
}

// Theme button event listener
themeBtn.addEventListener('click', toggleThemePanel);

// Theme import input handler
themeImportInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    importTheme(file);
  }
  themeImportInput.value = '';
});

// Close theme panel when clicking outside
document.addEventListener('click', (e) => {
  if (!themePanel.contains(e.target) && !themeBtn.contains(e.target)) {
    if (themePanel.classList.contains('open')) {
      toggleThemePanel();
    }
  }
});

// Initialize theme system
document.addEventListener('DOMContentLoaded', () => {
  // Load saved theme or use default
  const savedTheme = localStorage.getItem('selectedTheme') || state.currentTheme;
  applyTheme(savedTheme, false);
  renderThemeList();
});