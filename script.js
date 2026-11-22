/**
 * BANK SOAL LENGKAP UNTUK KELAS 2 SD
 * Mencakup:
 * 1. Animals (Nama Hewan)
 * 2. Colors (Warna Hewan)
 * 3. Fruits (Nama Buah)
 * 4. Vocab (Useful Vocabulary & Simple English)
 * Setiap soal memiliki 2 atau 3 pilihan jawaban teks dan terjemahan soal.
 */
const questionBank = [
    // --- KATEGORI 1: ANIMALS (NAMA HEWAN) ---
    {
        category: 'animals',
        categoryName: 'Cute Animals 🐾',
        visual: `<div class="text-7xl sm:text-8xl drop-shadow-md">🐘</div>`,
        questionEn: "What animal is this?",
        questionId: "(Hewan apakah ini?)",
        speechText: "What animal is this?",
        options: [
            { text: "Elephant", correct: true },
            { text: "Rabbit", correct: false },
            { text: "Monkey", correct: false }
        ],
        vocabTip: "💡 Useful Vocab: <b>Elephant</b> = Gajah. <i>An elephant is big!</i> (Gajah itu besar!)"
    },
    {
        category: 'animals',
        categoryName: 'Cute Animals 🐾',
        visual: `<div class="text-7xl sm:text-8xl drop-shadow-md">🐱</div>`,
        questionEn: "I say 'Meow'. Who am I?",
        questionId: "(Aku bersuara 'Meong'. Siapakah aku?)",
        speechText: "I say Meow. Who am I?",
        options: [
            { text: "Dog", correct: false },
            { text: "Cat", correct: true }
        ],
        vocabTip: "💡 Useful Vocab: <b>Cat</b> = Kucing. <i>I have a cute cat.</i> (Aku punya kucing lucu.)"
    },
    {
        category: 'animals',
        categoryName: 'Cute Animals 🐾',
        visual: `<div class="text-7xl sm:text-8xl drop-shadow-md">🦒</div>`,
        questionEn: "This animal has a long neck. It is a...",
        questionId: "(Hewan ini berleher panjang. Ini adalah...)",
        speechText: "This animal has a long neck. It is a...",
        options: [
            { text: "Tiger", correct: false },
            { text: "Giraffe", correct: true },
            { text: "Duck", correct: false }
        ],
        vocabTip: "💡 Useful Vocab: <b>Giraffe</b> = Jerapah. <b>Long neck</b> = Leher panjang."
    },
    {
        category: 'animals',
        categoryName: 'Cute Animals 🐾',
        visual: `<div class="text-7xl sm:text-8xl drop-shadow-md">🐟</div>`,
        questionEn: "It lives in the water. What is it?",
        questionId: "(Ia hidup di air. Apakah ini?)",
        speechText: "It lives in the water. What is it?",
        options: [
            { text: "Bird", correct: false },
            { text: "Fish", correct: true },
            { text: "Cow", correct: false }
        ],
        vocabTip: "💡 Useful Vocab: <b>Fish</b> = Ikan. <i>A fish can swim.</i> (Ikan bisa berenang.)"
    },

    // --- KATEGORI 2: ANIMAL COLORS (WARNA HEWAN) ---
    {
        category: 'colors',
        categoryName: 'Animal Colors 🎨',
        visual: `
            <svg class="w-28 h-28 drop-shadow-md" viewBox="0 0 100 100">
                <!-- Badan Bebek Kuning -->
                <circle cx="50" cy="62" r="26" fill="#FDE047" stroke="#EAB308" stroke-width="3"/>
                <circle cx="50" cy="34" r="18" fill="#FDE047" stroke="#EAB308" stroke-width="3"/>
                <!-- Mata -->
                <circle cx="44" cy="30" r="2.5" fill="#1E293B"/>
                <circle cx="56" cy="30" r="2.5" fill="#1E293B"/>
                <!-- Paruh Oranye -->
                <ellipse cx="50" cy="38" rx="8" ry="4" fill="#FB923C"/>
            </svg>
        `,
        questionEn: "What color is the duck?",
        questionId: "(Apa warna bebek ini?)",
        speechText: "What color is the duck?",
        options: [
            { text: "Yellow", correct: true },
            { text: "Blue", correct: false },
            { text: "Purple", correct: false }
        ],
        vocabTip: "💡 Simple English: <b>Yellow duck</b> = Bebek kuning. <i>The duck is yellow!</i>"
    },
    {
        category: 'colors',
        categoryName: 'Animal Colors 🎨',
        visual: `
            <svg class="w-28 h-28 drop-shadow-md" viewBox="0 0 100 100">
                <!-- Kodok Hijau Lucu -->
                <circle cx="34" cy="28" r="10" fill="#86EFAC" stroke="#22C55E" stroke-width="3"/>
                <circle cx="66" cy="28" r="10" fill="#86EFAC" stroke="#22C55E" stroke-width="3"/>
                <ellipse cx="50" cy="55" rx="32" ry="26" fill="#86EFAC" stroke="#22C55E" stroke-width="3"/>
                <circle cx="34" cy="28" r="4" fill="#1E293B"/>
                <circle cx="66" cy="28" r="4" fill="#1E293B"/>
                <path d="M 38 60 Q 50 70 62 60" stroke="#15803D" stroke-width="3" fill="none" stroke-linecap="round"/>
            </svg>
        `,
        questionEn: "The frog is...",
        questionId: "(Katak ini berwarna...)",
        speechText: "The frog is...",
        options: [
            { text: "Red", correct: false },
            { text: "Green", correct: true }
        ],
        vocabTip: "💡 Simple English: <b>Green frog</b> = Katak hijau. <i>A green frog can jump!</i>"
    },
    {
        category: 'colors',
        categoryName: 'Animal Colors 🎨',
        visual: `
            <svg class="w-28 h-28 drop-shadow-md" viewBox="0 0 100 100">
                <!-- Beruang Cokelat Pastel -->
                <circle cx="28" cy="30" r="11" fill="#D97706" stroke="#92400E" stroke-width="3"/>
                <circle cx="72" cy="30" r="11" fill="#D97706" stroke="#92400E" stroke-width="3"/>
                <circle cx="50" cy="54" r="28" fill="#D97706" stroke="#92400E" stroke-width="3"/>
                <ellipse cx="50" cy="60" rx="12" ry="9" fill="#FDE68A"/>
                <circle cx="40" cy="46" r="3" fill="#1E293B"/>
                <circle cx="60" cy="46" r="3" fill="#1E293B"/>
                <circle cx="50" cy="57" r="3.5" fill="#451A03"/>
            </svg>
        `,
        questionEn: "What color is the bear?",
        questionId: "(Apa warna beruang ini?)",
        speechText: "What color is the bear?",
        options: [
            { text: "Pink", correct: false },
            { text: "Brown", correct: true },
            { text: "White", correct: false }
        ],
        vocabTip: "💡 Simple English: <b>Brown bear</b> = Beruang cokelat. <i>I see a brown bear.</i>"
    },
    {
        category: 'colors',
        categoryName: 'Animal Colors 🎨',
        visual: `
            <svg class="w-28 h-28 drop-shadow-md" viewBox="0 0 100 100">
                <!-- Kelinci Putih -->
                <ellipse cx="38" cy="26" rx="7" ry="18" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
                <ellipse cx="62" cy="26" rx="7" ry="18" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
                <circle cx="50" cy="58" r="25" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
                <circle cx="42" cy="52" r="2.5" fill="#1E293B"/>
                <circle cx="58" cy="52" r="2.5" fill="#1E293B"/>
                <circle cx="50" cy="60" r="3" fill="#F472B6"/>
            </svg>
        `,
        questionEn: "Look! It is a ____ rabbit.",
        questionId: "(Lihat! Itu adalah kelinci ____.)",
        speechText: "Look! It is a blank rabbit.",
        options: [
            { text: "White", correct: true },
            { text: "Black", correct: false }
        ],
        vocabTip: "💡 Simple English: <b>White rabbit</b> = Kelinci putih. <i>The rabbit eats carrots.</i>"
    },

    // --- KATEGORI 3: YUMMY FRUITS (NAMA BUAH) ---
    {
        category: 'fruits',
        categoryName: 'Yummy Fruits 🍎',
        visual: `<div class="text-7xl sm:text-8xl drop-shadow-md">🍌</div>`,
        questionEn: "Monkeys love this yellow fruit. What is it?",
        questionId: "(Monyet suka buah kuning ini. Apakah ini?)",
        speechText: "Monkeys love this yellow fruit. What is it?",
        options: [
            { text: "Apple", correct: false },
            { text: "Banana", correct: true },
            { text: "Grape", correct: false }
        ],
        vocabTip: "💡 Useful Vocab: <b>Banana</b> = Pisang. <i>I like sweet bananas!</i> (Aku suka pisang manis!)"
    },
    {
        category: 'fruits',
        categoryName: 'Yummy Fruits 🍎',
        visual: `<div class="text-7xl sm:text-8xl drop-shadow-md">🍉</div>`,
        questionEn: "It is big, green outside, and red inside!",
        questionId: "(Besar, hijau di luar, dan merah di dalam!)",
        speechText: "It is big, green outside, and red inside!",
        options: [
            { text: "Watermelon", correct: true },
            { text: "Orange", correct: false }
        ],
        vocabTip: "💡 Useful Vocab: <b>Watermelon</b> = Semangka. <i>Watermelon is very fresh!</i>"
    },
    {
        category: 'fruits',
        categoryName: 'Yummy Fruits 🍎',
        visual: `<div class="text-7xl sm:text-8xl drop-shadow-md">🍎</div>`,
        questionEn: "What fruit is this?",
        questionId: "(Buah apakah ini?)",
        speechText: "What fruit is this?",
        options: [
            { text: "Mango", correct: false },
            { text: "Strawberry", correct: false },
            { text: "Apple", correct: true }
        ],
        vocabTip: "💡 Simple English: <b>Red Apple</b> = Apel merah. <i>An apple a day!</i>"
    },
    {
        category: 'fruits',
        categoryName: 'Yummy Fruits 🍎',
        visual: `<div class="text-7xl sm:text-8xl drop-shadow-md">🍇</div>`,
        questionEn: "Small, round, and purple. They are...",
        questionId: "(Kecil, bulat, dan ungu. Mereka adalah...)",
        speechText: "Small, round, and purple. They are...",
        options: [
            { text: "Grapes", correct: true },
            { text: "Pineapple", correct: false }
        ],
        vocabTip: "💡 Useful Vocab: <b>Grapes</b> = Anggur. <i>These grapes are yummy!</i>"
    },

    // --- KATEGORI 4: SIMPLE ENGLISH & USEFUL VOCABULARY ---
    {
        category: 'vocab',
        categoryName: 'Simple English 💬',
        visual: `<div class="text-6xl sm:text-7xl drop-shadow-md">🧒❤️🍓</div>`,
        questionEn: "How do you say 'Aku suka stroberi' in English?",
        questionId: "(Bagaimana cara bilang 'Aku suka stroberi' dalam bahasa Inggris?)",
        speechText: "I like strawberries!",
        options: [
            { text: "I like strawberries", correct: true },
            { text: "I don't like apples", correct: false },
            { text: "I am a banana", correct: false }
        ],
        vocabTip: "💡 Useful Phrase: Gunakan <b>'I like...'</b> untuk menyatakan hal yang kamu sukai!"
    },
    {
        category: 'vocab',
        categoryName: 'Simple English 💬',
        visual: `<div class="text-6xl sm:text-7xl drop-shadow-md">🐘🐭</div>`,
        questionEn: "An elephant is BIG, but a mouse is...",
        questionId: "(Gajah itu BESAR, tapi tikus itu...)",
        speechText: "An elephant is big, but a mouse is...",
        options: [
            { text: "Tall", correct: false },
            { text: "Small", correct: true }
        ],
        vocabTip: "💡 Opposite Words: <b>Big</b> (Besar) lawan katanya adalah <b>Small</b> (Kecil)."
    },
    {
        category: 'vocab',
        categoryName: 'Simple English 💬',
        visual: `<div class="text-6xl sm:text-7xl drop-shadow-md">🍎🍎🍎</div>`,
        questionEn: "Count the apples! How many apples?",
        questionId: "(Hitung apelnya! Ada berapa apel?)",
        speechText: "Count the apples! How many apples?",
        options: [
            { text: "Two apples", correct: false },
            { text: "Three apples", correct: true },
            { text: "Five apples", correct: false }
        ],
        vocabTip: "💡 Counting: <b>One, Two, Three!</b> (Satu, Dua, Tiga!)"
    },
    {
        category: 'vocab',
        categoryName: 'Simple English 💬',
        visual: `<div class="text-6xl sm:text-7xl drop-shadow-md">🌞👋</div>`,
        questionEn: "When you wake up in the morning, you say...",
        questionId: "(Saat bangun di pagi hari, kamu mengucapkan...)",
        speechText: "Good morning!",
        options: [
            { text: "Good morning!", correct: true },
            { text: "Good night!", correct: false }
        ],
        vocabTip: "💡 Daily Greeting: <b>Good morning!</b> = Selamat pagi!"
    }
];

