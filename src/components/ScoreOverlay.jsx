import { useEffect } from 'react';
import { playPositive, playNegative, playWhoosh } from '../utils/sound';

/**
 * ScoreOverlay
 *   blueScore  : 명성 delta  (숫자, 양수/음수)
 *   pinkScore  : 호감도 delta (숫자, 양수/음수)
 *   tipText    : 지식카드 본문 (줄바꿈 \n 가능)
 */
function fmt(n) {
  return n > 0 ? `+${n}` : `${n}`;
}

function ScoreOverlay({ blueScore, pinkScore, tipText }) {
  useEffect(() => {
    // 점수 등장음
    if (blueScore > 0) playPositive();
    else playNegative();
    // 지식카드 whoosh (약간 딜레이)
    const t = setTimeout(() => playWhoosh(), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* 파란 점수 (명성) */}
      <div style={{
        position: 'absolute', top: '202px', left: '704px',
        width: '275px', height: '49px',
        color: '#0BF',
        textAlign: 'center',
        WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#000',
        fontFamily: 'Coda', fontSize: '40px', fontWeight: 800,
        lineHeight: 'normal', zIndex: 20,
        animation: 'scorePop 0.5s cubic-bezier(0.36,0.07,0.19,0.97) both, scoreFloat 2s ease-in-out 0.5s infinite',
      }}>
        {fmt(blueScore)}
      </div>

      {/* 핑크 점수 (호감도) */}
      <div style={{
        position: 'absolute', top: '260px', left: '788px',
        width: '275px', height: '49px',
        color: '#F0A',
        textAlign: 'center',
        WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#000',
        fontFamily: 'Coda', fontSize: '40px', fontWeight: 800,
        lineHeight: 'normal', zIndex: 21,
        animation: 'scorePop 0.5s cubic-bezier(0.36,0.07,0.19,0.97) 0.15s both, scoreFloat 2s ease-in-out 0.65s infinite',
      }}>
        {fmt(pinkScore)}
      </div>

      {/* 지식카드 */}
      <div style={{
        position: 'absolute', top: '194px', left: '979px',
        width: '239px', height: '130px',
        border: '1px solid #000', background: '#9D9D9D',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 20,
        animation: 'slideInRight 0.45s ease-out 0.3s both',
      }}>
        <p style={{
          width: '205px', color: '#FFF',
          fontFamily: '"Black Han Sans", Coda, sans-serif',
          fontSize: '15px', fontWeight: 400,
          lineHeight: '1.5', margin: 0,
          whiteSpace: 'pre-line', wordBreak: 'keep-all', textAlign: 'center',
        }}>
          {tipText}
        </p>
      </div>
    </>
  );
}

export default ScoreOverlay;
