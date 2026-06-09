import { useEffect } from 'react';
import bgmSrc from '../assets/bgm.mp4';

// 컴포넌트 밖 전역 — StrictMode 이중 실행 영향 없음
const audio = new Audio(bgmSrc);
audio.loop = true;
audio.volume = 11 / 13;

let started = false;

export function setBgmVolume(val0to13) {
  audio.volume = Math.max(0, Math.min(1, val0to13 / 13));
}

function BgmPlayer() {
  useEffect(() => {
    if (started) return;

    const startBgm = () => {
      if (started) return;
      started = true;
      audio.play().catch(e => console.warn('BGM 재생 실패:', e));
      document.removeEventListener('click', startBgm);
    };

    document.addEventListener('click', startBgm);
    return () => document.removeEventListener('click', startBgm);
  }, []);

  return null;
}

export default BgmPlayer;