// --- VARIABEL STATUS PERMAINAN ---
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let currentCategory = 'all';
let canAnswer = true;
let isMuted = false;
let preferredVoice = null;

// --- INISIALISASI AUDIO (WEB AUDIO API & SPEECH SYNTHESIS) ---
let audioCtx = null;
let synth = null;

// Memuat daftar suara Text-to-Speech yang tersedia di HP/Laptop
function loadVoices() {
    if ('speechSynthesis' in window) {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            preferredVoice = voices.find(v => v.lang === 'en-US' && (v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Natural'))) 
                          || voices.find(v => v.lang.startsWith('en-US'))
                          || voices.find(v => v.lang.startsWith('en'));
        }
    }
}

if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

function initAudio() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) {
            audioCtx = new AudioContext();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        if (!synth && typeof Tone !== 'undefined') {
            Tone.start();
            synth = new Tone.PolySynth(Tone.Synth).toDestination();
            synth.volume.value = -6;
        }
        loadVoices();
    } catch (e) {
        console.log("Audio init:", e);
    }
}

// Fungsi bunyi nada sederhana menggunakan Web Audio API bawaan browser
function playFallbackBeep(frequencies, duration = 0.15) {
    if (isMuted) return;
    try {
        initAudio();
        if (!audioCtx) return;
        frequencies.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.12);
            gain.gain.setValueAtTime(0.2, audioCtx.currentTime + idx * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.12 + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + idx * 0.12);
            osc.stop(audioCtx.currentTime + idx * 0.12 + duration);
        });
    } catch (e) {}
}

