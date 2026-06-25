import { useEffect } from 'react';
import bgmSrc from '../assets/bgm.mp4';

let audioCtx = null;
let gainNode = null;
let sourceNode = null;
let audioBuffer = null;
let volume = 11 / 13;
let started = false;

async function loadBuffer() {
  try {
    const res = await fetch(bgmSrc);
    const arrayBuffer = await res.arrayBuffer();
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioCtx.createGain();
    gainNode.gain.value = volume;
    gainNode.connect(audioCtx.destination);
    audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  } catch {
    audioCtx = null;
  }
}

function playLoop() {
  if (!audioCtx || !audioBuffer) return;
  sourceNode = audioCtx.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.loop = true;
  sourceNode.connect(gainNode);
  sourceNode.start(0);
}

export function setBgmVolume(val0to13) {
  volume = Math.max(0, Math.min(1, val0to13 / 13));
  if (gainNode) gainNode.gain.value = volume;
}

loadBuffer();

function BgmPlayer() {
  useEffect(() => {
    if (started) return;

    const startBgm = () => {
      if (started) return;
      started = true;
      if (audioCtx) {
        audioCtx.resume().then(playLoop).catch(() => {});
      }
      document.removeEventListener('click', startBgm);
    };

    document.addEventListener('click', startBgm);
    return () => document.removeEventListener('click', startBgm);
  }, []);

  return null;
}

export default BgmPlayer;
