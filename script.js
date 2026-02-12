const STORAGE_KEY = 'dana_valentine_progress_v3';

// Content customization
const COPY = {
  title: 'Dana',
  pageTitle: 'Dana Valentine',
  progressLabel: 'Progress',
  jumpLabel: 'Jump',
  jumpLabelAria: 'Jump to level',
  jumpPrompt: 'Enter level number to jump to:',
  jumpInvalid: 'Please enter a valid level number.',
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
    decodeText: {
      prompt: "Decode Dana's Text",
      intro: "Now what we have all been waiting for! Decode Dana's Text! Now you can roleplay as Omar! What would Omar Choose?",
      typing: 'Dana is typing...',
      danaLabel: 'Dana is texting this...',
      omarLabel: 'As Omar, what do you choose?',
      success: 'Perfect Omar response.'
    },
    dateDraft: {
      prompt: 'Plan the date in 20 seconds.',
      intro: 'Level 8. Build the date fast. Pick one Food, one Activity, and one Vibe before time runs out.',
      timerLabel: 'Time left',
      pickHint: 'Choose one option from each category.',
      submit: 'Lock the plan',
      needsAll: 'Pick Food, Activity, and Vibe first.',
      illegal: 'Nope. That combo is illegal. Retry with something less chaotic.',
      timeout: 'Too slow. Omar froze. Try again, faster.',
      success: 'Date draft approved.'
    },
    voiceLove: {
      prompt: 'Voice Lock',
      intro: 'Level 9. Voice lock armed. Say the phrase to unlock it.',
      subtext: 'Tap Listen, then clearly say: I Love You Omar',
      targetPhrase: 'I Love You Omar',
      listen: 'Listen',
      listening: 'Listening...',
      heardLabel: 'I heard',
      fallbackLabel: 'Or type it if mic is blocked',
      fallbackButton: 'Check phrase',
      unsupported: 'Mic recognition is not supported on this browser. Type the phrase below instead.',
      micDenied: 'Mic blocked. Please allow microphone access for this site, or type the phrase below.',
      tryAgain: 'Hope whatever you said wasnt rude...anyways Not quite...Try again',
      success: 'Message Recieved. Omar Loves You More.'
    },
    tooMuchLove: {
      prompt: 'Too Much Love',
      intro: 'Warning... Too Much Love detected. Core unstable. I feel lonely.',
      subtext: 'Tap all controls in order before time runs out.',
      roundTwoLine: 'Stability dropping. Stay locked in.',
      roundLabel: 'Round',
      cracksLabel: 'Cracks',
      orderLabel: 'Order',
      nextLabel: 'Next',
      paceLabel: 'Speed window',
      paceUnit: 'ms',
      timerLabel: 'Timer',
      wrongOrder: 'Wrong order. The core cracked.',
      tooSlow: 'Too slow. The core is cracking.',
      roundThreeAlert: 'uh oh its breaking even more!',
      resetLine: 'Stability reset. Start from the first control.',
      skipLabel: 'Skip this level',
      skipLine: 'Its okay, I dont deserve love anyways...',
      broken: 'Core shattered. Rebuilding heart...',
      success: 'DNA is saved. I am happy again.',
      controls: ['Patch', 'Sync', 'Pulse', 'Shield', 'Anchor']
    },
    supportFlow: {
      prompt: 'DNA Tech Support Hotline',
      intro: 'Welcome to DNA Tech Support Hotline. Route each scam call correctly.',
      scamSpeakerLabel: '[Scam]',
      dnaSpeakerLabel: '[DNA]',
      hotlineSubtext: 'Handle each scam call with the exact anti-scam sequence.',
      hotlineInstruction: 'Follow the sequence shown for the active call.',
      callProgressLabel: 'Scam calls neutralized',
      actionWrong: 'Wrong action order. Restart this call.',
      callHandled: 'Scam call dropped.',
      actions: {
        answer: 'Answer',
        verify: 'Verify',
        trace: 'Trace',
        firewall: 'Firewall',
        hangup: 'Hang Up'
      },
      callRounds: [
        {
          scam: 'Caller says your romance warranty expires in 4 minutes unless you pay in gift cards.',
          dna: 'Scam detected. Sequence: Answer, Verify, Trace, Hang Up.',
          order: ['answer', 'verify', 'trace', 'hangup']
        },
        {
          scam: 'Caller offers premium sadness insurance and asks for your card details.',
          dna: 'Keep calm. Sequence: Answer, Trace, Firewall, Hang Up.',
          order: ['answer', 'trace', 'firewall', 'hangup']
        },
        {
          scam: 'Caller claims Omar owes taxes in onions and demands immediate payment.',
          dna: 'No onion payments. Sequence: Verify, Trace, Hang Up.',
          order: ['verify', 'trace', 'hangup']
        },
        {
          scam: 'Caller says press 9 to unlock your love account.',
          dna: 'Do not press random numbers. Sequence: Answer, Firewall, Trace, Hang Up.',
          order: ['answer', 'firewall', 'trace', 'hangup']
        },
        {
          scam: 'Caller says your relationship account is suspended and requests your secret code.',
          dna: 'Final trap. Sequence: Verify, Firewall, Hang Up.',
          order: ['verify', 'firewall', 'hangup']
        }
      ],
      realSupport: 'Talk to a real support agent',
      completedLabel: 'Completed!',
      lockedLine: 'Line busy. Neutralize more scam calls first.',
      afterScams: 'Before the next level you must sign the terms of conditions...',
      termsTitle: 'Terms & Conditions of Dating Omar',
      termsSubtext: 'Scroll to the bottom. You still cannot submit without the hidden override.',
      termsClauses: [
        'I accept random food detours at all hours.',
        'I accept at least one dramatic overreaction weekly.',
        'I accept 47 voice notes when one text would do.',
        'I accept that "im not hungry" is never final.',
        'I accept unlimited memes as emotional support.',
        'I accept emergency snack runs as valid date plans.',
        'I accept surprise playlist evaluations without warning.',
        'I accept frequent requests for opinions on outfits.',
        'I accept playful arguments that end in laughter.',
        'I accept that bedtime is negotiable during good talks.',
        'I accept occasional overthinking and instant reassurance duty.',
        'I accept random inside jokes becoming legal language.',
        'I accept that food photos count as important updates.',
        'I accept that car playlists may change every 3 minutes.',
        'I accept that "quick stop" may become an adventure.',
        'I accept that matching outfits are a valid mission.',
        'I accept that fries may be stolen with zero warning.',
        'I accept that every sunset deserves at least one photo.',
        'I accept dramatic pauses for maximum emotional effect.',
        'I accept that "five minutes" may mean twenty.',
        'I accept spontaneous target runs at midnight.',
        'I accept that "you choose" is still a test.',
        'I accept that vibes matter more than logistics sometimes.',
        'I accept that one snack can become a full meal.',
        'I accept that every date needs backup snack options.',
        'I accept that music volume may be debated often.',
        'I accept that cute aggression is unavoidable.',
        'I accept that messages may include 12 emojis minimum.',
        'I accept that memes can be emergency first aid.',
        'I accept that saying "im fine" triggers detective mode.',
        'I accept that comfort checks are always required.',
        'I accept that cuddles may be requested on demand.',
        'I accept that random trivia battles are legally binding.',
        'I accept that goodnight texts are mandatory.',
        'I accept that bad mood repairs include snacks and hugs.',
        'I accept that tea spills may happen after midnight.',
        'I accept that movie choices require committee approval.',
        'I accept that photos will be reviewed for best angle.',
        'I accept that late-night drives may happen for no reason.',
        'I accept that reassurance must be delivered clearly.',
        'I accept that apologies should include dramatic sincerity.',
        'I accept that tiny gifts may cause major happiness.',
        'I accept that random dance breaks are normal.',
        'I accept that updates can arrive in all-caps.',
        'I accept that "dont worry" usually means worry a little.',
        'I accept that date plans can mutate in real time.',
        'I accept that inside jokes outrank normal grammar.',
        'I accept that spicy opinions may appear without warning.',
        'I accept that emotional support shawarma is real.',
        'I accept that playlist criticism should stay constructive.',
        'I accept that "just one episode" is a lie.',
        'I accept... well idk, check mark this and move on.',
        'I accept that this clause exists for mysterious reasons.',
        'I accept that no one reads all clauses but still checks all.',
        'I accept that chaotic updates may occur hourly.',
        'I accept that the cat may hide crucial legal buttons.',
        'I accept that this agreement is powered by feelings.',
        'I accept that happiness has priority over perfect planning.',
        'I accept that dramatic speeches are part of the package.',
        'I accept that love mode may install unexpectedly.'
      ],
      termsTargetCount: 56,
      verificationTitle: 'Extra Verification',
      verificationItems: [
        'I am not speed-running these terms.',
        'I understand Omar may send chaotic updates.',
        'I agree that food photos count as communication.',
        'I agree that "five minutes" may mean twenty.',
        'I accept that memes are emotional first aid.',
        'I confirm dramatic moments are part of the package.'
      ],
      verifyPhraseLabel: 'Type exactly: I ACCEPT CHAOS',
      verifyPhraseTarget: 'I ACCEPT CHAOS',
      verifyCodeLabel: 'Enter security code: 143',
      verifyCode: '143',
      verifyStatusLabel: 'Verification progress',
      secretHint: '',
      secretButton: 'BE A MAN! I AM THE TABLE!',
      secretUnlocked: 'Secret legal override enabled.',
      accept: 'I Accept',
      acceptBlocked: 'Still not fully verified. Keep checking.',
      rhythmTitle: 'Dana Verification',
      rhythmPrompt: 'Tap this rhythm to verify: ♥ ♥ — ♥',
      rhythmButton: 'Tap Verify',
      rhythmFail: 'Not verified. Tap the rhythm: two quick taps, pause, then tap.',
      rhythmSuccess: 'Identity verified. Dana confirmed.',
      loadingIntroLine: 'Huh... that\'s strange, the next level isn\'t ready. Let\'s wait for Omar to finish building it. Here\'s a loading screen.',
      loadingLineOne: 'huh thats strange clicking I accept the terms shouldve moved us along.',
      loadingLineTwo: 'thats strange its not built yet.',
      loadingLineThree: 'Let me put up a loading screen while Omar codes the last of it',
      loadingTitle: 'Currently under construction',
      loadingStatuses: [
        'Checking Omar build pipeline...',
        'Installing romance patch...',
        'Compiling date-night assets...',
        'Calibrating dramatic timing...',
        'Finalizing next level...'
      ],
      loveModePrompt: 'Do you want to install Love Mode?',
      loveModeYes: 'Yes',
      loveModeNo: 'No',
      loveModeInstalling: 'Installing Love Mode!',
      corruptedRestart: 'Corrupted... restarting.',
      loadingVerifyTitle: 'Final Verification',
      loadingVerifyPrompt: 'One last verification before loading continues.',
      loadingVerifyButton: 'Run Final Verification',
      loadingVerifyDone: 'Verification complete. Continuing load...',
      ready: 'Level package downloaded. Moving on.'
    },
    rhythm: {
      prompt: 'Prove you’re Dana: tap in this rhythm.',
      pattern: '♥ ♥ — ♥',
      button: 'TAP',
      fail: 'Again. Follow the hearts.',
      hint: 'two quick taps, then wait, then tap',
      success: 'Okay yeah that’s you.'
    },
    completion: {
      prompt: 'Would you be my Valentine?',
      yes: 'YES',
      no: 'NO',
      success: 'Best answer detected.',
      heartbreakTitle: 'DNA Heartbreak Emergency',
      heartbreakBody: 'DNA is crying. Omar is heartbroken. DNA isnt sure Omar will survive this trauma. How about you try again!',
      retry: 'Try Again'
    }
  }
};

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
const jumpBtn = document.getElementById('jumpBtn');
const resetBtn = document.getElementById('resetBtn');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

titleLine.textContent = COPY.title;
document.title = COPY.pageTitle;
if (jumpBtn) {
  jumpBtn.textContent = COPY.jumpLabel;
  jumpBtn.setAttribute('aria-label', COPY.jumpLabelAria);
}
resetBtn.textContent = COPY.resetLabel;
resetBtn.setAttribute('aria-label', COPY.resetLabelAria);
progressDotsEl.setAttribute('aria-label', COPY.progressLabel);

const gameState = {
  currentLevelIndex: 0,
  completedLevels: new Set(),
  attempts: {},
  soundOn: true
};

let activeCleanup = null;
let audioContext = null;
let cachedVoices = [];
let hasAudioInteraction = false;
let pendingSpeech = null;
let lastNarrationText = '';
let activeSpeechText = null;
let nextLevelPollTimer = null;
let waitingForNarrationBeforeAdvance = false;

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

