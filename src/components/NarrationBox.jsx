import { useState, useEffect } from 'react';
import { playBlip, playClick } from '../utils/sound';

function NarrationBox({ text, onNext }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Enter') handleClick();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [done]);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (text[i - 1] && text[i - 1] !== ' ' && text[i - 1] !== '\n') playBlip();
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [text]);

  const handleClick = () => {
    if (!done) {
      setDisplayed(text);
      setDone(true);
    } else {
      playClick();
      onNext();
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '94vw',
        height: '314px',
        background: 'rgba(21, 22, 26, 0.80)',
        zIndex: 10,
        cursor: 'pointer',
      }}
    >
      {/* 테두리 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '97%',
          height: '269px',
          border: '2px solid #000',
          boxSizing: 'border-box',
          pointerEvents: 'none',
        }}
      />

      {/* 텍스트 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: '"Black Han Sans", Coda, sans-serif',
            fontSize: '30px',
            fontWeight: 400,
            lineHeight: 'normal',
            margin: 0,
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
            minHeight: '1em',
          }}
        >
          {displayed}
          {!done && (
            <span style={{ opacity: 0.5, animation: 'blink 0.7s step-end infinite' }}>|</span>
          )}
        </p>
      </div>

      {/* > 버튼: 텍스트 완성 후 표시 */}
      {done && (
        <p
          style={{
            position: 'absolute',
            top: '240px',
            right: '20px',
            width: '57px',
            height: '35px',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Coda',
            fontSize: '30px',
            fontWeight: 400,
            lineHeight: 'normal',
            margin: 0,
            cursor: 'pointer',
            zIndex: 10,
            animation: 'pulse 1s ease-in-out infinite',
          }}
          onClick={e => { e.stopPropagation(); onNext(); }}
        >
          &gt;
        </p>
      )}
    </div>
  );
}

export default NarrationBox;