function toggleSound() {
    isMuted = !isMuted;
    const btn = document.getElementById('sound-toggle-btn');
    btn.innerText = isMuted ? '🔇' : '🔊';
    if (isMuted && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    } else if (!isMuted) {
        initAudio();
        playFallbackBeep([523.25, 659.25], 0.15);
    }
}

function testAudioSystem() {
    isMuted = false;
    document.getElementById('sound-toggle-btn').innerText = '🔊';
    initAudio();
    playCorrectSound();
    speakEnglish("Hello friends! Let's learn English together!");
    const statusText = document.getElementById('audio-status-text');
    statusText.innerText = "Suara Aktif! 🎉 (Pastikan volume HP/laptop nyala)";
}

// Efek suara saat jawaban BENAR (nada naik ceria)
function playCorrectSound() {
    if (isMuted) return;
    playFallbackBeep([523.25, 659.25, 783.99], 0.2); // C5 - E5 - G5
}

// Efek suara saat jawaban SALAH (nada lembut)
function playWrongSound() {
    if (isMuted) return;
    playFallbackBeep([329.63, 261.63], 0.2); // E4 - C4
}

// Efek suara saat MENANG (fanfare)
function playWinSound() {
    if (isMuted) return;
    playFallbackBeep([523.25, 659.25, 783.99, 1046.50], 0.25); // C5 - E5 - G5 - C6
}

