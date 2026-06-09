import { useState } from 'react';
import { playModalOpen, setSfxVolume } from '../utils/sound';
import { setBgmVolume } from './BgmPlayer';
import settingIcon from '../assets/icons/setting.svg';

const MAX_TICKS = 13;

function SettingSlider({ label, value, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      {/* 라벨 */}
      <div style={{
        width: '80px',
        color: '#FFF',
        fontFamily: '"Black Han Sans", sans-serif',
        fontSize: '20px',
        fontWeight: 400,
        textAlign: 'right',
        flexShrink: 0,
      }}>
        {label}
      </div>

      {/* 브라켓 틱 + 라인 */}
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          {Array.from({ length: MAX_TICKS }, (_, i) => (
            <span
              key={i}
              onClick={() => onChange(i + 1)}
              style={{
                fontFamily: 'Coda, monospace',
                fontSize: '26px',
                fontWeight: 800,
                lineHeight: 1,
                color: i < value ? '#FFFFFF' : 'rgba(255,255,255,0.22)',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              [
            </span>
          ))}
        </div>
        <div style={{
          flex: 1,
          height: '2px',
          background: '#FFFFFF',
          marginLeft: '4px',
        }} />
      </div>
    </div>
  );
}

function Layout({ children }) {
  const [showSetting, setShowSetting] = useState(false);
  const [bgMusic, setBgMusic] = useState(11);
  const handleBgMusic = (v) => { setBgMusic(v); setBgmVolume(v); setSfxVolume(v); };

  return (
    <div style={{ position: 'relative', animation: 'fadeIn 0.45s ease-in-out' }}>
      <img
        src={settingIcon}
        alt="설정"
        onClick={() => { setShowSetting(true); playModalOpen(); }}
        style={{
          position: 'absolute',
          top: '34px',
          left: '42px',
          width: '35px',
          height: '35px',
          cursor: 'pointer',
          zIndex: 100,
        }}
      />
      {children}

      {/* 설정 모달 */}
      {showSetting && (
        <div
          onClick={() => setShowSetting(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw', height: '100vh',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* 모달 박스 */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '863px',
              height: '643px',
              background: 'rgba(0, 0, 0, 0.65)',
              boxSizing: 'border-box',
            }}
          >
            {/* X 닫기 버튼 */}
            <div
              onClick={() => setShowSetting(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '24px',
                color: '#FFF',
                fontFamily: '"Cinzel Decorative", serif',
                fontSize: '22px',
                fontWeight: 900,
                cursor: 'pointer',
                userSelect: 'none',
                lineHeight: 1,
              }}
            >
              X
            </div>

            {/* 슬라이더 영역 */}
            <div style={{
              position: 'absolute',
              top: '300px',
              left: '60px',
              right: '60px',
              display: 'flex',
              flexDirection: 'column',
              gap: '60px',
            }}>
              <SettingSlider label="배경음악" value={bgMusic} onChange={handleBgMusic} />
            </div>

            {/* 게임 나가기 버튼 */}
            <div
              onClick={() => { setShowSetting(false); window.location.href = '/'; }}
              style={{
                position: 'absolute',
                top: '490px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '228px',
                height: '53px',
                background: '#929292',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{
                color: '#FFF',
                fontFamily: '"Cinzel Decorative", serif',
                fontSize: '22px',
                fontWeight: 900,
                lineHeight: 'normal',
              }}>
                게임나가기
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
