/**
 * Notez - Moderní editor notového zápisu
 * S shadcn/ui designem a interaktivní editací
 */

// ============================================================================
// DATABÁZE PÍSNÍ
// ============================================================================

const SONG_DATABASE = {
    "twinkle": {
        title: "Twinkle Twinkle Little Star",
        key: "C",
        timeSignature: "4/4",
        tempo: 100,
        notes: [
            { keys: ["c/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "h" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["c/4"], duration: "h" }
        ]
    },
    "happy-birthday": {
        title: "Happy Birthday",
        key: "C",
        timeSignature: "3/4",
        tempo: 120,
        notes: [
            { keys: ["g/4"], duration: "8" },
            { keys: ["g/4"], duration: "8" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["c/5"], duration: "q" },
            { keys: ["b/4"], duration: "h" },
            { keys: ["g/4"], duration: "8" },
            { keys: ["g/4"], duration: "8" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["d/5"], duration: "q" },
            { keys: ["c/5"], duration: "h" }
        ]
    },
    "mary-lamb": {
        title: "Mary Had a Little Lamb",
        key: "C",
        timeSignature: "4/4",
        tempo: 120,
        notes: [
            { keys: ["e/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "h" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["d/4"], duration: "h" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["g/4"], duration: "h" }
        ]
    },
    "frere-jacques": {
        title: "Frère Jacques",
        key: "C",
        timeSignature: "4/4",
        tempo: 120,
        notes: [
            { keys: ["c/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["g/4"], duration: "h" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["g/4"], duration: "h" }
        ]
    },
    "old-macdonald": {
        title: "Old MacDonald Had a Farm",
        key: "C",
        timeSignature: "4/4",
        tempo: 130,
        notes: [
            { keys: ["c/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "h" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["c/4"], duration: "h" }
        ]
    },
    "jingle-bells": {
        title: "Jingle Bells",
        key: "C",
        timeSignature: "4/4",
        tempo: 140,
        notes: [
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "h" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "h" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["e/4"], duration: "w" }
        ]
    },
    "oh-susanna": {
        title: "Oh! Susanna",
        key: "C",
        timeSignature: "4/4",
        tempo: 130,
        notes: [
            { keys: ["c/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["a/4"], duration: "8" },
            { keys: ["g/4"], duration: "8" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["b/4"], duration: "q" },
            { keys: ["c/5"], duration: "h" },
            { keys: ["c/5"], duration: "q" },
            { keys: ["c/5"], duration: "q" },
            { keys: ["d/5"], duration: "q" },
            { keys: ["c/5"], duration: "q" },
            { keys: ["b/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "w" }
        ]
    },
    "when-saints": {
        title: "When the Saints Go Marching In",
        key: "C",
        timeSignature: "4/4",
        tempo: 120,
        notes: [
            { keys: ["c/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["g/4"], duration: "h" },
            { keys: ["e/4"], duration: "h" }
        ]
    },
    "amazing-grace": {
        title: "Amazing Grace",
        key: "C",
        timeSignature: "3/4",
        tempo: 80,
        notes: [
            { keys: ["c/4"], duration: "q" },
            { keys: ["f/4"], duration: "h" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "h" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["a/4"], duration: "h" },
            { keys: ["c/5"], duration: "q" },
            { keys: ["c/5"], duration: "h" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["f/4"], duration: "h" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["f/4"], duration: "h" }
        ]
    },
    "silent-night": {
        title: "Silent Night",
        key: "C",
        timeSignature: "3/4",
        tempo: 90,
        notes: [
            { keys: ["g/4"], duration: "q" },
            { keys: ["a/4"], duration: "8" },
            { keys: ["g/4"], duration: "8" },
            { keys: ["e/4"], duration: "h" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["a/4"], duration: "8" },
            { keys: ["g/4"], duration: "8" },
            { keys: ["e/4"], duration: "h" },
            { keys: ["d/5"], duration: "q" },
            { keys: ["d/5"], duration: "q" },
            { keys: ["b/4"], duration: "h" },
            { keys: ["c/5"], duration: "q" },
            { keys: ["c/5"], duration: "q" },
            { keys: ["g/4"], duration: "h" }
        ]
    },
    "yankee-doodle": {
        title: "Yankee Doodle",
        key: "C",
        timeSignature: "4/4",
        tempo: 140,
        notes: [
            { keys: ["c/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["d/4"], duration: "h" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["c/4"], duration: "h" }
        ]
    },
    "london-bridge": {
        title: "London Bridge Is Falling Down",
        key: "C",
        timeSignature: "4/4",
        tempo: 120,
        notes: [
            { keys: ["g/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["g/4"], duration: "h" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["f/4"], duration: "h" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["g/4"], duration: "h" }
        ]
    },
    "camptown-races": {
        title: "Camptown Races",
        key: "C",
        timeSignature: "4/4",
        tempo: 130,
        notes: [
            { keys: ["g/4"], duration: "8" },
            { keys: ["e/4"], duration: "8" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "8" },
            { keys: ["f/4"], duration: "8" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["d/4"], duration: "h" }
        ]
    },
    "fur-elise": {
        title: "Für Elise (začátek)",
        key: "C",
        timeSignature: "3/4",
        tempo: 100,
        notes: [
            { keys: ["e/5"], duration: "8" },
            { keys: ["d#/5"], duration: "8" },
            { keys: ["e/5"], duration: "8" },
            { keys: ["d#/5"], duration: "8" },
            { keys: ["e/5"], duration: "8" },
            { keys: ["b/4"], duration: "8" },
            { keys: ["d/5"], duration: "8" },
            { keys: ["c/5"], duration: "8" },
            { keys: ["a/4"], duration: "8" },
            { keys: ["c/4"], duration: "8" },
            { keys: ["e/4"], duration: "8" },
            { keys: ["a/4"], duration: "8" },
            { keys: ["b/4"], duration: "q" }
        ]
    },
    "ode-to-joy": {
        title: "Óda na radost",
        key: "C",
        timeSignature: "4/4",
        tempo: 100,
        notes: [
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "q", dots: true },
            { keys: ["d/4"], duration: "8" },
            { keys: ["d/4"], duration: "h" }
        ]
    },
    "greensleeves": {
        title: "Greensleeves",
        key: "C",
        timeSignature: "3/4",
        tempo: 90,
        notes: [
            { keys: ["a/4"], duration: "q" },
            { keys: ["c/5"], duration: "h" },
            { keys: ["d/5"], duration: "q" },
            { keys: ["e/5"], duration: "q", dots: true },
            { keys: ["f/5"], duration: "8" },
            { keys: ["e/5"], duration: "h" },
            { keys: ["d/5"], duration: "q" },
            { keys: ["c/5"], duration: "h" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "q", dots: true },
            { keys: ["g#/4"], duration: "8" },
            { keys: ["a/4"], duration: "h" }
        ]
    },
    "la-cucaracha": {
        title: "La Cucaracha",
        key: "C",
        timeSignature: "4/4",
        tempo: 130,
        notes: [
            { keys: ["c/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["a/4"], duration: "h" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["a/4"], duration: "h" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["c/4"], duration: "h" }
        ]
    },
    "aura-lee": {
        title: "Aura Lee (Love Me Tender)",
        key: "C",
        timeSignature: "4/4",
        tempo: 90,
        notes: [
            { keys: ["e/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["c/5"], duration: "h" },
            { keys: ["a/4"], duration: "h" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["d/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["g/4"], duration: "w" }
        ]
    },
    "home-sweet": {
        title: "Home Sweet Home",
        key: "C",
        timeSignature: "4/4",
        tempo: 80,
        notes: [
            { keys: ["e/4"], duration: "q" },
            { keys: ["e/4"], duration: "8" },
            { keys: ["e/4"], duration: "8" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["c/5"], duration: "q" },
            { keys: ["c/5"], duration: "q" },
            { keys: ["b/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["e/4"], duration: "q" },
            { keys: ["c/4"], duration: "h" }
        ]
    },
    "kumbaya": {
        title: "Kumbaya",
        key: "C",
        timeSignature: "4/4",
        tempo: 90,
        notes: [
            { keys: ["c/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["f/4"], duration: "h" },
            { keys: ["c/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["g/4"], duration: "q" },
            { keys: ["a/4"], duration: "h" }
        ]
    },
    "auld-lang": {
        title: "Auld Lang Syne",
        key: "C",
        timeSignature: "4/4",
        tempo: 90,
        notes: [
            { keys: ["c/4"], duration: "q" },
            { keys: ["f/4"], duration: "q", dots: true },
            { keys: ["f/4"], duration: "8" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["c/5"], duration: "h" },
            { keys: ["c/5"], duration: "q" },
            { keys: ["c/5"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["a/4"], duration: "q" },
            { keys: ["f/4"], duration: "q" },
            { keys: ["g/4"], duration: "h" }
        ]
    }
};

// ============================================================================
// STAV APLIKACE
// ============================================================================

const AppState = {
    userNotes: [],
    currentNotes: [],
    originalNotes: [],
    currentSong: null,
    transpose: 0,
    tempo: 120,
    isPlaying: false,
    synth: null,
    reverb: null,
    pianoInstrument: null,
    isUserCreated: false,
    abcVisualObj: null,
    abcTimingCallbacks: null,
    // Nastavení knihoven
    renderLibrary: 'abcjs',
    audioSynth: 'soundfont-piano'
};

// ============================================================================
// INICIALIZACE
// ============================================================================

document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    console.log('🎵 Inicializace Notez...');

    // Kontrola knihoven
    if (typeof Vex === 'undefined' || typeof Tone === 'undefined') {
        showError('Chyba načítání knihoven. Obnovte stránku.');
        return;
    }

    // Inicializovat synthesizer
    initializeSynth();

    // Načíst písně
    loadSongList();

    // Event listenery
    document.getElementById('songSelect').addEventListener('change', onSongSelect);
    document.getElementById('transposeBtn').addEventListener('click', applyTranspose);
    document.getElementById('addNoteBtn').addEventListener('click', addNote);
    document.getElementById('clearNotesBtn').addEventListener('click', clearNotes);
    document.getElementById('renderBtn').addEventListener('click', renderUserNotes);
    document.getElementById('playBtn').addEventListener('click', playMusic);
    document.getElementById('stopBtn').addEventListener('click', stopMusic);
    document.getElementById('tempoSlider').addEventListener('input', updateTempo);
    document.getElementById('loadSongBtn').addEventListener('click', loadSelectedSong);
    document.getElementById('applySettingsBtn').addEventListener('click', applySettings);

    // Tab switching
    initializeTabs();

    console.log('✅ Inicializace dokončena');
}

// ============================================================================
// TABS
// ============================================================================

function initializeTabs() {
    const tabTriggers = document.querySelectorAll('.tab-trigger');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const tabName = trigger.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // Deaktivovat všechny triggery a contenty
    document.querySelectorAll('.tab-trigger').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    // Aktivovat vybraný trigger a content
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

// ============================================================================
// NASTAVENÍ
// ============================================================================

async function initializeSynth() {
    // Dispose starého synthu pokud existuje
    if (AppState.synth) {
        AppState.synth.dispose();
    }
    if (AppState.reverb) {
        AppState.reverb.dispose();
    }

    console.log('🎹 Inicializuji syntezátor:', AppState.audioSynth);

    if (AppState.audioSynth === 'soundfont-piano') {
        // Inicializace piano soundfont
        if (typeof Soundfont !== 'undefined') {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            try {
                AppState.pianoInstrument = await Soundfont.instrument(audioContext, 'acoustic_grand_piano');
                console.log('✅ Piano soundfont načten');
            } catch (error) {
                console.error('❌ Chyba načítání piano soundfont:', error);
                // Fallback na PolySynth
                AppState.synth = new Tone.PolySynth(Tone.Synth).toDestination();
            }
        } else {
            console.warn('⚠️ Soundfont knihovna není načtena, používám PolySynth');
            AppState.synth = new Tone.PolySynth(Tone.Synth).toDestination();
        }
        return;
    }

    // Tone.js syntezátory
    switch (AppState.audioSynth) {
        case 'polysynth-reverb':
            AppState.synth = new Tone.PolySynth(Tone.Synth, {
                oscillator: { type: 'triangle8' },
                envelope: { attack: 0.005, decay: 0.3, sustain: 0.4, release: 1.2 }
            }).toDestination();
            AppState.reverb = new Tone.Reverb({
                decay: 1.5,
                preDelay: 0.01
            }).toDestination();
            AppState.synth.connect(AppState.reverb);
            break;

        case 'polysynth':
            AppState.synth = new Tone.PolySynth(Tone.Synth, {
                oscillator: { type: 'triangle' },
                envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 0.5 }
            }).toDestination();
            break;

        case 'synth':
            AppState.synth = new Tone.Synth({
                oscillator: { type: 'triangle' },
                envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 0.5 }
            }).toDestination();
            break;

        case 'membrane':
            AppState.synth = new Tone.MembraneSynth({
                pitchDecay: 0.05,
                octaves: 4,
                oscillator: { type: 'sine' },
                envelope: { attack: 0.001, decay: 0.4, sustain: 0.01, release: 1.4 }
            }).toDestination();
            break;

        case 'metal':
            AppState.synth = new Tone.MetalSynth({
                frequency: 200,
                envelope: { attack: 0.001, decay: 0.4, release: 0.2 },
                harmonicity: 5.1,
                modulationIndex: 32,
                resonance: 4000,
                octaves: 1.5
            }).toDestination();
            break;

        default:
            AppState.synth = new Tone.PolySynth(Tone.Synth).toDestination();
    }
}

function applySettings() {
    const renderLibrary = document.getElementById('renderLibrary').value;
    const audioSynth = document.getElementById('audioSynth').value;

    console.log('⚙️ Aplikuji nastavení:', { renderLibrary, audioSynth });

    // Uložit nastavení
    AppState.renderLibrary = renderLibrary;
    AppState.audioSynth = audioSynth;

    // Reinicializovat synthesizer
    initializeSynth();

    // Znovu vykreslit pokud jsou načteny noty
    if (AppState.currentNotes && AppState.currentNotes.length > 0) {
        renderNotation();
    }

    alert('✓ Nastavení bylo aplikováno. Vykreslování: ' + renderLibrary + ', Audio: ' + audioSynth);
}

// ============================================================================
// NAČÍTÁNÍ PÍSNÍ
// ============================================================================

function loadSongList() {
    const select = document.getElementById('songSelect');

    for (const [key, song] of Object.entries(SONG_DATABASE)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = song.title;
        select.appendChild(option);
    }
}

function loadSelectedSong() {
    const songKey = document.getElementById('songSelect').value;

    if (!songKey) {
        alert('Vyberte píseň ze seznamu');
        return;
    }

    const song = SONG_DATABASE[songKey];
    if (!song) return;

    console.log('📂 Načítám píseň:', song.title);

    AppState.currentSong = song;
    AppState.currentNotes = JSON.parse(JSON.stringify(song.notes));
    AppState.originalNotes = JSON.parse(JSON.stringify(song.notes));
    AppState.transpose = 0;
    AppState.tempo = song.tempo || 120;
    AppState.isUserCreated = false;

    document.getElementById('transposeSelect').value = '0';
    document.getElementById('tempoSlider').value = AppState.tempo;
    document.getElementById('tempoValue').textContent = AppState.tempo + ' BPM';

    // Synchronizovat s uživatelskými notami
    AppState.userNotes = JSON.parse(JSON.stringify(song.notes));
    updateNoteList();

    renderNotation();
}

function onSongSelect(e) {
    // Tato funkce je nyní prázdná - načítání se provádí přes tlačítko
}

// ============================================================================
// EDITOR NOT
// ============================================================================

function addNote() {
    const noteSelect = document.getElementById('noteSelect');
    const durationSelect = document.getElementById('durationSelect');

    const note = {
        keys: [noteSelect.value],
        duration: durationSelect.value
    };

    AppState.userNotes.push(note);
    updateNoteList();

    console.log('➕ Přidána nota:', note);
}

function removeNote(index) {
    AppState.userNotes.splice(index, 1);
    updateNoteList();
    console.log('➖ Odebrána nota na indexu:', index);
}

function clearNotes() {
    AppState.userNotes = [];
    updateNoteList();
    document.getElementById('notation').innerHTML = '<div class="loading">Žádné noty k zobrazení...</div>';
    console.log('🗑️ Všechny noty vymazány');
}

function updateNoteList() {
    const noteList = document.getElementById('noteList');
    const noteCount = document.getElementById('noteCount');

    noteList.innerHTML = '';
    noteCount.textContent = AppState.userNotes.length;

    AppState.userNotes.forEach((note, index) => {
        const item = document.createElement('div');
        item.className = 'note-item';

        const noteName = formatNoteName(note.keys[0]);
        const durationName = formatDurationName(note.duration);

        item.innerHTML = `
            <span>${index + 1}. ${noteName} (${durationName})</span>
            <button onclick="removeNote(${index})" title="Odstranit">×</button>
        `;

        noteList.appendChild(item);
    });
}

function formatNoteName(key) {
    const noteMap = {
        'c/4': 'C', 'd/4': 'D', 'e/4': 'E', 'f/4': 'F',
        'g/4': 'G', 'a/4': 'A', 'b/4': 'B',
        'c/5': 'C⁵', 'd/5': 'D⁵', 'e/5': 'E⁵'
    };
    return noteMap[key] || key;
}

function formatDurationName(duration) {
    const durationMap = {
        'w': '𝅝', 'h': '𝅗𝅥', 'q': '♩', '8': '♪', '16': '♬'
    };
    return durationMap[duration] || duration;
}

function renderUserNotes() {
    if (AppState.userNotes.length === 0) {
        alert('Nejprve přidejte nějaké noty');
        return;
    }

    AppState.isUserCreated = true;
    AppState.currentSong = {
        title: "Vlastní melodie",
        key: "C",
        timeSignature: "4/4",
        tempo: AppState.tempo
    };
    AppState.currentNotes = JSON.parse(JSON.stringify(AppState.userNotes));
    AppState.originalNotes = JSON.parse(JSON.stringify(AppState.userNotes));

    renderNotation();
    console.log('🎨 Vykresleny uživatelské noty');
}

// ============================================================================
// VYKRESLOVÁNÍ NOT
// ============================================================================

function renderNotation() {
    const container = document.getElementById('notation');
    container.innerHTML = '';

    if (!AppState.currentNotes || AppState.currentNotes.length === 0) {
        container.innerHTML = '<div class="loading">Žádné noty k zobrazení...</div>';
        return;
    }

    console.log('🎨 Vykresluji notový zápis pomocí:', AppState.renderLibrary);

    try {
        if (AppState.renderLibrary === 'vexflow') {
            renderWithVexFlow(container);
        } else if (AppState.renderLibrary === 'abcjs') {
            renderWithABCjs(container);
        }
    } catch (error) {
        showError('Chyba: ' + error.message);
        console.error('❌ Chyba vykreslování:', error);
    }
}

function renderWithVexFlow(container) {
    const VF = Vex.Flow;
    const measures = splitIntoMeasures(AppState.currentNotes, AppState.currentSong.timeSignature);

    const div = document.createElement('div');
    container.appendChild(div);

    const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    const width = Math.max(800, measures.length * 200);
    renderer.resize(width, 200);
    const context = renderer.getContext();

    let xPosition = 10;
    const staveWidth = (width - 20) / measures.length;

    measures.forEach((measureNotes, index) => {
        const stave = new VF.Stave(xPosition, 40, staveWidth);

        if (index === 0) {
            stave.addClef('treble');
            stave.addKeySignature(AppState.currentSong.key);
            stave.addTimeSignature(AppState.currentSong.timeSignature);
        }

        stave.setContext(context).draw();

        const notes = measureNotes.map(noteData => {
            let duration = noteData.duration;
            if (noteData.dots) duration += 'd';

            return new VF.StaveNote({
                keys: noteData.keys,
                duration: duration,
                clef: 'treble'
            });
        });

        const [beatsPerMeasure, beatValue] = AppState.currentSong.timeSignature.split('/').map(Number);
        const voice = new VF.Voice({ num_beats: beatsPerMeasure, beat_value: beatValue });

        voice.addTickables(notes);

        new VF.Formatter().joinVoices([voice]).format([voice], staveWidth - 10);
        voice.draw(context, stave);

        xPosition += staveWidth;
    });

    console.log('✅ VexFlow vykreslení úspěšné');
}

function renderWithABCjs(container) {
    if (typeof ABCJS === 'undefined') {
        showError('ABC.js knihovna není načtena');
        return;
    }

    // Konverze VexFlow formátu na ABC notaci
    const abcNotation = convertToABC(AppState.currentNotes, AppState.currentSong);

    const div = document.createElement('div');
    container.appendChild(div);

    // Vykreslení s podporou pro animaci/zvýraznění
    AppState.abcVisualObj = ABCJS.renderAbc(div, abcNotation, {
        responsive: 'resize',
        viewportHorizontal: true,
        staffwidth: 800,
        add_classes: true
    });

    // Připravit timing callbacks pro zvýraznění not
    if (AppState.abcVisualObj && AppState.abcVisualObj[0]) {
        AppState.abcTimingCallbacks = new ABCJS.TimingCallbacks(AppState.abcVisualObj[0], {
            eventCallback: function(event) {
                if (event && event.elements) {
                    // Zvýraznit právě hranou notu
                    event.elements.forEach(element => {
                        element.classList.add('abcjs-highlight');
                    });
                }
            },
            lineEndCallback: function(event) {
                if (event && event.elements) {
                    // Odebrat zvýraznění
                    event.elements.forEach(element => {
                        element.classList.remove('abcjs-highlight');
                    });
                }
            }
        });
    }

    console.log('✅ ABC.js vykreslení úspěšné');
}

function convertToABC(notes, song) {
    // Konverze VexFlow formátu na ABC notaci
    const durationMap = { 'w': '8', 'h': '4', 'q': '2', '8': '1', '16': '/2' };
    const noteMap = {
        'c/4': 'C', 'd/4': 'D', 'e/4': 'E', 'f/4': 'F', 'g/4': 'G', 'a/4': 'A', 'b/4': 'B',
        'c/5': 'c', 'd/5': 'd', 'e/5': 'e', 'f/5': 'f', 'g/5': 'g', 'a/5': 'a', 'b/5': 'b',
        'c#/4': '^C', 'd#/4': '^D', 'e#/4': '^E', 'f#/4': '^F', 'g#/4': '^G', 'a#/4': '^A', 'b#/4': '^B',
        'c#/5': '^c', 'd#/5': '^d', 'e#/5': '^e', 'f#/5': '^f', 'g#/5': '^g', 'a#/5': '^a', 'b#/5': '^b'
    };

    let abc = `X:1\nT:${song.title}\nM:${song.timeSignature}\nL:1/4\nQ:1/4=${song.tempo}\nK:${song.key}\n`;

    notes.forEach((note, index) => {
        const abcNote = noteMap[note.keys[0]] || 'C';
        const abcDuration = durationMap[note.duration] || '2';
        abc += abcNote + abcDuration;
        if ((index + 1) % 4 === 0) abc += ' | ';
        else abc += ' ';
    });

    abc += '|]';

    return abc;
}

function splitIntoMeasures(notes, timeSignature) {
    const [beatsPerMeasure, beatValue] = timeSignature.split('/').map(Number);
    const ticksPerMeasure = beatsPerMeasure * (4096 / beatValue);

    const durationToTicks = { 'w': 4096, 'h': 2048, 'q': 1024, '8': 512, '16': 256 };

    const measures = [];
    let currentMeasure = [];
    let currentTicks = 0;

    for (const note of notes) {
        let noteTicks = durationToTicks[note.duration] || 1024;
        if (note.dots) noteTicks = Math.floor(noteTicks * 1.5);

        currentMeasure.push(note);
        currentTicks += noteTicks;

        if (currentTicks >= ticksPerMeasure) {
            measures.push(currentMeasure);
            currentMeasure = [];
            currentTicks = 0;
        }
    }

    if (currentMeasure.length > 0) {
        while (currentTicks < ticksPerMeasure) {
            const remainingTicks = ticksPerMeasure - currentTicks;
            let pauseDuration = 'q', pauseTicks = 1024;

            if (remainingTicks >= 2048) { pauseDuration = 'h'; pauseTicks = 2048; }
            else if (remainingTicks >= 512) { pauseDuration = '8'; pauseTicks = 512; }

            currentMeasure.push({ keys: ['b/4'], duration: pauseDuration + 'r' });
            currentTicks += pauseTicks;
        }
        measures.push(currentMeasure);
    }

    return measures;
}

// ============================================================================
// TRANSPOZICE
// ============================================================================

function applyTranspose() {
    const semitones = parseInt(document.getElementById('transposeSelect').value);
    AppState.transpose = semitones;

    console.log('🔄 Transpozice:', semitones, 'půltónů');

    if (semitones === 0) {
        AppState.currentNotes = JSON.parse(JSON.stringify(AppState.originalNotes));
    } else {
        AppState.currentNotes = AppState.originalNotes.map(note => ({
            ...note,
            keys: note.keys.map(key => transposeNote(key, semitones))
        }));
    }

    renderNotation();
}

function transposeNote(note, semitones) {
    const match = note.match(/([a-g])([#bn]?)\/(\d)/);
    if (!match) return note;

    const [, noteName, accidental, octave] = match;
    const noteNames = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];

    let noteIndex = noteNames.indexOf(noteName.toLowerCase());
    if (accidental === '#') noteIndex += 1;
    if (accidental === 'b') noteIndex -= 1;

    let totalSemitones = noteIndex + semitones;
    let newOctave = parseInt(octave);

    while (totalSemitones >= 12) { totalSemitones -= 12; newOctave += 1; }
    while (totalSemitones < 0) { totalSemitones += 12; newOctave -= 1; }

    return noteNames[totalSemitones] + '/' + newOctave;
}

// ============================================================================
// PŘEHRÁVÁNÍ
// ============================================================================

async function playMusic() {
    if (AppState.isPlaying) {
        stopMusic();
        return;
    }

    if (!AppState.currentNotes || AppState.currentNotes.length === 0) {
        alert('Nejprve načtěte píseň nebo vytvořte noty');
        return;
    }

    console.log('▶ Spouštím přehrávání...');

    AppState.isPlaying = true;
    document.getElementById('playBtn').textContent = '⏸ Pauza';

    // Pokud používáme ABC.js s timing callbacks, použijeme ty
    if (AppState.renderLibrary === 'abcjs' && AppState.abcTimingCallbacks) {
        await playWithABCjs();
    } else if (AppState.audioSynth === 'soundfont-piano' && AppState.pianoInstrument) {
        await playWithPianoSoundfont();
    } else {
        await Tone.start();
        await playSequence();
    }
}

async function playWithABCjs() {
    // Přehrávání s ABC.js a zvýrazněním not
    if (AppState.abcTimingCallbacks) {
        const beatDuration = 60 / AppState.tempo;
        let currentNoteIndex = 0;

        const playNote = async () => {
            if (!AppState.isPlaying || currentNoteIndex >= AppState.currentNotes.length) {
                stopMusic();
                return;
            }

            const noteData = AppState.currentNotes[currentNoteIndex];
            const duration = getNoteDuration(noteData.duration, beatDuration, noteData.dots);

            // Zvýraznit notu
            const notationDiv = document.getElementById('notation');
            const noteElements = notationDiv.querySelectorAll('.abcjs-note');
            if (noteElements[currentNoteIndex]) {
                noteElements[currentNoteIndex].classList.add('abcjs-highlight');
                setTimeout(() => {
                    noteElements[currentNoteIndex].classList.remove('abcjs-highlight');
                }, duration * 1000);
            }

            // Přehrát zvuk
            if (AppState.audioSynth === 'soundfont-piano' && AppState.pianoInstrument) {
                const midiNote = convertToMIDI(noteData.keys[0]);
                AppState.pianoInstrument.play(midiNote, 0, { duration: duration });
            } else {
                await Tone.start();
                const toneNote = noteData.keys[0]
                    .replace('/', '')
                    .replace(/([a-g])([#b]?)(\d)/, (m, n, a, o) => n.toUpperCase() + (a || '') + o);
                AppState.synth.triggerAttackRelease(toneNote, duration);
            }

            currentNoteIndex++;
            setTimeout(playNote, duration * 1000);
        };

        playNote();
    }
}

async function playWithPianoSoundfont() {
    const beatDuration = 60 / AppState.tempo;
    let currentTime = 0;

    for (let i = 0; i < AppState.currentNotes.length; i++) {
        if (!AppState.isPlaying) break;

        const noteData = AppState.currentNotes[i];
        const duration = getNoteDuration(noteData.duration, beatDuration, noteData.dots);
        const midiNote = convertToMIDI(noteData.keys[0]);

        // Zvýraznit notu pokud je ABC.js
        if (AppState.renderLibrary === 'abcjs') {
            const notationDiv = document.getElementById('notation');
            const noteElements = notationDiv.querySelectorAll('.abcjs-note');
            if (noteElements[i]) {
                setTimeout(() => {
                    noteElements[i].classList.add('abcjs-highlight');
                }, currentTime * 1000);
                setTimeout(() => {
                    noteElements[i].classList.remove('abcjs-highlight');
                }, (currentTime + duration) * 1000);
            }
        }

        // Naplánovat přehrání noty
        setTimeout(() => {
            if (AppState.isPlaying && AppState.pianoInstrument) {
                AppState.pianoInstrument.play(midiNote, 0, { duration: duration });
            }
        }, currentTime * 1000);

        currentTime += duration;
    }

    // Zastavit po dokončení
    setTimeout(() => {
        if (AppState.isPlaying) stopMusic();
    }, currentTime * 1000);
}

async function playSequence() {
    const now = Tone.now();
    let time = now;
    const beatDuration = 60 / AppState.tempo;

    for (const noteData of AppState.currentNotes) {
        if (!AppState.isPlaying) break;

        const toneNote = noteData.keys[0]
            .replace('/', '')
            .replace(/([a-g])([#b]?)(\d)/, (m, n, a, o) => n.toUpperCase() + (a || '') + o);

        const duration = getNoteDuration(noteData.duration, beatDuration, noteData.dots);

        AppState.synth.triggerAttackRelease(toneNote, duration, time);
        time += duration;
    }

    const totalDuration = (time - now) * 1000;
    setTimeout(() => {
        if (AppState.isPlaying) stopMusic();
    }, totalDuration);
}

function convertToMIDI(vexNote) {
    // Konverze z VexFlow formátu (např. "c/4") na MIDI číslo
    const match = vexNote.match(/([a-g])([#b]?)\/(\d)/);
    if (!match) return 60; // Výchozí C4

    const [, noteName, accidental, octave] = match;
    const noteNames = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];

    let noteIndex = noteNames.indexOf(noteName.toLowerCase());
    if (accidental === '#') noteIndex += 1;
    if (accidental === 'b') noteIndex -= 1;

    const midiNote = (parseInt(octave) + 1) * 12 + noteIndex;
    return midiNote;
}

function getNoteDuration(vexDuration, beatDuration, dots) {
    const baseDurations = { 'w': beatDuration * 4, 'h': beatDuration * 2, 'q': beatDuration, '8': beatDuration / 2, '16': beatDuration / 4 };
    let duration = baseDurations[vexDuration] || beatDuration;
    if (dots) duration *= 1.5;
    return duration;
}

function stopMusic() {
    AppState.isPlaying = false;
    document.getElementById('playBtn').textContent = '▶ Přehrát';

    // Odebrat všechna zvýraznění
    const notationDiv = document.getElementById('notation');
    if (notationDiv) {
        const highlightedElements = notationDiv.querySelectorAll('.abcjs-highlight');
        highlightedElements.forEach(el => el.classList.remove('abcjs-highlight'));
    }

    console.log('⏹ Přehrávání zastaveno');
}

function updateTempo(e) {
    AppState.tempo = parseInt(e.target.value);
    document.getElementById('tempoValue').textContent = AppState.tempo + ' BPM';
}

// ============================================================================
// UTILITY
// ============================================================================

function showError(message) {
    const container = document.getElementById('notation');
    container.innerHTML = `<div class="loading" style="color: hsl(var(--destructive));">${message}</div>`;
}

// Globální funkce pro onclick handlery
window.removeNote = removeNote;
