/* ------- Internationalisation ------- */
const I18N = {
  en: {
    noTrackLoaded: 'No Track Loaded',
    dragDrop: 'Drag & Drop Audio File',
    idle: 'Idle',
    playing: 'Playing',
    paused: 'Paused',
    stopped: 'Stopped',
    loaded: 'Loaded',
    noSongLoaded: 'No song loaded',
    dropAudioFile: 'Drop an audio file',
    playBlocked: 'Play blocked (interaction required)',
    shuffleOn: 'Shuffle: On',
    shuffleOff: 'Shuffle: Off',
    repeatOff: 'Repeat: Off',
    repeatAll: 'Repeat: All',
    repeatOne: 'Repeat: One',
    themes: 'Themes',
    importTheme: 'Import Theme',
    invalidThemeFile: 'Invalid theme file format',
    errorParsingTheme: 'Error parsing theme file: ',
    importLanguage: 'Import Language',
    invalidLangFile: 'Invalid language file format',
    errorParsingLang: 'Error parsing language file: ',
    uploadAudio: 'Upload Audio',
    designedIn: 'Designed in California',
    playerLabel: 'Themed Music Player',
    seekLabel: 'Seek Track',
    playbackControls: 'Playback controls',
    playlistLabel: 'Playlist',
    rewindTitle: 'Rewind 5s (Shift+Click for 10s, Ctrl+Click for previous track)',
    stopTitle: 'Stop',
    playTitle: 'Play',
    forwardTitle: 'Forward 5s (Shift+Click for 10s, Ctrl+Click for next track)',
    themesTitle: 'Themes',
    uploadTitle: 'Upload local audio',
    clearCacheTitle: 'Are you sure you want to clear all cache from this website? This will remove all your custom languages and themes. I suggest saving them before clearing your cache.',
    clearCacheYes: 'Yes',
    clearCacheNo: 'No',
    customLanguages: "Custom Languages",
    customThemes: "Custom Themes",
    deleteLanguage: "Delete language",
    deleteTheme: "Delete theme",
    themeNames: {
      'basic-titanium':  'Natural Titanium',
      'gothic-gold':     'Gothic Gold',
      'brilliant-bronze':'Brilliant Bronze',
      'desert-titanium': 'Desert Titanium',
      'midnight-nebula': 'Midnight Nebula',
      'emerald-isle':    'Emerald Isle',
      'cyber-pulse':     'Cyber Pulse',
      'frozen-glacier':  'Frozen Glacier',
      'crimson-stealth': 'Crimson Stealth',
      'rolex-everose':   'Rolex Everose',
      'obsidian-black':  'Obsidian Black',
      'solar-flare':     'Solar Flare',
      'rainbow-pulse':   'Rainbow Pulse',
    },
    languageNames: {
      'en-GB': 'English (UK)',
      'en-US': 'English (US)',
      'en-AU': 'English (Australia)',
      'en-CA': 'English (Canada)',
      'fr-FR': 'French (France)',
      'fr-CA': 'French (Canada)',
      'fr-BE': 'French (Belgium)',
      'fr-CH': 'French (Switzerland)',
      'es-ES': 'Spanish (Spain)',
      'es-MX': 'Spanish (Mexico)',
      'es-AR': 'Spanish (Argentina)',
      'es-CO': 'Spanish (Colombia)',
      'pt-BR': 'Portuguese (Brazil)',
      'pt-PT': 'Portuguese (Portugal)',
      'zh-CN': 'Chinese (Simplified)',
      'zh-TW': 'Chinese (Traditional)',
      'zh-HK': 'Chinese (Hong Kong)',
      'ar-SA': 'Arabic (Saudi Arabia)',
      'ar-EG': 'Arabic (Egypt)',
      'ar-MA': 'Arabic (Morocco)',
      'de-DE': 'German (Germany)',
      'de-AT': 'German (Austria)',
      'de-CH': 'German (Switzerland)',
      'ja': 'Japanese',
      'ko': 'Korean',
      'ru': 'Russian',
    },
  },
  ar: {
    noTrackLoaded: 'لا يوجد مقطع صوتي',
    dragDrop: 'اسحب وأفلت ملف صوتي',
    idle: 'في انتظار',
    playing: 'يُشغَّل',
    paused: 'متوقف مؤقتاً',
    stopped: 'موقوف',
    loaded: 'تم التحميل',
    noSongLoaded: 'لا يوجد مقطع محمّل',
    dropAudioFile: 'أفلت ملفاً صوتياً',
    playBlocked: 'التشغيل محظور (يلزم تفاعل)',
    shuffleOn: 'عشوائي: تشغيل',
    shuffleOff: 'عشوائي: إيقاف',
    repeatOff: 'تكرار: إيقاف',
    repeatAll: 'تكرار: الكل',
    repeatOne: 'تكرار: واحد',
    themes: 'السمات',
    importTheme: 'استيراد سمة',
    invalidThemeFile: 'تنسيق ملف السمة غير صالح',
    errorParsingTheme: 'خطأ في تحليل ملف السمة: ',
    importLanguage: 'استيراد لغة',
    invalidLangFile: 'تنسيق ملف اللغة غير صالح',
    errorParsingLang: 'خطأ في تحليل ملف اللغة: ',
    uploadAudio: 'رفع صوت',
    designedIn: 'صُمِّم في كاليفورنيا',
    playerLabel: 'مشغّل موسيقى',
    seekLabel: 'تقديم/تأخير المقطع',
    playbackControls: 'أدوات التشغيل',
    playlistLabel: 'قائمة التشغيل',
    rewindTitle: 'تراجع 5 ث (Shift+نقر لـ 10 ث، Ctrl+نقر للمقطع السابق)',
    stopTitle: 'إيقاف',
    playTitle: 'تشغيل',
    forwardTitle: 'تقديم 5 ث (Shift+نقر لـ 10 ث، Ctrl+نقر للمقطع التالي)',
    themesTitle: 'السمات',
    uploadTitle: 'رفع ملف صوتي محلي',
    clearCacheTitle: 'هل أنت متأكد أنك تريد مسح كل ذاكرة التخزين المؤقت من هذا الموقع؟ سيؤدي ذلك إلى إزالة جميع لغاتك وسماتك المخصصة. أنصحك بحفظها قبل المسح.',
    clearCacheYes: 'نعم',
    clearCacheNo: 'لا',
    customLanguages: "اللغات المخصصة",
    customThemes: "السمات المخصصة",
    deleteLanguage: "حذف اللغة",
    deleteTheme: "حذف السمة",
    themeNames: {
      'basic-titanium':  'تيتانيوم طبيعي',
      'gothic-gold':     'ذهب قوطي',
      'brilliant-bronze':'برونز لامع',
      'desert-titanium': 'تيتانيوم صحراوي',
      'midnight-nebula': 'سديم منتصف الليل',
      'emerald-isle':    'جزيرة زمردية',
      'cyber-pulse':     'نبضة إلكترونية',
      'frozen-glacier':  'جليد متجمد',
      'crimson-stealth': 'أحمر قرمزي خفي',
      'rolex-everose':   'رولكس إيفر روز',
      'obsidian-black':  'أسود أوبسيديان',
      'solar-flare':     'وميض شمسي',
      'rainbow-pulse':   'نبضة قوس قزح',
    },
    languageNames: {
      'en-GB': 'الإنجليزية (المملكة المتحدة)',
      'en-US': 'الإنجليزية (الولايات المتحدة)',
      'en-AU': 'الإنجليزية (أستراليا)',
      'en-CA': 'الإنجليزية (كندا)',
      'fr-FR': 'الفرنسية (فرنسا)',
      'fr-CA': 'الفرنسية (كندا)',
      'fr-BE': 'الفرنسية (بلجيكا)',
      'fr-CH': 'الفرنسية (سويسرا)',
      'es-ES': 'الإسبانية (إسبانيا)',
      'es-MX': 'الإسبانية (المكسيك)',
      'es-AR': 'الإسبانية (الأرجنتين)',
      'es-CO': 'الإسبانية (كولومبيا)',
      'pt-BR': 'البرتغالية (البرازيل)',
      'pt-PT': 'البرتغالية (البرتغال)',
      'zh-CN': 'الصينية (المبسطة)',
      'zh-TW': 'الصينية (التقليدية)',
      'zh-HK': 'الصينية (هونغ كونغ)',
      'ar-SA': 'العربية (السعودية)',
      'ar-EG': 'العربية (مصر)',
      'ar-MA': 'العربية (المغرب)',
      'de-DE': 'الألمانية (ألمانيا)',
      'de-AT': 'الألمانية (النمسا)',
      'de-CH': 'الألمانية (سويسرا)',
      'ja': 'اليابانية',
      'ko': 'الكورية',
      'ru': 'الروسية',
    },
  },
  fr: {
    noTrackLoaded: 'Aucune piste chargée',
    dragDrop: 'Glisser-déposer un fichier audio',
    idle: 'En attente',
    playing: 'Lecture',
    paused: 'En pause',
    stopped: 'Arrêté',
    loaded: 'Chargé',
    noSongLoaded: 'Aucune chanson chargée',
    dropAudioFile: 'Déposez un fichier audio',
    playBlocked: 'Lecture bloquée (interaction requise)',
    shuffleOn: 'Aléatoire : activé',
    shuffleOff: 'Aléatoire : désactivé',
    repeatOff: 'Répéter : désactivé',
    repeatAll: 'Répéter : tout',
    repeatOne: 'Répéter : un',
    themes: 'Thèmes',
    importTheme: 'Importer un thème',
    invalidThemeFile: 'Format de fichier de thème invalide',
    errorParsingTheme: 'Erreur d\'analyse du fichier de thème : ',
    importLanguage: 'Importer une langue',
    invalidLangFile: 'Format de fichier de langue invalide',
    errorParsingLang: 'Erreur d\'analyse du fichier de langue : ',
    uploadAudio: 'Importer audio',
    designedIn: 'Conçu en Californie',
    playerLabel: 'Lecteur musical',
    seekLabel: 'Avancer/reculer',
    playbackControls: 'Contrôles de lecture',
    playlistLabel: 'Liste de lecture',
    rewindTitle: 'Reculer 5s (Maj+Clic pour 10s, Ctrl+Clic pour piste précédente)',
    stopTitle: 'Arrêter',
    playTitle: 'Lire',
    forwardTitle: 'Avancer 5s (Maj+Clic pour 10s, Ctrl+Clic pour piste suivante)',
    themesTitle: 'Thèmes',
    uploadTitle: 'Importer un fichier audio local',
    clearCacheTitle: 'Êtes-vous sûr de vouloir effacer tout le cache de ce site ? Cela supprimera toutes vos langues et thèmes personnalisés. Je vous conseille de les sauvegarder avant.',
    clearCacheYes: 'Oui',
    clearCacheNo: 'Non',
    customLanguages: "Langues personnalisées",
    customThemes: "Thèmes personnalisés",
    deleteLanguage: "Supprimer la langue",
    deleteTheme: "Supprimer le thème",
    themeNames: {
      'basic-titanium':  'Titane naturel',
      'gothic-gold':     'Or gothique',
      'brilliant-bronze':'Bronze brillant',
      'desert-titanium': 'Titane désert',
      'midnight-nebula': 'Nébuleuse de minuit',
      'emerald-isle':    "Île d'émeraude",
      'cyber-pulse':     'Pulsation cyber',
      'frozen-glacier':  'Glacier gelé',
      'crimson-stealth': 'Furtif cramoisi',
      'rolex-everose':   'Rolex Everose',
      'obsidian-black':  'Noir obsidienne',
      'solar-flare':     'Éruption solaire',
      'rainbow-pulse':   'Pulsation arc-en-ciel',
    },
    languageNames: {
      'en-GB': 'Anglais (Royaume-Uni)',
      'en-US': 'Anglais (États-Unis)',
      'en-AU': 'Anglais (Australie)',
      'en-CA': 'Anglais (Canada)',
      'fr-FR': 'Français (France)',
      'fr-CA': 'Français (Canada)',
      'fr-BE': 'Français (Belgique)',
      'fr-CH': 'Français (Suisse)',
      'es-ES': 'Espagnol (Espagne)',
      'es-MX': 'Espagnol (Mexique)',
      'es-AR': 'Espagnol (Argentine)',
      'es-CO': 'Espagnol (Colombie)',
      'pt-BR': 'Portugais (Brésil)',
      'pt-PT': 'Portugais (Portugal)',
      'zh-CN': 'Chinois (simplifié)',
      'zh-TW': 'Chinois (traditionnel)',
      'zh-HK': 'Chinois (Hong Kong)',
      'ar-SA': 'Arabe (Arabie Saoudite)',
      'ar-EG': 'Arabe (Égypte)',
      'ar-MA': 'Arabe (Maroc)',
      'de-DE': 'Allemand (Allemagne)',
      'de-AT': 'Allemand (Autriche)',
      'de-CH': 'Allemand (Suisse)',
      'ja': 'Japonais',
      'ko': 'Coréen',
      'ru': 'Russe',
    },
  },
  de: {
    noTrackLoaded: 'Kein Titel geladen',
    dragDrop: 'Audiodatei hierher ziehen',
    idle: 'Bereit',
    playing: 'Wiedergabe',
    paused: 'Pausiert',
    stopped: 'Gestoppt',
    loaded: 'Geladen',
    noSongLoaded: 'Kein Lied geladen',
    dropAudioFile: 'Audiodatei ablegen',
    playBlocked: 'Wiedergabe blockiert (Interaktion erforderlich)',
    shuffleOn: 'Zufallswiedergabe: Ein',
    shuffleOff: 'Zufallswiedergabe: Aus',
    repeatOff: 'Wiederholen: Aus',
    repeatAll: 'Wiederholen: Alle',
    repeatOne: 'Wiederholen: Eins',
    themes: 'Themen',
    importTheme: 'Thema importieren',
    invalidThemeFile: 'Ungültiges Thema-Dateiformat',
    errorParsingTheme: 'Fehler beim Lesen der Thema-Datei: ',
    importLanguage: 'Sprache importieren',
    invalidLangFile: 'Ungültiges Sprach-Dateiformat',
    errorParsingLang: 'Fehler beim Lesen der Sprach-Datei: ',
    uploadAudio: 'Audio hochladen',
    designedIn: 'Entworfen in Kalifornien',
    playerLabel: 'Musik-Player',
    seekLabel: 'Titel suchen',
    playbackControls: 'Wiedergabesteuerung',
    playlistLabel: 'Wiedergabeliste',
    rewindTitle: '5s zurückspulen (Umschalt+Klick für 10s, Strg+Klick für vorherigen Titel)',
    stopTitle: 'Stopp',
    playTitle: 'Abspielen',
    forwardTitle: '5s vorspulen (Umschalt+Klick für 10s, Strg+Klick für nächsten Titel)',
    themesTitle: 'Themen',
    uploadTitle: 'Lokale Audiodatei hochladen',
    clearCacheTitle: 'Möchten Sie wirklich den gesamten Cache dieser Website löschen? Dadurch werden alle Ihre benutzerdefinierten Sprachen und Themen entfernt. Ich empfehle, diese vorher zu speichern.',
    clearCacheYes: 'Ja',
    clearCacheNo: 'Nein',
    customLanguages: "Benutzerdefinierte Sprachen",
    customThemes: "Benutzerdefinierte Themen",
    deleteLanguage: "Sprache löschen",
    deleteTheme: "Thema löschen",
    themeNames: {
      'basic-titanium':  'Natürliches Titan',
      'gothic-gold':     'Gotisches Gold',
      'brilliant-bronze':'Brillantes Bronze',
      'desert-titanium': 'Wüsten-Titan',
      'midnight-nebula': 'Mitternachtsnebel',
      'emerald-isle':    'Smaragdinsel',
      'cyber-pulse':     'Cyber-Puls',
      'frozen-glacier':  'Gefrorener Gletscher',
      'crimson-stealth': 'Karmesin-Tarnung',
      'rolex-everose':   'Rolex Everose',
      'obsidian-black':  'Obsidian-Schwarz',
      'solar-flare':     'Sonneneruption',
      'rainbow-pulse':   'Regenbogen-Puls',
    },
    languageNames: {
      'en-GB': 'Englisch (UK)',
      'en-US': 'Englisch (USA)',
      'en-AU': 'Englisch (Australien)',
      'en-CA': 'Englisch (Kanada)',
      'fr-FR': 'Französisch (Frankreich)',
      'fr-CA': 'Französisch (Kanada)',
      'fr-BE': 'Französisch (Belgien)',
      'fr-CH': 'Französisch (Schweiz)',
      'es-ES': 'Spanisch (Spanien)',
      'es-MX': 'Spanisch (Mexiko)',
      'es-AR': 'Spanisch (Argentinien)',
      'es-CO': 'Spanisch (Kolumbien)',
      'pt-BR': 'Portugiesisch (Brasilien)',
      'pt-PT': 'Portugiesisch (Portugal)',
      'zh-CN': 'Chinesisch (Vereinfacht)',
      'zh-TW': 'Chinesisch (Traditionell)',
      'zh-HK': 'Chinesisch (Hongkong)',
      'ar-SA': 'Arabisch (Saudi-Arabien)',
      'ar-EG': 'Arabisch (Ägypten)',
      'ar-MA': 'Arabisch (Marokko)',
      'de-DE': 'Deutsch (Deutschland)',
      'de-AT': 'Deutsch (Österreich)',
      'de-CH': 'Deutsch (Schweiz)',
      'ja': 'Japanisch',
      'ko': 'Koreanisch',
      'ru': 'Russisch',
    },
  },
  es: {
    noTrackLoaded: 'Sin pista cargada',
    dragDrop: 'Arrastra un archivo de audio',
    idle: 'En espera',
    playing: 'Reproduciendo',
    paused: 'En pausa',
    stopped: 'Detenido',
    loaded: 'Cargado',
    noSongLoaded: 'No hay canción cargada',
    dropAudioFile: 'Suelta un archivo de audio',
    playBlocked: 'Reproducción bloqueada (interacción requerida)',
    shuffleOn: 'Aleatório: activado',
    shuffleOff: 'Aleatório: desactivado',
    repeatOff: 'Repetir: desactivado',
    repeatAll: 'Repetir: todo',
    repeatOne: 'Repetir: uno',
    themes: 'Temas',
    importTheme: 'Importar tema',
    invalidThemeFile: 'Formato de archivo de tema inválido',
    errorParsingTheme: 'Error al leer el archivo de tema: ',
    importLanguage: 'Importar idioma',
    invalidLangFile: 'Formato de archivo de idioma inválido',
    errorParsingLang: 'Error al leer el archivo de idioma: ',
    uploadAudio: 'Subir audio',
    designedIn: 'Diseñado en California',
    playerLabel: 'Reproductor de música',
    seekLabel: 'Buscar en la pista',
    playbackControls: 'Controles de reproducción',
    playlistLabel: 'Lista de reproducción',
    rewindTitle: 'Rebobinar 5s (Shift+Clic para 10s, Ctrl+Clic para pista anterior)',
    stopTitle: 'Detener',
    playTitle: 'Reproducir',
    forwardTitle: 'Avanzar 5s (Shift+Clic para 10s, Ctrl+Clic para siguiente pista)',
    themesTitle: 'Temas',
    uploadTitle: 'Subir archivo de audio local',
    clearCacheTitle: '¿Estás seguro de que deseas borrar toda la caché de este sitio web? Esto eliminará todos tus idiomas y temas personalizados. Te sugiero guardarlos antes de borrar.',
    clearCacheYes: 'Sí',
    clearCacheNo: 'No',
    customLanguages: "Idiomas personalizados",
    customThemes: "Temas personalizados",
    deleteLanguage: "Eliminar idioma",
    deleteTheme: "Eliminar tema",
    themeNames: {
      'basic-titanium':  'Titanio natural',
      'gothic-gold':     'Oro gótico',
      'brilliant-bronze':'Bronce brillante',
      'desert-titanium': 'Titanio desierto',
      'midnight-nebula': 'Nebulosa de medianoche',
      'emerald-isle':    'Isla esmeralda',
      'cyber-pulse':     'Pulso cibernético',
      'frozen-glacier':  'Glaciar congelado',
      'crimson-stealth': 'Sigilo carmesí',
      'rolex-everose':   'Rolex Everose',
      'obsidian-black':  'Negro obsidiana',
      'solar-flare':     'Llamarada solar',
      'rainbow-pulse':   'Pulso arcoíris',
    },
    languageNames: {
      'en-GB': 'Inglés (Reino Unido)',
      'en-US': 'Inglés (EE. UU.)',
      'en-AU': 'Inglés (Australia)',
      'en-CA': 'Inglés (Canadá)',
      'fr-FR': 'Francés (Francia)',
      'fr-CA': 'Francés (Canadá)',
      'fr-BE': 'Francés (Bélgica)',
      'fr-CH': 'Francés (Suiza)',
      'es-ES': 'Español (España)',
      'es-MX': 'Español (México)',
      'es-AR': 'Español (Argentina)',
      'es-CO': 'Español (Colombia)',
      'pt-BR': 'Portugués (Brasil)',
      'pt-PT': 'Portugués (Portugal)',
      'zh-CN': 'Chino (simplificado)',
      'zh-TW': 'Chino (tradicional)',
      'zh-HK': 'Chino (Hong Kong)',
      'ar-SA': 'Árabe (Arabia Saudita)',
      'ar-EG': 'Árabe (Egipto)',
      'ar-MA': 'Árabe (Marruecos)',
      'de-DE': 'Alemán (Alemania)',
      'de-AT': 'Alemán (Austria)',
      'de-CH': 'Alemán (Suiza)',
      'ja': 'Japonés',
      'ko': 'Coreano',
      'ru': 'Ruso',
    },
  },
  zh: {
    noTrackLoaded: '未加载曲目',
    dragDrop: '拖放音频文件',
    idle: '待机',
    playing: '播放中',
    paused: '已暂停',
    stopped: '已停止',
    loaded: '已加载',
    noSongLoaded: '未加载歌曲',
    dropAudioFile: '放入音频文件',
    playBlocked: '播放受阻（需要交互）',
    shuffleOn: '随机播放：开启',
    shuffleOff: '随机播放：关闭',
    repeatOff: '重复：关闭',
    repeatAll: '重复：全部',
    repeatOne: '重复：单曲',
    themes: '主题',
    importTheme: '导入主题',
    invalidThemeFile: '主题文件格式无效',
    errorParsingTheme: '解析主题文件出错：',
    importLanguage: '导入语言',
    invalidLangFile: '语言文件格式无效',
    errorParsingLang: '解析语言文件出错：',
    uploadAudio: '上传音频',
    designedIn: '设计于加利福尼亚',
    playerLabel: '音乐播放器',
    seekLabel: '进度调节',
    playbackControls: '播放控制',
    playlistLabel: '播放列表',
    rewindTitle: '后退5秒（Shift+点击后退10秒，Ctrl+点击上一曲）',
    stopTitle: '停止',
    playTitle: '播放',
    forwardTitle: '前进5秒（Shift+点击前进10秒，Ctrl+点击下一曲）',
    themesTitle: '主题',
    uploadTitle: '上传本地音频文件',
    clearCacheTitle: '您确定要清除此网站的所有缓存吗？这将删除您所有的自定义语言和主题。建议您在清除之前先保存它们。',
    clearCacheYes: '是',
    clearCacheNo: '否',
    customLanguages: "自定义语言",
    customThemes: "自定义主题",
    deleteLanguage: "删除语言",
    deleteTheme: "删除主题",
    themeNames: {
      'basic-titanium':  '自然钛',
      'gothic-gold':     '哥特金',
      'brilliant-bronze':'璀璨青铜',
      'desert-titanium': '沙漠钛',
      'midnight-nebula': '午夜星云',
      'emerald-isle':    '翡翠岛',
      'cyber-pulse':     '赛博脉冲',
      'frozen-glacier':  '冰封冰川',
      'crimson-stealth': '深红隐匿',
      'rolex-everose':   '劳力士永恒玫瑰金',
      'obsidian-black':  '黑曜石黑',
      'solar-flare':     '太阳耀斑',
      'rainbow-pulse':   '彩虹脉冲',
    },
    languageNames: {
      'en-GB': '英语（英国）',
      'en-US': '英语（美国）',
      'en-AU': '英语（澳大利亚）',
      'en-CA': '英语（加拿大）',
      'fr-FR': '法语（法国）',
      'fr-CA': '法语（加拿大）',
      'fr-BE': '法语（比利时）',
      'fr-CH': '法语（瑞士）',
      'es-ES': '西班牙语（西班牙）',
      'es-MX': '西班牙语（墨西哥）',
      'es-AR': '西班牙语（阿根廷）',
      'es-CO': '西班牙语（哥伦比亚）',
      'pt-BR': '葡萄牙语（巴西）',
      'pt-PT': '葡萄牙语（葡萄牙）',
      'zh-CN': '中文（简体）',
      'zh-TW': '中文（繁体）',
      'zh-HK': '中文（香港）',
      'ar-SA': '阿拉伯语（沙特阿拉伯）',
      'ar-EG': '阿拉伯语（埃及）',
      'ar-MA': '阿拉伯语（摩洛哥）',
      'de-DE': '德语（德国）',
      'de-AT': '德语（奥地利）',
      'de-CH': '德语（瑞士）',
      'ja': '日语',
      'ko': '韩语',
      'ru': '俄语',
    },
  },
  ja: {
    noTrackLoaded: 'トラック未読み込み',
    dragDrop: '音声ファイルをドラッグ＆ドロップ',
    idle: '待機中',
    playing: '再生中',
    paused: '一時停止',
    stopped: '停止',
    loaded: '読み込み完了',
    noSongLoaded: '曲が読み込まれていません',
    dropAudioFile: '音声ファイルをドロップ',
    playBlocked: '再生がブロックされました（操作が必要です）',
    shuffleOn: 'シャッフル：オン',
    shuffleOff: 'シャッフル：オフ',
    repeatOff: 'リピート：オフ',
    repeatAll: 'リピート：全曲',
    repeatOne: 'リピート：1曲',
    themes: 'テーマ',
    importTheme: 'テーマをインポート',
    invalidThemeFile: '無効なテーマファイル形式',
    errorParsingTheme: 'テーマファイルの解析エラー：',
    importLanguage: '言語をインポート',
    invalidLangFile: '無効な言語ファイル形式',
    errorParsingLang: '言語ファイルの解析エラー：',
    uploadAudio: '音声をアップロード',
    designedIn: 'カリフォルニアでデザイン',
    playerLabel: '音楽プレーヤー',
    seekLabel: 'シーク',
    playbackControls: '再生コントロール',
    playlistLabel: 'プレイリスト',
    rewindTitle: '5秒戻す（Shift+クリックで10秒、Ctrl+クリックで前のトラック）',
    stopTitle: '停止',
    playTitle: '再生',
    forwardTitle: '5秒進む（Shift+クリックで10秒、Ctrl+クリックで次のトラック）',
    themesTitle: 'テーマ',
    uploadTitle: 'ローカル音声ファイルをアップロード',
    clearCacheTitle: 'このウェブサイトのキャッシュをすべてクリアしてもよろしいですか？カスタム言語とテーマがすべて削除されます。クリア前に保存することをお勧めします。',
    clearCacheYes: 'はい',
    clearCacheNo: 'いいえ',
    customLanguages: "カスタム言語",
    customThemes: "カスタムテーマ",
    deleteLanguage: "言語を削除",
    deleteTheme: "テーマを削除",
    themeNames: {
      'basic-titanium':  'ナチュラルチタン',
      'gothic-gold':     'ゴシックゴールド',
      'brilliant-bronze':'ブリリアントブロンズ',
      'desert-titanium': 'デザートチタン',
      'midnight-nebula': 'ミッドナイトネビュラ',
      'emerald-isle':    'エメラルドアイル',
      'cyber-pulse':     'サイバーパルス',
      'frozen-glacier':  'フローズングレイシャー',
      'crimson-stealth': 'クリムゾンステルス',
      'rolex-everose':   'ロレックス エバーローズ',
      'obsidian-black':  'オブシディアンブラック',
      'solar-flare':     'ソーラーフレア',
      'rainbow-pulse':   'レインボーパルス',
    },
    languageNames: {
      'en-GB': '英語（英国）',
      'en-US': '英語（米国）',
      'en-AU': '英語（オーストラリア）',
      'en-CA': '英語（カナダ）',
      'fr-FR': 'フランス語（フランス）',
      'fr-CA': 'フランス語（カナダ）',
      'fr-BE': 'フランス語（ベルギー）',
      'fr-CH': 'フランス語（スイス）',
      'es-ES': 'スペイン語（スペイン）',
      'es-MX': 'スペイン語（メキシコ）',
      'es-AR': 'スペイン語（アルゼンチン）',
      'es-CO': 'スペイン語（コロンビア）',
      'pt-BR': 'ポルトガル語（ブラジル）',
      'pt-PT': 'ポルトガル語（ポルトガル）',
      'zh-CN': '中国語（簡体字）',
      'zh-TW': '中国語（繁体字）',
      'zh-HK': '中国語（香港）',
      'ar-SA': 'アラビア語（サウジアラビア）',
      'ar-EG': 'アラビア語（エジプト）',
      'ar-MA': 'アラビア語（モロッコ）',
      'de-DE': 'ドイツ語（ドイツ）',
      'de-AT': 'ドイツ語（オーストリア）',
      'de-CH': 'ドイツ語（スイス）',
      'ja': '日本語',
      'ko': '韓国語',
      'ru': 'ロシア語',
    },
  },
  pt: {
    noTrackLoaded: 'Nenhuma faixa carregada',
    dragDrop: 'Arraste e solte um arquivo de áudio',
    idle: 'Inativo',
    playing: 'Reproduzindo',
    paused: 'Pausado',
    stopped: 'Parado',
    loaded: 'Carregado',
    noSongLoaded: 'Nenhuma música carregada',
    dropAudioFile: 'Solte um arquivo de áudio',
    playBlocked: 'Reprodução bloqueada (interação necessária)',
    shuffleOn: 'Aleatório: ativado',
    shuffleOff: 'Aleatório: desativado',
    repeatOff: 'Repetir: desativado',
    repeatAll: 'Repetir: tudo',
    repeatOne: 'Repetir: um',
    themes: 'Temas',
    importTheme: 'Importar tema',
    invalidThemeFile: 'Formato de arquivo de tema inválido',
    errorParsingTheme: 'Erro ao analisar arquivo de tema: ',
    importLanguage: 'Importar idioma',
    invalidLangFile: 'Formato de arquivo de idioma inválido',
    errorParsingLang: 'Erro ao analisar arquivo de idioma: ',
    uploadAudio: 'Carregar áudio',
    designedIn: 'Projetado na Califórnia',
    playerLabel: 'Reprodutor de música',
    seekLabel: 'Buscar faixa',
    playbackControls: 'Controles de reprodução',
    playlistLabel: 'Lista de reprodução',
    rewindTitle: 'Voltar 5s (Shift+Clique para 10s, Ctrl+Clique para faixa anterior)',
    stopTitle: 'Parar',
    playTitle: 'Reproduzir',
    forwardTitle: 'Avançar 5s (Shift+Clique para 10s, Ctrl+Clique para próxima faixa)',
    themesTitle: 'Temas',
    uploadTitle: 'Carregar arquivo de áudio local',
    clearCacheTitle: 'Tem certeza de que deseja limpar todo o cache deste site? Isso removerá todos os seus idiomas e temas personalizados. Sugiro salvá-los antes de limpar.',
    clearCacheYes: 'Sim',
    clearCacheNo: 'Não',
    customLanguages: "Idiomas personalizados",
    customThemes: "Temas personalizados",
    deleteLanguage: "Excluir idioma",
    deleteTheme: "Excluir tema",
    themeNames: {
      'basic-titanium':  'Titânio natural',
      'gothic-gold':     'Ouro gótico',
      'brilliant-bronze':'Bronze brilhante',
      'desert-titanium': 'Titânio deserto',
      'midnight-nebula': 'Nebulosa da meia-noite',
      'emerald-isle':    'Ilha esmeralda',
      'cyber-pulse':     'Pulso cibernético',
      'frozen-glacier':  'Glaciar congelado',
      'crimson-stealth': 'Furtivo carmesim',
      'rolex-everose':   'Rolex Everose',
      'obsidian-black':  'Preto obsidiana',
      'solar-flare':     'Erupção solar',
      'rainbow-pulse':   'Pulso arco-íris',
    },
    languageNames: {
      'en-GB': 'Inglês (Reino Unido)',
      'en-US': 'Inglês (EUA)',
      'en-AU': 'Inglês (Austrália)',
      'en-CA': 'Inglês (Canadá)',
      'fr-FR': 'Francês (França)',
      'fr-CA': 'Francês (Canadá)',
      'fr-BE': 'Francês (Bélgica)',
      'fr-CH': 'Francês (Suíça)',
      'es-ES': 'Espanhol (Espanha)',
      'es-MX': 'Espanhol (México)',
      'es-AR': 'Espanhol (Argentina)',
      'es-CO': 'Espanhol (Colômbia)',
      'pt-BR': 'Português (Brasil)',
      'pt-PT': 'Português (Portugal)',
      'zh-CN': 'Chinês (simplificado)',
      'zh-TW': 'Chinês (tradicional)',
      'zh-HK': 'Chinês (Hong Kong)',
      'ar-SA': 'Árabe (Arábia Saudita)',
      'ar-EG': 'Árabe (Egito)',
      'ar-MA': 'Árabe (Marrocos)',
      'de-DE': 'Alemão (Alemanha)',
      'de-AT': 'Alemão (Áustria)',
      'de-CH': 'Alemão (Suíça)',
      'ja': 'Japonês',
      'ko': 'Coreano',
      'ru': 'Russo',
    },
  },
  ko: {
    noTrackLoaded: '트랙 없음',
    dragDrop: '오디오 파일을 드래그 앤 드롭',
    idle: '대기 중',
    playing: '재생 중',
    paused: '일시정지',
    stopped: '정지',
    loaded: '불러옴',
    noSongLoaded: '곡이 없습니다',
    dropAudioFile: '오디오 파일을 놓으세요',
    playBlocked: '재생 차단됨 (상호작용 필요)',
    shuffleOn: '셔플: 켜짐',
    shuffleOff: '셔플: 꺼짐',
    repeatOff: '반복: 꺼짐',
    repeatAll: '반복: 전체',
    repeatOne: '반복: 한 곡',
    themes: '테마',
    importTheme: '테마 가져오기',
    invalidThemeFile: '잘못된 테마 파일 형식',
    errorParsingTheme: '테마 파일 파싱 오류: ',
    importLanguage: '언어 가져오기',
    invalidLangFile: '잘못된 언어 파일 형식',
    errorParsingLang: '언어 파일 파싱 오류: ',
    uploadAudio: '오디오 업로드',
    designedIn: '캘리포니아에서 디자인',
    playerLabel: '음악 플레이어',
    seekLabel: '트랙 탐색',
    playbackControls: '재생 컨트롤',
    playlistLabel: '재생목록',
    rewindTitle: '5초 뒤로 (Shift+클릭: 10초, Ctrl+클릭: 이전 트랙)',
    stopTitle: '정지',
    playTitle: '재생',
    forwardTitle: '5초 앞으로 (Shift+클릭: 10초, Ctrl+클릭: 다음 트랙)',
    themesTitle: '테마',
    uploadTitle: '로컬 오디오 파일 업로드',
    clearCacheTitle: '이 웹사이트의 모든 캐시를 지우시겠습니까? 사용자 지정 언어와 테마가 모두 삭제됩니다. 지우기 전에 저장하는 것을 권장합니다.',
    clearCacheYes: '예',
    clearCacheNo: '아니오',
    customLanguages: "사용자 지정 언어",
    customThemes: "사용자 지정 테마",
    deleteLanguage: "언어 삭제",
    deleteTheme: "테마 삭제",
    themeNames: {
      'basic-titanium':  '자연 티타늄',
      'gothic-gold':     '고딕 골드',
      'brilliant-bronze':'브릴리언트 브론즈',
      'desert-titanium': '사막 티타늄',
      'midnight-nebula': '미드나이트 네뷸라',
      'emerald-isle':    '에메랄드 아일',
      'cyber-pulse':     '사이버 펄스',
      'frozen-glacier':  '프로즌 글레이셔',
      'crimson-stealth': '크림슨 스텔스',
      'rolex-everose':   '롤렉스 에버로즈',
      'obsidian-black':  '옵시디안 블랙',
      'solar-flare':     '솔라 플레어',
      'rainbow-pulse':   '레인보우 펄스',
    },
    languageNames: {
      'en-GB': '영어 (영국)',
      'en-US': '영어 (미국)',
      'en-AU': '영어 (호주)',
      'en-CA': '영어 (캐나다)',
      'fr-FR': '프랑스어 (프랑스)',
      'fr-CA': '프랑스어 (캐나다)',
      'fr-BE': '프랑스어 (벨기에)',
      'fr-CH': '프랑스어 (스위스)',
      'es-ES': '스페인어 (스페인)',
      'es-MX': '스페인어 (멕시코)',
      'es-AR': '스페인어 (아르헨티나)',
      'es-CO': '스페인어 (콜롬비아)',
      'pt-BR': '포르투갈어 (브라질)',
      'pt-PT': '포르투갈어 (포르투갈)',
      'zh-CN': '중국어 (간체)',
      'zh-TW': '중국어 (번체)',
      'zh-HK': '중국어 (홍콩)',
      'ar-SA': '아랍어 (사우디아라비아)',
      'ar-EG': '아랍어 (이집트)',
      'ar-MA': '아랍어 (모로코)',
      'de-DE': '독일어 (독일)',
      'de-AT': '독일어 (오스트리아)',
      'de-CH': '독일어 (스위스)',
      'ja': '일본어',
      'ko': '한국어',
      'ru': '러시아어',
    },
  },
  ru: {
    noTrackLoaded: 'Трек не загружен',
    dragDrop: 'Перетащите аудиофайл',
    idle: 'Ожидание',
    playing: 'Воспроизведение',
    paused: 'Пауза',
    stopped: 'Остановлено',
    loaded: 'Загружено',
    noSongLoaded: 'Песня не загружена',
    dropAudioFile: 'Перетащите аудиофайл',
    playBlocked: 'Воспроизведение заблокировано (требуется взаимодействие)',
    shuffleOn: 'Перемешать: вкл',
    shuffleOff: 'Перемешать: выкл',
    repeatOff: 'Повтор: выкл',
    repeatAll: 'Повтор: все',
    repeatOne: 'Повтор: одна',
    themes: 'Темы',
    importTheme: 'Импорт темы',
    invalidThemeFile: 'Неверный формат файла темы',
    errorParsingTheme: 'Ошибка чтения файла темы: ',
    importLanguage: 'Импорт языка',
    invalidLangFile: 'Неверный формат языкового файла',
    errorParsingLang: 'Ошибка чтения языкового файла: ',
    uploadAudio: 'Загрузить аудио',
    designedIn: 'Разработано в Калифорнии',
    playerLabel: 'Музыкальный плеер',
    seekLabel: 'Перемотка',
    playbackControls: 'Управление воспроизведением',
    playlistLabel: 'Плейлист',
    rewindTitle: 'Назад 5с (Shift+клик: 10с, Ctrl+клик: предыдущий трек)',
    stopTitle: 'Стоп',
    playTitle: 'Воспроизвести',
    forwardTitle: 'Вперёд 5с (Shift+клик: 10с, Ctrl+клик: следующий трек)',
    themesTitle: 'Темы',
    uploadTitle: 'Загрузить локальный аудиофайл',
    clearCacheTitle: 'Вы уверены, что хотите очистить весь кэш сайта? Это удалит все ваши пользовательские языки и темы. Рекомендую сохранить их перед очисткой.',
    clearCacheYes: 'Да',
    clearCacheNo: 'Нет',
    customLanguages: "Пользовательские языки",
    customThemes: "Пользовательские темы",
    deleteLanguage: "Удалить язык",
    deleteTheme: "Удалить тему",
    themeNames: {
      'basic-titanium':  'Натуральный титан',
      'gothic-gold':     'Готическое золото',
      'brilliant-bronze':'Блестящая бронза',
      'desert-titanium': 'Пустынный титан',
      'midnight-nebula': 'Полуночная туманность',
      'emerald-isle':    'Изумрудный остров',
      'cyber-pulse':     'Кибер-пульс',
      'frozen-glacier':  'Замёрзший ледник',
      'crimson-stealth': 'Багровая тень',
      'rolex-everose':   'Rolex Everose',
      'obsidian-black':  'Обсидиановый чёрный',
      'solar-flare':     'Солнечная вспышка',
      'rainbow-pulse':   'Радужный пульс',
    },
    languageNames: {
      'en-GB': 'Английский (Великобритания)',
      'en-US': 'Английский (США)',
      'en-AU': 'Английский (Австралия)',
      'en-CA': 'Английский (Канада)',
      'fr-FR': 'Французский (Франция)',
      'fr-CA': 'Французский (Канада)',
      'fr-BE': 'Французский (Бельгия)',
      'fr-CH': 'Французский (Швейцария)',
      'es-ES': 'Испанский (Испания)',
      'es-MX': 'Испанский (Мексика)',
      'es-AR': 'Испанский (Аргентина)',
      'es-CO': 'Испанский (Колумбия)',
      'pt-BR': 'Португальский (Бразилия)',
      'pt-PT': 'Португальский (Португалия)',
      'zh-CN': 'Китайский (упрощённый)',
      'zh-TW': 'Китайский (традиционный)',
      'zh-HK': 'Китайский (Гонконг)',
      'ar-SA': 'Арабский (Саудовская Аравия)',
      'ar-EG': 'Арабский (Египет)',
      'ar-MA': 'Арабский (Марокко)',
      'de-DE': 'Немецкий (Германия)',
      'de-AT': 'Немецкий (Австрия)',
      'de-CH': 'Немецкий (Швейцария)',
      'ja': 'Японский',
      'ko': 'Корейский',
      'ru': 'Русский',
    },
  },
};

