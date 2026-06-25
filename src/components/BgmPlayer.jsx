import { useEffect } from 'react';
import bgmSrc from '../assets/bgm.mp4';

let gainNode = null;
let started = false;

export function setBgmVolume(val0to13) {
  if (gainNode) gainNode.gain.value = Math.max(0, Math.min(1, val0to13 / 13));
}

async function startBgm() {
  if (started) return;
  started = true;

  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioCtx.createGain();
    gainNode.gain.value = 11 / 13;
    gainNode.connect(audioCtx.destination);

    const res = await fetch(bgmSrc);
    const arrayBuffer = await res.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.loop = true;
    source.connect(gainNode);
    source.start(0);
  } catch {
    // BGM 재생 불가 환경 무시
  }
}

function BgmPlayer() {
  useEffect(() => {
    document.addEventListener('click', startBgm, { once: true });
    return () => document.removeEventListener('click', startBgm);
  }, []);

  return null;
}

export default BgmPlayer;