function doSpeak(text, onStart, forceDefaultVoice = false, voiceOverride = null, voiceSettings = null) {
  if (!('speechSynthesis' in window)) return;
  const synth = window.speechSynthesis;
  try { synth.resume(); } catch (err) { /* ignore */ }

  const utter = new SpeechSynthesisUtterance(text);
  if (!forceDefaultVoice) {
    const selected = voiceOverride || getNarratorVoice();
    if (selected) utter.voice = selected;
  }
  utter.rate = voiceSettings && typeof voiceSettings.rate === 'number' ? voiceSettings.rate : 0.9;
  utter.pitch = voiceSettings && typeof voiceSettings.pitch === 'number' ? voiceSettings.pitch : 0.95;
  utter.volume = 1;
  utter.lang = 'en-US';
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/85d475ed-9e72-424c-b943-8677cb8160dc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix',hypothesisId:'H4',location:'script.js:doSpeak:beforeSpeak',message:'about to call synth.speak',data:{textPreview:text.slice(0,60),forceDefaultVoice,hasVoice:Boolean(utter.voice),voiceName:utter.voice?utter.voice.name:null,speaking:synth.speaking,pending:synth.pending,paused:synth.paused},timestamp:Date.now()})}).catch(()=>{});
  // #endregion

  utter.onstart = () => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/85d475ed-9e72-424c-b943-8677cb8160dc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix',hypothesisId:'H4',location:'script.js:doSpeak:onstart',message:'utterance started',data:{textPreview:text.slice(0,60),forceDefaultVoice},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
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
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/85d475ed-9e72-424c-b943-8677cb8160dc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix',hypothesisId:'H4',location:'script.js:doSpeak:onerror',message:'utterance error event',data:{textPreview:text.slice(0,60),error:e?.error||null,forceDefaultVoice},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    if (activeSpeechText === text) {
      activeSpeechText = null;
    }
    if (e.error === 'canceled' || e.error === 'interrupted') return;
    if (!forceDefaultVoice) {
      setTimeout(() => doSpeak(text, onStart, true, null, voiceSettings), 50);
      return;
    }
    if (onStart) onStart();
  };

  activeSpeechText = text;
  synth.speak(utter);
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/85d475ed-9e72-424c-b943-8677cb8160dc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix-2',hypothesisId:'H6',location:'script.js:doSpeak:afterSpeak',message:'called synth.speak',data:{textPreview:text.slice(0,60),forceDefaultVoice,speaking:synth.speaking,pending:synth.pending,paused:synth.paused,voiceName:utter.voice?utter.voice.name:null,voiceLang:utter.voice?utter.voice.lang:null,voiceLocalService:utter.voice?utter.voice.localService:null},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  setTimeout(() => {
    if (activeSpeechText === text) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/85d475ed-9e72-424c-b943-8677cb8160dc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix-2',hypothesisId:'H6',location:'script.js:doSpeak:watchdog1200ms',message:'no onstart/onend yet after speak',data:{textPreview:text.slice(0,60),forceDefaultVoice,speaking:synth.speaking,pending:synth.pending,paused:synth.paused},timestamp:Date.now()})}).catch(()=>{});
      // #endregion
    }
  }, 1200);
}

function unlockAudioFromInteraction(event) {
  if (!hasAudioInteraction) {
    hasAudioInteraction = true;
  }
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/85d475ed-9e72-424c-b943-8677cb8160dc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix',hypothesisId:'H2',location:'script.js:unlockAudioFromInteraction:entry',message:'unlock handler fired',data:{eventType:event?.type||null,pendingSpeech:Boolean(pendingSpeech),audioContextState:audioContext?audioContext.state:null,hasAudioInteraction},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
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
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/85d475ed-9e72-424c-b943-8677cb8160dc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix',hypothesisId:'H3',location:'script.js:unlockAudioFromInteraction:consumePending',message:'consuming pending speech',data:{textPreview:queued.text.slice(0,60)},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    doSpeak(
      queued.text,
      queued.onStart,
      false,
      queued.voiceOverride || null,
      queued.voiceSettings || null
    );
  }
}

function dnaSpeak(text, onStart, options = null) {
  const captionText = options && options.caption ? options.caption : text;
  setCaption(captionText);
  lastNarrationText = text;
  if (!('speechSynthesis' in window)) return;
  const synth = window.speechSynthesis;
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/85d475ed-9e72-424c-b943-8677cb8160dc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix',hypothesisId:'H3',location:'script.js:dnaSpeak:entry',message:'dnaSpeak invoked',data:{textPreview:text.slice(0,60),hasAudioInteraction,pendingSpeech:Boolean(pendingSpeech),speaking:synth.speaking,pending:synth.pending,paused:synth.paused},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  // If no user gesture yet, queue for the first interaction
  if (!hasAudioInteraction) {
    pendingSpeech = {
      text,
      onStart: onStart || null,
      voiceOverride: options && options.voiceOverride ? options.voiceOverride : null,
      voiceSettings: options && options.voiceSettings ? options.voiceSettings : null
    };
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/85d475ed-9e72-424c-b943-8677cb8160dc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix',hypothesisId:'H3',location:'script.js:dnaSpeak:queuedPending',message:'queued pending speech because no interaction',data:{textPreview:text.slice(0,60)},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    return;
  }
  // Avoid duplicate same-line narration requests colliding on first interaction
  if ((pendingSpeech && pendingSpeech.text === text) || activeSpeechText === text) {
    return;
  }
  // Queue naturally through speechSynthesis instead of cancel/speak races
  doSpeak(
    text,
    onStart,
    false,
    options && options.voiceOverride ? options.voiceOverride : null,
    options && options.voiceSettings ? options.voiceSettings : null
  );
}

function sayWrong() {
  const jokes = COPY.wrongJokes;
  const line = jokes[Math.floor(Math.random() * jokes.length)];
  dnaSpeak(line);
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

function getVoiceKey(voice) {
  if (!voice) return '';
  if (voice.voiceURI && typeof voice.voiceURI === 'string') return voice.voiceURI;
  return `${voice.name}::${voice.lang}`;
}

function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  cachedVoices = window.speechSynthesis.getVoices();
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/85d475ed-9e72-424c-b943-8677cb8160dc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix',hypothesisId:'H1',location:'script.js:loadVoices',message:'voices loaded',data:{voiceCount:cachedVoices.length,enUsCount:cachedVoices.filter(v=>/en-US/i.test(v.lang)).length},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
}