/* ------- Regional variants (inherit from base, override where needed) ------- */
(function() {
  /**
   * Helper to create a regional variant by deep-copying a base language 
   * and applying specific overrides.
   */
  function variant(base, overrides) {
    const result = JSON.parse(JSON.stringify(I18N[base])); // Deep copy
    Object.assign(result, overrides);
    if (overrides.languageNames) result.languageNames = overrides.languageNames;
    return result;
  }

  // ── English Variants ───────────────────────────────────────────────────
  I18N['en-GB'] = variant('en', { uploadAudio: 'Import Audio' });
  I18N['en-US'] = variant('en', { uploadAudio: 'Upload Audio' });
  I18N['en-AU'] = variant('en', { uploadAudio: 'Add Audio' });
  I18N['en-CA'] = variant('en', { uploadAudio: 'Select Audio' });

  // ── French Variants ────────────────────────────────────────────────────
  I18N['fr-FR'] = variant('fr', { uploadAudio: 'Charger de l\'audio' });
  I18N['fr-CA'] = variant('fr', { uploadAudio: 'Téléverser de l\'audio' });
  I18N['fr-BE'] = variant('fr', { uploadAudio: 'Importer de l\'audio' });
  I18N['fr-CH'] = variant('fr', { uploadAudio: 'Ajouter de l\'audio' });

  // ── Spanish Variants ───────────────────────────────────────────────────
  I18N['es-ES'] = variant('es', { uploadAudio: 'Subir audio' });
  I18N['es-MX'] = variant('es', { uploadAudio: 'Cargar audio' });
  I18N['es-AR'] = variant('es', { uploadAudio: 'Añadir audio' });
  I18N['es-CO'] = variant('es', { uploadAudio: 'Importar audio' });

  // ── Portuguese Variants ────────────────────────────────────────────────
  I18N['pt-BR'] = variant('pt', { uploadAudio: 'Carregar áudio' });
  I18N['pt-PT'] = variant('pt', { uploadAudio: 'Importar áudio' });

  // ── German Variants ────────────────────────────────────────────────────
  I18N['de-DE'] = variant('de', { uploadAudio: 'Audio hochladen' });
  I18N['de-AT'] = variant('de', { uploadAudio: 'Audio importieren' });
  I18N['de-CH'] = variant('de', { uploadAudio: 'Audio hinzufügen' });

  // ── Chinese Variants (Traditional Overrides) ──────────────────────────
  I18N['zh-CN'] = variant('zh', { uploadAudio: '上传音频' }); // Simplified
  I18N['zh-TW'] = variant('zh', { 
    noTrackLoaded: '未載入曲目',
    dragDrop: '拖放音訊檔案',
    uploadAudio: '上傳音訊',
    playerLabel: '主題音樂播放器',
    playlistLabel: '播放列表'
  }); // Traditional (Taiwan)
  I18N['zh-HK'] = variant('zh', { 
    noTrackLoaded: '未載入曲目',
    dragDrop: '拖放音訊檔案',
    uploadAudio: '上傳檔案', 
    playerLabel: '主題音樂播放器',
    playlistLabel: '播放清單'
  }); // Traditional (Hong Kong)

  // ── Arabic Variants ────────────────────────────────────────────────────
  I18N['ar-SA'] = variant('ar', { uploadAudio: 'رفع ملف صوتي' });
  I18N['ar-EG'] = variant('ar', { uploadAudio: 'تحميل ملف صوتي' });
  I18N['ar-MA'] = variant('ar', { uploadAudio: 'استيراد ملف صوتي' });

})();