// Fungsi Text-to-Speech (Membacakan Bahasa Inggris dengan jelas)
function speakEnglish(text) {
    if (isMuted) return;
    if ('speechSynthesis' in window) {
        try {
            window.speechSynthesis.cancel();
            const cleanText = text.replace(/\.{2,}/g, ' ').replace(/_+/g, 'blank');
            const utterance = new SpeechSynthesisUtterance(cleanText);
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }
            utterance.lang = 'en-US';
            utterance.rate = 0.85;
            utterance.pitch = 1.1;
            utterance.volume = 1.0;
            window.speechSynthesis.speak(utterance);
        } catch (e) {
            console.log("Speech error:", e);
        }
    }
}

function speakCurrentQuestion() {
    initAudio();
    if (currentQuestions[currentIndex]) {
        speakEnglish(currentQuestions[currentIndex].speechText);
    }
}

// --- FUNGSI NAVIGASI & LOGIKA GAME ---

// Mengacak urutan array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Memulai kategori tertentu
function startCategory(category) {
    initAudio();
    currentCategory = category;
    score = 0;
    currentIndex = 0;
    updateScoreUI();

    if (category === 'all') {
        currentQuestions = shuffleArray(questionBank).slice(0, 6);
    } else {
        const filtered = questionBank.filter(q => q.category === category);
        currentQuestions = shuffleArray(filtered);
    }

    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('score-badge').classList.remove('hidden');
    document.getElementById('home-btn').classList.remove('hidden');

    loadQuestion();
}

