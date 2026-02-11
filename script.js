const STORAGE_KEY = 'dana_valentine_progress_v1';

// Content customization
const COPY = {
  title: 'Dana',
  pageTitle: 'Dana Valentine',
  progressLabel: 'Progress',
  resetLabel: 'Reset',
  resetConfirm: 'Reset progress?',
  resetLabelAria: 'Reset progress',
  wrongJokes: [
    'I love that confidence girl! But thats just wrong L.O.L',
    'You may need to re-adjust your glasses...wait no, according to my system, you have contacts. You should get your eyes checked regardless!',
    'I wish. But no',
    'Nice Try, for a girl!',
    'Maybe the question was written incorrectly, since you cant be wrong!',
    'That wrong answer was giving \'main character\' vibes',
    'That button opened my fridge!'
  ],
  units: {
    seconds: 's'
  },
  nameAccept: ['dana', 'd', 'danaaa', 'princess'],
  secretCode: '0214',
  finalLetterLines: [
    'I made this little thing because I wanted you to smile.',
    'You’re my favorite person to annoy.',
    'Thank you for being you.',
    'Happy Valentine’s Day.',
    '— Omar'
  ],
  energyOptions: [
    { id: 'cozy', label: 'Cozy night', caption: 'Correct. Blanket-approved.' },
    { id: 'food', label: 'Food run', caption: 'Correct. We eat.' },
    { id: 'chaos', label: 'Chaos adventure', caption: 'Correct. You’re dangerous.' }
  ],
  levels: {
    warmup: {
      prompt: 'Slide to Begin the Game',
      helper: 'Slide to Begin the Game',
      thumb: '➜',
      voiceIntro: 'My name is DNA, I was created by Omar. Welcome, Dana, to your own personalized game! Slide to Begin the Game!',
      tryAgain: 'Huh thats strange... try again i know it works!',
      oneMore: 'One more time!',
      searching: 'Okay give me one moment, I think I know the problem.',
      foundMore: 'I found a couple more slides. Maybe you should give these a try.',
      parental: 'Oh I forgot, I left the parental lock on, silly me. Now try the first slider you did!',
      success: 'Lovely. On we go.'
    },
    door: {
      prompt: 'The first door to Omar\'s memory is sealed.',
      instruction: 'To get through the door, drag the key that represents your first solo date onto the door.',
      instructionHint: 'Tip: drag a key onto the door. On phone, you can also tap a key and then tap the door.',
      correct: 'Great! Click the door to open it!',
      renovation: 'What! I guess the developer had put some renovations, I have no idea what the answer is! I normally do...Dana, can you answer how did you get to the date?',
      promptTwo: 'How did you get to the date?',
      instructionTwo: 'Same rule. Drag the transport key onto this smaller door.',
      correctTwo: 'Great! Click the door to open it!'
    },
    tilt: {
      prompt: 'Fill the meter.',
      hold: 'HOLD',
      tryAgain: 'Try Again.',
      think: 'Maybe you need to think of a different way.',
      fixed: 'Nice. Now hold it steady.',
      success: 'There you go.'
    },
    nameGate: {
      prompt: 'Type your name.',
      placeholder: 'Your name',
      submit: 'Submit',
      wrong: ['That’s not you.', 'Try again.', 'Nice try, impostor.'],
      success: 'Verified.'
    },
    patience: {
      prompt: 'Do NOT click anything for 6 seconds.',
      button: 'CLICK ME',
      success: 'Okay you have self-control.',
      fail: 'Nope.'
    },
    stomach: {
      prompt: 'Memory vault: choose what to keep.',
      intro: 'Dana, sort these memories. Keep the 4 real ones and throw out the 4 fake ones.',
      subtext: 'Drag a memory to Keep or Fake. On mobile, tap memory then tap a zone.',
      keep: 'Keep',
      fake: 'Fake',
      selectHint: 'Now choose Keep or Fake.',
      wrongKeep: 'Nope. That memory is fake.',
      wrongFake: 'That one is real. Keep it.',
      rightKeep: 'Locked in. Real memory kept.',
      rightFake: 'Trash bin approved. Fake memory removed.',
      progress: 'Sorted',
      success: 'Memory vault complete. Going deeper.'
    },
    brainDoor: {
      prompt: 'Brain Door',
      intro: 'Level 5. Answer the questions to unlock the brain door.',
      subtext: 'Choose the correct answer.',
      scoreLabel: 'Correct',
      stepLabel: 'Question',
      skipLogic: 'Skip Logic',
      whoAsked: 'WHO....ASKEDDDDD',
      success: 'Brain door unlocked.'
    },
    trueFalse: {
      prompt: 'True or False',
      intro: 'Level 6. True or False. Get 9 right to unlock this door.',
      subtext: 'Choose True or False.',
      trueLabel: 'True',
      falseLabel: 'False',
      scoreLabel: 'Correct',
      finalTwistFirstHint: 'Nope. For this one, pick False first.',
      finalTwistLine: 'Yikes....J.K. I changed it. Let me change it back....okay now try',
      stepLabel: 'Question',
      success: 'Door unlocked. Moving on.'
    },
    hold: {
      prompt: 'Hold the button to charge the Love Meter.',
      button: 'HOLD',
      early: 'Commitment issues?',
      success: 'Charged.'
    },
    trick: {
      prompt: 'How many letters are in “my valentine”?',
      options: ['7', '8', '9', '10'],
      wrong: 'You’re thinking too hard.',
      hint: 'Maybe it’s not math.',
      success: 'Exactly.',
      mailbox: '📫',
      mailboxLabel: 'Mailbox'
    },
    yesNo: {
      prompt: 'Will you be my Valentine, Dana?',
      subtext: '(why are you like this)',
      yes: 'YES',
      no: 'NO',
      okFine: 'OK fine',
      captions: [
        'Are you sure?',
        'Dana…',
        'That’s not allowed.',
        'Misclick. Try again.',
        'Be serious.',
        'I’m literally begging.',
        'Okay wow.',
        'You’re enjoying this.',
        'I will remember this.',
        'Last chance.',
        'Fine. Easter egg?',
        'Easter egg unlocked.'
      ],
      modalTitle: 'Okay you earned the Easter egg',
      modalPrompt: 'Pick your date reward:',
      rewardButtons: ['Food', 'Movie', 'Surprise'],
      rewardAriaSuffix: 'reward',
      afterReward: 'Now click YES. Or OK fine.',
      success: 'Correct answer.'
    },
    code: {
      prompt: 'Enter the 4-digit code.',
      placeholder: '----',
      button: 'Unlock',
      hintButton: 'Show hint',
      hintReveal: 'Hint: 02/14',
      hints: ['Think February.', 'Two digits, two digits.'],
      nonDigits: 'Digits only.',
      success: 'Unlocked.'
    },
    ring: {
      prompt: 'Put the ring where it belongs.',
      success: 'Perfect.',
      fail: 'Wrong finger.',
      aria: 'Ring'
    },
    rhythm: {
      prompt: 'Prove you’re Dana: tap in this rhythm.',
      pattern: '♥ ♥ — ♥',
      button: 'TAP',
      fail: 'Again. Follow the hearts.',
      hint: 'two quick taps, then wait, then tap',
      success: 'Okay yeah that’s you.'
    },
    final: {
      prompt: 'Open your Valentine.',
      open: 'OPEN',
      replay: 'Replay',
      heading: 'Dana,',
      energyLabel: 'Energy',
      rewardLabel: 'Reward'
    }
  }
};

const NAME_ACCEPT = COPY.nameAccept;
const SECRET_CODE = COPY.secretCode;
const FINAL_LETTER_LINES = COPY.finalLetterLines;
const ENERGY_OPTIONS = COPY.energyOptions;
const LEVEL_BACKGROUNDS = [
  'radial-gradient(circle at 20% 10%, #ffe2ec 0%, #ffd8e7 36%, #f7d2ff 100%)',
  'linear-gradient(140deg, #efd8be 0%, #e6be94 45%, #d49372 100%)',
  'linear-gradient(140deg, #d5ecff 0%, #b7def8 48%, #9bcbe8 100%)',
  'linear-gradient(135deg, #1f253f 0%, #3a2f5f 45%, #6f4f7f 100%)',
  'linear-gradient(145deg, #fde9b2 0%, #f6c98b 50%, #ef9d7d 100%)',
  'linear-gradient(145deg, #d4f7ef 0%, #b4eadf 45%, #8cd6d3 100%)',
  'linear-gradient(145deg, #f7d8f1 0%, #e8bce3 45%, #cb9ad3 100%)',
  'linear-gradient(145deg, #ffd9d9 0%, #ffb6c5 45%, #f57c9a 100%)',
  'linear-gradient(145deg, #ffe9cc 0%, #ffd19d 48%, #f2ae7b 100%)',
  'linear-gradient(145deg, #dde8ff 0%, #bfd2ff 50%, #9aaef0 100%)',
  'linear-gradient(145deg, #f3ffe2 0%, #d9f4bc 50%, #b7dd8f 100%)',
  'radial-gradient(circle at 35% 12%, #fff7cf 0%, #ffd6e6 45%, #ffc0df 100%)',
  'linear-gradient(145deg, #e8d5f5 0%, #d4b8eb 45%, #b896d9 100%)'
];

const titleLine = document.getElementById('titleLine');
const promptEl = document.getElementById('prompt');
const subtextEl = document.getElementById('subtext');
const captionEl = document.getElementById('caption');
const interactionEl = document.getElementById('interaction');
const progressDotsEl = document.getElementById('progressDots');
const cardEl = document.getElementById('card');
const resetBtn = document.getElementById('resetBtn');
const easterModal = document.getElementById('easterModal');
const easterTitle = document.getElementById('easterTitle');
const easterPrompt = document.getElementById('easterPrompt');
const easterActions = document.getElementById('easterActions');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

titleLine.textContent = COPY.title;
document.title = COPY.pageTitle;
resetBtn.textContent = COPY.resetLabel;
resetBtn.setAttribute('aria-label', COPY.resetLabelAria);
progressDotsEl.setAttribute('aria-label', COPY.progressLabel);

const gameState = {
  currentLevelIndex: 0,
  completedLevels: new Set(),
  attempts: {},
  choices: {
    energy: null,
    reward: null
  },
  soundOn: true
};

let activeCleanup = null;
let audioContext = null;
let cachedVoices = [];
let hasAudioInteraction = false;
let pendingSpeech = null;
let lastNarrationText = '';
let activeSpeechText = null;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setPrompt(text) {
  promptEl.textContent = text;
}

function setSubtext(text) {
  if (text) {
    subtextEl.textContent = text;
    subtextEl.classList.remove('hidden');
  } else {
    subtextEl.textContent = '';
    subtextEl.classList.add('hidden');
  }
}

function setCaption(text) {
  captionEl.textContent = text || '';
}

