import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import startBackground from '../assets/images/start_background.png';
import { setPlayerName } from '../utils/playerName';
import { playGameStart, playClick } from '../utils/sound';

function NameInputPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [focused, setFocused] = useState(false);

  const handleConfirm = () => {
    if (!name.trim()) return;
    setPlayerName(name.trim());
    playGameStart();
    setTimeout(() => navigate('/step1'), 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleConfirm();
  };

  return (
    <div style={{
      position: 'relative',
      backgroundImage: `url(${startBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'fadeIn 0.5s ease-in-out',
    }}>

      {/* 어두운 오버레이 */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.55)',
      }} />

      {/* 카드 */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '36px',
      }}>

        {/* 상단 장식선 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '120px', height: '1px', background: 'rgba(255,255,255,0.4)' }} />
          <span style={{
            color: 'rgba(255,255,255,0.6)',
            fontFamily: '"Cinzel Decorative", serif',
            fontSize: '13px',
            fontWeight: 400,
            letterSpacing: '4px',
          }}>
            NOTICE COACH
          </span>
          <div style={{ width: '120px', height: '1px', background: 'rgba(255,255,255,0.4)' }} />
        </div>

        {/* 제목 */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            color: '#FFF',
            fontFamily: '"Black Han Sans", sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            margin: '0 0 8px 0',
            letterSpacing: '6px',
            opacity: 0.7,
          }}>
            오늘의 주인공
          </p>
          <p style={{
            color: '#FFF',
            fontFamily: '"Black Han Sans", sans-serif',
            fontSize: '38px',
            fontWeight: 400,
            margin: 0,
            letterSpacing: '2px',
          }}>
            당신의 이름은?
          </p>
        </div>

        {/* 입력창 */}
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            maxLength={8}
            placeholder="이름 입력..."
            style={{
              width: '360px',
              height: '64px',
              background: 'rgba(21, 22, 26, 0.80)',
              border: `2px solid ${focused ? '#FFF' : 'rgba(255,255,255,0.3)'}`,
              color: '#FFF',
              fontFamily: '"Black Han Sans", sans-serif',
              fontSize: '28px',
              fontWeight: 400,
              textAlign: 'center',
              outline: 'none',
              boxSizing: 'border-box',
              letterSpacing: '4px',
              transition: 'border-color 0.2s',
              caretColor: '#0BF',
            }}
          />
          {/* 글자수 */}
          <span style={{
            position: 'absolute',
            bottom: '-24px',
            right: '4px',
            color: 'rgba(255,255,255,0.35)',
            fontFamily: 'Coda, sans-serif',
            fontSize: '13px',
          }}>
            {name.length}/8
          </span>
        </div>

        {/* 확인 버튼 */}
        <div
          onClick={handleConfirm}
          style={{
            marginTop: '12px',
            width: '240px',
            height: '56px',
            background: name.trim() ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
            border: `2px solid ${name.trim() ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: name.trim() ? 'pointer' : 'default',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { if (name.trim()) { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; playClick(); }}}
          onMouseLeave={e => { e.currentTarget.style.background = name.trim() ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)'; }}
        >
          <span style={{
            color: name.trim() ? '#FFF' : 'rgba(255,255,255,0.3)',
            fontFamily: '"Cinzel Decorative", serif',
            fontSize: '20px',
            fontWeight: 900,
            letterSpacing: '3px',
          }}>
            CONFIRM
          </span>
        </div>

        {/* 하단 장식선 */}
        <div style={{ width: '300px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
      </div>
    </div>
  );
}

export default NameInputPage;