function restartCurrentCategory() {
    startCategory(currentCategory);
}

function goHome() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    canAnswer = false;
    
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('feedback-box').classList.add('hidden');
    document.getElementById('score-badge').classList.add('hidden');
    document.getElementById('home-btn').classList.add('hidden');
    document.getElementById('menu-screen').classList.remove('hidden');
}

function updateScoreUI() {
    document.getElementById('score-text').innerText = score;
}

// Menampilkan soal saat ini ke layar
function loadQuestion() {
    canAnswer = true;
    const q = currentQuestions[currentIndex];
    
    // Update bar progres & label
    const progressPercent = ((currentIndex) / currentQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${Math.max(10, progressPercent)}%`;
    document.getElementById('category-label').innerText = q.categoryName;
    document.getElementById('question-counter').innerText = `Soal ${currentIndex + 1} / ${currentQuestions.length}`;

    // Isi visual, teks pertanyaan bahasa Inggris, dan terjemahan Indonesia
    document.getElementById('visual-container').innerHTML = q.visual;
    document.getElementById('question-en').innerText = q.questionEn;
    document.getElementById('question-id').innerText = q.questionId;

    // Sembunyikan kotak feedback
    const feedbackBox = document.getElementById('feedback-box');
    feedbackBox.classList.add('hidden');

    // Atur grid tombol (2 kolom jika pilihan ada 2, 3 kolom jika pilihan ada 3)
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    if (q.options.length === 2) {
        optionsContainer.className = "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-lg mx-auto";
    } else {
        optionsContainer.className = "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2";
    }

    // Warna pastel bergantian untuk tombol opsi
    const pastelClasses = ['bg-pastel-yellow', 'bg-pastel-pink', 'bg-pastel-blue'];

    // Acak urutan pilihan jawaban
    const shuffledOptions = shuffleArray(q.options);

    shuffledOptions.forEach((opt, idx) => {
        const btn = document.createElement('button');
        const colorClass = pastelClasses[idx % pastelClasses.length];
        
        btn.className = `btn-pastel ${colorClass} py-4 px-5 rounded-3xl font-bold text-lg sm:text-xl flex items-center justify-center text-center cursor-pointer hover:brightness-105 transition-all min-h-[68px]`;
        
        // Menampilkan teks saja tanpa gambar/ikon agar anak membaca dan berpikir
        btn.innerHTML = `<span>${opt.text}</span>`;
        
        btn.onclick = () => handleAnswer(opt, btn);
        optionsContainer.appendChild(btn);
    });

    // Bacakan pertanyaan otomatis setelah jeda singkat
    setTimeout(() => {
        speakEnglish(q.speechText);
    }, 300);
}

// Memeriksa jawaban yang dipilih anak
function handleAnswer(selectedOption, btnElement) {
    speakEnglish(selectedOption.text);

    if (!canAnswer) return;

    const q = currentQuestions[currentIndex];
    const feedbackBox = document.getElementById('feedback-box');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackVocab = document.getElementById('feedback-vocab');

    if (selectedOption.correct) {
        canAnswer = false;
        playCorrectSound();
        score += 10;
        updateScoreUI();
        spawnConfetti();

        btnElement.classList.remove('bg-pastel-yellow', 'bg-pastel-pink', 'bg-pastel-blue');
        btnElement.classList.add('bg-green-300', 'border-green-500', 'text-green-900', 'animate-pop');
        btnElement.innerHTML += ` <span>✅</span>`;

        feedbackBox.className = "rounded-3xl p-4 text-center border-3 bg-green-50 border-green-300 text-green-900 animate-pop";
        feedbackTitle.innerHTML = "🎉 Awesome! Jawabanmu Benar!";
        feedbackVocab.innerHTML = q.vocabTip;
        feedbackBox.classList.remove('hidden');

    } else {
        playWrongSound();
        btnElement.classList.add('animate-shake', 'opacity-60');
        setTimeout(() => {
            btnElement.classList.remove('animate-shake');
        }, 400);

        feedbackBox.className = "rounded-3xl p-4 text-center border-3 bg-orange-50 border-orange-200 text-orange-800";
        feedbackTitle.innerHTML = "🙈 Oops! Coba pilih yang lain ya!";
        feedbackVocab.innerHTML = "Dengarkan lagi pertanyaannya dengan menekan tombol 🔊";
        feedbackBox.classList.remove('hidden');
        document.getElementById('next-btn').classList.add('hidden');
        return;
    }

    document.getElementById('next-btn').classList.remove('hidden');
}

// Lanjut ke soal berikutnya atau layar hasil
function nextQuestion() {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Menampilkan layar kemenangan
function showResults() {
    playWinSound();
    spawnConfetti();
    document.getElementById('progress-bar').style.width = '100%';
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    speakEnglish("Great job! You are amazing!");
}

// Efek Konfeti Pastel Lucu saat Benar
function spawnConfetti() {
    const colors = ['#F472B6', '#60A5FA', '#34D399', '#FBBF24', '#A78BFA'];
    for (let i = 0; i < 25; i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.top = '-10px';
        document.body.appendChild(conf);

        const duration = Math.random() * 1500 + 1000;
        const xMove = (Math.random() - 0.5) * 200;

        conf.animate([
            { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
            { transform: `translate(${xMove}px, 100vh) rotate(720deg)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => conf.remove();
    }
}