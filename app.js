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
    isUserCreated: false
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
    AppState.synth = new Tone.Synth({
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 0.5 }
    }).toDestination();

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

    console.log('🎨 Vykresluji notový zápis...');

    try {
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

        console.log('✅ Vykreslení úspěšné');

    } catch (error) {
        showError('Chyba: ' + error.message);
        console.error('❌ Chyba vykreslování:', error);
    }
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

    await Tone.start();
    await playSequence();
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

function getNoteDuration(vexDuration, beatDuration, dots) {
    const baseDurations = { 'w': beatDuration * 4, 'h': beatDuration * 2, 'q': beatDuration, '8': beatDuration / 2, '16': beatDuration / 4 };
    let duration = baseDurations[vexDuration] || beatDuration;
    if (dots) duration *= 1.5;
    return duration;
}

function stopMusic() {
    AppState.isPlaying = false;
    document.getElementById('playBtn').textContent = '▶ Přehrát';
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