function getNarratorVoice() {
  if (!cachedVoices.length) return null;
  const ralphUs = cachedVoices.find(voice => /ralph/i.test(voice.name) && /en[-_]us/i.test(voice.lang || ''));
  const ralphAny = cachedVoices.find(voice => /ralph/i.test(voice.name));
  const preferred = ralphUs || ralphAny || null;
  if (preferred) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/85d475ed-9e72-424c-b943-8677cb8160dc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix-2',hypothesisId:'H6',location:'script.js:getNarratorVoice:selectedRalph',message:'selected narrator voice',data:{voiceName:preferred.name,voiceLang:preferred.lang,voiceLocalService:preferred.localService},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    return preferred;
  }
  const usEnglish = cachedVoices.find(voice => /en-US/i.test(voice.lang));
  const fallback = usEnglish || cachedVoices[0] || null;
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/85d475ed-9e72-424c-b943-8677cb8160dc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({runId:'pre-fix-2',hypothesisId:'H6',location:'script.js:getNarratorVoice:selectedFallback',message:'selected fallback voice',data:{voiceName:fallback?fallback.name:null,voiceLang:fallback?fallback.lang:null,voiceLocalService:fallback?fallback.localService:null},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  return fallback;
}

function getScamVoice() {
  if (!cachedVoices.length) return null;
  const narratorVoice = getNarratorVoice();
  const candidates = cachedVoices.filter(voice => (
    !narratorVoice || getVoiceKey(voice) !== getVoiceKey(narratorVoice)
  ));
  if (!candidates.length) return null;
  const langPool = narratorVoice && narratorVoice.lang
    ? candidates.filter(voice => voice.lang !== narratorVoice.lang)
    : [];
  return langPool[0] || candidates[0] || null;
}

function scamSpeak(text, onStart) {
  const narratorVoice = getNarratorVoice();
  const scamVoice = getScamVoice();
  const hasSeparateVoice = Boolean(
    scamVoice &&
    (!narratorVoice || getVoiceKey(scamVoice) !== getVoiceKey(narratorVoice))
  );
  const caption = hasSeparateVoice ? text : `${COPY.levels.supportFlow.scamSpeakerLabel} ${text}`;
  const fallbackVoice = narratorVoice || null;
  dnaSpeak(text, onStart, {
    caption,
    voiceOverride: scamVoice || fallbackVoice,
    voiceSettings: { rate: 0.97, pitch: 0.78 }
  });
  return hasSeparateVoice;
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
    const maxLevelIndex = Math.max(0, levels.length - 1);
    if (typeof data.currentLevelIndex === 'number') {
      gameState.currentLevelIndex = clamp(data.currentLevelIndex, 0, maxLevelIndex);
    }
    if (Array.isArray(data.completedLevels)) {
      gameState.completedLevels = new Set(data.completedLevels.filter(n => Number.isInteger(n)));
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
  renderLevel(0);
}

function jumpToLevel() {
  const maxLevel = levels.length;
  const currentLevel = gameState.currentLevelIndex + 1;
  const input = window.prompt(`${COPY.jumpPrompt} (1-${maxLevel})`, `${currentLevel}`);
  if (input === null) return;
  const parsed = Number.parseInt(input.trim(), 10);
  if (!Number.isInteger(parsed) || parsed < 1 || parsed > maxLevel) {
    setCaption(COPY.jumpInvalid);
    return;
  }
  gameState.currentLevelIndex = parsed - 1;
  renderLevel(gameState.currentLevelIndex);
  saveProgress();
}

function updateVoiceEnabled() {
  if (!('speechSynthesis' in window)) {
    setCaption('Voice unavailable in this browser.');
  }
}

function updateProgressDots() {
  if (!progressDotsEl.children.length) {
    for (let i = 0; i < levels.length; i += 1) {
      const dot = document.createElement('span');
      dot.className = 'dot';
      progressDotsEl.appendChild(dot);
    }
  }
  if (progressDotsEl.children.length !== levels.length) {
    progressDotsEl.innerHTML = '';
    for (let i = 0; i < levels.length; i += 1) {
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

function stopNarration() {
  if (!('speechSynthesis' in window)) return;
  pendingSpeech = null;
  activeSpeechText = null;
  window.speechSynthesis.cancel();
}

function clearNextLevelWaiter() {
  if (nextLevelPollTimer) clearTimeout(nextLevelPollTimer);
  nextLevelPollTimer = null;
  waitingForNarrationBeforeAdvance = false;
}

function isNarrationStillPlaying() {
  if (!('speechSynthesis' in window)) return Boolean(activeSpeechText);
  const synth = window.speechSynthesis;
  return Boolean(activeSpeechText || synth.speaking || synth.pending);
}

function celebrate() {
  const count = prefersReducedMotion ? 55 : 200;
  const duration = prefersReducedMotion ? 3400 : 11000;
  const fadeStart = duration * 0.78;
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
      if (p.y > canvas.height + 40) {
        p.y = -20 - Math.random() * canvas.height * 0.15;
        p.x = Math.random() * canvas.width;
      }
      p.rotation += 0.08;
      if (elapsed < fadeStart) {
        p.opacity = 1;
      } else {
        p.opacity = Math.max(0, 1 - ((elapsed - fadeStart) / (duration - fadeStart)));
      }
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.2);
      ctx.restore();
    });
    if (elapsed < duration) {
      requestAnimationFrame(draw);
    } else {
      canvas.remove();
    }
  }
  requestAnimationFrame(draw);
}

function nextLevel() {
  if (waitingForNarrationBeforeAdvance) return;
  const proceed = () => {
    clearNextLevelWaiter();
    stopNarration();
    gameState.completedLevels.add(gameState.currentLevelIndex);
    if (gameState.currentLevelIndex < levels.length - 1) {
      gameState.currentLevelIndex += 1;
      renderLevel(gameState.currentLevelIndex);
    }
    saveProgress();
  };

  if (isNarrationStillPlaying()) {
    waitingForNarrationBeforeAdvance = true;
    const deadline = Date.now() + 14000;
    const poll = () => {
      if (!isNarrationStillPlaying() || Date.now() >= deadline) {
        proceed();
        return;
      }
      nextLevelPollTimer = setTimeout(poll, 80);
    };
    poll();
    return;
  }

  proceed();
}

function renderLevel(index) {
  clearNextLevelWaiter();
  stopNarration();
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
      let extrasRevealTimer = null;
      let extrasNarrationPollTimer = null;
      let resetTimer = null;
      let successTimer = null;
      const extraSliderCleanups = [];
      let helperDismissed = false;
      let extraTauntCooldownUntil = 0;

      let introSpoken = false;
      const tryIntro = () => {
        if (introSpoken) return;
        dnaSpeak(COPY.levels.warmup.voiceIntro, () => {
          introSpoken = true;
        });
      };

      const dismissHelper = () => {
        if (helperDismissed) return;
        helperDismissed = true;
        helper.classList.add('hidden');
      };

      const destroyExtraSliders = () => {
        while (extraSliderCleanups.length) {
          const cleanup = extraSliderCleanups.pop();
          if (typeof cleanup === 'function') cleanup();
        }
      };

      const buildMixedOrientations = (count) => {
        const verticalTarget = Math.max(1, Math.floor(count * 0.45));
        const orientations = [];
        for (let i = 0; i < count; i += 1) {
          orientations.push(i < verticalTarget);
        }
        for (let i = orientations.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = orientations[i];
          orientations[i] = orientations[j];
          orientations[j] = temp;
        }
        return orientations;
      };

      const revealExtraSliders = () => {
        if (!showingExtras) return;
        extraWrap.style.display = 'flex';
        destroyExtraSliders();
        extraWrap.innerHTML = '';
        const extraSliderCount = window.innerWidth <= 520 ? 28 : 44;
        const orientations = buildMixedOrientations(extraSliderCount);
        orientations.forEach((isVertical) => {
          extraWrap.appendChild(createExtraSlider(isVertical));
        });
        extrasTimeout = setTimeout(() => {
          destroyExtraSliders();
          extraWrap.innerHTML = '';
          extraWrap.style.display = 'none';
          showingExtras = false;
          dnaSpeak(COPY.levels.warmup.parental);
          unlocked = true;
          resetSlider();
          locked = false;
        }, 30000);
      };

      const createExtraSlider = (isVertical) => {
        const fakeTrack = document.createElement('div');
        fakeTrack.className = 'slider-track extra-slider';
        if (isVertical) {
          fakeTrack.classList.add('vertical');
          fakeTrack.style.width = '54px';
          fakeTrack.style.height = '150px';
        } else {
          fakeTrack.style.width = `${160 + Math.floor(Math.random() * 4) * 20}px`;
          fakeTrack.style.height = '42px';
        }
        fakeTrack.style.opacity = '0.92';

        const fakeFill = document.createElement('div');
        fakeFill.className = 'slider-fill';
        const fakeThumb = document.createElement('div');
        fakeThumb.className = 'slider-thumb';
        fakeThumb.textContent = isVertical ? '↑' : COPY.levels.warmup.thumb;
        fakeThumb.style.width = '34px';
        fakeThumb.style.height = '34px';

        fakeTrack.appendChild(fakeFill);
        fakeTrack.appendChild(fakeThumb);

        let fakeDragging = false;
        let movedDuringDrag = false;
        let fakeMax = 0;
        let fakeThumbSize = 0;
        const fakePadding = 4;
        let shakeTimer = null;

        const refreshFakeBounds = () => {
          const trackRect = fakeTrack.getBoundingClientRect();
          const thumbRect = fakeThumb.getBoundingClientRect();
          fakeThumbSize = isVertical ? thumbRect.height : thumbRect.width;
          fakeMax = Math.max(
            0,
            (isVertical ? trackRect.height : trackRect.width) - fakeThumbSize - fakePadding * 2
          );
        };

        const setFakePosition = (rawValue) => {
          const clamped = clamp(rawValue, 0, fakeMax);
          if (isVertical) {
            fakeThumb.style.left = `${fakePadding}px`;
            fakeThumb.style.top = `${fakePadding + (fakeMax - clamped)}px`;
            const fillPercent = fakeMax ? (clamped / fakeMax) * 100 : 0;
            fakeFill.style.height = `${fillPercent}%`;
          } else {
            fakeThumb.style.top = `${fakePadding}px`;
            fakeThumb.style.left = `${fakePadding + clamped}px`;
            const fillPercent = fakeMax ? (clamped / fakeMax) * 100 : 0;
            fakeFill.style.width = `${fillPercent}%`;
          }
        };

        const getFakeRawValue = (event) => {
          const rect = fakeTrack.getBoundingClientRect();
          if (isVertical) {
            const fromTop = event.clientY - rect.top - fakeThumbSize / 2 - fakePadding;
            return fakeMax - fromTop;
          }
          return event.clientX - rect.left - fakeThumbSize / 2 - fakePadding;
        };

        const onFakeDown = (event) => {
          fakeDragging = true;
          movedDuringDrag = false;
          fakeTrack.setPointerCapture(event.pointerId);
          refreshFakeBounds();
          setFakePosition(getFakeRawValue(event));
        };

        const onFakeMove = (event) => {
          if (!fakeDragging) return;
          movedDuringDrag = true;
          setFakePosition(getFakeRawValue(event));
        };

        const onFakeUp = (event) => {
          if (!fakeDragging) return;
          fakeDragging = false;
          if (fakeTrack.hasPointerCapture(event.pointerId)) {
            fakeTrack.releasePointerCapture(event.pointerId);
          }
          if (!movedDuringDrag) return;
          playSound('error');
          fakeTrack.classList.remove('shake-violent');
          fakeTrack.classList.add('shake-violent');
          if (shakeTimer) clearTimeout(shakeTimer);
          shakeTimer = setTimeout(() => {
            fakeTrack.classList.remove('shake-violent');
          }, 360);
          const now = Date.now();
          if (now >= extraTauntCooldownUntil) {
            extraTauntCooldownUntil = now + 850;
            sayWrong();
          }
        };

        fakeTrack.addEventListener('pointerdown', onFakeDown);
        fakeTrack.addEventListener('pointermove', onFakeMove);
        fakeTrack.addEventListener('pointerup', onFakeUp);
        fakeTrack.addEventListener('pointercancel', onFakeUp);

        const initFrame = requestAnimationFrame(() => {
          refreshFakeBounds();
          // Vertical sliders start from bottom (0 progress).
          setFakePosition(0);
        });

        extraSliderCleanups.push(() => {
          if (shakeTimer) clearTimeout(shakeTimer);
          cancelAnimationFrame(initFrame);
          fakeTrack.classList.remove('shake-violent');
          fakeTrack.removeEventListener('pointerdown', onFakeDown);
          fakeTrack.removeEventListener('pointermove', onFakeMove);
          fakeTrack.removeEventListener('pointerup', onFakeUp);
          fakeTrack.removeEventListener('pointercancel', onFakeUp);
        });

        return fakeTrack;
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
          track.classList.remove('shake');
          track.classList.add('shake');
          setTimeout(() => track.classList.remove('shake'), 320);
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
        dismissHelper();
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
            if (extrasRevealTimer) clearTimeout(extrasRevealTimer);
            if (extrasNarrationPollTimer) clearTimeout(extrasNarrationPollTimer);
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
            extraWrap.style.display = 'none';
            destroyExtraSliders();
            extraWrap.innerHTML = '';
            extrasRevealTimer = setTimeout(() => {
              dnaSpeak(COPY.levels.warmup.foundMore);
              const revealDeadline = Date.now() + 12000;
              const waitForNarration = () => {
                if (!showingExtras) return;
                if (!isNarrationStillPlaying() || Date.now() >= revealDeadline) {
                  extrasNarrationPollTimer = null;
                  revealExtraSliders();
                  return;
                }
                extrasNarrationPollTimer = setTimeout(waitForNarration, 80);
              };
              waitForNarration();
            }, 700);
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
          dismissHelper();
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
        destroyExtraSliders();
        window.removeEventListener('resize', refreshBounds);
        if (resetTimer) clearTimeout(resetTimer);
        if (extrasTimeout) clearTimeout(extrasTimeout);
        if (extrasRevealTimer) clearTimeout(extrasRevealTimer);
        if (extrasNarrationPollTimer) clearTimeout(extrasNarrationPollTimer);
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

      const shuffleKeys = (items) => {
        const arr = items.slice();
        for (let i = arr.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
        return arr;
      };

      const renderKeys = () => {
        leftKeys.innerHTML = '';
        rightKeys.innerHTML = '';
        keyButtons.length = 0;
        clearSelectedKey();
        const keys = shuffleKeys(getCurrentKeys());
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
        if (attempts === 1) {
          dnaSpeak(COPY.levels.tilt.tryAgain);
        } else if (attempts === 2) {
          dnaSpeak(COPY.levels.tilt.tryAgain);
          if (thinkTimer) clearTimeout(thinkTimer);
          thinkTimer = setTimeout(() => {
            dnaSpeak(COPY.levels.tilt.think);
            allowRotate = true;
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
        dragging = true;
        startX = event.clientX;
        startAngle = angle;
      };

      const onRotateMove = (event) => {
        if (!dragging) return;
        const delta = (event.clientX - startX) * 0.4;
        const nextAngle = clamp(startAngle + delta, -45, 45);
        setAngle(nextAngle);
        if (Math.abs(nextAngle) <= 2) {
          angleLocked = true;
          allowRotate = false;
          setAngle(0);
          dnaSpeak(COPY.levels.tilt.fixed);
        }
      };

      const onRotateUp = () => {
        dragging = false;
      };

      holdBtn.addEventListener('pointerdown', onHoldDown);
      window.addEventListener('pointerup', onHoldUp);
      window.addEventListener('pointercancel', onHoldUp);
      meterShell.addEventListener('pointerdown', onRotateDown);
      window.addEventListener('pointermove', onRotateMove);
      window.addEventListener('pointerup', onRotateUp);

      setAngle(0);
      updateMeter();

      return () => {
        holdBtn.removeEventListener('pointerdown', onHoldDown);
        window.removeEventListener('pointerup', onHoldUp);
        window.removeEventListener('pointercancel', onHoldUp);
        meterShell.removeEventListener('pointerdown', onRotateDown);
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
      let successTimer = null;
      const totalQuestions = questions.length;

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

        const shuffledOpts = [...current.opts];
        for (let i = shuffledOpts.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledOpts[i], shuffledOpts[j]] = [shuffledOpts[j], shuffledOpts[i]];
        }

        shuffledOpts.forEach(opt => {
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
          q: 'T/F: Our first solo date was at a bowling alley.',
          answer: false
        },
        {
          q: 'T/F: I had a crush on you just because you gave me a little plushie.',
          answer: true
        },
        {
          q: 'T/F: You love when I leave your texts on read for hours.',
          answer: false
        },
        {
          q: 'T/F: Even when you say "I\'m fine," you want me to notice you\'re not.',
          answer: true
        },
        {
          q: 'T/F: You would pick cold fries over hot fries every time.',
          answer: false
        },
        {
          q: 'T/F: You hate when I make you laugh during serious moments.',
          answer: true
        },
        {
          q: 'T/F: You would rather cancel plans with me and clean your room instead.',
          answer: false
        },
        {
          q: 'T/F: No matter how busy life gets, I\'d still make time for you every time.',
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
    id: 'decode-dana-text',
    title: "Decode Dana's Text",
    prompt: COPY.levels.decodeText.prompt,
    render(container) {
      const stage = document.createElement('div');
      stage.className = 'decode-stage';
      const phone = document.createElement('div');
      phone.className = 'decode-phone';
      const typing = document.createElement('div');
      typing.className = 'decode-typing';
      typing.textContent = COPY.levels.decodeText.typing;
      const danaLabel = document.createElement('div');
      danaLabel.className = 'decode-label';
      danaLabel.textContent = COPY.levels.decodeText.danaLabel;
      const bubble = document.createElement('div');
      bubble.className = 'decode-bubble';
      const omarLabel = document.createElement('div');
      omarLabel.className = 'decode-label omar';
      omarLabel.textContent = COPY.levels.decodeText.omarLabel;
      const options = document.createElement('div');
      options.className = 'decode-options';

      phone.appendChild(typing);
      phone.appendChild(danaLabel);
      phone.appendChild(bubble);
      phone.appendChild(omarLabel);
      phone.appendChild(options);
      stage.appendChild(phone);
      container.appendChild(stage);

      const rounds = [
        {
          text: "I'm not hungry",
          choices: [
            { key: 'A', label: 'Listen to her.' },
            { key: 'B', label: 'Begin driving to the nearest Chipotle.' },
            { key: 'C', label: 'Book a flight to Africa with the boys to clear your head.' },
            { key: 'D', label: "Beg her to tell you what she's craving, then after the 4th time give her options." }
          ],
          answer: 'D',
          reaction: 'Correct. Real Omar behavior detected.'
        },
        {
          text: "I'm fine.",
          choices: [
            { key: 'A', label: 'Haram...' },
            { key: 'B', label: 'Send one thumbs-up and mute the chat. "Based  btw"' },
            { key: 'C', label: 'Ask what happened and comfort her until she smiles.' },
            { key: 'D', label: 'Call her mom and submit a formal complaint.' }
          ],
          answer: 'C',
          reaction: 'Exactly. Ask, then stay.'
        },
        {
          text: 'No no, idk.... you pick.',
          choices: [
            { key: 'A', label: 'Spin a globe, point randomly, and book non-refundable tickets.' },
            { key: 'B', label: 'Say "idk" back.' },
            { key: 'C', label: 'Pick two options you know she likes and let her choose the final one.' },
            { key: 'D', label: 'Go to the place OMAR likes.' }
          ],
          answer: 'C',
          reaction: 'Yup. Controlled choices = peace.'
        },
        {
          text: 'Do whatever you want.',
          choices: [
            { key: 'A', label: 'Believe that literally.' },
            { key: 'B', label: 'Beg her to not be upset with you' },
            { key: 'C', label: 'Open a livestream and let chat vote on your next move.' },
            { key: 'D', label: 'Go silent for an hour.' }
          ],
          answer: 'B',
          reaction: 'Smart. Confirmation saves lives.'
        },
        {
          text: 'I said I do NOT want hangout.',
          choices: [
            { key: 'A', label: 'Continue building a fence' },
            { key: 'B', label: 'Call her mother and complain about her daughter.' },
            { key: 'C', label: 'Ignore her and pick her up' },
            { key: 'D', label: 'Make the plans anyways, you already know its going to work out...jk apologize profusely ofcourse then pick her up:)' }
          ],
          answer: 'D',
          reaction: 'Certified Omar answer.'
        }
      ];

      let roundIndex = 0;
      let revealTimer = null;
      let nextTimer = null;
      let locked = false;

      const renderRound = () => {
        const round = rounds[roundIndex];
        setSubtext(`Round ${roundIndex + 1}/${rounds.length}`);
        typing.classList.remove('hidden');
        danaLabel.classList.add('hidden');
        bubble.classList.add('hidden');
        omarLabel.classList.add('hidden');
        options.innerHTML = '';
        locked = true;
        revealTimer = setTimeout(() => {
          typing.classList.add('hidden');
          danaLabel.classList.remove('hidden');
          bubble.classList.remove('hidden');
          omarLabel.classList.remove('hidden');
          bubble.textContent = `Dana says: "${round.text}"`;
          round.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'decode-option';
            btn.dataset.choice = choice.key;
            btn.textContent = `${choice.key}) ${choice.label}`;
            btn.setAttribute('aria-label', `${choice.key}) ${choice.label}`);
            options.appendChild(btn);
          });
          locked = false;
        }, 800);
      };

      const onOption = (event) => {
        if (locked) return;
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const button = target.closest('.decode-option');
        if (!button) return;
        const picked = button.dataset.choice;
        const round = rounds[roundIndex];
        if (!picked) return;
        if (picked !== round.answer) {
          playSound('error');
          recordAttempt('decode-dana-text');
          sayWrong();
          return;
        }
        playSound('success');
        setCaption(round.reaction);
        dnaSpeak(round.reaction);
        roundIndex += 1;
        if (roundIndex >= rounds.length) {
          nextTimer = setTimeout(() => nextLevel(), 1200);
          return;
        }
        renderRound();
      };

      options.addEventListener('click', onOption);
      dnaSpeak(COPY.levels.decodeText.intro);
      renderRound();

      return () => {
        options.removeEventListener('click', onOption);
        if (revealTimer) clearTimeout(revealTimer);
        if (nextTimer) clearTimeout(nextTimer);
      };
    }
  },
  {
    id: 'date-draft',
    title: 'Date Draft',
    prompt: COPY.levels.dateDraft.prompt,
    render(container) {
      const stage = document.createElement('div');
      stage.className = 'date-draft-stage';
      const timer = document.createElement('div');
      timer.className = 'date-draft-timer';
      const groups = document.createElement('div');
      groups.className = 'date-draft-groups';
      const submit = document.createElement('button');
      submit.className = 'btn primary';
      submit.textContent = COPY.levels.dateDraft.submit;
      submit.setAttribute('aria-label', COPY.levels.dateDraft.submit);
      stage.appendChild(timer);
      stage.appendChild(groups);
      stage.appendChild(submit);
      container.appendChild(stage);

      const categories = [
        {
          id: 'food',
          title: 'Food',
          options: [
            'Inside Out',
            'Chipotle',
            'Sushi',
            'Taco Bell',
            'Homemade Meal?',
            'In-N-Out',
            'Shawarma',
            'Korean BBQ',
            'Milk Shake and Fries',
            'Pickle Kit!',
            'Boba + snacks',
            'Pizza night',
            'Crepes',
            'Ice cream run'
          ]
        },
        {
          id: 'activity',
          title: 'Activity',
          options: [
            'Arcade',
            'Beach walk',
            'Movie night',
            'Mini golf',
            'Bowling',
            'Sunset drive',
            'Late-night target run where we buy a bunch of stuff and we cook together',
            'Photo booth mission',
            'Karaoke',
            'Board game battle',
            'Cafe hopping',
            'VR',
            'Laser Gun',
            'Paint Ball',
            'Make our own milkshakes'
          ]
        },
        {
          id: 'vibe',
          title: 'Vibe',
          options: [
            'Cozy',
            'Chaotic',
            'Fancy',
            'Late-night',
            'Cutesy',
            'Hangry',
            'No phones, just us',
            'Laugh till we cry',
            'Scary',
            'Calm and romantic',
            'Unhinged but wholesome'
          ]
        }
      ];

      const picked = {
        food: null,
        activity: null,
        vibe: null
      };

      let deadline = Date.now() + 20000;
      let tickTimer = null;
      let finishTimer = null;
      let locked = false;

      const updateSelectedStyles = () => {
        groups.querySelectorAll('.choice-card').forEach((card) => {
          const category = card.getAttribute('data-category');
          const option = card.getAttribute('data-option');
          const isSelected = Boolean(category) && picked[category] === option;
          card.classList.toggle('selected', isSelected);
        });
      };

      const resetRound = () => {
        picked.food = null;
        picked.activity = null;
        picked.vibe = null;
        updateSelectedStyles();
        locked = false;
        deadline = Date.now() + 20000;
      };

      const updateTimer = () => {
        const remainMs = Math.max(0, deadline - Date.now());
        const remainSec = (remainMs / 1000).toFixed(1);
        timer.textContent = `${COPY.levels.dateDraft.timerLabel}: ${remainSec}s`;
        if (remainMs <= 0 && !locked) {
          locked = true;
          playSound('error');
          recordAttempt('date-draft');
          setCaption(COPY.levels.dateDraft.timeout);
          dnaSpeak(COPY.levels.dateDraft.timeout);
          resetRound();
        }
      };

      const isIllegalCombo = () =>
        picked.food === 'Sushi' &&
        picked.activity === 'Arcade' &&
        picked.vibe === 'Late-night';

      const onPick = (event) => {
        if (locked) return;
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const card = target.closest('.choice-card');
        if (!card) return;
        const category = card.getAttribute('data-category');
        const option = card.getAttribute('data-option');
        if (!category || !option) return;
        picked[category] = option;
        updateSelectedStyles();
        playSound('click');
      };

      const onSubmit = () => {
        if (locked) return;
        if (!picked.food || !picked.activity || !picked.vibe) {
          setCaption(COPY.levels.dateDraft.needsAll);
          return;
        }
        if (isIllegalCombo()) {
          playSound('error');
          recordAttempt('date-draft');
          setCaption(COPY.levels.dateDraft.illegal);
          dnaSpeak(COPY.levels.dateDraft.illegal);
          resetRound();
          return;
        }
        locked = true;
        playSound('success');
        setCaption(`${COPY.levels.dateDraft.success} ${picked.food} + ${picked.activity} + ${picked.vibe}.`);
        dnaSpeak(COPY.levels.dateDraft.success);
        finishTimer = setTimeout(() => nextLevel(), 900);
      };

      categories.forEach((category) => {
        const group = document.createElement('section');
        group.className = 'date-draft-group';
        const heading = document.createElement('h4');
        heading.className = 'date-draft-heading';
        heading.textContent = category.title;
        const grid = document.createElement('div');
        grid.className = 'choice-grid';

        category.options.forEach((option) => {
          const card = document.createElement('button');
          card.className = 'choice-card';
          card.setAttribute('type', 'button');
          card.setAttribute('data-category', category.id);
          card.setAttribute('data-option', option);
          card.setAttribute('aria-label', `${category.title}: ${option}`);
          card.textContent = option;
          grid.appendChild(card);
        });

        group.appendChild(heading);
        group.appendChild(grid);
        groups.appendChild(group);
      });

      groups.addEventListener('click', onPick);
      submit.addEventListener('click', onSubmit);

      setSubtext(COPY.levels.dateDraft.pickHint);
      dnaSpeak(COPY.levels.dateDraft.intro);
      updateTimer();
      tickTimer = setInterval(updateTimer, 100);

      return () => {
        groups.removeEventListener('click', onPick);
        submit.removeEventListener('click', onSubmit);
        if (tickTimer) clearInterval(tickTimer);
        if (finishTimer) clearTimeout(finishTimer);
      };
    }
  },
  {
    id: 'voice-love',
    title: 'Voice Lock',
    prompt: COPY.levels.voiceLove.prompt,
    render(container) {
      const stage = document.createElement('div');
      stage.className = 'voice-stage';
      const phrase = document.createElement('div');
      phrase.className = 'voice-phrase';
      phrase.textContent = `"${COPY.levels.voiceLove.targetPhrase}"`;
      const transcript = document.createElement('div');
      transcript.className = 'voice-transcript';
      transcript.textContent = `${COPY.levels.voiceLove.heardLabel}: -`;
      const controls = document.createElement('div');
      controls.className = 'voice-controls';
      const listenBtn = document.createElement('button');
      listenBtn.className = 'btn primary';
      listenBtn.textContent = COPY.levels.voiceLove.listen;
      listenBtn.setAttribute('aria-label', COPY.levels.voiceLove.listen);
      const fallback = document.createElement('div');
      fallback.className = 'voice-fallback';
      const fallbackLabel = document.createElement('div');
      fallbackLabel.className = 'voice-fallback-label';
      fallbackLabel.textContent = COPY.levels.voiceLove.fallbackLabel;
      const fallbackInput = document.createElement('input');
      fallbackInput.className = 'text-input';
      fallbackInput.setAttribute('aria-label', COPY.levels.voiceLove.fallbackLabel);
      fallbackInput.placeholder = COPY.levels.voiceLove.targetPhrase;
      const fallbackBtn = document.createElement('button');
      fallbackBtn.className = 'btn ghost';
      fallbackBtn.textContent = COPY.levels.voiceLove.fallbackButton;
      fallbackBtn.setAttribute('aria-label', COPY.levels.voiceLove.fallbackButton);

      controls.appendChild(listenBtn);
      fallback.appendChild(fallbackLabel);
      fallback.appendChild(fallbackInput);
      fallback.appendChild(fallbackBtn);
      stage.appendChild(phrase);
      stage.appendChild(transcript);
      stage.appendChild(controls);
      stage.appendChild(fallback);
      container.appendChild(stage);

      const RecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
      const normalizePhrase = value => value.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
      const targetPhrase = normalizePhrase(COPY.levels.voiceLove.targetPhrase);

      let recognition = null;
      let listening = false;
      let solved = false;
      let lastTranscript = '';
      let autoStopTimer = null;
      let successTimer = null;
      let micReady = false;
      let requestingMic = false;

      const stopAutoTimer = () => {
        if (autoStopTimer) clearTimeout(autoStopTimer);
        autoStopTimer = null;
      };

      const stopListening = () => {
        if (!recognition || !listening) return;
        try {
          recognition.stop();
        } catch (err) {
          // ignore stop race
        }
      };

      const completeLevel = () => {
        if (solved) return;
        solved = true;
        listening = false;
        stopAutoTimer();
        listenBtn.disabled = true;
        fallbackInput.disabled = true;
        fallbackBtn.disabled = true;
        playSound('success');
        setCaption(COPY.levels.voiceLove.success);
        dnaSpeak(COPY.levels.voiceLove.success);
        successTimer = setTimeout(() => nextLevel(), 1000);
      };

      const matchesTarget = (value) => {
        const normalized = normalizePhrase(value);
        return normalized.includes(targetPhrase);
      };

      const checkPhrase = (value) => {
        if (matchesTarget(value)) {
          completeLevel();
          return true;
        }
        return false;
      };

      const registerFailure = () => {
        if (solved) return;
        playSound('error');
        recordAttempt('voice-love');
        setCaption(COPY.levels.voiceLove.tryAgain);
        dnaSpeak(COPY.levels.voiceLove.tryAgain);
      };

      const submitFallbackPhrase = () => {
        if (solved) return;
        const typed = fallbackInput.value.trim();
        if (!typed) {
          setCaption(COPY.levels.voiceLove.tryAgain);
          return;
        }
        transcript.textContent = `${COPY.levels.voiceLove.heardLabel}: "${typed}"`;
        if (!checkPhrase(typed)) {
          registerFailure();
        }
      };

      const requestMicAccess = async () => {
        if (micReady) return true;
        if (requestingMic) return false;
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          setCaption(COPY.levels.voiceLove.unsupported);
          return false;
        }
        requestingMic = true;
        try {
          if (navigator.permissions && navigator.permissions.query) {
            try {
              const status = await navigator.permissions.query({ name: 'microphone' });
              if (status.state === 'denied') {
                setCaption(COPY.levels.voiceLove.micDenied);
                return false;
              }
            } catch (err) {
              // ignore permissions API differences
            }
          }
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach(track => track.stop());
          micReady = true;
          return true;
        } catch (err) {
          setCaption(COPY.levels.voiceLove.micDenied);
          return false;
        } finally {
          requestingMic = false;
        }
      };

      if (RecognitionCtor) {
        recognition = new RecognitionCtor();
        recognition.lang = 'en-US';
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
          listening = true;
          lastTranscript = '';
          listenBtn.textContent = COPY.levels.voiceLove.listening;
          listenBtn.setAttribute('aria-label', COPY.levels.voiceLove.listening);
          stopAutoTimer();
          autoStopTimer = setTimeout(() => stopListening(), 7000);
        };

        recognition.onresult = (event) => {
          let resultText = '';
          for (let i = event.resultIndex; i < event.results.length; i += 1) {
            resultText += `${event.results[i][0].transcript} `;
          }
          resultText = resultText.trim();
          if (!resultText) return;
          lastTranscript = resultText;
          transcript.textContent = `${COPY.levels.voiceLove.heardLabel}: "${resultText}"`;
          if (checkPhrase(resultText)) {
            stopListening();
          }
        };

        recognition.onerror = (event) => {
          listening = false;
          stopAutoTimer();
          listenBtn.textContent = COPY.levels.voiceLove.listen;
          listenBtn.setAttribute('aria-label', COPY.levels.voiceLove.listen);
          if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
            setCaption(COPY.levels.voiceLove.micDenied);
            return;
          }
          registerFailure();
        };

        recognition.onend = () => {
          const wasListening = listening;
          listening = false;
          stopAutoTimer();
          listenBtn.textContent = COPY.levels.voiceLove.listen;
          listenBtn.setAttribute('aria-label', COPY.levels.voiceLove.listen);
          if (solved || !wasListening) return;
          if (!checkPhrase(lastTranscript)) {
            registerFailure();
          }
        };
      } else {
        listenBtn.disabled = true;
        setSubtext(COPY.levels.voiceLove.unsupported);
      }

      const onListen = () => {
        const startListening = async () => {
          if (solved) return;
          if (!recognition) {
            setCaption(COPY.levels.voiceLove.unsupported);
            return;
          }
          if (listening) {
            stopListening();
            return;
          }
          playSound('click');
          const allowed = await requestMicAccess();
          if (!allowed) {
            fallbackInput.focus();
            return;
          }
          try {
            recognition.start();
          } catch (err) {
            setCaption('Mic is warming up. Tap Listen again.');
          }
        };
        startListening();
      };

      const onFallbackKeydown = (event) => {
        if (event.key !== 'Enter') return;
        event.preventDefault();
        submitFallbackPhrase();
      };

      listenBtn.addEventListener('click', onListen);
      fallbackBtn.addEventListener('click', submitFallbackPhrase);
      fallbackInput.addEventListener('keydown', onFallbackKeydown);

      if (RecognitionCtor) {
        setSubtext(COPY.levels.voiceLove.subtext);
      }
      dnaSpeak(COPY.levels.voiceLove.intro);

      return () => {
        listenBtn.removeEventListener('click', onListen);
        fallbackBtn.removeEventListener('click', submitFallbackPhrase);
        fallbackInput.removeEventListener('keydown', onFallbackKeydown);
        stopAutoTimer();
        if (recognition) {
          recognition.onstart = null;
          recognition.onresult = null;
          recognition.onerror = null;
          recognition.onend = null;
          stopListening();
        }
        if (successTimer) clearTimeout(successTimer);
      };
    }
  },
  {
    id: 'too-much-love',
    title: 'Too Much Love',
    prompt: COPY.levels.tooMuchLove.prompt,
    render(container) {
      const stage = document.createElement('div');
      stage.className = 'core-stage';
      const hud = document.createElement('div');
      hud.className = 'core-hud';
      const roundPill = document.createElement('div');
      roundPill.className = 'core-pill';
      const crackPill = document.createElement('div');
      crackPill.className = 'core-pill';
      const pacePill = document.createElement('div');
      pacePill.className = 'core-pill';
      const timerPill = document.createElement('div');
      timerPill.className = 'core-pill timer';
      hud.appendChild(roundPill);
      hud.appendChild(crackPill);
      hud.appendChild(pacePill);
      hud.appendChild(timerPill);

      const layout = document.createElement('div');
      layout.className = 'core-layout';
      const heartPanel = document.createElement('div');
      heartPanel.className = 'core-heart-panel';
      const controlPanel = document.createElement('div');
      controlPanel.className = 'core-control-panel';

      const heartShell = document.createElement('div');
      heartShell.className = 'core-heart-shell';
      const heart = document.createElement('div');
      heart.className = 'core-heart';
      const cracks = document.createElement('div');
      cracks.className = 'core-cracks';
      const crackSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      crackSvg.classList.add('core-crack-overlay');
      crackSvg.setAttribute('viewBox', '0 0 120 110');
      crackSvg.setAttribute('aria-hidden', 'true');
      const crackPaths = [
        'M60 18 L57 36 L63 48 L56 67 L60 89',
        'M46 42 L57 50 L44 67',
        'M74 44 L63 52 L76 69',
        'M36 66 L52 71',
        'M68 70 L84 64',
        'M60 33 L66 26 L74 30'
      ];
      const gradientId = `coreHeartGrad-${Math.floor(Math.random() * 1000000)}`;
      const glowId = `coreHeartGlow-${Math.floor(Math.random() * 1000000)}`;
      heart.innerHTML = `
        <svg class="core-heart-svg" viewBox="0 0 120 110" aria-hidden="true">
          <defs>
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffb4ca"></stop>
              <stop offset="52%" stop-color="#ff5f8f"></stop>
              <stop offset="100%" stop-color="#d22b62"></stop>
            </linearGradient>
            <radialGradient id="${glowId}" cx="36%" cy="28%" r="72%">
              <stop offset="0%" stop-color="rgba(255,255,255,0.72)"></stop>
              <stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
            </radialGradient>
          </defs>
          <path class="core-heart-shape" d="M60 104 C20 75 6 52 10 30 C13 13 27 8 39 16 C46 21 53 29 60 37 C67 29 74 21 81 16 C93 8 107 13 110 30 C114 52 100 75 60 104 Z" fill="url(#${gradientId})"></path>
          <path class="core-heart-sheen" d="M60 104 C20 75 6 52 10 30 C13 13 27 8 39 16 C46 21 53 29 60 37 C67 29 74 21 81 16 C93 8 107 13 110 30 C114 52 100 75 60 104 Z" fill="url(#${glowId})"></path>
        </svg>
      `;
      const crackLines = Array.from({ length: 6 }, (_, i) => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        line.classList.add('core-crack');
        line.setAttribute('d', crackPaths[i]);
        line.style.strokeDasharray = '130';
        line.style.strokeDashoffset = '130';
        crackSvg.appendChild(line);
        return line;
      });
      cracks.appendChild(crackSvg);
      const shards = document.createElement('div');
      shards.className = 'core-shards';
      Array.from({ length: 7 }, (_, i) => {
        const shard = document.createElement('span');
        shard.className = `core-shard shard-${i + 1}`;
        shards.appendChild(shard);
      });
      heartShell.appendChild(heart);
      heartShell.appendChild(cracks);
      heartShell.appendChild(shards);

      const orderLine = document.createElement('div');
      orderLine.className = 'core-order';
      const stepTrack = document.createElement('div');
      stepTrack.className = 'core-step-track';
      const controls = document.createElement('div');
      controls.className = 'core-controls';
      const skipBtn = document.createElement('button');
      skipBtn.className = 'btn ghost core-skip hidden';
      skipBtn.textContent = COPY.levels.tooMuchLove.skipLabel;
      skipBtn.setAttribute('aria-label', COPY.levels.tooMuchLove.skipLabel);

      heartPanel.appendChild(heartShell);
      controlPanel.appendChild(orderLine);
      controlPanel.appendChild(stepTrack);
      controlPanel.appendChild(controls);
      controlPanel.appendChild(skipBtn);
      layout.appendChild(heartPanel);
      layout.appendChild(controlPanel);
      stage.appendChild(hud);
      stage.appendChild(layout);
      container.appendChild(stage);

      const controlNames = COPY.levels.tooMuchLove.controls.slice();
      const speedWindows = [3000, 3000, 3000];
      const visualCrackCap = crackLines.length;
      const maxCracks = visualCrackCap;
      const moveInterval = prefersReducedMotion ? 1400 : 900;

      const stepDots = controlNames.map(() => {
        const dot = document.createElement('span');
        dot.className = 'core-step-dot';
        stepTrack.appendChild(dot);
        return dot;
      });

      const buttons = controlNames.map((label, index) => {
        const btn = document.createElement('button');
        btn.className = 'core-control';
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-label', label);
        btn.dataset.control = label;
        const badge = document.createElement('span');
        badge.className = 'core-control-index';
        badge.textContent = `${index + 1}`;
        const text = document.createElement('span');
        text.className = 'core-control-label';
        text.textContent = label;
        btn.appendChild(badge);
        btn.appendChild(text);
        controls.appendChild(btn);
        return btn;
      });

      let round = 1;
      let step = 0;
      let crackCount = 0;
      let locked = false;
      let inputEnabled = false;
      let roundTwoAnnounced = false;
      let roundThreeAnnounced = false;
      let failCount = 0;
      let skipShown = false;
      let stepTimer = null;
      let moveTimer = null;
      let successTimer = null;
      let resetTimer = null;
      let hintTimer = null;
      let impactTimer = null;
      let timerTicker = null;
      let stepDeadline = 0;

      const stopStepTimer = () => {
        if (stepTimer) clearTimeout(stepTimer);
        stepTimer = null;
        if (timerTicker) clearInterval(timerTicker);
        timerTicker = null;
        stepDeadline = 0;
        updateTimerPill();
      };

      const stopMoveTimer = () => {
        if (moveTimer) clearInterval(moveTimer);
        moveTimer = null;
      };

      const stopHintTimer = () => {
        if (hintTimer) clearTimeout(hintTimer);
        hintTimer = null;
      };

      const stopResetTimer = () => {
        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = null;
      };

      const stopImpactTimer = () => {
        if (impactTimer) clearTimeout(impactTimer);
        impactTimer = null;
        heartShell.classList.remove('impact');
        heartShell.classList.remove('fracture');
      };

      const getCurrentWindow = () => {
        if (controls.classList.contains('moving')) return 7000;
        return speedWindows[round - 1];
      };

      const updateHud = () => {
        roundPill.textContent = `${COPY.levels.tooMuchLove.roundLabel} ${round}/3`;
        crackPill.textContent = `${COPY.levels.tooMuchLove.cracksLabel} ${crackCount}/${maxCracks}`;
        pacePill.textContent = `${COPY.levels.tooMuchLove.paceLabel} ${getCurrentWindow()}${COPY.levels.tooMuchLove.paceUnit}`;
      };

      const updateTimerPill = () => {
        if (!inputEnabled || !stepDeadline) {
          timerPill.textContent = `${COPY.levels.tooMuchLove.timerLabel}: --`;
          return;
        }
        const remain = Math.max(0, stepDeadline - Date.now());
        timerPill.textContent = `${COPY.levels.tooMuchLove.timerLabel}: ${(remain / 1000).toFixed(1)}s`;
      };

      const updateHeart = () => {
        heartShell.style.setProperty('--crack-progress', `${(crackCount / maxCracks).toFixed(2)}`);
        crackLines.forEach((line, index) => {
          const active = index < Math.min(crackCount, visualCrackCap);
          line.style.opacity = active ? '1' : '0';
          line.style.strokeDashoffset = active ? '0' : '130';
        });
        heartShell.classList.toggle('danger', crackCount >= 4);
      };

      const updateOrder = () => {
        const path = controlNames
          .map((name, index) => (index === step ? `[${name}]` : name))
          .join(' -> ');
        orderLine.textContent = `${COPY.levels.tooMuchLove.orderLabel}: ${path}`;
      };

      const updateStepTrack = () => {
        stepDots.forEach((dot, index) => {
          dot.classList.toggle('done', index < step);
          dot.classList.toggle('active', index === step);
        });
      };

      const randomizeControlPositions = () => {
        const width = controls.clientWidth;
        const height = controls.clientHeight;
        if (!width || !height) return;
        const gap = 10;
        const baseWidth = Math.max(...buttons.map(btn => btn.offsetWidth || 128));
        const baseHeight = Math.max(...buttons.map(btn => btn.offsetHeight || 44));
        const maxX = Math.max(0, width - baseWidth);
        const maxY = Math.max(0, height - baseHeight);
        let cols = Math.max(2, Math.floor((width + gap) / (baseWidth + gap)));
        let rows = Math.max(2, Math.floor((height + gap) / (baseHeight + gap)));
        while (cols * rows < buttons.length) rows += 1;
        const slotStepX = cols > 1 ? maxX / (cols - 1) : 0;
        const slotStepY = rows > 1 ? maxY / (rows - 1) : 0;

        const slots = [];
        for (let row = 0; row < rows; row += 1) {
          for (let col = 0; col < cols; col += 1) {
            slots.push({
              x: col * slotStepX,
              y: row * slotStepY
            });
          }
        }
        for (let i = slots.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          [slots[i], slots[j]] = [slots[j], slots[i]];
        }

        buttons.forEach((btn, index) => {
          const slot = slots[index % slots.length] || { x: 0, y: 0 };
          const widthCap = btn.offsetWidth || baseWidth;
          const heightCap = btn.offsetHeight || baseHeight;
          const jitterX = (Math.random() - 0.5) * Math.min(14, slotStepX * 0.24 || 8);
          const jitterY = (Math.random() - 0.5) * Math.min(10, slotStepY * 0.2 || 6);
          const x = clamp(slot.x + jitterX, 0, Math.max(0, width - widthCap));
          const y = clamp(slot.y + jitterY, 0, Math.max(0, height - heightCap));
          btn.style.left = `${x}px`;
          btn.style.top = `${y}px`;
        });
      };

      const startMovingControls = () => {
        if (controls.classList.contains('moving')) return;
        controls.classList.add('moving');
        requestAnimationFrame(() => {
          randomizeControlPositions();
          stopMoveTimer();
          moveTimer = setInterval(() => randomizeControlPositions(), moveInterval);
        });
      };

      const stopMovingControls = () => {
        stopMoveTimer();
        controls.classList.remove('moving');
        buttons.forEach((btn) => {
          btn.style.left = '';
          btn.style.top = '';
        });
      };

      const setNextTargetCaption = () => {
        setCaption(`${COPY.levels.tooMuchLove.nextLabel}: ${controlNames[step]}`);
      };

      const armStepTimer = () => {
        stopStepTimer();
        const timeWindow = getCurrentWindow();
        stepDeadline = Date.now() + timeWindow;
        updateTimerPill();
        timerTicker = setInterval(updateTimerPill, 90);
        stepTimer = setTimeout(() => {
          if (locked || !inputEnabled) return;
          handleFailure(COPY.levels.tooMuchLove.tooSlow);
        }, timeWindow);
      };

      const setActionableState = () => {
        if (locked) return;
        inputEnabled = true;
        updateOrder();
        updateStepTrack();
        setNextTargetCaption();
        armStepTimer();
      };

      const announceThenStart = (line, delayMs) => {
        inputEnabled = false;
        stopStepTimer();
        setCaption(line);
        dnaSpeak(line);
        stopHintTimer();
        hintTimer = setTimeout(() => {
          if (locked) return;
          setActionableState();
        }, delayMs);
      };

      const bootRound = () => {
        updateHud();
        updateOrder();
        updateStepTrack();
        if (round === 3) {
          startMovingControls();
          if (!roundThreeAnnounced) {
            roundThreeAnnounced = true;
            announceThenStart(COPY.levels.tooMuchLove.roundThreeAlert, 950);
            return;
          }
        } else {
          stopMovingControls();
        }
        if (round === 2 && !roundTwoAnnounced) {
          roundTwoAnnounced = true;
          announceThenStart(COPY.levels.tooMuchLove.roundTwoLine, 720);
          return;
        }
        setActionableState();
      };

      const rebuildFromStart = () => {
        locked = false;
        inputEnabled = false;
        round = 1;
        step = 0;
        crackCount = 0;
        roundTwoAnnounced = false;
        roundThreeAnnounced = false;
        updateHud();
        updateHeart();
        updateOrder();
        updateStepTrack();
        setCaption(COPY.levels.tooMuchLove.resetLine);
        stopMovingControls();
        hintTimer = setTimeout(() => bootRound(), 520);
      };

      function handleFailure(message) {
        if (locked) return;
        playSound('error');
        recordAttempt('too-much-love');
        inputEnabled = false;
        stopStepTimer();
        stopHintTimer();
        crackCount += 1;
        failCount += 1;
        const unlockedSkipNow = !skipShown && failCount >= 5;
        if (unlockedSkipNow) {
          skipShown = true;
          skipBtn.classList.remove('hidden');
          setCaption(COPY.levels.tooMuchLove.skipLine);
          dnaSpeak(COPY.levels.tooMuchLove.skipLine);
        }
        updateHeart();
        stopImpactTimer();
        heartShell.classList.add('impact');
        heartShell.classList.add('fracture');
        impactTimer = setTimeout(() => {
          heartShell.classList.remove('impact');
          heartShell.classList.remove('fracture');
        }, 360);
        if (crackCount >= maxCracks) {
          locked = true;
          setCaption(COPY.levels.tooMuchLove.broken);
          dnaSpeak(COPY.levels.tooMuchLove.broken);
          stopMovingControls();
          stopResetTimer();
          resetTimer = setTimeout(() => rebuildFromStart(), 1300);
          return;
        }
        step = round === 3 ? Math.max(0, step - 1) : 0;
        updateHud();
        updateOrder();
        updateStepTrack();
        if (!unlockedSkipNow) {
          setCaption(message);
        }
        hintTimer = setTimeout(() => {
          if (locked) return;
          setActionableState();
        }, 600);
      }

      const completeRound = () => {
        stopStepTimer();
        stopHintTimer();
        inputEnabled = false;
        if (round >= 3) {
          locked = true;
          stopMovingControls();
          playSound('success');
          setCaption(COPY.levels.tooMuchLove.success);
          dnaSpeak(COPY.levels.tooMuchLove.success);
          successTimer = setTimeout(() => nextLevel(), 1100);
          return;
        }
        round += 1;
        step = 0;
        updateHud();
        updateOrder();
        updateStepTrack();
        bootRound();
      };

      const onControl = (event) => {
        if (locked || !inputEnabled) return;
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const btn = target.closest('.core-control');
        if (!btn) return;
        const label = btn.dataset.control;
        if (!label) return;
        const expected = controlNames[step];
        if (label !== expected) {
          handleFailure(COPY.levels.tooMuchLove.wrongOrder);
          return;
        }

        playSound('click');
        btn.classList.remove('active');
        void btn.offsetWidth;
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 180);

        step += 1;
        updateOrder();
        updateStepTrack();
        if (step >= controlNames.length) {
          completeRound();
          return;
        }
        setNextTargetCaption();
        armStepTimer();
      };

      const onSkip = () => {
        if (!skipShown || locked) return;
        locked = true;
        inputEnabled = false;
        stopStepTimer();
        stopHintTimer();
        stopMoveTimer();
        playSound('click');
        setCaption('Skipping level.');
        nextLevel();
      };

      controls.addEventListener('click', onControl);
      skipBtn.addEventListener('click', onSkip);
      setSubtext(COPY.levels.tooMuchLove.subtext);
      dnaSpeak(COPY.levels.tooMuchLove.intro);
      updateHud();
      updateHeart();
      updateOrder();
      updateStepTrack();
      updateTimerPill();
      bootRound();

      return () => {
        controls.removeEventListener('click', onControl);
        skipBtn.removeEventListener('click', onSkip);
        stopStepTimer();
        stopMoveTimer();
        stopHintTimer();
        stopResetTimer();
        stopImpactTimer();
        if (successTimer) clearTimeout(successTimer);
      };
    }
  },
  {
    id: 'support-flow',
    title: 'Support Hotline',
    prompt: COPY.levels.supportFlow.prompt,
    render(container) {
      const stage = document.createElement('div');
      stage.className = 'support-stage';
      container.appendChild(stage);

      let phase = 'hotline';
      let scamHits = 0;
      const callRounds = COPY.levels.supportFlow.callRounds;
      const minScamsBeforeReal = callRounds.length;
      let advancing = false;
      let loadingProgress = 0;
      let loadingStarted = false;
      let loadingTick = null;
      let statusTick = null;
      let nextTimer = null;
      const phaseTimers = [];
      const listeners = [];

      const addListener = (el, event, fn) => {
        el.addEventListener(event, fn);
        listeners.push(() => el.removeEventListener(event, fn));
      };

      const queuePhaseTimeout = (fn, ms) => {
        const timerId = setTimeout(() => {
          const index = phaseTimers.indexOf(timerId);
          if (index !== -1) phaseTimers.splice(index, 1);
          fn();
        }, ms);
        phaseTimers.push(timerId);
      };

      const clearTimers = () => {
        if (loadingTick) clearInterval(loadingTick);
        if (statusTick) clearInterval(statusTick);
        if (nextTimer) clearTimeout(nextTimer);
        phaseTimers.splice(0).forEach(timerId => clearTimeout(timerId));
        loadingTick = null;
        statusTick = null;
        nextTimer = null;
      };

      const clearStage = () => {
        stage.classList.remove('terms-mode');
        stage.innerHTML = '';
        listeners.splice(0).forEach(remove => remove());
      };

      const spawnPopup = (host) => {
        const popup = document.createElement('div');
        popup.className = 'support-popup';
        const messages = [
          'Congratulations! You won 4 free onions.',
          'Your warranty expired 9 years ago.',
          'Click here for premium heartbreak coverage.',
          'Omar.exe has stopped responding.',
          'Suspicious romance activity detected.'
        ];
        popup.textContent = messages[Math.floor(Math.random() * messages.length)];
        popup.style.left = `${8 + Math.random() * 64}%`;
        popup.style.top = `${8 + Math.random() * 68}%`;
        host.appendChild(popup);
        setTimeout(() => popup.remove(), 1400);
      };

      const estimateSpeechDelay = (line) => {
        const words = line.trim().split(/\s+/).filter(Boolean).length;
        return Math.max(3000, words * 290 + 1400);
      };

      const shouldUseSpeakerTags = () => {
        const narratorVoice = getNarratorVoice();
        const scamVoice = getScamVoice();
        return !scamVoice || (narratorVoice && narratorVoice.name === scamVoice.name);
      };

      const speakDnaLine = (line) => {
        if (shouldUseSpeakerTags()) {
          dnaSpeak(line, null, {
            caption: `${COPY.levels.supportFlow.dnaSpeakerLabel} ${line}`
          });
          return;
        }
        dnaSpeak(line);
      };

      const goToTerms = () => {
        if (advancing) return;
        advancing = true;
        playSound('success');
        stopNarration();
        const line = COPY.levels.supportFlow.afterScams;
        speakDnaLine(line);
        queuePhaseTimeout(() => {
          if (phase !== 'hotline') return;
          phase = 'terms';
          advancing = false;
          renderTerms();
        }, estimateSpeechDelay(line));
      };

      const goToLoading = () => {
        if (advancing) return;
        advancing = true;
        setSubtext('Hold on... DNA is checking the next level status.');
        stopNarration();
        const line = COPY.levels.supportFlow.loadingIntroLine;
        speakDnaLine(line);
        queuePhaseTimeout(() => {
          if (phase !== 'terms') return;
          phase = 'loading';
          advancing = false;
          renderLoading();
        }, estimateSpeechDelay(line) + 600);
      };

      const renderHotline = () => {
        clearStage();
        setSubtext(COPY.levels.supportFlow.hotlineSubtext);
        speakDnaLine(COPY.levels.supportFlow.intro);

        const heading = document.createElement('h3');
        heading.className = 'support-heading';
        heading.textContent = COPY.levels.supportFlow.prompt;

        const note = document.createElement('div');
        note.className = 'support-note';
        note.textContent = `${COPY.levels.supportFlow.callProgressLabel}: ${scamHits}/${minScamsBeforeReal}`;

        const terminal = document.createElement('div');
        terminal.className = 'hotline-console';
        const callLabel = document.createElement('div');
        callLabel.className = 'hotline-call-label';
        callLabel.textContent = 'Incoming call';
        const callLine = document.createElement('div');
        callLine.className = 'hotline-call';
        const dnaLine = document.createElement('div');
        dnaLine.className = 'hotline-dna';

        const meter = document.createElement('div');
        meter.className = 'hotline-meter';
        const meterFill = document.createElement('div');
        meterFill.className = 'hotline-meter-fill';
        meter.appendChild(meterFill);

        const instruction = document.createElement('div');
        instruction.className = 'hotline-instruction';
        instruction.textContent = COPY.levels.supportFlow.hotlineInstruction;

        const steps = document.createElement('div');
        steps.className = 'hotline-steps';
        const actionsRow = document.createElement('div');
        actionsRow.className = 'hotline-actions';

        const actionButtons = {};
        const actionOrder = ['answer', 'verify', 'trace', 'firewall', 'hangup']
          .filter(action => COPY.levels.supportFlow.actions[action]);
        let stepNodes = [];
        let actionStep = 0;

        const updateStepVisual = (requiredOrder) => {
          stepNodes.forEach((node, idx) => {
            node.classList.toggle('done', idx < actionStep);
            node.classList.toggle('next', idx === actionStep && actionStep < requiredOrder.length);
          });
        };

        const updateActionFocus = (requiredOrder) => {
          const expected = requiredOrder[actionStep];
          Object.entries(actionButtons).forEach(([key, btn]) => {
            btn.classList.toggle('next', key === expected);
            btn.disabled = phase !== 'hotline' || scamHits >= minScamsBeforeReal;
          });
        };

        const narrateRound = (round) => {
          scamSpeak(round.scam);
        };

        const buildStepTrack = (requiredOrder) => {
          steps.innerHTML = '';
          stepNodes = requiredOrder.map((action) => {
            const stepNode = document.createElement('div');
            stepNode.className = 'hotline-step';
            stepNode.textContent = COPY.levels.supportFlow.actions[action];
            steps.appendChild(stepNode);
            return stepNode;
          });
          updateStepVisual(requiredOrder);
          updateActionFocus(requiredOrder);
        };

        const setupRound = (roundIndex, announce = false) => {
          const round = callRounds[roundIndex];
          if (!round) return;
          actionStep = 0;
          callLabel.textContent = `Incoming call ${roundIndex + 1}/${minScamsBeforeReal}`;
          callLine.textContent = `${COPY.levels.supportFlow.scamSpeakerLabel} ${round.scam}`;
          dnaLine.textContent = `${COPY.levels.supportFlow.dnaSpeakerLabel} ${round.dna}`;
          instruction.textContent = COPY.levels.supportFlow.hotlineInstruction;
          buildStepTrack(round.order);
          if (announce) {
            narrateRound(round);
          }
        };

        const updateHotline = () => {
          const cappedHits = Math.min(scamHits, minScamsBeforeReal);
          note.textContent = `${COPY.levels.supportFlow.callProgressLabel}: ${cappedHits}/${minScamsBeforeReal}`;
          meterFill.style.width = `${(cappedHits / minScamsBeforeReal) * 100}%`;
          if (scamHits >= minScamsBeforeReal) {
            callLine.textContent = 'All scam lines blocked. Real support unlocked.';
            dnaLine.textContent = 'DNA line secured. Move to legal verification.';
            steps.innerHTML = '';
            actionStep = 0;
            updateActionFocus([]);
          }
        };

        actionOrder.forEach(action => {
          const btn = document.createElement('button');
          btn.className = 'support-action';
          btn.textContent = COPY.levels.supportFlow.actions[action];
          btn.setAttribute('aria-label', COPY.levels.supportFlow.actions[action]);
          btn.dataset.action = action;
          actionsRow.appendChild(btn);
          actionButtons[action] = btn;
        });

        const popupArea = document.createElement('div');
        popupArea.className = 'support-popup-area';

        const realBtn = document.createElement('button');
        realBtn.className = 'btn primary hidden';
        realBtn.textContent = COPY.levels.supportFlow.realSupport;
        realBtn.setAttribute('aria-label', COPY.levels.supportFlow.realSupport);
        const helper = document.createElement('div');
        helper.className = 'support-helper hidden';
        helper.textContent = 'Real support unlocked. Tap to continue.';

        const handleAction = (event) => {
          if (phase !== 'hotline' || scamHits >= minScamsBeforeReal) return;
          const target = event.currentTarget;
          if (!(target instanceof HTMLButtonElement)) return;
          const round = callRounds[scamHits];
          if (!round) return;
          const action = target.dataset.action;
          const expected = round.order[actionStep];
          if (action !== expected) {
            recordAttempt('support-flow');
            playSound('error');
            actionStep = 0;
            updateStepVisual(round.order);
            updateActionFocus(round.order);
            setCaption(COPY.levels.supportFlow.actionWrong);
            speakDnaLine(COPY.levels.supportFlow.actionWrong);
            spawnPopup(popupArea);
            return;
          }

          playSound('click');
          actionStep += 1;
          updateStepVisual(round.order);
          updateActionFocus(round.order);
          if (actionStep < round.order.length) return;

          actionStep = 0;
          scamHits += 1;
          playSound('success');
          setCaption(COPY.levels.supportFlow.callHandled);
          spawnPopup(popupArea);
          updateHotline();
          if (scamHits >= minScamsBeforeReal) {
            helper.classList.remove('hidden');
            realBtn.classList.remove('hidden');
            speakDnaLine('Scam wall cleared. Real support is open.');
            return;
          }
          setupRound(scamHits, true);
        };

        Object.values(actionButtons).forEach(btn => addListener(btn, 'click', handleAction));

        addListener(realBtn, 'click', () => {
          if (scamHits < minScamsBeforeReal) {
            playSound('error');
            setCaption(COPY.levels.supportFlow.lockedLine);
            return;
          }
          playSound('success');
          stopNarration();
          realBtn.textContent = COPY.levels.supportFlow.completedLabel;
          realBtn.setAttribute('aria-label', COPY.levels.supportFlow.completedLabel);
          realBtn.disabled = true;
          setCaption(COPY.levels.supportFlow.completedLabel);
          queuePhaseTimeout(() => goToTerms(), 620);
        });

        updateHotline();
        setupRound(scamHits, true);

        terminal.appendChild(callLabel);
        terminal.appendChild(callLine);
        terminal.appendChild(dnaLine);
        terminal.appendChild(meter);
        terminal.appendChild(instruction);
        terminal.appendChild(steps);
        terminal.appendChild(actionsRow);

        stage.appendChild(heading);
        stage.appendChild(note);
        stage.appendChild(terminal);
        stage.appendChild(realBtn);
        stage.appendChild(helper);
        stage.appendChild(popupArea);
      };

      const renderTerms = () => {
        clearStage();
        stage.classList.add('terms-mode');
        setSubtext(COPY.levels.supportFlow.termsSubtext);

        const card = document.createElement('div');
        card.className = 'terms-card';

        const title = document.createElement('h3');
        title.className = 'terms-title';
        title.textContent = COPY.levels.supportFlow.termsTitle;

        const termsMeta = document.createElement('div');
        termsMeta.className = 'terms-meta';

        const list = document.createElement('div');
        list.className = 'terms-list';

        const generatedTerms = [];
        for (let i = 0; i < COPY.levels.supportFlow.termsTargetCount; i += 1) {
          const clause = COPY.levels.supportFlow.termsClauses[i]
            || `I accept clause ${i + 1}. This is legally chaotic but still valid.`;
          generatedTerms.push(`Clause ${String(i + 1).padStart(2, '0')}: ${clause}`);
        }

        const checks = generatedTerms.map((text, idx) => {
          const label = document.createElement('label');
          label.className = 'term-item';
          const input = document.createElement('input');
          input.type = 'checkbox';
          input.setAttribute('aria-label', `Term ${idx + 1}`);
          const span = document.createElement('span');
          span.textContent = text;
          label.appendChild(input);
          label.appendChild(span);
          list.appendChild(label);
          return input;
        });

        const verifyCard = document.createElement('div');
        verifyCard.className = 'terms-verify';
        const verifyTitle = document.createElement('div');
        verifyTitle.className = 'terms-verify-title';
        verifyTitle.textContent = COPY.levels.supportFlow.verificationTitle;
        const verifyList = document.createElement('div');
        verifyList.className = 'verify-list';

        const verifyChecks = COPY.levels.supportFlow.verificationItems.map((text, idx) => {
          const label = document.createElement('label');
          label.className = 'verify-item';
          const input = document.createElement('input');
          input.type = 'checkbox';
          input.setAttribute('aria-label', `Verification ${idx + 1}`);
          const span = document.createElement('span');
          span.textContent = text;
          label.appendChild(input);
          label.appendChild(span);
          verifyList.appendChild(label);
          return input;
        });

        const phraseInput = document.createElement('input');
        phraseInput.className = 'input verify-input';
        phraseInput.setAttribute('aria-label', COPY.levels.supportFlow.verifyPhraseLabel);
        phraseInput.placeholder = COPY.levels.supportFlow.verifyPhraseLabel;

        const codeInput = document.createElement('input');
        codeInput.className = 'input verify-input';
        codeInput.setAttribute('aria-label', COPY.levels.supportFlow.verifyCodeLabel);
        codeInput.placeholder = COPY.levels.supportFlow.verifyCodeLabel;
        codeInput.maxLength = 3;

        const verifyMeta = document.createElement('div');
        verifyMeta.className = 'terms-meta';

        verifyCard.appendChild(verifyTitle);
        verifyCard.appendChild(verifyList);
        verifyCard.appendChild(phraseInput);
        verifyCard.appendChild(codeInput);
        verifyCard.appendChild(verifyMeta);

        const secretZone = document.createElement('div');
        secretZone.className = 'terms-secret-zone';
        const secretBtn = document.createElement('button');
        secretBtn.className = 'btn ghost terms-secret-btn concealed';
        secretBtn.textContent = COPY.levels.supportFlow.secretButton;
        secretBtn.setAttribute('aria-label', COPY.levels.supportFlow.secretButton);
        const cat = document.createElement('img');
        cat.className = 'terms-cat';
        cat.src = 'assets/cat-white.png';
        cat.alt = 'Cute white cat';
        cat.setAttribute('aria-label', 'Drag the cat');
        cat.draggable = false;

        secretZone.appendChild(secretBtn);
        secretZone.appendChild(cat);

        const acceptBtn = document.createElement('button');
        acceptBtn.className = 'btn primary';
        acceptBtn.textContent = COPY.levels.supportFlow.accept;
        acceptBtn.setAttribute('aria-label', COPY.levels.supportFlow.accept);

        const rhythmCard = document.createElement('div');
        rhythmCard.className = 'terms-identity hidden';
        const rhythmTitle = document.createElement('div');
        rhythmTitle.className = 'terms-verify-title';
        rhythmTitle.textContent = COPY.levels.supportFlow.rhythmTitle;
        const rhythmPrompt = document.createElement('div');
        rhythmPrompt.className = 'terms-meta';
        rhythmPrompt.textContent = COPY.levels.supportFlow.rhythmPrompt;
        const rhythmButton = document.createElement('button');
        rhythmButton.className = 'btn ghost';
        rhythmButton.textContent = COPY.levels.supportFlow.rhythmButton;
        rhythmButton.setAttribute('aria-label', COPY.levels.supportFlow.rhythmButton);
        rhythmCard.appendChild(rhythmTitle);
        rhythmCard.appendChild(rhythmPrompt);
        rhythmCard.appendChild(rhythmButton);

        let secretUnlocked = false;
        let rhythmSolved = false;
        let draggingCat = false;
        let catOffsetX = 0;
        let catOffsetY = 0;
        let catAnchorX = 0;
        let catAnchorY = 0;
        let catMovedForReveal = false;
        let rhythmTaps = [];

        const setCatOffset = (x, y) => {
          catOffsetX = clamp(x, -240, 12);
          catOffsetY = clamp(y, -140, 12);
          if (!catMovedForReveal && (Math.abs(catOffsetX) > 22 || Math.abs(catOffsetY) > 22)) {
            catMovedForReveal = true;
            secretBtn.classList.remove('concealed');
          }
          cat.style.transform = `translate(${catOffsetX}px, ${catOffsetY}px)`;
        };

        const updateMeta = () => {
          const termsDoneCount = checks.reduce((count, el) => count + (el.checked ? 1 : 0), 0);
          const checkDone = verifyChecks.reduce((count, el) => count + (el.checked ? 1 : 0), 0);
          const phraseDone = phraseInput.value.trim().toUpperCase() === COPY.levels.supportFlow.verifyPhraseTarget;
          const codeDone = codeInput.value.trim() === COPY.levels.supportFlow.verifyCode;
          const verificationDone = checkDone + (phraseDone ? 1 : 0) + (codeDone ? 1 : 0);
          const requiredVerificationParts = verifyChecks.length + 2;
          termsMeta.textContent = `Clauses checked: ${termsDoneCount}/${checks.length}`;
          verifyMeta.textContent = `${COPY.levels.supportFlow.verifyStatusLabel}: ${verificationDone}/${requiredVerificationParts}`;
        };

        const resetRhythmTaps = () => {
          rhythmTaps = [];
        };

        checks.forEach(check => {
          addListener(check, 'change', updateMeta);
        });
        verifyChecks.forEach(check => {
          addListener(check, 'change', updateMeta);
        });
        addListener(phraseInput, 'input', updateMeta);
        addListener(codeInput, 'input', () => {
          codeInput.value = codeInput.value.replace(/\D/g, '').slice(0, 3);
          updateMeta();
        });

        addListener(cat, 'pointerdown', (event) => {
          if (phase !== 'terms') return;
          draggingCat = true;
          cat.classList.add('dragging');
          catAnchorX = event.clientX - catOffsetX;
          catAnchorY = event.clientY - catOffsetY;
          cat.setPointerCapture(event.pointerId);
        });
        addListener(cat, 'pointermove', (event) => {
          if (!draggingCat) return;
          setCatOffset(event.clientX - catAnchorX, event.clientY - catAnchorY);
        });
        addListener(cat, 'pointerup', (event) => {
          if (!draggingCat) return;
          draggingCat = false;
          cat.classList.remove('dragging');
          if (cat.hasPointerCapture(event.pointerId)) {
            cat.releasePointerCapture(event.pointerId);
          }
        });
        addListener(cat, 'pointercancel', (event) => {
          if (!draggingCat) return;
          draggingCat = false;
          cat.classList.remove('dragging');
          if (cat.hasPointerCapture(event.pointerId)) {
            cat.releasePointerCapture(event.pointerId);
          }
        });

        addListener(secretBtn, 'click', () => {
          if (secretUnlocked) return;
          secretUnlocked = true;
          secretBtn.disabled = true;
          secretBtn.textContent = 'Verified';
          playSound('success');
          setCaption(COPY.levels.supportFlow.secretUnlocked);
          speakDnaLine(COPY.levels.supportFlow.secretUnlocked);
          rhythmCard.classList.remove('hidden');
        });

        addListener(acceptBtn, 'click', () => {
          playSound('error');
          setCaption(COPY.levels.supportFlow.acceptBlocked);
          speakDnaLine(COPY.levels.supportFlow.acceptBlocked);
        });

        addListener(rhythmButton, 'click', () => {
          if (rhythmSolved || !secretUnlocked) return;
          const now = Date.now();
          if (rhythmTaps.length && now - rhythmTaps[rhythmTaps.length - 1] > 1500) {
            resetRhythmTaps();
          }
          rhythmTaps.push(now);
          playSound('click');
          if (rhythmTaps.length < 3) return;

          const interval1 = rhythmTaps[1] - rhythmTaps[0];
          const interval2 = rhythmTaps[2] - rhythmTaps[1];
          const pass = interval1 <= 350 && interval2 >= 450 && interval2 <= 900;
          if (!pass) {
            recordAttempt('support-flow');
            playSound('error');
            setCaption(COPY.levels.supportFlow.rhythmFail);
            speakDnaLine(COPY.levels.supportFlow.rhythmFail);
            resetRhythmTaps();
            return;
          }

          rhythmSolved = true;
          rhythmButton.disabled = true;
          playSound('success');
          setCaption(COPY.levels.supportFlow.rhythmSuccess);
          speakDnaLine(COPY.levels.supportFlow.rhythmSuccess);
          queuePhaseTimeout(() => {
            if (phase !== 'terms') return;
            goToLoading();
          }, estimateSpeechDelay(COPY.levels.supportFlow.rhythmSuccess) + 500);
        });

        updateMeta();

        card.appendChild(title);
        card.appendChild(termsMeta);
        card.appendChild(list);
        card.appendChild(verifyCard);
        card.appendChild(acceptBtn);
        card.appendChild(rhythmCard);
        const secretSpacer = document.createElement('div');
        secretSpacer.className = 'terms-secret-spacer';
        card.appendChild(secretSpacer);
        card.appendChild(secretZone);
        stage.appendChild(card);
      };

      const renderLoading = () => {
        clearStage();
        setSubtext('Please wait while Omar finishes this level...');

        const card = document.createElement('div');
        card.className = 'build-card';
        const title = document.createElement('h3');
        title.className = 'build-title';
        title.textContent = COPY.levels.supportFlow.loadingTitle;
        const status = document.createElement('div');
        status.className = 'build-status';
        const bar = document.createElement('div');
        bar.className = 'build-bar';
        const fill = document.createElement('div');
        fill.className = 'build-fill';
        const percent = document.createElement('div');
        percent.className = 'build-percent';

        bar.appendChild(fill);
        card.appendChild(title);
        card.appendChild(status);
        card.appendChild(bar);
        card.appendChild(percent);

        const verifyGate = document.createElement('div');
        verifyGate.className = 'loading-verify hidden';
        const verifyGateTitle = document.createElement('div');
        verifyGateTitle.className = 'loading-verify-title';
        verifyGateTitle.textContent = COPY.levels.supportFlow.loveModePrompt;
        const verifyGateState = document.createElement('div');
        verifyGateState.className = 'loading-verify-state';
        verifyGateState.textContent = 'Installer assistant is waiting for your choice.';
        const loveActions = document.createElement('div');
        loveActions.className = 'loading-choice';
        const loveYes = document.createElement('button');
        loveYes.className = 'btn ghost';
        loveYes.textContent = COPY.levels.supportFlow.loveModeYes;
        loveYes.setAttribute('aria-label', COPY.levels.supportFlow.loveModeYes);
        const loveNo = document.createElement('button');
        loveNo.className = 'btn ghost';
        loveNo.textContent = COPY.levels.supportFlow.loveModeNo;
        loveNo.setAttribute('aria-label', COPY.levels.supportFlow.loveModeNo);
        loveActions.appendChild(loveYes);
        loveActions.appendChild(loveNo);
        verifyGate.appendChild(verifyGateTitle);
        verifyGate.appendChild(verifyGateState);
        verifyGate.appendChild(loveActions);
        card.appendChild(verifyGate);
        stage.appendChild(card);

        let statusIndex = 0;
        let loadState = 'to74';
        const statuses = COPY.levels.supportFlow.loadingStatuses;
        status.textContent = statuses[statusIndex];

        const setProgress = (value) => {
          loadingProgress = clamp(value, 0, 99);
          fill.style.width = `${loadingProgress}%`;
          percent.textContent = `${Math.round(loadingProgress)}%`;
        };

        const finish = () => {
          if (loadingStarted) return;
          loadingStarted = true;
          clearTimers();
          playSound('success');
          setCaption(COPY.levels.supportFlow.ready);
          nextTimer = setTimeout(() => nextLevel(), 900);
        };

        const onLoveChoice = () => {
          if (loadState !== 'awaitLoveMode') return;
          playSound('success');
          verifyGate.classList.add('hidden');
          verifyGateState.textContent = COPY.levels.supportFlow.loveModeInstalling;
          status.textContent = COPY.levels.supportFlow.loveModeInstalling;
          setCaption(COPY.levels.supportFlow.loveModeInstalling);
          speakDnaLine(COPY.levels.supportFlow.loveModeInstalling);
          loadState = 'installingLoveMode';
          queuePhaseTimeout(() => {
            if (phase !== 'loading') return;
            setProgress(0);
            status.textContent = 'Love Mode rebooting...';
            loadState = 'to94';
          }, 950);
        };
        addListener(loveYes, 'click', onLoveChoice);
        addListener(loveNo, 'click', onLoveChoice);

        loadingTick = setInterval(() => {
          if (loadState === 'to74') {
            if (loadingProgress < 74) {
              setProgress(loadingProgress + (1.4 + Math.random() * 2.6));
              return;
            }
            setProgress(74);
            verifyGate.classList.remove('hidden');
            status.textContent = COPY.levels.supportFlow.loveModePrompt;
            setCaption(COPY.levels.supportFlow.loveModePrompt);
            loadState = 'awaitLoveMode';
            return;
          }
          if (loadState === 'to94') {
            if (loadingProgress < 94) {
              setProgress(loadingProgress + (1.8 + Math.random() * 2.9));
              return;
            }
            setProgress(94);
            status.textContent = COPY.levels.supportFlow.corruptedRestart;
            setCaption(COPY.levels.supportFlow.corruptedRestart);
            speakDnaLine(COPY.levels.supportFlow.corruptedRestart);
            loadState = 'corrupting';
            queuePhaseTimeout(() => {
              if (phase !== 'loading') return;
              setProgress(68);
              status.textContent = 'Rebuilding corrupted blocks...';
              loadState = 'to99';
            }, 1000);
            return;
          }
          if (loadState === 'to99' && loadingProgress < 99) {
            setProgress(loadingProgress + (1.8 + Math.random() * 2.9));
            return;
          }
          if (loadState === 'to99') {
            setProgress(99);
            finish();
          }
        }, 320);

        statusTick = setInterval(() => {
          if (loadState === 'awaitLoveMode' || loadState === 'installingLoveMode' || loadState === 'corrupting') return;
          statusIndex = (statusIndex + 1) % statuses.length;
          status.textContent = statuses[statusIndex];
        }, 1150);
      };

      renderHotline();

      return () => {
        clearStage();
        clearTimers();
      };
    }
  },
  {
    id: 'completion',
    title: 'Final Question',
    prompt: COPY.levels.completion.prompt,
    render(container) {
      const stage = document.createElement('div');
      stage.className = 'complete-card';

      const title = document.createElement('h3');
      title.className = 'complete-title';
      title.textContent = COPY.levels.completion.prompt;

      const actions = document.createElement('div');
      actions.className = 'yn-area';
      const yesBtn = document.createElement('button');
      yesBtn.className = 'btn primary';
      yesBtn.textContent = COPY.levels.completion.yes;
      yesBtn.setAttribute('aria-label', COPY.levels.completion.yes);
      const noBtn = document.createElement('button');
      noBtn.className = 'btn no';
      noBtn.textContent = COPY.levels.completion.no;
      noBtn.setAttribute('aria-label', COPY.levels.completion.no);
      actions.appendChild(yesBtn);
      actions.appendChild(noBtn);

      stage.appendChild(title);
      stage.appendChild(actions);
      container.appendChild(stage);

      let noClicks = 0;
      let yesScale = 1;
      let noScale = 1;
      let done = false;
      let retryBtn = null;
      let onRetry = null;
      let bounceFrame = null;
      let bounceStarted = false;
      let chaosFrame = null;

      const chaosLayer = document.createElement('div');
      chaosLayer.className = 'completion-chaos-layer';
      document.body.appendChild(chaosLayer);
      const chaosNodes = [];

      const updateScales = () => {
        yesBtn.style.transform = `scale(${yesScale})`;
        noBtn.style.transform = `scale(${noScale})`;
      };

      const clearChaosLayer = () => {
        chaosNodes.splice(0).forEach((node) => {
          if (node.onClick) {
            node.el.removeEventListener('click', node.onClick);
          }
          node.el.remove();
        });
        if (chaosFrame) {
          cancelAnimationFrame(chaosFrame);
          chaosFrame = null;
        }
      };

      const randomScreenPoint = (width, height) => {
        const minX = 10;
        const minY = 72;
        const maxX = Math.max(minX, window.innerWidth - width - 10);
        const maxY = Math.max(minY, window.innerHeight - height - 12);
        return {
          x: minX + Math.random() * Math.max(0, maxX - minX),
          y: minY + Math.random() * Math.max(0, maxY - minY)
        };
      };

      const moveNoButton = () => {
        noBtn.classList.add('chaos-no');
        const noWidth = (noBtn.offsetWidth || 120) * noScale;
        const noHeight = (noBtn.offsetHeight || 80) * noScale;
        const point = randomScreenPoint(noWidth, noHeight);
        noBtn.style.left = `${point.x}px`;
        noBtn.style.top = `${point.y}px`;
      };

      const startChaosLoop = () => {
        if (chaosFrame || prefersReducedMotion) return;
        const tick = () => {
          chaosNodes.forEach((node) => {
            if (!node.moving) return;
            const nodeScale = node.scale || 1;
            const width = (node.el.offsetWidth || 120) * nodeScale;
            const height = (node.el.offsetHeight || 54) * nodeScale;
            const minX = 10;
            const minY = 72;
            const maxX = Math.max(minX, window.innerWidth - width - 10);
            const maxY = Math.max(minY, window.innerHeight - height - 10);
            node.x += node.vx;
            node.y += node.vy;
            if (node.x <= minX || node.x >= maxX) {
              node.vx *= -1;
              node.x = clamp(node.x, minX, maxX);
            }
            if (node.y <= minY || node.y >= maxY) {
              node.vy *= -1;
              node.y = clamp(node.y, minY, maxY);
            }
            node.el.style.left = `${node.x}px`;
            node.el.style.top = `${node.y}px`;
          });
          chaosFrame = requestAnimationFrame(tick);
        };
        chaosFrame = requestAnimationFrame(tick);
      };

      const spawnChaosYes = (count, options = {}) => {
        const scale = Number.isFinite(options.scale) ? options.scale : 1;
        const speedBoost = Number.isFinite(options.speedBoost) ? options.speedBoost : 1;
        for (let i = 0; i < count; i += 1) {
          const btn = document.createElement('button');
          btn.className = 'btn primary chaos-yes';
          btn.textContent = COPY.levels.completion.yes;
          btn.setAttribute('aria-label', COPY.levels.completion.yes);
          btn.style.setProperty('--chaos-scale', String(scale));
          const onChaosYes = () => onYes();
          btn.addEventListener('click', onChaosYes);
          chaosLayer.appendChild(btn);
          const width = (btn.offsetWidth || 110) * scale;
          const height = (btn.offsetHeight || 50) * scale;
          const point = randomScreenPoint(width, height);
          btn.style.left = `${point.x}px`;
          btn.style.top = `${point.y}px`;
          chaosNodes.push({
            el: btn,
            x: point.x,
            y: point.y,
            vx: ((Math.random() * 2.8 + 1) * speedBoost) * (Math.random() > 0.5 ? 1 : -1),
            vy: ((Math.random() * 2.3 + 0.8) * speedBoost) * (Math.random() > 0.5 ? 1 : -1),
            scale,
            moving: true,
            onClick: onChaosYes
          });
        }
        startChaosLoop();
      };

      const renderHeartbreak = () => {
        done = true;
        clearChaosLayer();
        if (bounceFrame) cancelAnimationFrame(bounceFrame);
        bounceFrame = null;
        setPrompt(COPY.levels.completion.heartbreakTitle);
        setSubtext('');
        stage.innerHTML = '';
        const hbTitle = document.createElement('h3');
        hbTitle.className = 'complete-title';
        hbTitle.textContent = COPY.levels.completion.heartbreakTitle;
        const hbBody = document.createElement('p');
        hbBody.className = 'complete-body';
        hbBody.textContent = COPY.levels.completion.heartbreakBody;
        retryBtn = document.createElement('button');
        retryBtn.className = 'btn primary';
        retryBtn.textContent = COPY.levels.completion.retry;
        retryBtn.setAttribute('aria-label', COPY.levels.completion.retry);
        stage.appendChild(hbTitle);
        stage.appendChild(hbBody);
        stage.appendChild(retryBtn);
        dnaSpeak(COPY.levels.completion.heartbreakBody);
        onRetry = () => {
          setCaption('');
          renderLevel(gameState.currentLevelIndex);
        };
        retryBtn.addEventListener('click', onRetry);
      };

      const renderYesScreen = () => {
        stage.innerHTML = '';
        const winTitle = document.createElement('h3');
        winTitle.className = 'complete-title';
        winTitle.textContent = 'Valentine accepted.';
        const winBody = document.createElement('p');
        winBody.className = 'complete-body';
        winBody.textContent = 'Omar is happy. DNA is happy. Confetti protocol enabled.';
        const winScreen = document.createElement('div');
        winScreen.className = 'complete-win-screen';
        const bounceArea = document.createElement('div');
        bounceArea.className = 'win-bounce-area';
        const bounceCat = document.createElement('img');
        bounceCat.className = 'win-bounce-cat';
        bounceCat.src = 'assets/cat-white.png';
        bounceCat.alt = 'Floating celebration cat';
        bounceArea.appendChild(bounceCat);
        winScreen.appendChild(bounceArea);
        stage.appendChild(winTitle);
        stage.appendChild(winBody);
        stage.appendChild(winScreen);

        if (prefersReducedMotion) return;

        const startBounce = () => {
          if (bounceStarted) return;
          bounceStarted = true;
          let x = 18;
          let y = 14;
          let vx = 2.2;
          let vy = 1.7;
          const tick = () => {
            const maxX = Math.max(0, bounceArea.clientWidth - (bounceCat.offsetWidth || 96));
            const maxY = Math.max(0, bounceArea.clientHeight - (bounceCat.offsetHeight || 96));
            x += vx;
            y += vy;
            if (x <= 0 || x >= maxX) {
              vx *= -1;
              x = clamp(x, 0, maxX);
            }
            if (y <= 0 || y >= maxY) {
              vy *= -1;
              y = clamp(y, 0, maxY);
            }
            bounceCat.style.transform = `translate(${x}px, ${y}px)`;
            bounceFrame = requestAnimationFrame(tick);
          };
          bounceFrame = requestAnimationFrame(tick);
        };
        requestAnimationFrame(startBounce);
      };

      const onYes = () => {
        if (done) return;
        done = true;
        clearChaosLayer();
        playSound('success');
        setCaption(COPY.levels.completion.success);
        dnaSpeak(COPY.levels.completion.success);
        yesBtn.disabled = true;
        noBtn.disabled = true;
        celebrate();
        renderYesScreen();
      };

      const onNo = () => {
        if (done) return;
        noClicks += 1;
        playSound('error');
        noScale = clamp(noScale * 0.78, 0.22, 1);
        yesScale = clamp(yesScale * 1.2, 1, 2.6);
        updateScales();
        moveNoButton();
        if (noClicks === 3) {
          spawnChaosYes(2, { scale: 1.5, speedBoost: 1.9 });
        } else if (noClicks === 4) {
          spawnChaosYes(9);
        } else if (noClicks >= 5) {
          renderHeartbreak();
        }
      };

      yesBtn.addEventListener('click', onYes);
      noBtn.addEventListener('click', onNo);
      requestAnimationFrame(() => moveNoButton());

      return () => {
        yesBtn.removeEventListener('click', onYes);
        noBtn.removeEventListener('click', onNo);
        clearChaosLayer();
        chaosLayer.remove();
        if (retryBtn && onRetry) {
          retryBtn.removeEventListener('click', onRetry);
        }
        if (bounceFrame) cancelAnimationFrame(bounceFrame);
      };
    }
  }
];

if (jumpBtn) {
  jumpBtn.addEventListener('click', jumpToLevel);
}

resetBtn.addEventListener('click', () => {
  const confirmed = window.confirm(COPY.resetConfirm);
  if (confirmed) resetGame();
});

loadProgress();
updateVoiceEnabled();
loadVoices();
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}
document.addEventListener('pointerdown', unlockAudioFromInteraction, { capture: true });
document.addEventListener('keydown', unlockAudioFromInteraction, { capture: true });
renderLevel(gameState.currentLevelIndex);
