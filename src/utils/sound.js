// Web Audio API 기반 효과음 유틸
let ctx = null;
let sfxVolume = 1.0; // 0~1

export function setSfxVolume(val0to13) {
  sfxVolume = val0to13 / 13;
}

function getCtx() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  return ctx;
}

function playTone({ freq = 440, type = 'sine', duration = 0.08, gain = 0.3, startTime = 0, fadeOut = true }) {
  gain = gain * sfxVolume;
  const c = getCtx();
  const t = c.currentTime + startTime;

  const osc = c.createOscillator();
  const gainNode = c.createGain();

  osc.connect(gainNode);
  gainNode.connect(c.destination);

  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);

  gainNode.gain.setValueAtTime(gain, t);
  if (fadeOut) gainNode.gain.exponentialRampToValueAtTime(0.001, t + duration);

  osc.start(t);
  osc.stop(t + duration);
}

// 타이핑 blip (대화창/나레이션 글자 나올 때)
export function playBlip() {
  playTone({ freq: 820, type: 'square', duration: 0.04, gain: 0.03 });
}

// 다음 버튼 클릭
export function playClick() {
  playTone({ freq: 600, type: 'sine', duration: 0.06, gain: 0.25 });
  playTone({ freq: 900, type: 'sine', duration: 0.06, gain: 0.15, startTime: 0.04 });
}

// 선택지 hover
export function playHover() {
  playTone({ freq: 500, type: 'sine', duration: 0.05, gain: 0.1 });
}

// 선택지 선택
export function playSelect() {
  playTone({ freq: 400, type: 'sine', duration: 0.06, gain: 0.3 });
  playTone({ freq: 600, type: 'sine', duration: 0.1,  gain: 0.25, startTime: 0.06 });
  playTone({ freq: 800, type: 'sine', duration: 0.12, gain: 0.2,  startTime: 0.14 });
}

// 점수 + 상승음
export function playPositive() {
  [523, 659, 784, 1047].forEach((freq, i) => {
    playTone({ freq, type: 'sine', duration: 0.18, gain: 0.22, startTime: i * 0.1 });
  });
}

// 점수 - 하강음
export function playNegative() {
  [523, 415, 330, 262].forEach((freq, i) => {
    playTone({ freq, type: 'sine', duration: 0.18, gain: 0.22, startTime: i * 0.1 });
  });
}

// 지식카드 슬라이드 whoosh
export function playWhoosh() {
  const c = getCtx();
  const t = c.currentTime;

  const bufferSize = c.sampleRate * 0.25;
  const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

  const source = c.createBufferSource();
  source.buffer = buffer;

  const filter = c.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(800, t);
  filter.frequency.exponentialRampToValueAtTime(200, t + 0.25);

  const gainNode = c.createGain();
  gainNode.gain.setValueAtTime(0.18, t);
  gainNode.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

  source.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(c.destination);

  source.start(t);
  source.stop(t + 0.25);
}

// 게임 스타트 버튼
export function playGameStart() {
  [330, 415, 523, 659, 784].forEach((freq, i) => {
    playTone({ freq, type: 'sine', duration: 0.2, gain: 0.28, startTime: i * 0.08 });
  });
}

// 설정 모달 열기
export function playModalOpen() {
  playTone({ freq: 300, type: 'sine', duration: 0.15, gain: 0.2 });
  playTone({ freq: 450, type: 'sine', duration: 0.15, gain: 0.15, startTime: 0.1 });
}