function detectLanguage() {
  const raw = (navigator.language || navigator.userLanguage || 'en');
  const lang = raw.toLowerCase().replace('_', '-');
  // Exact regional match first
  const map = {
    'en-gb': 'en-GB', 'en-us': 'en-US', 'en-au': 'en-AU', 'en-ca': 'en-CA',
    'fr-fr': 'fr-FR', 'fr-ca': 'fr-CA', 'fr-be': 'fr-BE', 'fr-ch': 'fr-CH',
    'es-es': 'es-ES', 'es-mx': 'es-MX', 'es-ar': 'es-AR', 'es-co': 'es-CO',
    'pt-br': 'pt-BR', 'pt-pt': 'pt-PT',
    'zh-cn': 'zh-CN', 'zh-tw': 'zh-TW', 'zh-hk': 'zh-HK',
    'ar-sa': 'ar-SA', 'ar-eg': 'ar-EG', 'ar-ma': 'ar-MA',
    'de-de': 'de-DE', 'de-at': 'de-AT', 'de-ch': 'de-CH',
  };
  if (map[lang]) return map[lang];
  // Base language fallbacks
  if (lang.startsWith('en')) return 'en-GB';
  if (lang.startsWith('fr')) return 'fr-FR';
  if (lang.startsWith('es')) return 'es-ES';
  if (lang.startsWith('pt')) return 'pt-BR';
  if (lang.startsWith('zh')) return 'zh-CN';
  if (lang.startsWith('ar')) return 'ar-SA';
  if (lang.startsWith('de')) return 'de-DE';
  if (lang.startsWith('ja')) return 'ja';
  if (lang.startsWith('ko')) return 'ko';
  if (lang.startsWith('ru')) return 'ru';
  return 'en-GB';
}