function applyLevelTheme(levelIndex) {
  const theme = LEVEL_BACKGROUNDS[levelIndex] || LEVEL_BACKGROUNDS[0];
  document.body.style.background = theme;
}

function doSpeak(text, onStart, forceDefaultVoice = false) {
  if (!('speechSynthesis' in window)) return;
  const synth = window.speechSynthesis;
  try { synth.resume(); } catch (err) { /* ignore */ }

  const utter = new SpeechSynthesisUtterance(text);
  if (!forceDefaultVoice) {
    const selected = getNarratorVoice();
    if (selected) utter.voice = selected;
  }
  utter.rate = 0.81;
  utter.pitch = 0.95;
  utter.volume = 1;
  utter.lang = 'en-US';

  utter.onstart = () => {
    if (pendingSpeech && pendingSpeech.text === text) {
      pendingSpeech = null;
    }
    if (onStart) onStart();
  };
  utter.onend = () => {
    if (activeSpeechText === text) {
      activeSpeechText = null;
    }
  };
  utter.onerror = (e) => {
    if (activeSpeechText === text) {
      activeSpeechText = null;
    }
    if (e.error === 'canceled' || e.error === 'interrupted') return;
    if (!forceDefaultVoice) {
      setTimeout(() => doSpeak(text, onStart, true), 50);
      return;
    }
    if (onStart) onStart();
  };

  activeSpeechText = text;
  synth.speak(utter);
}

function unlockAudioFromInteraction(event) {
  if (!hasAudioInteraction) {
    hasAudioInteraction = true;
  }
  // Create AudioContext on first real user gesture so the browser allows playback
  const AC = window.AudioContext || window.webkitAudioContext;
  if (AC && !audioContext) {
    audioContext = new AC();
  }
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.resume();
    } catch (err) {
      // ignore resume failures
    }
  }
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
  if ('speechSynthesis' in window && pendingSpeech) {
    const queued = pendingSpeech;
    pendingSpeech = null;
    doSpeak(queued.text, queued.onStart, false);
  }
}

function dnaSpeak(text, onStart) {
  setCaption(text);
  lastNarrationText = text;
  if (!('speechSynthesis' in window)) return;
  // If no user gesture yet, queue for the first interaction
  if (!hasAudioInteraction) {
    pendingSpeech = { text, onStart: onStart || null };
    return;
  }
  // Avoid duplicate same-line narration requests colliding on first interaction
  if ((pendingSpeech && pendingSpeech.text === text) || activeSpeechText === text) {
    return;
  }
  // Queue naturally through speechSynthesis instead of cancel/speak races
  doSpeak(text, onStart, false);
}

function sayWrong() {
  const jokes = COPY.wrongJokes;
  const line = jokes[Math.floor(Math.random() * jokes.length)];
  dnaSpeak(line);
}

function setupEasterModal() {
  easterTitle.textContent = COPY.levels.yesNo.modalTitle;
  easterPrompt.textContent = COPY.levels.yesNo.modalPrompt;
  easterActions.innerHTML = '';
  COPY.levels.yesNo.rewardButtons.forEach(label => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = label;
    btn.dataset.reward = label;
    btn.setAttribute('aria-label', `${label} ${COPY.levels.yesNo.rewardAriaSuffix}`);
    easterActions.appendChild(btn);
  });
}

function recordAttempt(id) {
  if (!gameState.attempts[id]) {
    gameState.attempts[id] = 0;
  }
  gameState.attempts[id] += 1;
}

function playTone(frequency, duration = 0.08) {
  if (!gameState.soundOn) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.frequency.value = frequency;
  osc.type = 'sine';
  gain.gain.value = 0.18;
  osc.connect(gain);
  gain.connect(audioContext.destination);
  osc.start();
  osc.stop(audioContext.currentTime + duration);
}

function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  cachedVoices = window.speechSynthesis.getVoices();
}

function getNarratorVoice() {
  if (!cachedVoices.length) return null;
  // Some named voices (ex: "Grandma") can appear available but fail to output audio.
  // Prefer local/default en-US voices and avoid that problematic family.
  const safeUsDefault = cachedVoices.find(voice => /en-US/i.test(voice.lang) && voice.default && !/grandma/i.test(voice.name));
  if (safeUsDefault) return safeUsDefault;
  const safeUsLocal = cachedVoices.find(voice => /en-US/i.test(voice.lang) && voice.localService && !/grandma/i.test(voice.name));
  if (safeUsLocal) return safeUsLocal;
  const safeAnyUs = cachedVoices.find(voice => /en-US/i.test(voice.lang) && !/grandma/i.test(voice.name));
  if (safeAnyUs) return safeAnyUs;
  return null;
}

function playThud() {
  if (!gameState.soundOn) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  const now = audioContext.currentTime;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(180, now);
  osc.frequency.exponentialRampToValueAtTime(60, now + 0.12);
  gain.gain.setValueAtTime(0.35, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
  osc.connect(gain);
  gain.connect(audioContext.destination);
  osc.start();
  osc.stop(now + 0.13);
}

function playSearchChaos() {
  if (!gameState.soundOn) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  const now = audioContext.currentTime;
  const noise = audioContext.createBufferSource();
  const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.5, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  }
  noise.buffer = buffer;
  const noiseGain = audioContext.createGain();
  noiseGain.gain.value = 0.22;
  noise.connect(noiseGain);
  noiseGain.connect(audioContext.destination);
  noise.start(now);
  noise.stop(now + 0.5);

  const cat = audioContext.createOscillator();
  const catGain = audioContext.createGain();
  cat.type = 'sawtooth';
  cat.frequency.setValueAtTime(520, now + 0.15);
  cat.frequency.exponentialRampToValueAtTime(180, now + 0.35);
  catGain.gain.setValueAtTime(0.25, now + 0.15);
  catGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
  cat.connect(catGain);
  catGain.connect(audioContext.destination);
  cat.start(now + 0.15);
  cat.stop(now + 0.36);
}

function playSound(type) {
  if (type === 'click') playTone(440, 0.05);
  if (type === 'success') {
    playTone(660, 0.07);
    setTimeout(() => playTone(880, 0.08), 80);
  }
  if (type === 'error') playTone(220, 0.08);
  if (type === 'slam') playThud();
  if (type === 'search') playSearchChaos();
}

function saveProgress() {
  const payload = {
    currentLevelIndex: gameState.currentLevelIndex,
    completedLevels: Array.from(gameState.completedLevels),
    choices: gameState.choices,
    soundOn: gameState.soundOn,
    attempts: gameState.attempts
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    if (typeof data.currentLevelIndex === 'number') {
      gameState.currentLevelIndex = clamp(data.currentLevelIndex, 0, 12);
    }
    if (Array.isArray(data.completedLevels)) {
      gameState.completedLevels = new Set(data.completedLevels.filter(n => Number.isInteger(n)));
    }
    if (data.choices) {
      gameState.choices = {
        energy: data.choices.energy || null,
        reward: data.choices.reward || null
      };
    }
    if (typeof data.soundOn === 'boolean') {
      gameState.soundOn = data.soundOn;
    }
    if (data.attempts && typeof data.attempts === 'object') {
      gameState.attempts = data.attempts;
    }
  } catch (err) {
    // ignore corrupted storage
  }
}

function resetGame() {
  if (activeCleanup) {
    activeCleanup();
    activeCleanup = null;
  }
  localStorage.removeItem(STORAGE_KEY);
  gameState.currentLevelIndex = 0;
  gameState.completedLevels = new Set();
  gameState.attempts = {};
  gameState.choices = { energy: null, reward: null };
  renderLevel(0);
}

function updateVoiceEnabled() {
  if (!('speechSynthesis' in window)) {
    setCaption('Voice unavailable in this browser.');
  }
}

function updateProgressDots() {
  if (!progressDotsEl.children.length) {
    for (let i = 0; i < 13; i += 1) {
      const dot = document.createElement('span');
      dot.className = 'dot';
      progressDotsEl.appendChild(dot);
    }
  }
  Array.from(progressDotsEl.children).forEach((dot, index) => {
    dot.classList.toggle('current', index === gameState.currentLevelIndex);
    dot.classList.toggle('done', gameState.completedLevels.has(index));
  });
}

function celebrate() {
  const count = prefersReducedMotion ? 40 : 140;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '20';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const colors = ['#e63956', '#f06292', '#ffd1dc', '#ff8aa3'];
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.3,
    size: 6 + Math.random() * 6,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: -2 + Math.random() * 4,
    vy: 1 + Math.random() * 4,
    rotation: Math.random() * Math.PI,
    opacity: 1
  }));

  let start = null;
  function draw(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy + 0.6;
      p.rotation += 0.08;
      p.opacity = Math.max(0, 1 - elapsed / 2600);
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.2);
      ctx.restore();
    });
    if (elapsed < 2700) {
      requestAnimationFrame(draw);
    } else {
      canvas.remove();
    }
  }
  requestAnimationFrame(draw);
}

function nextLevel() {
  gameState.completedLevels.add(gameState.currentLevelIndex);
  if (gameState.currentLevelIndex < levels.length - 1) {
    gameState.currentLevelIndex += 1;
    renderLevel(gameState.currentLevelIndex);
  }
  saveProgress();
}

function renderLevel(index) {
  if (activeCleanup) {
    activeCleanup();
    activeCleanup = null;
  }
  const level = levels[index];
  if (!level) return;
  applyLevelTheme(index);
  setPrompt(level.prompt);
  setSubtext('');
  setCaption('');
  interactionEl.innerHTML = '';
  const cleanup = level.render(interactionEl, gameState);
  activeCleanup = typeof cleanup === 'function' ? cleanup : null;
  updateProgressDots();
  saveProgress();
}

