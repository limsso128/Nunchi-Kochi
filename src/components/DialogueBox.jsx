import { useState, useEffect } from 'react';
import NextButton from './NextButton';
import { playBlip, playClick } from '../utils/sound';
import { getPlayerName } from '../utils/playerName';

function DialogueBox({ text, onNext, speaker = 'user' }) {
  const playerName = getPlayerName();
  const resolvedSpeaker = speaker === 'user' ? playerName : speaker;
  const resolvedText = text.replace(/\{user\}/g, playerName);

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
      setDisplayed(resolvedText.slice(0, i));
      if (resolvedText[i - 1] && resolvedText[i - 1] !== ' ' && resolvedText[i - 1] !== '\n') playBlip();
      if (i >= resolvedText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  const handleClick = () => {
    if (!done) {
      setDisplayed(resolvedText);
      setDone(true);
    } else {
      playClick();
      onNext();
    }
  };

  return (
    <>
      {/* speaker 박스 */}
      <div
        style={{
          position: 'absolute',
          top: '538px',
          left: 'calc(50% - 598.5px)',
          width: '181px',
          height: '64px',
          background: 'rgba(21, 22, 26, 0.80)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <p style={{ color: '#FFF', fontFamily: 'Coda', fontSize: '30px', fontWeight: 400, margin: 0 }}>
          {resolvedSpeaker}
        </p>
      </div>

      {/* 대화창 (클릭 시 스킵 or 넘기기) */}
      <div
        onClick={handleClick}
        style={{
          position: 'absolute',
          top: '602px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1197px',
          height: '202px',
          background: 'rgba(21, 22, 26, 0.80)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          cursor: 'pointer',
        }}
      >
        <p
          style={{
            width: '1111px',
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

      {/* 테두리 */}
      <div
        style={{
          position: 'absolute',
          top: '616.5px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1166px',
          height: '173.5px',
          border: '2px solid #000',
          boxSizing: 'border-box',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* > 버튼: 텍스트 완성 후 표시 */}
      {done && (
        <NextButton onClick={onNext} top="744px" left="1159px" />
      )}
    </>
  );
}

export default DialogueBox;