const LANG = localStorage.getItem('selectedLang') || detectLanguage();
let _activeLang = LANG;
const t = (key) => {
  if (I18N[_activeLang] && I18N[_activeLang][key] !== undefined) return I18N[_activeLang][key];
  const baseLang = _activeLang.includes('-') ? _activeLang.split('-')[0].toLowerCase() : null;
  if (baseLang && I18N[baseLang] && I18N[baseLang][key] !== undefined) return I18N[baseLang][key];
  return (I18N['en'] && I18N['en'][key]) || key;
};

// Apply direction and lang on initial load
document.documentElement.setAttribute('dir', _activeLang.startsWith('ar') ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', _activeLang);

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
  progressRafId: null,
  isSeeking: false,
  currentTheme: 'gothic-gold', // Default theme (matches the original design)
  rainbowInterval: null,
  rainbowIndex: 0,
  statusKey: 'idle'
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
const albumEl = document.getElementById('album');
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
const langImportInput  = document.getElementById('langImportInput');

function setStatus(key) {
  state.statusKey = key;
  statusDisplay.textContent = t(key);
}

state.isChangingTheme = false
let progressAnimationId;

/* ------- Apply i18n to DOM ------- */
function applyI18nToDOM() {
  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  // title attributes
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.title = t(key);
  });
  // aria-label attributes
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    el.setAttribute('aria-label', t(key));
  });
}


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
        <div style="font-size:10px; color:rgba(237,239,255,0.4); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
          ${escapeHtml(track.album || '')}
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

    // Single tap: load track (always autoplay on manual track selection)
    el.addEventListener('click', () => {
      loadTrack(index, { autoplay: true });
      scrollActiveTrackIntoView();
    });

    // Right-click: remove track
    el.addEventListener('contextmenu', (e) => {
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
        titleEl.textContent = t('noSongLoaded');
        artistEl.textContent = t('dropAudioFile');
        albumEl.textContent = '';
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
      titleEl.textContent = t('noSongLoaded');
      artistEl.textContent = t('dropAudioFile');
      albumEl.textContent = '';
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
  albumEl.textContent = track.album || '';

  if(track.art){
    albumArtImg.src = track.art;
    albumArtImg.style.display = 'block';
    musicNoteSVG.style.display = 'none';
  } else {
    albumArtImg.style.display = 'none';
    musicNoteSVG.style.display = 'block';
  }

  refreshActiveTrackUI();
  scrollActiveTrackIntoView();

  state.isStopped = false; // reset stopped flag when loading a new track
  setStatus('loaded');

  // Determine whether to play: explicit autoplay flag, or preserve current playing state
  const shouldPlay = opts.autoplay === true ? true
                   : opts.autoplay === false ? false
                   : state.isPlaying; // 'inherit' — keep current state

  if(shouldPlay){
    playAudio();
  } else {
    pauseAudio();
  }

  setupAudioContext();
  buildVisualiserBars(state.visualBars);

  updateMediaSession();
}

/* ------- Playback controls ------- */
function playAudio(){
  if (!state.audio.src) return;

  if(state.audioContext && state.audioContext.state === 'suspended'){
    state.audioContext.resume().catch(()=>{});
  }

  state.audio.play().catch(err=>{
    console.warn('Play prevented', err);
    setStatus('playBlocked');
  });
}

function pauseAudio(){
  state.audio.pause();
}

function stopAudio(){
  if(!state.audio.src) return; // no track loaded — do nothing
  state.audio.pause();
  state.audio.currentTime = 0;
  state.isPlaying = false;
  state.isStopped = true;
  setStatus('stopped');
  seekRange.value = 0;
  syncPlaybackStateFromAudio();
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
    // Always wrap to first track when jumping next from last track
    loadTrack(0, {autoplay:true});
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

  // Normal previous-track behaviour — always wrap to last track when on first
  if(state.currentIndex <= 0){
    loadTrack(state.playlist.length - 1, { autoplay: true });
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
  shuffleBtn.title = state.shuffle ? t('shuffleOn') : t('shuffleOff');
});

repeatBtn.addEventListener('click', ()=>{
  // Cycle: 0 (Off) -> 1 (All) -> 2 (One)
  state.repeatMode = (state.repeatMode + 1) % 3;
  
  // Logic for visual states (CSS handled)
  if(state.repeatMode === 0) {
    repeatBtn.classList.remove('active', 'active-one');
    repeatBtn.title = t('repeatOff');
  } else if (state.repeatMode === 1) {
    repeatBtn.classList.add('active');
    repeatBtn.classList.remove('active-one');
    repeatBtn.title = t('repeatAll');
  } else {
    // Both active (for glow) and active-one (to show the "1" badge)
    repeatBtn.classList.add('active', 'active-one');
    repeatBtn.title = t('repeatOne');
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
/** Read artwork + basic tags from an audio File via jsmediatags */
function readAudioMetadata(file) {
  return new Promise((resolve) => {
    if (typeof jsmediatags === 'undefined') {
      resolve({ title: null, artist: null, album: null , art: null});
      return;
    }
    jsmediatags.read(file, {
      onSuccess(tag) {
        const tags = tag.tags || {};
        let artUrl = null;
        const picture = tags.picture;
        if (picture && picture.data) {
          const bytes = new Uint8Array(picture.data);
          const blob  = new Blob([bytes], { type: picture.format || 'image/jpeg' });
          artUrl = URL.createObjectURL(blob);
        }
        resolve({
          title:  tags.title  || null,
          artist: tags.artist || null,
          album:  tags.album  || null,
          art:    artUrl
        });
      },
      onError() {
        resolve({ title: null, artist: null, album: null , art: null });
      }
    });
  });
}

fileInput.addEventListener('change', async (ev) => {
  const files = Array.from(ev.target.files || []);
  for (const f of files) {
    const url  = URL.createObjectURL(f);
    const hash = await hashFile(f);
    const meta = await readAudioMetadata(f);

    addTrackToPlaylist({
      src:    url,
      title:  meta.title  || f.name.replace(/\.[^/.]+$/, ''),
      artist: meta.artist || '',
      album:  meta.album  || '',
      art:    meta.art    || '',
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


/* Keyboard support: space toggles play/pause, media keys for prev/next */
window.addEventListener('keydown', (ev)=>{
  if(ev.code === 'Space' && (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')){
    ev.preventDefault();
    if(state.isPlaying) pauseAudio(); else playAudio();
  }
  // Ctrl+Shift+R (or Cmd+Shift+R on Mac) — clear cache prompt
  if(ev.code === 'KeyR' && ev.shiftKey && (ev.ctrlKey || ev.metaKey)){
    ev.preventDefault();
    showClearCacheModal();
  }
  // Hardware/software media keys
  if(ev.code === 'MediaTrackPrevious'){ ev.preventDefault(); jumpToPrev(); }
  if(ev.code === 'MediaTrackNext')    { ev.preventDefault(); jumpToNext(); }
  if(ev.code === 'MediaPlayPause')    { ev.preventDefault(); if(state.isPlaying) pauseAudio(); else playAudio(); }
  if(ev.code === 'MediaStop')         { ev.preventDefault(); stopAudio(); }
});

/* ------- Media Session API (OS taskbar, lock screen, trackpad gestures) ------- */
function updateMediaSession() {
  if (!('mediaSession' in navigator)) return;

  const track = state.playlist[state.currentIndex];
  if (!track) return;

  navigator.mediaSession.metadata = new MediaMetadata({
    title:  track.title  || 'Unknown Title',
    artist: track.artist || '',
    album:  track.album  || '',
    artwork: track.art
      ? [{ src: track.art, sizes: '512x512', type: 'image/jpeg' }]
      : []
  });

  // Wire OS-level transport controls → player functions
  navigator.mediaSession.setActionHandler('play',          () => playAudio());
  navigator.mediaSession.setActionHandler('pause',         () => pauseAudio());
  navigator.mediaSession.setActionHandler('stop',          () => stopAudio());
  navigator.mediaSession.setActionHandler('previoustrack', () => jumpToPrev());
  navigator.mediaSession.setActionHandler('nexttrack',     () => jumpToNext());
  navigator.mediaSession.setActionHandler('seekto', (details) => {
    if (details.seekTime != null && isFinite(details.seekTime)) {
      state.audio.currentTime = details.seekTime;
    }
  });
  navigator.mediaSession.setActionHandler('seekbackward', (details) => {
    state.audio.currentTime = Math.max(0, state.audio.currentTime - (details.seekOffset || 5));
  });
  navigator.mediaSession.setActionHandler('seekforward', (details) => {
    state.audio.currentTime = Math.min(
      state.audio.duration || 0,
      state.audio.currentTime + (details.seekOffset || 5)
    );
  });
}

// Keep the OS playback state badge in sync
function syncMediaSessionPlaybackState() {
  if (!('mediaSession' in navigator)) return;
  navigator.mediaSession.playbackState = state.isPlaying ? 'playing' : 'paused';
}

function showClearCacheModal() {
  // Remove any existing modal
  const existing = document.getElementById('clearCacheModal');
  if (existing) existing.remove();

  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

  const overlay = document.createElement('div');
  overlay.id = 'clearCacheModal';
  Object.assign(overlay.style, {
    position: 'fixed', inset: '0', zIndex: '99999',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(0,0,0,0.65)',
    backdropFilter: 'blur(8px)',
    animation: 'fadeIn 0.18s ease',
  });

  const box = document.createElement('div');
  Object.assign(box.style, {
    background: 'var(--titanium-light, #1a1a1c)',
    border: '1px solid var(--titanium-border, rgba(255,255,255,0.12))',
    borderRadius: '16px',
    padding: '28px 28px 22px',
    maxWidth: '420px',
    width: '90%',
    boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
    color: 'var(--text-main, #f5f5f7)',
    fontFamily: 'inherit',
    direction: isRTL ? 'rtl' : 'ltr',
    textAlign: isRTL ? 'right' : 'left',
    animation: 'scaleIn 0.2s cubic-bezier(0.34,1.56,0.64,1)',
  });

  const msg = document.createElement('p');
  msg.textContent = t('clearCacheTitle');
  Object.assign(msg.style, {
    margin: '0 0 22px', fontSize: '14px', lineHeight: '1.6',
    color: 'var(--text-main, #f5f5f7)',
  });

  const btnRow = document.createElement('div');
  Object.assign(btnRow.style, {
    display: 'flex', gap: '10px',
    flexDirection: isRTL ? 'row-reverse' : 'row',
    justifyContent: 'flex-end',
  });

  function makeBtn(label, primary) {
    const btn = document.createElement('button');
    btn.textContent = label;
    Object.assign(btn.style, {
      padding: '10px',
      minWidth: '70px',
      border: primary ? 'none' : '1px solid rgba(255,255,255,0.15)',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      fontFamily: 'inherit',
      fontWeight: '600',
      background: primary ? 'var(--color-primary, #FFD700)' : 'rgba(255,255,255,0.06)',
      color: primary ? 'var(--titanium-dark, #0a0a0c)' : 'var(--text-main, #f5f5f7)',
      transition: 'opacity 0.15s',
    });
    btn.addEventListener('mouseover', () => btn.style.opacity = '0.8');
    btn.addEventListener('mouseout',  () => btn.style.opacity = '1');
    return btn;
  }

  const yesBtn = makeBtn(t('clearCacheYes'), true);
  const noBtn  = makeBtn(t('clearCacheNo'),  false);

  const ANIM_DURATION = 200;

  function dismissModal() {
    box.style.animation     = `scaleOut ${ANIM_DURATION}ms cubic-bezier(0.34,1.56,0.64,1) forwards`;
    overlay.style.animation = `fadeOut  ${ANIM_DURATION}ms ease forwards`;
    setTimeout(() => overlay.remove(), ANIM_DURATION);
  }

  yesBtn.addEventListener('click', () => {
    // Clear all localStorage including custom languages and themes
    localStorage.clear();
    location.reload();
  });

  noBtn.addEventListener('click', () => dismissModal());

  // Close on overlay click outside box
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) dismissModal();
  });

  // Close on Escape
  function onEsc(e) {
    if (e.key === 'Escape') { dismissModal(); window.removeEventListener('keydown', onEsc); }
  }
  window.addEventListener('keydown', onEsc);

  btnRow.appendChild(noBtn);
  btnRow.appendChild(yesBtn);
  box.appendChild(msg);
  box.appendChild(btnRow);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

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
        album: '',
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
  // _activeLang is already set from localStorage/detectLanguage at the top,
  // so just render the list and update the panel title silently.
  currentLang = _activeLang;
  renderLangList();
  document.getElementById('langPanelTitle').textContent = getLangPanelTitle(_activeLang);

  applyI18nToDOM();
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
    state.isStopped = false; // clear stopped flag when playback resumes
    setStatus('playing');
    if(state.analyser) startVisualiser();
    if (!state.progressRafId) {
      state.progressRafId = requestAnimationFrame(updateProgress);
    }
  } else {
    // Determine correct non-playing status
    if(state.audio.ended){
      setStatus('stopped');
    } else if(state.isStopped){
      setStatus('stopped');
    } else {
      setStatus('paused');
    }
    if(state.rafId) cancelAnimationFrame(state.rafId);
    if (state.progressRafId) {cancelAnimationFrame(state.progressRafId); state.progressRafId = null}
  }

  syncMediaSessionPlaybackState();
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
    root.style.setProperty('--color-primary', primaryColor);
    root.style.setProperty('--color-bright', '#FFFFFF');
    root.style.setProperty('--color-sheen', primarySheen);
    root.style.setProperty('--color-deep', primaryDeep);
    root.style.setProperty('--color-glow', primaryGlow);
    
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
  if (!theme) return;

  const player = document.querySelector('.player');
  const root = document.documentElement;
  
  // 1. Animation Logic
  if (state.isChangingTheme) return;
  const duration = 400;

  if (animate) {
    state.isChangingTheme = true;
    player.style.filter = 'blur(20px)';
    player.style.transition = `filter ${duration/2}ms ease`;
  }

  // 2. State & Persistence
  state.currentTheme = themeKey;
  localStorage.setItem('selectedTheme', themeKey);

  // 3. Apply Colors (Handles both --color-primary AND primaryColor formats)
  for (const [key, value] of Object.entries(theme.colors)) {
    if (key.startsWith('--')) {
      // Direct CSS Variable (e.g., "--color-primary")
      root.style.setProperty(key, value);
    } else {
      // camelCase conversion (e.g., "primaryColor" -> "--color-primary")
      // Specifically map your known script variables to CSS variables
      const mapping = {
        'primaryColor': '--color-primary',
        'primaryBright': '--color-bright',
        'primaryDeep': '--color-deep',
        'primaryGlow': '--color-glow',
        'primarySheen': '--color-sheen',
        'titaniumDark': '--titanium-dark',
        'titaniumLight': '--titanium-light',
        'titaniumBorder': '--titanium-border',
        'textMain': '--text-main',
        'textMuted': '--text-muted'
      };
      
      root.style.setProperty(mapping[key] || key, value);
    }
  }

  // 4. Cleanup & UI Refresh
  if (animate) {
    state.isChangingTheme = true;
    document.querySelector('.player').style.filter = 'blur(20px)';
    
    setTimeout(() => {
      document.querySelector('.player').style.filter = '';
      state.isChangingTheme = false;
      
      // RE-RENDER THE LIST HERE to move the 'active' class
      renderThemeList(); 
    }, 400);
  } else {
    renderThemeList();
  }

  // Restart animations if the theme is dynamic
  stopRainbowAnimation(); //
  if (theme.animated) {
      startRainbowAnimation(); //
  }
  updatePlayButtonAnimation(); //
}

function executeColorSwap(themeKey, theme) {
  const root = document.documentElement;
  const colors = theme.colors;
  
  state.currentTheme = themeKey;

  // Map theme colors to CSS variables
  root.style.setProperty('--titanium-dark', colors.titaniumDark);
  root.style.setProperty('--titanium-light', colors.titaniumLight);
  root.style.setProperty('--titanium-border', colors.titaniumBorder);
  root.style.setProperty('--color-primary', colors.primaryColor);
  root.style.setProperty('--color-bright', colors.primaryBright);
  root.style.setProperty('--color-deep', colors.primaryDeep);
  root.style.setProperty('--color-glow', colors.primaryGlow);
  root.style.setProperty('--color-sheen', colors.primarySheen);
  root.style.setProperty('--text-main', colors.textMain);
  root.style.setProperty('--text-muted', colors.textMuted);

  // Manage animations
  stopRainbowAnimation();
  if (theme.animated) startRainbowAnimation();
  
  updatePlayButtonAnimation();
  updateThemeListUI();
  localStorage.setItem('selectedTheme', themeKey);
}

function performThemeVariableSwap(themeKey, theme) {
  const root = document.documentElement;
  const colors = theme.colors;
  
  state.currentTheme = themeKey;
  
  // These variables now control the playback circle too
  root.style.setProperty('--color-primary', colors.primaryColor);
  root.style.setProperty('--color-bright', colors.primaryBright);
  root.style.setProperty('--color-deep', colors.primaryDeep);
  root.style.setProperty('--color-glow', colors.primaryGlow);
  root.style.setProperty('--color-sheen', colors.primarySheen);
  
  // Update other UI elements
  updateThemeListUI();
  localStorage.setItem('selectedTheme', themeKey);
}

function exportTheme(themeKey) {
  const theme = THEMES[themeKey];
  if (!theme) return;

  // Prepare the data (ensuring it has the 'custom' flag for when it's re-imported)
  const exportData = {
    ...theme,
    custom: true 
  };

  const jsonString = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  // Create a temporary link and click it programmatically
  const link = document.createElement('a');
  link.href = url;
  link.download = `${theme.name.replace(/\s+/g, '_').toLowerCase()}_theme.json`;
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

let _themeImportCounter = 0;

function importTheme(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const themeData = JSON.parse(e.target.result);
        
        // 1. Validation: Ensure it has a name and colors
        if (!themeData.name || !themeData.colors) {
          throw new Error(t('invalidThemeFile'));
        }

        // 2. Generate a unique key using a counter (not Date.now, which collides on bulk import)
        const themeKey = 'custom-' + Date.now() + '-' + (++_themeImportCounter);
        themeData.custom = true; 

        // 3. Add to the global THEMES object
        THEMES[themeKey] = themeData;

        console.log(`Imported theme: ${themeData.name}`);
      } catch (err) {
        state.isChangingTheme = false; 
        document.querySelector('.player').style.filter = '';
        alert(t('errorParsingTheme') + err.message);
      }
      resolve();
    };
    reader.onerror = () => resolve(); // Don't block the queue on read errors
    reader.readAsText(file);
  });
}

function exportLanguage(code) {
  const lang = I18N[code];
  if (!lang) return;
  const meta = LANGUAGES.find(l => l.code === code) || { label: code, flag: '' };
  const langData = JSON.stringify({ code, label: meta.label, flag: meta.flag, strings: lang }, null, 2);
  const blob = new Blob([langData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${code}-language.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importLanguageFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      const code = data.code || 'custom-' + Date.now();
      
      // Add to main language array
      LANGUAGES.push({
        code: code,
        label: data.label || code.toUpperCase(),
        flag: data.flag || '🌐',
        custom: true // Ensure this flag is set!
      });
      
      I18N[code] = data.strings || data;

      // IMMEDIATE UPDATES
      saveCustomLanguages(); 
      renderLangList(); // This will now show the header immediately
      
      console.log("Language imported successfully");
    } catch (err) {
      alert("Error importing language: " + err.message);
    }
  };
  reader.readAsText(file);
}

function renderThemeList() {
  themeList.innerHTML = '';

  const builtInKeys = Object.keys(THEMES).filter(k => !THEMES[k].custom);
  const customKeys  = Object.keys(THEMES).filter(k =>  THEMES[k].custom);

  function makeThemeItem(key) {
    const theme = THEMES[key];
    const item = document.createElement('div');
    item.className = 'theme-item';
    
    // Add active class if this is the current theme
    if (state.currentTheme === key) {
      item.classList.add('active');
    }
    
    // Create the preview dot
    const dot = document.createElement('div');
    dot.className = 'theme-dot';
    
    // Extract primary color for the dot (checks both camelCase and CSS variable naming)
    const dotColor = theme.colors.primaryColor || 
                    theme.colors['--color-primary'] || 
                    '#FFD700';
    
    dot.style.background = dotColor;
    dot.style.boxShadow = `0 0 8px ${dotColor}44`; // Adds a subtle glow to the dot
    
    const label = document.createElement('span');
    label.textContent = theme.name;
    
    item.appendChild(dot);
    item.appendChild(label);

    item.addEventListener('click', () => applyTheme(key));

    // Right click: Save/Export theme
    item.addEventListener('contextmenu', (e) => {
      exportTheme(key); // Trigger the download
    });

    item.addEventListener('dblclick', () => {
      if (theme.custom) {
        if (confirm(`${t('deleteTheme')} "${theme.name}"?`)) {
          if (state.currentTheme === key) applyTheme('titanium', true);
          delete THEMES[key];
          saveCustomThemes();
          renderThemeList();
        }
      }
    });

    return item;
  }

  builtInKeys.forEach(k => themeList.appendChild(makeThemeItem(k)));

  if (customKeys.length > 0) {
    const sep = document.createElement('div');
    sep.className = 'lang-group-header';
    sep.textContent = t('customThemes') || 'Custom Themes';
    themeList.appendChild(sep);
    customKeys.forEach(k => themeList.appendChild(makeThemeItem(k)));
  }

  // Import button
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
    <div class="theme-name">${t('importTheme')}</div>
  `;
  importBtn.addEventListener('click', () => themeImportInput.click());
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

function deleteTheme(key) {
  const themeName = THEMES[key].name;
  
  // Confirmation dialog
  if (!confirm(`${t('deleteTheme')} "${themeName}"?`)) return;

  // If the user is currently using this theme, switch to default first
  if (state.currentTheme === key) {
    applyTheme('titanium', false); 
  }

  // Remove from the global object
  delete THEMES[key];

  // Update Storage and UI
  saveCustomThemes();
  renderThemeList();
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
    // Close lang panel if open
    langPanel.classList.remove('open');
    langBtn.classList.remove('active');
    themePanel.classList.add('open');
    themeBtn.classList.add('active');
  }
}

/* ------- Language Panel System ------- */
const LANGUAGES = [
  { group: 'English' },
  { code: 'en-GB', label: 'English (UK)',          flag: '🇬🇧' },
  { code: 'en-US', label: 'English (US)',          flag: '🇺🇸' },
  { code: 'en-AU', label: 'English (Australia)',   flag: '🇦🇺' },
  { code: 'en-CA', label: 'English (Canada)',      flag: '🇨🇦' },

  { group: 'Français' },
  { code: 'fr-FR', label: 'Français (France)',     flag: '🇫🇷' },
  { code: 'fr-CA', label: 'Français (Canada)',     flag: '🇨🇦' },
  { code: 'fr-BE', label: 'Français (Belgique)',   flag: '🇧🇪' },
  { code: 'fr-CH', label: 'Français (Suisse)',     flag: '🇨🇭' },

  { group: 'Español' },
  { code: 'es-ES', label: 'Español (España)',      flag: '🇪🇸' },
  { code: 'es-MX', label: 'Español (México)',      flag: '🇲🇽' },
  { code: 'es-AR', label: 'Español (Argentina)',   flag: '🇦🇷' },
  { code: 'es-CO', label: 'Español (Colombia)',    flag: '🇨🇴' },

  { group: 'Português' },
  { code: 'pt-BR', label: 'Português (Brasil)',    flag: '🇧🇷' },
  { code: 'pt-PT', label: 'Português (Portugal)',  flag: '🇵🇹' },

  { group: '中文' },
  { code: 'zh-CN', label: '中文（简体）',             flag: '🇨🇳' },
  { code: 'zh-TW', label: '中文（繁體）',             flag: '🇹🇼' },
  { code: 'zh-HK', label: '中文（香港）',             flag: '🇭🇰' },

  { group: 'العربية' },
  { code: 'ar-SA', label: 'العربية (السعودية)',    flag: '🇸🇦' },
  { code: 'ar-EG', label: 'العربية (مصر)',         flag: '🇪🇬' },
  { code: 'ar-MA', label: 'العربية (المغرب)',      flag: '🇲🇦' },

  { group: 'Deutsch' },
  { code: 'de-DE', label: 'Deutsch (Deutschland)', flag: '🇩🇪' },
  { code: 'de-AT', label: 'Deutsch (Österreich)',  flag: '🇦🇹' },
  { code: 'de-CH', label: 'Deutsch (Schweiz)',     flag: '🇨🇭' },

  { group: 'その他 / 기타 / Другие' },
  { code: 'ja',    label: '日本語',                 flag: '🇯🇵' },
  { code: 'ko',    label: '한국어',                 flag: '🇰🇷' },
  { code: 'ru',    label: 'Русский',               flag: '🇷🇺' },
];

// Restore custom languages now that LANGUAGES array exists
restoreCustomLanguages();

const langBtn   = document.getElementById('langBtn');
const langPanel = document.getElementById('langPanel');
const langList  = document.getElementById('langList');

let currentLang = _activeLang; // starts from saved/auto-detected lang

function renderLangList() {
  langList.innerHTML = '';
  const languageNames = t('languageNames') || {};

  // 1. Separate built-in and custom for header logic
  const builtInLangs = LANGUAGES.filter(l => !l.custom && !l.group);
  const customLangs = LANGUAGES.filter(l => l.custom);

  // 2. Helper function to create language items (prevents code repetition)
  const createItem = (entry) => {
    const { code, label, flag, custom } = entry;
    const item = document.createElement('div');
    item.className = 'theme-item' + (currentLang === code ? ' active' : '');
    item.dataset.code = code;
    item.dataset.custom = custom ? 'true' : 'false';

    const flagEl = document.createElement('div');
    flagEl.className = 'lang-flag';
    flagEl.textContent = flag;

    const nameEl = document.createElement('div');
    nameEl.className = 'theme-name';
    nameEl.textContent = languageNames[code] || label;

    item.appendChild(flagEl);
    item.appendChild(nameEl);

    // Click handling (Single for select / Double for delete)
    let clickTimer = null;
    item.addEventListener('click', (e) => {
      if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
        if (item.dataset.custom === 'true') {
          if (confirm(`${t('deleteLanguage') || 'Delete language'} "${label}"?`)) {
            const wasActive = currentLang === code;
            const idx = LANGUAGES.findIndex(l => l.code === code);
            if (idx !== -1) LANGUAGES.splice(idx, 1);
            
            delete I18N[code];
            saveCustomLanguages();
            renderLangList();
            
            if (wasActive) {
              const detected = detectLanguage();
              switchLanguage(detected, true);
            }
          }
        }
      } else {
        clickTimer = setTimeout(() => {
          switchLanguage(code, true);
          clickTimer = null;
        }, 250);
      }
    });

    // Right-click: export
    item.addEventListener('contextmenu', (e) => {
      exportLanguage(code);
    });

    return item;
  };

  // 3. Render Built-in Languages
  builtInLangs.forEach(lang => langList.appendChild(createItem(lang)));

  // 4. DYNAMIC CUSTOM HEADER: Inject only if custom languages exist
  if (customLangs.length > 0) {
    const header = document.createElement('div');
    header.className = 'lang-group-header';
    header.textContent = t('customLanguages') || 'Custom Languages';
    header.style.marginTop = '10px';
    langList.appendChild(header);

    customLangs.forEach(lang => langList.appendChild(createItem(lang)));
  }

  // 5. Import Language button
  const importBtn = document.createElement('div');
  importBtn.className = 'theme-item import-theme';
  importBtn.style.marginTop = '10px';
  importBtn.innerHTML = `
    <div class="lang-flag" style="display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border: 2px dashed rgba(255,255,255,0.2); border-radius: 50%; width: 24px; height: 24px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
      </svg>
    </div>
    <div class="theme-name" style="margin-left: 12px;">${t('importLanguage')}</div>
  `;
  importBtn.onclick = () => langImportInput.click();
  langList.appendChild(importBtn);
}

function switchLanguage(code, silent = false) {
  if (code === currentLang && !silent) return;

  currentLang = code;
  _activeLang = code;

  // RTL toggle — covers all Arabic regional variants
  document.documentElement.setAttribute('dir', code.startsWith('ar') ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', code);

  // Re-apply all DOM translations
  applyI18nToDOM();

  // Restore title/artist since applyI18nToDOM no longer touches these elements.
  // When no track is loaded show placeholder; otherwise restore the actual track info.
  if (state.currentIndex === -1) {
    titleEl.textContent  = t('noTrackLoaded');
    artistEl.textContent = t('dragDrop');
    albumEl.textContent  = '';
  } else {
    const track = state.playlist[state.currentIndex];
    if (track) {
      titleEl.textContent  = track.title || (track.src ? track.src.split('/').pop() : 'Untitled');
      artistEl.textContent = track.artist || '';
      albumEl.textContent  = track.album || '';
    }
  }

  // Re-translate live status display using the stored key
  if (state.statusKey) {
    statusDisplay.textContent = t(state.statusKey);
  }

  // Update shuffle/repeat button titles
  shuffleBtn.title = state.shuffle ? t('shuffleOn') : t('shuffleOff');
  const repeatTitles = [t('repeatOff'), t('repeatAll'), t('repeatOne')];
  repeatBtn.title = repeatTitles[state.repeatMode];

  // Update theme panel header
  document.querySelector('.theme-panel-header h3').textContent = t('themes');

  // Update lang panel header
  document.getElementById('langPanelTitle').textContent = getLangPanelTitle(code);

  // Persist choice
  localStorage.setItem('selectedLang', code);

  // Re-render both lists so translated names appear immediately
  renderThemeList();
  renderLangList();

  // Removed auto-toggle; panel stays open on selection
  if (!silent) {
    // Optional: You can add a notification or visual feedback here if needed
  }
}

function getLangPanelTitle(code) {
  const base = code.split('-')[0];
  const titles = {
    en: 'Language', 'en-GB': 'Language', 'en-US': 'Language', 'en-AU': 'Language', 'en-CA': 'Language',
    fr: 'Langue',   'fr-FR': 'Langue',   'fr-CA': 'Langue',   'fr-BE': 'Langue',   'fr-CH': 'Langue',
    es: 'Idioma',   'es-ES': 'Idioma',   'es-MX': 'Idioma',   'es-AR': 'Idioma',   'es-CO': 'Idioma',
    pt: 'Idioma',   'pt-BR': 'Idioma',   'pt-PT': 'Idioma',
    zh: '语言',      'zh-CN': '语言',      'zh-TW': '語言',      'zh-HK': '語言',
    ar: 'اللغة',    'ar-SA': 'اللغة',    'ar-EG': 'اللغة',    'ar-MA': 'اللغة',
    de: 'Sprache',  'de-DE': 'Sprache',  'de-AT': 'Sprache',  'de-CH': 'Sprache',
    ja: '言語', ko: '언어', ru: 'Язык',
  };
  return titles[code] || titles[base] || 'Language';
}

function toggleLangPanel() {
  const isOpen = langPanel.classList.contains('open');
  if (isOpen) {
    langPanel.classList.remove('open');
    langBtn.classList.remove('active');
  } else {
    // Close theme panel if open
    themePanel.classList.remove('open');
    themeBtn.classList.remove('active');
    langPanel.classList.add('open');
    langBtn.classList.add('active');
  }
}

langBtn.addEventListener('click', toggleLangPanel);

// Close lang panel when clicking outside (unchanged)
document.addEventListener('click', (e) => {
  if (!langPanel.contains(e.target) && !langBtn.contains(e.target)) {
    if (langPanel.classList.contains('open')) {
      langPanel.classList.remove('open');
      langBtn.classList.remove('active');
    }
  }
});

function updateProgress() {
  if (!state.audio.paused) {
    const cur = state.audio.currentTime;
    const dur = state.audio.duration;
    
    if (dur) {
      // Use 1000 to match the new HTML max value for higher precision
      seekRange.value = (cur / dur) * 100;
      timeDisplay.textContent = `${fmtTime(cur)} / ${fmtTime(dur)}`;
    }
    
    // Continue the loop
    progressAnimationId = requestAnimationFrame(updateProgress);
  }
}

// Save custom languages & translations to localStorage
function saveCustomLanguages() {
  const customLangs = LANGUAGES.filter(lang => lang.custom === true);
  
  if (customLangs.length === 0) {
    localStorage.removeItem('customMusicPlayerLanguages');
    localStorage.removeItem('customMusicPlayerI18N');
    console.log('No custom languages → cleared storage');
    return;
  }

  const customData = customLangs.map(lang => ({
    code: lang.code,
    label: lang.label || lang.code.toUpperCase(),
    flag: lang.flag || '🌐',
    translations: I18N[lang.code] || {}
  }));

  try {
    localStorage.setItem('customMusicPlayerLanguages', JSON.stringify(customData));
    localStorage.setItem('customMusicPlayerI18N', JSON.stringify(I18N)); // full I18N backup as fallback
    console.log(`Saved ${customLangs.length} custom language(s)`);
  } catch (err) {
    console.error('Failed to save custom languages:', err);
  }
}

// Restore custom languages on page load
function restoreCustomLanguages() {
  const saved = localStorage.getItem('customMusicPlayerLanguages');
  if (!saved) return;

  try {
    const customData = JSON.parse(saved);
    if (customData.length > 0) {
      // 1. Add the Header first
      if (!LANGUAGES.find(l => l.group === 'Custom Languages')) {
        LANGUAGES.push({ group: 'Custom Languages' });
      }
      
      // 2. Add the custom languages
      customData.forEach(item => {
        if (!LANGUAGES.find(l => l.code === item.code)) {
          LANGUAGES.push({
            code: item.code,
            label: item.label,
            flag: item.flag,
            custom: true
          });
          // Restore translations to the main I18N object
          if (item.translations) {
            I18N[item.code] = item.translations;
          } else if (item.strings) {
            I18N[item.code] = item.strings; // legacy fallback
          }
        }
      });
    }
  } catch (e) {
    console.error("Error restoring languages", e);
  }
}

function saveCustomThemes() {
  const customThemes = {};
  // Only save themes marked as custom
  Object.keys(THEMES).forEach(key => {
    if (THEMES[key].custom) {
      customThemes[key] = THEMES[key];
    }
  });
  localStorage.setItem('customMusicPlayerThemes', JSON.stringify(customThemes));
}

function restoreCustomThemes() {
  const saved = localStorage.getItem('customMusicPlayerThemes');
  if (!saved) return;

  try {
    const customThemes = JSON.parse(saved);
    // Merge the saved custom themes back into the main THEMES object
    Object.assign(THEMES, customThemes);
  } catch (e) {
    console.error("Error restoring custom themes:", e);
  }
}

// Theme button event listener
themeBtn.addEventListener('click', toggleThemePanel);

// Theme import input handler
themeImportInput.addEventListener('change', async (e) => {
  const files = Array.from(e.target.files || []);
  for (const file of files) {
    await importTheme(file);
  }
  // Save and re-render once after ALL themes are imported
  saveCustomThemes();
  renderThemeList();
  themeImportInput.value = '';
});

// Lang import input handler
langImportInput.addEventListener('change', async (e) => {
  const files = Array.from(e.target.files || []);
  for (const file of files) {
    await importLanguageFile(file);
  }
  langImportInput.value = '';
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
  // 1. Restore data from LocalStorage first
  restoreCustomThemes();
  restoreCustomLanguages();

  // 2. Then load settings and render
  const savedTheme = localStorage.getItem('selectedTheme') || state.currentTheme;
  applyTheme(savedTheme, false);

  // 3. Restore saved language (silent=true to avoid redundant re-renders)
  const savedLang = localStorage.getItem('selectedLang');
  if (savedLang) {
    switchLanguage(savedLang, true);
  }

  renderThemeList();
  renderLangList();
});

state.audio.addEventListener('play', () => {
  progressAnimationId = requestAnimationFrame(updateProgress);
});

// Stop the loop when paused to save resources
state.audio.addEventListener('pause', () => {
  cancelAnimationFrame(progressAnimationId);
});

function update() {
  startVisualiser()
  requestAnimationFrame(update);
}

requestAnimationFrame(update);

document.addEventListener("contextmenu", (e) => e.preventDefault());

// Custom languages are saved immediately on import/delete — no beforeunload needed.
// (A beforeunload save would re-write data back after a cache clear.)