const levels = [
  {
    id: 'warmup',
    title: 'Tap to Begin',
    prompt: COPY.levels.warmup.prompt,
    render(container) {
      const track = document.createElement('div');
      track.className = 'slider-track';
      const fill = document.createElement('div');
      fill.className = 'slider-fill';
      const helper = document.createElement('div');
      helper.className = 'slider-helper';
      helper.textContent = COPY.levels.warmup.helper;
      const thumb = document.createElement('div');
      thumb.className = 'slider-thumb';
      thumb.textContent = COPY.levels.warmup.thumb;
      thumb.setAttribute('role', 'button');
      thumb.setAttribute('tabindex', '0');
      thumb.setAttribute('aria-label', COPY.levels.warmup.prompt);

      track.appendChild(fill);
      track.appendChild(helper);
      track.appendChild(thumb);
      container.appendChild(track);

      const extraWrap = document.createElement('div');
      extraWrap.className = 'level-row';
      extraWrap.style.marginTop = '18px';
      extraWrap.style.gap = '12px';
      extraWrap.style.flexWrap = 'wrap';
      extraWrap.style.display = 'none';
      container.appendChild(extraWrap);

      let maxX = 0;
      let thumbWidth = 0;
      let trackWidth = 0;
      const padding = 6;
      let dragging = false;
      let attempts = 0;
      let unlocked = false;
      let locked = false;
      let showingExtras = false;
      let extrasTimeout = null;
      let resetTimer = null;
      let successTimer = null;
      let extraClickTimer = null;

      let introSpoken = false;
      const tryIntro = () => {
        if (introSpoken) return;
        dnaSpeak(COPY.levels.warmup.voiceIntro, () => {
          introSpoken = true;
        });
      };

      const onExtraClick = (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const trackTarget = target.closest('.slider-track');
        if (!trackTarget) return;
        playSound('error');
        trackTarget.classList.add('shake');
        sayWrong();
        if (extraClickTimer) clearTimeout(extraClickTimer);
        extraClickTimer = setTimeout(() => {
          trackTarget.classList.remove('shake');
        }, 320);
      };

      const refreshBounds = () => {
        const trackRect = track.getBoundingClientRect();
        const thumbRect = thumb.getBoundingClientRect();
        trackWidth = trackRect.width;
        thumbWidth = thumbRect.width;
        maxX = Math.max(0, trackWidth - thumbWidth - padding * 2);
      };

      const setPosition = (x) => {
        const clamped = clamp(x, 0, maxX);
        thumb.style.left = `${clamped + padding}px`;
        const fillWidth = ((clamped + thumbWidth / 2 + padding) / trackWidth) * 100;
        fill.style.width = `${fillWidth}%`;
        return maxX ? clamped / maxX : 0;
      };

      const resetSlider = () => {
        setPosition(0);
        locked = false;
      };

      const failAttempt = (message) => {
        locked = true;
        attempts += 1;
        const doReset = () => {
          playSound('slam');
          if (!prefersReducedMotion) {
            track.classList.remove('shake-violent');
            track.classList.add('slam');
          }
          dnaSpeak(message);
          resetTimer = setTimeout(() => {
            track.classList.remove('slam');
            resetSlider();
          }, 380);
        };

        if (!prefersReducedMotion) {
          track.classList.add('shake-violent');
          resetTimer = setTimeout(doReset, 260);
        } else {
          doReset();
        }
      };

      const succeed = () => {
        locked = true;
        playSound('success');
        dnaSpeak(COPY.levels.warmup.success);
        successTimer = setTimeout(() => nextLevel(), 700);
      };

      const onDown = (event) => {
        if (locked) return;
        if (showingExtras) return;
        tryIntro();
        dragging = true;
        track.setPointerCapture(event.pointerId);
        refreshBounds();
        const trackRect = track.getBoundingClientRect();
        const x = event.clientX - trackRect.left - thumbWidth / 2 - padding;
        setPosition(x);
      };

      const onMove = (event) => {
        if (!dragging || locked) return;
        if (showingExtras) return;
        const trackRect = track.getBoundingClientRect();
        const x = event.clientX - trackRect.left - thumbWidth / 2 - padding;
        const progress = setPosition(x);
        if (!unlocked && progress >= 0.5) {
          dragging = false;
          if (attempts === 0) {
            failAttempt(COPY.levels.warmup.tryAgain);
          } else if (attempts === 1) {
            failAttempt(COPY.levels.warmup.oneMore);
          } else if (attempts >= 2 && !showingExtras) {
            if (resetTimer) clearTimeout(resetTimer);
            if (extrasTimeout) clearTimeout(extrasTimeout);
            locked = true;
            if (!prefersReducedMotion) {
              track.classList.add('shake-violent');
            }
            resetTimer = setTimeout(() => {
              track.classList.remove('shake-violent');
              track.classList.add('slam');
              playSound('slam');
              resetTimer = setTimeout(() => {
                track.classList.remove('slam');
                dnaSpeak(COPY.levels.warmup.searching);
                playSound('search');
              }, 220);
            }, prefersReducedMotion ? 0 : 260);
            showingExtras = true;
            extraWrap.style.display = 'flex';
            extraWrap.innerHTML = '';
            for (let i = 0; i < 14; i += 1) {
              const fakeTrack = document.createElement('div');
              fakeTrack.className = 'slider-track';
              const isVertical = i % 3 === 0;
              if (isVertical) {
                fakeTrack.style.width = '54px';
                fakeTrack.style.height = '150px';
              } else {
                fakeTrack.style.width = `${160 + (i % 4) * 20}px`;
                fakeTrack.style.height = '42px';
              }
              fakeTrack.style.opacity = '0.9';
              const fakeFill = document.createElement('div');
              fakeFill.className = 'slider-fill';
              const fakeThumb = document.createElement('div');
              fakeThumb.className = 'slider-thumb';
              fakeThumb.textContent = COPY.levels.warmup.thumb;
              fakeThumb.style.width = '34px';
              fakeThumb.style.height = '34px';
              fakeThumb.style.top = '4px';
              fakeThumb.style.left = '4px';
              if (isVertical) {
                fakeTrack.style.display = 'grid';
                fakeTrack.style.placeItems = 'center';
                fakeThumb.style.top = 'auto';
                fakeThumb.style.left = 'auto';
              }
              fakeTrack.appendChild(fakeFill);
              fakeTrack.appendChild(fakeThumb);
              extraWrap.appendChild(fakeTrack);
            }
            resetTimer = setTimeout(() => {
              dnaSpeak(COPY.levels.warmup.foundMore);
            }, 700);
            extrasTimeout = setTimeout(() => {
              extraWrap.style.display = 'none';
              showingExtras = false;
              dnaSpeak(COPY.levels.warmup.parental);
              unlocked = true;
              resetSlider();
              locked = false;
            }, 15000);
          }
        }
        if (unlocked && progress >= 0.98) {
          dragging = false;
          succeed();
        }
      };

      const onUp = () => {
        if (!dragging) return;
        dragging = false;
        if (!unlocked) {
          setPosition(0);
        }
      };

      const onKey = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          if (showingExtras) return;
          if (unlocked) {
            setPosition(maxX);
            succeed();
          } else {
            if (attempts === 0) {
              failAttempt(COPY.levels.warmup.tryAgain);
            } else if (attempts === 1) {
              failAttempt(COPY.levels.warmup.oneMore);
            } else {
              failAttempt(COPY.levels.warmup.oneMore);
            }
          }
        }
      };

      track.addEventListener('pointerdown', onDown);
      track.addEventListener('pointermove', onMove);
      track.addEventListener('pointerup', onUp);
      track.addEventListener('pointercancel', onUp);
      thumb.addEventListener('keydown', onKey);
      extraWrap.addEventListener('click', onExtraClick);
      window.addEventListener('resize', refreshBounds);

      refreshBounds();
      resetSlider();
      tryIntro();

      return () => {
        track.removeEventListener('pointerdown', onDown);
        track.removeEventListener('pointermove', onMove);
        track.removeEventListener('pointerup', onUp);
        track.removeEventListener('pointercancel', onUp);
        thumb.removeEventListener('keydown', onKey);
        extraWrap.removeEventListener('click', onExtraClick);
        window.removeEventListener('resize', refreshBounds);
        if (resetTimer) clearTimeout(resetTimer);
        if (extrasTimeout) clearTimeout(extrasTimeout);
        if (extraClickTimer) clearTimeout(extraClickTimer);
        if (successTimer) clearTimeout(successTimer);
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      };
    }
  },
  {
    id: 'door-keys',
    title: 'Door Keys',
    prompt: COPY.levels.door.prompt,
    render(container) {
      setSubtext(COPY.levels.door.instructionHint);
      dnaSpeak(COPY.levels.door.instruction);

      const stageWrap = document.createElement('div');
      stageWrap.className = 'door-stage';

      const leftKeys = document.createElement('div');
      leftKeys.className = 'key-grid';

      const rightKeys = document.createElement('div');
      rightKeys.className = 'key-grid';

      const doorWrap = document.createElement('div');
      doorWrap.className = 'door-wrap';
      const doorFrame = document.createElement('div');
      doorFrame.className = 'door-frame';

      const doorGlow = document.createElement('div');
      doorGlow.className = 'door-glow';

      const door = document.createElement('button');
      door.className = 'door-btn';
      door.setAttribute('aria-label', 'Main door');
      const doorImg = document.createElement('img');
      doorImg.src = 'assets/door.png';
      doorImg.alt = '';
      doorImg.draggable = false;
      door.appendChild(doorImg);

      const innerDoor = document.createElement('button');
      innerDoor.className = 'door-btn small hidden';
      innerDoor.setAttribute('aria-label', 'Nested door');
      const innerDoorImg = document.createElement('img');
      innerDoorImg.src = 'assets/door.png';
      innerDoorImg.alt = '';
      innerDoorImg.draggable = false;
      innerDoor.appendChild(innerDoorImg);

      doorFrame.appendChild(doorGlow);
      doorFrame.appendChild(door);
      doorFrame.appendChild(innerDoor);
      doorWrap.appendChild(doorFrame);

      stageWrap.appendChild(leftKeys);
      stageWrap.appendChild(doorWrap);
      stageWrap.appendChild(rightKeys);
      container.appendChild(stageWrap);

      const stageOneKeys = [
        'Pink Themed Cafe',
        'Movie Theatre',
        'The beach',
        'My pool',
        'Italian restaurant',
        'Arcade',
        'Ice cream shop',
        'Mall',
        'Rooftop',
        'Bowling',
        'Park picnic',
        'Museum'
      ];
      const stageTwoKeys = [
        'Uber',
        'Walking',
        'Driving',
        'Bus',
        'Scooters',
        'Train',
        'Bike',
        'Carpool',
        'Boat',
        'Helicopter',
        'Horse',
        'Teleportation'
      ];

      const keyHues = [325, 355, 28, 54, 80, 115, 152, 188, 220, 255, 286, 311];

      let stage = 0;
      let doorUnlocked = false;
      let draggingKey = null;
      let dragClone = null;
      let justDragged = false;
      let selectedKey = null;
      let doorTransitionTimer = null;

      const keyButtons = [];

      const getCurrentKeys = () => (stage === 0 ? stageOneKeys : stageTwoKeys);
      const getCorrectKey = () => (stage === 0 ? 'Pink Themed Cafe' : 'Uber');
      const getActiveDoor = () => (stage === 0 ? door : innerDoor);
      const getSuccessLine = () => (stage === 0 ? COPY.levels.door.correct : COPY.levels.door.correctTwo);

      const cleanupDrag = () => {
        if (dragClone) dragClone.remove();
        if (draggingKey?.element) draggingKey.element.classList.remove('hidden');
        draggingKey = null;
        dragClone = null;
        window.removeEventListener('pointermove', onDragMove);
        window.removeEventListener('pointerup', onDragEnd);
        window.removeEventListener('pointercancel', onDragEnd);
      };

      const markSelectedKey = (label) => {
        selectedKey = label;
        keyButtons.forEach(button => {
          button.classList.toggle('selected', button.dataset.key === label);
        });
      };

      const clearSelectedKey = () => {
        selectedKey = null;
        keyButtons.forEach(button => button.classList.remove('selected'));
      };

      const handleKeyAttempt = (label) => {
        const activeDoor = getActiveDoor();
        if (label === getCorrectKey()) {
          doorUnlocked = true;
          activeDoor.classList.add('ready');
          doorFrame.classList.add('ready');
          playSound('success');
          dnaSpeak(getSuccessLine());
        } else {
          playSound('error');
          activeDoor.classList.add('reject');
          setTimeout(() => activeDoor.classList.remove('reject'), 220);
          sayWrong();
        }
      };

      const createKey = (label, colorIndex) => {
        const key = document.createElement('button');
        key.className = 'key-item';
        key.setAttribute('aria-label', label);
        key.dataset.key = label;
        key.dataset.hue = `${keyHues[colorIndex % keyHues.length]}`;
        key.innerHTML = `
          <span class="key-icon-wrap"><img class="key-icon" src="assets/key.png" alt="" /></span>
          <span class="key-label">${label}</span>
        `;
        key.style.setProperty('--key-hue', `${keyHues[colorIndex % keyHues.length]}deg`);

        const onPointerDown = (event) => {
          if (draggingKey) return;
          event.preventDefault();
          markSelectedKey(label);
          const rect = key.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          dragClone = key.cloneNode(true);
          dragClone.classList.add('dragging-key');
          dragClone.style.left = `${rect.left - containerRect.left}px`;
          dragClone.style.top = `${rect.top - containerRect.top}px`;
          container.appendChild(dragClone);
          key.classList.add('hidden');
          draggingKey = {
            element: key,
            label,
            offsetX: event.clientX - rect.left,
            offsetY: event.clientY - rect.top
          };
          window.addEventListener('pointermove', onDragMove);
          window.addEventListener('pointerup', onDragEnd);
          window.addEventListener('pointercancel', onDragEnd);
        };

        const onClick = () => {
          if (justDragged) return;
          markSelectedKey(label);
          setCaption(`Selected: ${label}. Now tap the door.`);
          playSound('click');
        };

        key.addEventListener('pointerdown', onPointerDown);
        key.addEventListener('click', onClick);

        return { key, onPointerDown, onClick };
      };

      const listeners = [];

      const renderKeys = () => {
        leftKeys.innerHTML = '';
        rightKeys.innerHTML = '';
        keyButtons.length = 0;
        clearSelectedKey();
        const keys = getCurrentKeys();
        keys.forEach((label, index) => {
          const built = createKey(label, index);
          keyButtons.push(built.key);
          if (index % 2 === 0) {
            leftKeys.appendChild(built.key);
          } else {
            rightKeys.appendChild(built.key);
          }
          listeners.push(() => {
            built.key.removeEventListener('pointerdown', built.onPointerDown);
            built.key.removeEventListener('click', built.onClick);
          });
        });
      };

      const onDragMove = (event) => {
        if (!draggingKey || !dragClone) return;
        const containerRect = container.getBoundingClientRect();
        dragClone.style.left = `${event.clientX - containerRect.left - draggingKey.offsetX}px`;
        dragClone.style.top = `${event.clientY - containerRect.top - draggingKey.offsetY}px`;
      };

      const onDragEnd = (event) => {
        if (!draggingKey) return;
        const doorRect = getActiveDoor().getBoundingClientRect();
        const inside = event.clientX >= doorRect.left && event.clientX <= doorRect.right && event.clientY >= doorRect.top && event.clientY <= doorRect.bottom;
        justDragged = true;
        setTimeout(() => {
          justDragged = false;
        }, 0);
        if (inside) {
          handleKeyAttempt(draggingKey.label);
        } else {
          setCaption('Key dropped outside the door. Try again.');
        }
        cleanupDrag();
      };

      const animateDoorOpen = (targetDoor, done) => {
        targetDoor.classList.remove('ready');
        targetDoor.classList.add('opening');
        if (prefersReducedMotion) {
          doorTransitionTimer = setTimeout(done, 120);
          return;
        }
        const onEnd = () => {
          targetDoor.removeEventListener('animationend', onEnd);
          done();
        };
        targetDoor.addEventListener('animationend', onEnd);
      };

      const moveToSecondStage = () => {
        stage = 1;
        doorUnlocked = false;
        door.classList.add('hidden');
        door.classList.remove('opening');
        innerDoor.classList.remove('hidden');
        innerDoor.classList.remove('ready');
        doorFrame.classList.remove('ready');
        setPrompt(COPY.levels.door.promptTwo);
        setSubtext(COPY.levels.door.instructionTwo);
        dnaSpeak(COPY.levels.door.renovation);
        renderKeys();
      };

      const finishLevel = () => {
        innerDoor.classList.remove('opening');
        nextLevel();
      };

      const onDoorClick = () => {
        if (!doorUnlocked) {
          if (selectedKey) {
            handleKeyAttempt(selectedKey);
            return;
          }
          dnaSpeak('Pick a key first, then drag it onto the door.');
          return;
        }

        if (stage === 0) {
          doorUnlocked = false;
          animateDoorOpen(door, moveToSecondStage);
        } else {
          doorUnlocked = false;
          animateDoorOpen(innerDoor, finishLevel);
        }
      };

      door.addEventListener('click', onDoorClick);
      innerDoor.addEventListener('click', onDoorClick);
      renderKeys();

      return () => {
        cleanupDrag();
        listeners.forEach(remove => remove());
        if (doorTransitionTimer) clearTimeout(doorTransitionTimer);
        door.removeEventListener('click', onDoorClick);
        innerDoor.removeEventListener('click', onDoorClick);
      };
    }
  },
  {
    id: 'tilt-meter',
    title: 'Tilted Meter',
    prompt: COPY.levels.tilt.prompt,
    render(container) {
      setSubtext('Hold to fill. If it tilts, drag the bar back upright and hold again.');
      dnaSpeak('Level three. Hold the button to fill the meter. If the meter tilts, drag it back to center, then keep holding.');

      const meterPanel = document.createElement('div');
      meterPanel.className = 'tilt-meter-panel';

      const meterShell = document.createElement('div');
      meterShell.className = 'meter-shell tilt-shell';

      const meter = document.createElement('div');
      meter.className = 'tilt-meter';

      const fill = document.createElement('div');
      fill.className = 'tilt-meter-fill';

      const value = document.createElement('div');
      value.className = 'tilt-meter-value';
      value.textContent = '0%';

      meter.appendChild(fill);
      meterShell.appendChild(meter);
      meterPanel.appendChild(meterShell);
      meterPanel.appendChild(value);

      const holdBtn = document.createElement('button');
      holdBtn.className = 'btn primary';
      holdBtn.textContent = COPY.levels.tilt.hold;
      holdBtn.setAttribute('aria-label', COPY.levels.tilt.hold);

      container.appendChild(meterPanel);
      container.appendChild(holdBtn);

      let progress = 0;
      let mode = 'idle';
      let rafId = null;
      let lastTime = null;
      let attempts = 0;
      let angle = 0;
      let allowRotate = false;
      let angleLocked = false;
      let dragging = false;
      let activeRotatePointerId = null;
      let startX = 0;
      let startAngle = 0;
      let thinkTimer = null;

      const setAngle = (deg) => {
        angle = deg;
        meterShell.style.transform = `rotate(${deg}deg)`;
      };

      const updateMeter = () => {
        fill.style.width = `${progress}%`;
        value.textContent = `${Math.round(progress)}%`;
      };

      const stopAnim = () => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        lastTime = null;
      };

      const triggerFail = () => {
        attempts += 1;
        setAngle(-45);
        mode = 'drain';
        // Allow rotating the meter as soon as it tilts.
        allowRotate = true;
        if (attempts === 1) {
          dnaSpeak(COPY.levels.tilt.tryAgain);
        } else if (attempts === 2) {
          dnaSpeak(COPY.levels.tilt.tryAgain);
          if (thinkTimer) clearTimeout(thinkTimer);
          thinkTimer = setTimeout(() => {
            dnaSpeak(COPY.levels.tilt.think);
          }, 900);
        }
      };

      const tick = (time) => {
        if (mode === 'idle') {
          stopAnim();
          return;
        }
        if (!lastTime) lastTime = time;
        const dt = time - lastTime;
        lastTime = time;

        if (mode === 'fill') {
          progress += dt * 0.035;
          if (!angleLocked && progress >= 50) {
            triggerFail();
          }
        } else if (mode === 'drain') {
          progress -= dt * 0.04;
          if (progress <= 0) {
            progress = 0;
            mode = 'idle';
            stopAnim();
          }
        }

        progress = clamp(progress, 0, 100);
        updateMeter();

        if (angleLocked && progress >= 100) {
          mode = 'idle';
          dnaSpeak(COPY.levels.tilt.success);
          setTimeout(() => nextLevel(), 700);
          stopAnim();
        } else {
          rafId = requestAnimationFrame(tick);
        }
      };

      const startFill = () => {
        if (mode === 'fill') return;
        mode = 'fill';
        if (!rafId) rafId = requestAnimationFrame(tick);
      };

      const stopFill = () => {
        if (mode === 'fill') {
          mode = 'idle';
        }
      };

      const onHoldDown = () => {
        if (mode === 'drain') return;
        startFill();
      };

      const onHoldUp = () => {
        stopFill();
      };

      const onRotateDown = (event) => {
        if (!allowRotate || angleLocked) return;
        event.preventDefault();
        dragging = true;
        activeRotatePointerId = event.pointerId;
        try {
          meterShell.setPointerCapture(event.pointerId);
        } catch (err) {
          // ignore capture failures on unsupported browsers
        }
        startX = event.clientX;
        startAngle = angle;
      };

      const onRotateMove = (event) => {
        if (!dragging) return;
        if (activeRotatePointerId !== null && event.pointerId !== activeRotatePointerId) return;
        const delta = (event.clientX - startX) * 0.4;
        const nextAngle = clamp(startAngle + delta, -45, 45);
        setAngle(nextAngle);
        if (Math.abs(nextAngle) <= 2) {
          angleLocked = true;
          allowRotate = false;
          setAngle(0);
          mode = 'idle';
          stopAnim();
          dnaSpeak(COPY.levels.tilt.fixed);
        }
      };

      const onRotateUp = (event) => {
        if (activeRotatePointerId !== null && event.pointerId !== activeRotatePointerId) return;
        dragging = false;
        if (activeRotatePointerId !== null) {
          try {
            if (meterShell.hasPointerCapture(activeRotatePointerId)) {
              meterShell.releasePointerCapture(activeRotatePointerId);
            }
          } catch (err) {
            // ignore release failures
          }
        }
        activeRotatePointerId = null;
      };

      holdBtn.addEventListener('pointerdown', onHoldDown);
      window.addEventListener('pointerup', onHoldUp);
      window.addEventListener('pointercancel', onHoldUp);
      meterShell.addEventListener('pointerdown', onRotateDown);
      meterShell.addEventListener('pointercancel', onRotateUp);
      window.addEventListener('pointermove', onRotateMove);
      window.addEventListener('pointerup', onRotateUp);

      setAngle(0);
      updateMeter();

      return () => {
        holdBtn.removeEventListener('pointerdown', onHoldDown);
        window.removeEventListener('pointerup', onHoldUp);
        window.removeEventListener('pointercancel', onHoldUp);
        meterShell.removeEventListener('pointerdown', onRotateDown);
        meterShell.removeEventListener('pointercancel', onRotateUp);
        window.removeEventListener('pointermove', onRotateMove);
        window.removeEventListener('pointerup', onRotateUp);
        stopAnim();
        if (thinkTimer) clearTimeout(thinkTimer);
      };
    }
  },
  {
    id: 'stomach-customs',
    title: 'Stomach Customs',
    prompt: COPY.levels.stomach.prompt,
    render(container) {
      setSubtext(COPY.levels.stomach.subtext);
      dnaSpeak(COPY.levels.stomach.intro);

      const stage = document.createElement('div');
      stage.className = 'stomach-stage';
      const itemsGrid = document.createElement('div');
      itemsGrid.className = 'stomach-items';
      const zones = document.createElement('div');
      zones.className = 'stomach-zones';

      const keepZone = document.createElement('button');
      keepZone.className = 'drop-zone digest';
      keepZone.dataset.zone = 'keep';
      keepZone.setAttribute('aria-label', COPY.levels.stomach.keep);
      keepZone.innerHTML = `<span>${COPY.levels.stomach.keep}</span><small>real memory</small>`;

      const fakeZone = document.createElement('button');
      fakeZone.className = 'drop-zone reject';
      fakeZone.dataset.zone = 'fake';
      fakeZone.setAttribute('aria-label', COPY.levels.stomach.fake);
      fakeZone.innerHTML = `<span>${COPY.levels.stomach.fake}</span><small>not real</small>`;

      zones.appendChild(keepZone);
      zones.appendChild(fakeZone);
      stage.appendChild(itemsGrid);
      stage.appendChild(zones);
      container.appendChild(stage);

      const memories = [
        { id: 'beach-shoes', label: 'When I carried your shoes and socks on the beach.', real: true },
        { id: 'boxing-match', label: 'When we had a boxing match together.', real: true },
        { id: 'clothes-shopping', label: 'When we went clothes shopping.', real: true },
        { id: 'made-movie', label: 'When we made a movie together.', real: false },
        { id: 'ucsd', label: 'We hung out at UC San Diego.', real: false },
        { id: 'pixelgun-i-won', label: 'I beat you in Pixel Gun 3D.', real: true },
        { id: 'pixelgun-you-won', label: 'You beat me in Pixel Gun 3D.', real: false },
        { id: 'two-songs', label: 'You sent me two songs you sang.', real: false }
      ];

      const itemById = new Map();
      let selectedItemId = null;
      let dragging = null;
      let dragGhost = null;
      let justDragged = false;
      let successTimer = null;
      let solved = false;
      let sortedCount = 0;

      const expectedZone = (itemId) => (itemById.get(itemId)?.real ? 'keep' : 'fake');

      const cleanupDrag = () => {
        if (dragGhost) dragGhost.remove();
        if (dragging?.el) dragging.el.classList.remove('hidden');
        dragging = null;
        dragGhost = null;
        window.removeEventListener('pointermove', onDragMove);
        window.removeEventListener('pointerup', onDragEnd);
        window.removeEventListener('pointercancel', onDragEnd);
      };

      const clearSelection = () => {
        selectedItemId = null;
        itemsGrid.querySelectorAll('.stomach-item').forEach(el => {
          el.classList.remove('selected');
        });
      };

      const selectItem = (itemId) => {
        if (solved) return;
        const current = itemById.get(itemId);
        if (!current || current.disabled) return;
        selectedItemId = itemId;
        itemsGrid.querySelectorAll('.stomach-item').forEach(el => {
          el.classList.toggle('selected', el.dataset.item === itemId);
        });
        setCaption(`${current.label}. ${COPY.levels.stomach.selectHint}`);
      };

      const flashZone = (zoneEl, ok) => {
        zoneEl.classList.remove('flash-ok', 'flash-wrong');
        zoneEl.classList.add(ok ? 'flash-ok' : 'flash-wrong');
        setTimeout(() => zoneEl.classList.remove('flash-ok', 'flash-wrong'), 260);
      };

      const resolveDrop = (itemId, zone) => {
        if (solved) return;
        const current = itemById.get(itemId);
        if (!current || current.disabled) return;

        const goodZone = expectedZone(itemId);
        const isCorrect = zone === goodZone;
        const zoneEl = zone === 'keep' ? keepZone : fakeZone;
        if (!isCorrect) {
          playSound('error');
          recordAttempt('stomach-customs');
          flashZone(zoneEl, false);
          setCaption(zone === 'keep' ? COPY.levels.stomach.wrongKeep : COPY.levels.stomach.wrongFake);
          sayWrong();
          return;
        }

        current.el.disabled = true;
        current.disabled = true;
        sortedCount += 1;
        if (zone === 'keep') {
          current.el.classList.add('accepted');
          setCaption(COPY.levels.stomach.rightKeep);
        } else {
          current.el.classList.add('rejected');
          setCaption(COPY.levels.stomach.rightFake);
        }
        flashZone(zoneEl, true);
        playSound('click');
        clearSelection();
        setSubtext(`${COPY.levels.stomach.progress} ${sortedCount}/8`);

        if (sortedCount === memories.length) {
          solved = true;
          playSound('success');
          dnaSpeak(COPY.levels.stomach.success);
          successTimer = setTimeout(() => nextLevel(), 950);
        }
      };

      const onDragMove = (event) => {
        if (!dragging || !dragGhost) return;
        const containerRect = container.getBoundingClientRect();
        const x = event.clientX - containerRect.left - dragging.offsetX;
        const y = event.clientY - containerRect.top - dragging.offsetY;
        dragGhost.style.left = `${x}px`;
        dragGhost.style.top = `${y}px`;
      };

      const onDragEnd = (event) => {
        if (!dragging) return;
        const keepRect = keepZone.getBoundingClientRect();
        const fakeRect = fakeZone.getBoundingClientRect();
        const inKeep = event.clientX >= keepRect.left && event.clientX <= keepRect.right && event.clientY >= keepRect.top && event.clientY <= keepRect.bottom;
        const inFake = event.clientX >= fakeRect.left && event.clientX <= fakeRect.right && event.clientY >= fakeRect.top && event.clientY <= fakeRect.bottom;
        justDragged = true;
        setTimeout(() => {
          justDragged = false;
        }, 0);
        if (inKeep) {
          resolveDrop(dragging.id, 'keep');
        } else if (inFake) {
          resolveDrop(dragging.id, 'fake');
        } else {
          setCaption('Drop it into Keep or Fake.');
        }
        cleanupDrag();
      };

      const removers = [];
      memories.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'stomach-item';
        btn.dataset.item = item.id;
        btn.setAttribute('aria-label', item.label);
        btn.textContent = item.label;
        itemsGrid.appendChild(btn);
        itemById.set(item.id, { ...item, el: btn, disabled: false });

        const onPointerDown = (event) => {
          const current = itemById.get(item.id);
          if (!current || current.disabled || solved || dragging) return;
          event.preventDefault();
          selectItem(item.id);
          const rect = btn.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          dragGhost = btn.cloneNode(true);
          dragGhost.classList.add('dragging-memory');
          dragGhost.style.left = `${rect.left - containerRect.left}px`;
          dragGhost.style.top = `${rect.top - containerRect.top}px`;
          container.appendChild(dragGhost);
          btn.classList.add('hidden');
          dragging = {
            id: item.id,
            el: btn,
            offsetX: event.clientX - rect.left,
            offsetY: event.clientY - rect.top
          };
          window.addEventListener('pointermove', onDragMove);
          window.addEventListener('pointerup', onDragEnd);
          window.addEventListener('pointercancel', onDragEnd);
        };

        const onClick = () => {
          if (justDragged) return;
          selectItem(item.id);
        };

        btn.addEventListener('pointerdown', onPointerDown);
        btn.addEventListener('click', onClick);
        removers.push(() => {
          btn.removeEventListener('pointerdown', onPointerDown);
          btn.removeEventListener('click', onClick);
        });
      });

      const onZoneClick = (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const zoneEl = target.closest('.drop-zone');
        if (!zoneEl) return;
        const zone = zoneEl.dataset.zone;
        if (!zone) return;
        if (!selectedItemId) {
          setCaption('Select a memory item first.');
          return;
        }
        resolveDrop(selectedItemId, zone);
      };

      zones.addEventListener('click', onZoneClick);

      return () => {
        cleanupDrag();
        zones.removeEventListener('click', onZoneClick);
        removers.forEach(remove => remove());
        if (successTimer) clearTimeout(successTimer);
      };
    }
  },
  {
    id: 'brain-door',
    title: 'Brain Door',
    prompt: COPY.levels.brainDoor.prompt,
    render(container) {
      const stage = document.createElement('div');
      stage.className = 'brain-stage';
      const top = document.createElement('div');
      top.className = 'brain-top';
      const stepLabel = document.createElement('div');
      stepLabel.className = 'brain-step';
      const scoreLabel = document.createElement('div');
      scoreLabel.className = 'brain-step';
      top.appendChild(stepLabel);
      top.appendChild(scoreLabel);

      const questionEl = document.createElement('h3');
      questionEl.className = 'brain-question';
      const options = document.createElement('div');
      options.className = 'brain-options';

      const skipBtn = document.createElement('button');
      skipBtn.className = 'logic-toggle hidden';
      skipBtn.textContent = COPY.levels.brainDoor.skipLogic;
      skipBtn.setAttribute('aria-label', COPY.levels.brainDoor.skipLogic);

      const whoBtn = document.createElement('button');
      whoBtn.className = 'btn primary who-asked hidden';
      whoBtn.textContent = COPY.levels.brainDoor.whoAsked;
      whoBtn.setAttribute('aria-label', COPY.levels.brainDoor.whoAsked);

      stage.appendChild(top);
      stage.appendChild(skipBtn);
      stage.appendChild(questionEl);
      stage.appendChild(options);
      stage.appendChild(whoBtn);
      container.appendChild(stage);

      const questions = [
        {
          q: '1 + 1 = ?',
          opts: ['1', '2', '3', '4'],
          answer: '2'
        },
        {
          q: 'What animal is black and white and is mainly in China?',
          opts: ['Zebra', 'Panda', 'Penguin', 'Dalmatian'],
          answer: 'Panda'
        },
        {
          q: '8 × 5 = ?',
          opts: ['35', '40', '45', '50'],
          answer: '40'
        },
        {
          q: 'What animal do we both have?',
          opts: ['Dog', 'Cat', 'Fish', 'Hamster'],
          answer: 'Cat'
        },
        {
          q: 'Why do the laws of physics have the specific constants and structure they do instead of others?',
          opts: [
            'A) Pure chance — they\'re random outcomes with no deeper reason',
            'B) Mathematical necessity — only one logically consistent universe is possible',
            'C) Multiverse selection — many universes exist; we observe the one compatible with life',
            'D) Simulation design — constants were intentionally set by an external intelligence',
            'E) Unknown deeper laws — our "constants" emerge from a more fundamental theory',
            'F) Observer bias — we couldn\'t exist in a universe with different constants, so this is inevitable',
            'G) Circular — asking "why" is meaningless because laws simply are',
            'H) Hidden symmetry — the values are fixed by constraints we haven\'t discovered yet',
            'I) Time evolution — constants weren\'t fixed and slowly changed to current values'
          ],
          answer: null,
          skipLogic: true
        }
      ];

      let index = 0;
      let correctCount = 0;
      let skipLogicOn = false;
      let lastCorrectOptionIndex = null;
      let successTimer = null;
      const totalQuestions = questions.length;

      const shuffleArray = (items) => {
        const arr = [...items];
        for (let i = arr.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          const tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
        return arr;
      };

      const updateSubtext = () => {
        setSubtext(`${COPY.levels.brainDoor.subtext} ${COPY.levels.brainDoor.scoreLabel}: ${correctCount}/${totalQuestions}`);
      };

      const renderQuestion = () => {
        const current = questions[index];
        stepLabel.textContent = `${COPY.levels.brainDoor.stepLabel} ${index + 1}/${totalQuestions}`;
        scoreLabel.textContent = `${COPY.levels.brainDoor.scoreLabel}: ${correctCount}/${totalQuestions}`;
        questionEl.textContent = current.q;
        questionEl.classList.toggle('long', current.q.length > 95);

        options.innerHTML = '';
        options.classList.remove('tf');
        if (current.skipLogic) {
          options.classList.add('mc-long');
        } else {
          options.classList.remove('mc-long');
          options.classList.add('mc');
        }

        let optionsToRender = [...current.opts];
        if (!current.skipLogic && current.answer) {
          let tries = 0;
          let shuffled = shuffleArray(optionsToRender);
          while (tries < 10 && shuffled.indexOf(current.answer) === lastCorrectOptionIndex && optionsToRender.length > 1) {
            shuffled = shuffleArray(optionsToRender);
            tries += 1;
          }
          optionsToRender = shuffled;
          const nextCorrectIndex = optionsToRender.indexOf(current.answer);
          if (nextCorrectIndex !== -1) {
            lastCorrectOptionIndex = nextCorrectIndex;
          }
        }

        optionsToRender.forEach(opt => {
          const btn = document.createElement('button');
          btn.className = 'brain-option';
          if (current.skipLogic) btn.classList.add('long');
          btn.dataset.choice = opt;
          btn.textContent = opt;
          btn.setAttribute('aria-label', opt);
          options.appendChild(btn);
        });

        if (current.skipLogic) {
          skipBtn.classList.remove('hidden');
        } else {
          skipBtn.classList.add('hidden');
        }
        whoBtn.classList.add('hidden');
        skipLogicOn = false;
        skipBtn.classList.remove('on');
      };

      const onOption = (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const button = target.closest('.brain-option');
        if (!button) return;
        const choice = button.dataset.choice;
        if (!choice) return;
        const current = questions[index];

        if (current.skipLogic) {
          playSound('error');
          sayWrong();
          return;
        }

        if (choice !== current.answer) {
          playSound('error');
          recordAttempt('brain-door');
          sayWrong();
          return;
        }

        playSound('success');
        setCaption('Correct.');
        correctCount += 1;
        index += 1;
        if (index >= questions.length) {
          updateSubtext();
          dnaSpeak(COPY.levels.brainDoor.success);
          successTimer = setTimeout(() => nextLevel(), 900);
          return;
        }
        updateSubtext();
        renderQuestion();
      };

      const onSkip = () => {
        skipLogicOn = !skipLogicOn;
        skipBtn.classList.toggle('on', skipLogicOn);
        if (skipLogicOn) {
          whoBtn.classList.remove('hidden');
          playSound('click');
        } else {
          whoBtn.classList.add('hidden');
        }
      };

      const onWho = () => {
        playSound('success');
        correctCount += 1;
        index += 1;
        updateSubtext();
        dnaSpeak(COPY.levels.brainDoor.success);
        successTimer = setTimeout(() => nextLevel(), 900);
      };

      options.addEventListener('click', onOption);
      skipBtn.addEventListener('click', onSkip);
      whoBtn.addEventListener('click', onWho);
      updateSubtext();
      dnaSpeak(COPY.levels.brainDoor.intro);
      renderQuestion();

      return () => {
        options.removeEventListener('click', onOption);
        skipBtn.removeEventListener('click', onSkip);
        whoBtn.removeEventListener('click', onWho);
        if (successTimer) clearTimeout(successTimer);
      };
    }
  },
  {
    id: 'true-false',
    title: 'True or False',
    prompt: COPY.levels.trueFalse.prompt,
    render(container) {
      const stage = document.createElement('div');
      stage.className = 'brain-stage';
      const top = document.createElement('div');
      top.className = 'brain-top';
      const stepLabel = document.createElement('div');
      stepLabel.className = 'brain-step';
      const scoreLabel = document.createElement('div');
      scoreLabel.className = 'brain-step';
      top.appendChild(stepLabel);
      top.appendChild(scoreLabel);

      const questionEl = document.createElement('h3');
      questionEl.className = 'brain-question';
      const tfOptions = document.createElement('div');
      tfOptions.className = 'brain-options tf';
      const trueBtn = document.createElement('button');
      trueBtn.className = 'brain-option tf';
      trueBtn.setAttribute('aria-label', COPY.levels.trueFalse.trueLabel);
      trueBtn.dataset.choice = 'true';
      trueBtn.textContent = COPY.levels.trueFalse.trueLabel;
      const falseBtn = document.createElement('button');
      falseBtn.className = 'brain-option tf';
      falseBtn.setAttribute('aria-label', COPY.levels.trueFalse.falseLabel);
      falseBtn.dataset.choice = 'false';
      falseBtn.textContent = COPY.levels.trueFalse.falseLabel;
      tfOptions.appendChild(trueBtn);
      tfOptions.appendChild(falseBtn);

      stage.appendChild(top);
      stage.appendChild(questionEl);
      stage.appendChild(tfOptions);
      container.appendChild(stage);

      const questions = [
        {
          q: 'T/F: More than half our dates revolve around food.',
          answer: true
        },
        {
          q: 'T/F: I had a crush on you just because you gave me a little plushie.',
          answer: true
        },
        {
          q: 'T/F: Even when you say "I\'m fine," you want me to notice you\'re not.',
          answer: true
        },
        {
          q: 'T/F: Our first solo date was at a bowling alley.',
          answer: false
        },
        {
          q: 'T/F: You love when I leave your texts on read for hours.',
          answer: false
        },
        {
          q: 'T/F: You would pick cold fries over hot fries every time.',
          answer: false
        },
        {
          q: 'T/F: You would rather cancel plans with me and clean your room instead.',
          answer: false
        },
        {
          q: 'T/F: You hate when I make you laugh during serious moments.',
          answer: false
        },
        {
          q: 'T/F: No matter how busy life gets, you\'d still choose me every time.',
          answer: true,
          finalTwist: true
        }
      ];

      let index = 0;
      let correctCount = 0;
      let finalTwistUnlocked = false;
      let successTimer = null;
      const totalQuestions = questions.length;

      const updateSubtext = () => {
        setSubtext(`${COPY.levels.trueFalse.subtext} ${COPY.levels.trueFalse.scoreLabel}: ${correctCount}/${totalQuestions}`);
      };

      const renderQuestion = () => {
        const current = questions[index];
        stepLabel.textContent = `${COPY.levels.trueFalse.stepLabel} ${index + 1}/${totalQuestions}`;
        scoreLabel.textContent = `${COPY.levels.trueFalse.scoreLabel}: ${correctCount}/${totalQuestions}`;
        questionEl.textContent = current.q;
        questionEl.classList.toggle('long', current.q.length > 95);
      };

      const failQuestion = (message = '') => {
        playSound('error');
        recordAttempt('true-false');
        sayWrong();
        if (message) {
          setCaption(message);
        }
      };

      const onOption = (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const button = target.closest('.brain-option');
        if (!button) return;
        const choice = button.dataset.choice;
        if (!choice) return;
        const current = questions[index];
        const choiceIsTrue = choice === 'true';

        if (current.finalTwist && !finalTwistUnlocked) {
          if (choiceIsTrue) {
            failQuestion(COPY.levels.trueFalse.finalTwistFirstHint);
            return;
          }
          finalTwistUnlocked = true;
          playSound('click');
          setCaption(COPY.levels.trueFalse.finalTwistLine);
          dnaSpeak(COPY.levels.trueFalse.finalTwistLine);
          return;
        }

        if (choiceIsTrue !== current.answer) {
          failQuestion();
          return;
        }

        playSound('success');
        setCaption('Correct.');
        correctCount += 1;
        index += 1;
        if (index >= questions.length) {
          updateSubtext();
          dnaSpeak(COPY.levels.trueFalse.success);
          successTimer = setTimeout(() => nextLevel(), 900);
          return;
        }
        updateSubtext();
        renderQuestion();
      };

      tfOptions.addEventListener('click', onOption);
      updateSubtext();
      dnaSpeak(COPY.levels.trueFalse.intro);
      renderQuestion();

      return () => {
        tfOptions.removeEventListener('click', onOption);
        if (successTimer) clearTimeout(successTimer);
      };
    }
  },
  {
    id: 'hold-meter',
    title: 'Hold to Fill',
    prompt: COPY.levels.hold.prompt,
    render(container) {
      const meter = document.createElement('div');
      meter.className = 'meter';
      const fill = document.createElement('div');
      fill.className = 'meter-fill';
      meter.appendChild(fill);
      const holdBtn = document.createElement('button');
      holdBtn.className = 'btn primary';
      holdBtn.textContent = COPY.levels.hold.button;
      holdBtn.setAttribute('aria-label', COPY.levels.hold.button);
      container.appendChild(meter);
      container.appendChild(holdBtn);

      let progress = 0;
      let mode = 'idle';
      let holdStart = 0;
      let rafId = null;
      let lastTime = null;
      let completed = false;

      const updateMeter = () => {
        fill.style.width = `${progress}%`;
      };

      const stopAnimation = () => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        lastTime = null;
      };

      const tick = (time) => {
        if (mode === 'idle') {
          stopAnimation();
          return;
        }
        if (!lastTime) lastTime = time;
        const dt = time - lastTime;
        lastTime = time;

        if (mode === 'hold') {
          progress += dt * 0.03;
        } else if (mode === 'drain') {
          progress -= dt * 0.02;
        }

        progress = clamp(progress, 0, 100);
        updateMeter();

        if (mode === 'hold' && progress >= 100 && time - holdStart >= 2500) {
          completed = true;
          mode = 'idle';
          playSound('success');
          setCaption(COPY.levels.hold.success);
          holdBtn.classList.add('pop');
          setTimeout(() => nextLevel(), 700);
          stopAnimation();
          return;
        }

        if (mode === 'drain' && progress <= 0) {
          mode = 'idle';
          stopAnimation();
          return;
        }

        rafId = requestAnimationFrame(tick);
      };

      const startAnimation = () => {
        if (!rafId) {
          rafId = requestAnimationFrame(tick);
        }
      };

      const onDown = () => {
        if (completed) return;
        if (mode === 'hold') return;
        playSound('click');
        mode = 'hold';
        holdStart = performance.now();
        startAnimation();
      };

      const onUp = () => {
        if (completed) return;
        if (mode === 'hold') {
          setCaption(COPY.levels.hold.early);
          mode = 'drain';
          startAnimation();
        }
      };

      const onKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
          event.preventDefault();
          onDown();
        }
      };

      const onKeyUp = (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
          event.preventDefault();
          onUp();
        }
      };

      holdBtn.addEventListener('pointerdown', onDown);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onUp);
      holdBtn.addEventListener('keydown', onKeyDown);
      holdBtn.addEventListener('keyup', onKeyUp);

      return () => {
        holdBtn.removeEventListener('pointerdown', onDown);
        window.removeEventListener('pointerup', onUp);
        window.removeEventListener('pointercancel', onUp);
        holdBtn.removeEventListener('keydown', onKeyDown);
        holdBtn.removeEventListener('keyup', onKeyUp);
        stopAnimation();
      };
    }
  },
  {
    id: 'trick-quiz',
    title: 'Impossible Quiz',
    prompt: COPY.levels.trick.prompt,
    render(container) {
      const options = document.createElement('div');
      options.className = 'quiz-options';
      const mailbox = document.createElement('button');
      mailbox.className = 'mailbox';
      mailbox.setAttribute('aria-label', COPY.levels.trick.mailboxLabel);
      mailbox.textContent = COPY.levels.trick.mailbox;
      container.appendChild(mailbox);

      const choices = COPY.levels.trick.options;
      let wrongCount = 0;
      let timeoutId = null;

      choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'btn ghost';
        btn.textContent = choice;
        btn.setAttribute('aria-label', choice);
        btn.dataset.choice = choice;
        options.appendChild(btn);
      });

      const onOption = (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        if (!target.dataset.choice) return;
        playSound('error');
        recordAttempt('trick-quiz');
        wrongCount += 1;
        sayWrong();
        if (wrongCount >= 2) {
          setSubtext(COPY.levels.trick.hint);
        }
      };

      const onMailbox = () => {
        playSound('success');
        setCaption(COPY.levels.trick.success);
        timeoutId = setTimeout(() => nextLevel(), 700);
      };

      mailbox.addEventListener('click', onMailbox);
      options.addEventListener('click', onOption);
      container.appendChild(options);

      return () => {
        mailbox.removeEventListener('click', onMailbox);
        options.removeEventListener('click', onOption);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  },
  {
    id: 'yes-no',
    title: 'Elastic Buttons',
    prompt: COPY.levels.yesNo.prompt,
    render(container, state) {
      const subtextDefault = COPY.levels.yesNo.subtext;
      const captions = COPY.levels.yesNo.captions;

      const area = document.createElement('div');
      area.className = 'yn-area';
      const yesBtn = document.createElement('button');
      yesBtn.className = 'btn primary scaleable';
      yesBtn.textContent = COPY.levels.yesNo.yes;
      yesBtn.setAttribute('aria-label', COPY.levels.yesNo.yes);
      const noBtn = document.createElement('button');
      noBtn.className = 'btn no scaleable';
      noBtn.textContent = COPY.levels.yesNo.no;
      noBtn.setAttribute('aria-label', COPY.levels.yesNo.no);

      area.appendChild(yesBtn);
      area.appendChild(noBtn);
      container.appendChild(area);

      let noClicks = 0;
      let yesScale = 1;
      let noScale = 1;
      let phase = 1;
      let easterEggShown = false;
      let noActsLikeYes = false;
      let driftTimer = null;
      let successTimeout = null;

      const updateScales = () => {
        yesBtn.style.setProperty('--btn-scale', yesScale);
        noBtn.style.setProperty('--btn-scale', noScale);
      };

      const moveNoButtonRandomly = (useOverlapCheck = true) => {
        const areaRect = area.getBoundingClientRect();
        const noRect = noBtn.getBoundingClientRect();
        const scaledWidth = noRect.width;
        const scaledHeight = noRect.height;
        const maxX = Math.max(0, areaRect.width - scaledWidth);
        const maxY = Math.max(0, areaRect.height - scaledHeight);
        const yesRect = yesBtn.getBoundingClientRect();

        let attempts = 0;
        let x = 0;
        let y = 0;

        while (attempts < 10) {
          x = Math.random() * maxX;
          y = Math.random() * maxY;

          if (!useOverlapCheck) break;

          const candidate = {
            left: areaRect.left + x,
            right: areaRect.left + x + scaledWidth,
            top: areaRect.top + y,
            bottom: areaRect.top + y + scaledHeight
          };

          const overlapX = Math.max(0, Math.min(candidate.right, yesRect.right) - Math.max(candidate.left, yesRect.left));
          const overlapY = Math.max(0, Math.min(candidate.bottom, yesRect.bottom) - Math.max(candidate.top, yesRect.top));
          const overlapArea = overlapX * overlapY;
          const noArea = scaledWidth * scaledHeight || 1;

          if (overlapArea / noArea <= 0.3) {
            break;
          }
          attempts += 1;
        }

        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
      };

      const jitterNoButton = () => {
        const areaRect = area.getBoundingClientRect();
        const noRect = noBtn.getBoundingClientRect();
        const scaledWidth = noRect.width;
        const scaledHeight = noRect.height;
        const maxX = Math.max(0, areaRect.width - scaledWidth);
        const maxY = Math.max(0, areaRect.height - scaledHeight);
        const currentX = parseFloat(noBtn.style.left) || 0;
        const currentY = parseFloat(noBtn.style.top) || 0;
        const deltaX = (Math.random() * 36) - 18;
        const deltaY = (Math.random() * 36) - 18;
        const nextX = clamp(currentX + deltaX, 0, maxX);
        const nextY = clamp(currentY + deltaY, 0, maxY);
        noBtn.style.left = `${nextX}px`;
        noBtn.style.top = `${nextY}px`;
      };

      const applyPhaseEffects = () => {
        if (noClicks >= 10) {
          phase = 3;
        } else if (noClicks >= 5) {
          phase = 2;
        } else {
          phase = 1;
        }

        if (phase >= 2 && !prefersReducedMotion) {
          yesBtn.classList.add('pulse');
          noBtn.classList.add('shake-on');
        } else {
          yesBtn.classList.remove('pulse');
          noBtn.classList.remove('shake-on');
        }

        if (phase >= 3) {
          setSubtext(subtextDefault);
          if (!driftTimer && !prefersReducedMotion) {
            driftTimer = setInterval(() => jitterNoButton(), 700);
          }
        } else {
          setSubtext('');
          if (driftTimer) {
            clearInterval(driftTimer);
            driftTimer = null;
          }
        }
      };

      const showEasterEggModal = () => {
        easterModal.classList.remove('hidden');
        easterModal.setAttribute('aria-hidden', 'false');
      };

      const hideEasterEggModal = () => {
        easterModal.classList.add('hidden');
        easterModal.setAttribute('aria-hidden', 'true');
      };

      const showLevelSuccess = () => {
        yesBtn.disabled = true;
        noBtn.disabled = true;
        area.innerHTML = '';
        const successMsg = document.createElement('div');
        successMsg.className = 'fade-in';
        successMsg.textContent = COPY.levels.yesNo.success;
        area.appendChild(successMsg);
        successTimeout = setTimeout(() => nextLevel(), 900);
      };

      const onYes = () => {
        playSound('success');
        showLevelSuccess();
      };

      const onNo = () => {
        if (noActsLikeYes) {
          showLevelSuccess();
          return;
        }
        playSound('click');
        noClicks += 1;
        const captionIndex = Math.min(noClicks, captions.length) - 1;
        setCaption(captions[captionIndex] || '');

        yesScale = clamp(yesScale * 1.14, 1, 5.0);
        noScale = clamp(noScale * 0.88, 0.45, 1);
        updateScales();
        moveNoButtonRandomly();
        applyPhaseEffects();

        if (noClicks >= 12 && !easterEggShown) {
          easterEggShown = true;
          showEasterEggModal();
        }
      };

      const onReward = (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        if (!target.dataset.reward) return;
        state.choices.reward = target.dataset.reward;
        saveProgress();
        hideEasterEggModal();
        noActsLikeYes = true;
        noBtn.textContent = COPY.levels.yesNo.okFine;
        noBtn.setAttribute('aria-label', COPY.levels.yesNo.okFine);
        setCaption(COPY.levels.yesNo.afterReward);
      };

      yesBtn.addEventListener('click', onYes);
      noBtn.addEventListener('click', onNo);
      easterModal.addEventListener('click', onReward);

      updateScales();
      requestAnimationFrame(() => moveNoButtonRandomly());
      const onResize = () => moveNoButtonRandomly(false);
      window.addEventListener('resize', onResize);

      return () => {
        yesBtn.removeEventListener('click', onYes);
        noBtn.removeEventListener('click', onNo);
        easterModal.removeEventListener('click', onReward);
        window.removeEventListener('resize', onResize);
        hideEasterEggModal();
        if (driftTimer) clearInterval(driftTimer);
        if (successTimeout) clearTimeout(successTimeout);
      };
    }
  },
  {
    id: 'code',
    title: 'Memory Code',
    prompt: COPY.levels.code.prompt,
    render(container) {
      const wrap = document.createElement('div');
      wrap.className = 'code-wrap';
      const input = document.createElement('input');
      input.className = 'text-input code-input';
      input.inputMode = 'numeric';
      input.maxLength = 4;
      input.placeholder = COPY.levels.code.placeholder;
      input.setAttribute('aria-label', COPY.levels.code.prompt);
      const submit = document.createElement('button');
      submit.className = 'btn primary';
      submit.textContent = COPY.levels.code.button;
      submit.setAttribute('aria-label', COPY.levels.code.button);
      const hintBtn = document.createElement('button');
      hintBtn.className = 'btn ghost hidden';
      hintBtn.textContent = COPY.levels.code.hintButton;
      hintBtn.setAttribute('aria-label', COPY.levels.code.hintButton);

      wrap.appendChild(input);
      wrap.appendChild(submit);
      wrap.appendChild(hintBtn);
      container.appendChild(wrap);

      let wrongCount = 0;
      let timeoutId = null;

      const validate = () => {
        const value = input.value.trim();
        if (!/^\d{4}$/.test(value)) {
          playSound('error');
          input.classList.add('shake');
          setCaption(COPY.levels.code.nonDigits);
          setTimeout(() => input.classList.remove('shake'), 300);
          return;
        }
        if (value === SECRET_CODE) {
          playSound('success');
          setCaption(COPY.levels.code.success);
          timeoutId = setTimeout(() => nextLevel(), 700);
          return;
        }
        playSound('error');
        recordAttempt('code');
        wrongCount += 1;
        sayWrong();
        if (wrongCount >= 3) {
          hintBtn.classList.remove('hidden');
        }
        if (wrongCount === 1) setSubtext(COPY.levels.code.hints[0]);
        if (wrongCount === 2) setSubtext(COPY.levels.code.hints[1]);
      };

      submit.addEventListener('click', validate);
      const onKey = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          validate();
        }
      };
      const onInput = () => {
        input.value = input.value.replace(/\D/g, '').slice(0, 4);
      };
      input.addEventListener('keydown', onKey);
      input.addEventListener('input', onInput);
      const onHint = () => {
        setSubtext(COPY.levels.code.hintReveal);
      };
      hintBtn.addEventListener('click', onHint);

      input.focus();

      return () => {
        submit.removeEventListener('click', validate);
        input.removeEventListener('keydown', onKey);
        input.removeEventListener('input', onInput);
        hintBtn.removeEventListener('click', onHint);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  },
  {
    id: 'ring',
    title: 'Drag the Ring',
    prompt: COPY.levels.ring.prompt,
    render(container) {
      const area = document.createElement('div');
      area.className = 'ring-area';
      area.innerHTML = `
        <svg viewBox="0 0 400 220" aria-hidden="true">
          <rect x="40" y="80" width="200" height="110" rx="40" fill="#f3d6dd" />
          <rect x="60" y="20" width="40" height="80" rx="20" fill="#f3d6dd" />
          <rect x="105" y="10" width="40" height="90" rx="20" fill="#f3d6dd" />
          <rect x="150" y="15" width="40" height="85" rx="20" fill="#f3d6dd" />
          <rect x="195" y="28" width="40" height="72" rx="20" fill="#f3d6dd" />
        </svg>
      `;
      const ring = document.createElement('div');
      ring.className = 'ring';
      ring.setAttribute('role', 'button');
      ring.setAttribute('tabindex', '0');
      ring.setAttribute('aria-label', COPY.levels.ring.aria);
      area.appendChild(ring);
      container.appendChild(area);

      let dragging = false;
      let offsetX = 0;
      let offsetY = 0;
      let successTimeout = null;
      let solved = false;

      const getTarget = () => {
        const rect = area.getBoundingClientRect();
        return {
          x: rect.left + rect.width * 0.53,
          y: rect.top + rect.height * 0.38,
          r: rect.width * 0.06
        };
      };

      const placeRing = (x, y) => {
        ring.style.left = `${x}px`;
        ring.style.top = `${y}px`;
      };

      const resetRing = () => {
        placeRing(20, area.clientHeight - 62);
      };

      const succeed = () => {
        if (solved) return;
        solved = true;
        playSound('success');
        setCaption(COPY.levels.ring.success);
        const target = getTarget();
        const areaRect = area.getBoundingClientRect();
        placeRing(target.x - areaRect.left - ring.offsetWidth / 2, target.y - areaRect.top - ring.offsetHeight / 2);
        ring.style.pointerEvents = 'none';
        successTimeout = setTimeout(() => nextLevel(), 700);
      };

      const onDown = (event) => {
        event.preventDefault();
        dragging = true;
        ring.setPointerCapture(event.pointerId);
        const rect = ring.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;
      };

      const onMove = (event) => {
        if (!dragging) return;
        const areaRect = area.getBoundingClientRect();
        const x = clamp(event.clientX - areaRect.left - offsetX, 0, areaRect.width - ring.offsetWidth);
        const y = clamp(event.clientY - areaRect.top - offsetY, 0, areaRect.height - ring.offsetHeight);
        placeRing(x, y);
      };

      const onUp = (event) => {
        if (!dragging) return;
        dragging = false;
        ring.releasePointerCapture(event.pointerId);
        const target = getTarget();
        const ringRect = ring.getBoundingClientRect();
        const centerX = ringRect.left + ringRect.width / 2;
        const centerY = ringRect.top + ringRect.height / 2;
        const distance = Math.hypot(centerX - target.x, centerY - target.y);
        if (distance <= target.r) {
          succeed();
        } else {
          playSound('error');
          sayWrong();
          resetRing();
        }
      };

      const onKey = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          succeed();
        }
      };

      ring.addEventListener('pointerdown', onDown);
      ring.addEventListener('pointermove', onMove);
      ring.addEventListener('pointerup', onUp);
      ring.addEventListener('pointercancel', onUp);
      ring.addEventListener('keydown', onKey);

      resetRing();

      return () => {
        ring.removeEventListener('pointerdown', onDown);
        ring.removeEventListener('pointermove', onMove);
        ring.removeEventListener('pointerup', onUp);
        ring.removeEventListener('pointercancel', onUp);
        ring.removeEventListener('keydown', onKey);
        if (successTimeout) clearTimeout(successTimeout);
      };
    }
  },
  {
    id: 'rhythm',
    title: 'Rhythm Tap',
    prompt: COPY.levels.rhythm.prompt,
    render(container) {
      const rhythm = document.createElement('div');
      rhythm.className = 'rhythm';
      rhythm.textContent = COPY.levels.rhythm.pattern;
      const tapBtn = document.createElement('button');
      tapBtn.className = 'btn primary';
      tapBtn.textContent = COPY.levels.rhythm.button;
      tapBtn.setAttribute('aria-label', COPY.levels.rhythm.button);
      container.appendChild(rhythm);
      container.appendChild(tapBtn);

      let taps = [];
      let failCount = 0;
      let timeoutId = null;

      const reset = () => {
        taps = [];
      };

      const onTap = () => {
        playSound('click');
        const now = Date.now();
        if (taps.length && now - taps[taps.length - 1] > 1500) {
          reset();
        }
        taps.push(now);
        if (taps.length === 3) {
          const interval1 = taps[1] - taps[0];
          const interval2 = taps[2] - taps[1];
          if (interval1 <= 350 && interval2 >= 450 && interval2 <= 900) {
            playSound('success');
            setCaption(COPY.levels.rhythm.success);
            timeoutId = setTimeout(() => nextLevel(), 700);
          } else {
            playSound('error');
            failCount += 1;
            sayWrong();
            if (failCount >= 2) {
              setSubtext(COPY.levels.rhythm.hint);
            }
            reset();
          }
        }
      };

      tapBtn.addEventListener('click', onTap);

      return () => {
        tapBtn.removeEventListener('click', onTap);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  },
  {
    id: 'final',
    title: 'Final Letter',
    prompt: COPY.levels.final.prompt,
    render(container, state) {
      const openBtn = document.createElement('button');
      openBtn.className = 'btn primary';
      openBtn.textContent = COPY.levels.final.open;
      openBtn.setAttribute('aria-label', COPY.levels.final.open);
      const letter = document.createElement('div');
      letter.className = 'letter hidden';
      const heading = document.createElement('h3');
      heading.textContent = COPY.levels.final.heading;
      const body = document.createElement('div');
      letter.appendChild(heading);
      letter.appendChild(body);

      const chips = document.createElement('div');
      chips.className = 'chips';
      if (state.choices.energy) {
        const chip = document.createElement('span');
        chip.className = 'chip-tag';
        const label = ENERGY_OPTIONS.find(opt => opt.id === state.choices.energy)?.label || state.choices.energy;
        chip.textContent = `${COPY.levels.final.energyLabel}: ${label}`;
        chips.appendChild(chip);
      }
      if (state.choices.reward) {
        const chip = document.createElement('span');
        chip.className = 'chip-tag';
        chip.textContent = `${COPY.levels.final.rewardLabel}: ${state.choices.reward}`;
        chips.appendChild(chip);
      }
      letter.appendChild(chips);

      const replayBtn = document.createElement('button');
      replayBtn.className = 'btn ghost';
      replayBtn.textContent = COPY.levels.final.replay;
      replayBtn.setAttribute('aria-label', COPY.levels.final.replay);

      container.appendChild(openBtn);
      container.appendChild(letter);
      container.appendChild(replayBtn);

      let timeouts = [];

      const typeLine = (line, delay, callback) => {
        let i = 0;
        const span = document.createElement('p');
        body.appendChild(span);
        const tick = () => {
          span.textContent = line.slice(0, i);
          i += 1;
          if (i <= line.length) {
            timeouts.push(setTimeout(tick, 28));
          } else if (callback) {
            timeouts.push(setTimeout(callback, delay));
          }
        };
        tick();
      };

      const startLetter = () => {
        openBtn.disabled = true;
        letter.classList.remove('hidden');
        body.innerHTML = '';
        if (prefersReducedMotion) {
          FINAL_LETTER_LINES.forEach(line => {
            const p = document.createElement('p');
            p.textContent = line;
            body.appendChild(p);
          });
          celebrate();
          playSound('success');
          return;
        }
        let index = 0;
        const next = () => {
          if (index >= FINAL_LETTER_LINES.length) {
            celebrate();
            playSound('success');
            return;
          }
          typeLine(FINAL_LETTER_LINES[index], 220, () => {
            index += 1;
            next();
          });
        };
        next();
      };

      const onReplay = () => resetGame();

      openBtn.addEventListener('click', startLetter);
      replayBtn.addEventListener('click', onReplay);

      return () => {
        openBtn.removeEventListener('click', startLetter);
        replayBtn.removeEventListener('click', onReplay);
        timeouts.forEach(timeout => clearTimeout(timeout));
      };
    }
  }
];

resetBtn.addEventListener('click', () => {
  const confirmed = window.confirm(COPY.resetConfirm);
  if (confirmed) resetGame();
});

setupEasterModal();
loadProgress();
updateVoiceEnabled();
loadVoices();
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}
document.addEventListener('pointerdown', unlockAudioFromInteraction, { capture: true });
document.addEventListener('keydown', unlockAudioFromInteraction, { capture: true });
renderLevel(gameState.currentLevelIndex);
