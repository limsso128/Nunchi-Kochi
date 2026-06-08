import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import level1Icon from '../assets/icons/level1.svg';
import level2Icon from '../assets/icons/level2.svg';

function MissionCard({ text, index }) {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setSelected(true);
    navigate('/step1-1', { state: { choice: index } });
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'relative',
        width: '1030px',
        height: '100px',
        cursor: 'pointer',
      }}
    >
      {/* 가로 배경 박스 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1030px',
          height: '100px',
          background: selected ? 'rgba(87, 87, 87, 0.80)' : 'rgba(21, 22, 26, 0.80)',
          zIndex: 1,
        }}
      />

      {/* 테두리 박스 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1004px',
          height: selected ? '87px' : '85px',
          border: `2px solid ${selected ? '#FFF' : '#000'}`,
          boxSizing: 'border-box',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* 정사각형 아이콘 박스 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '100px',
          background: selected ? '#5E5E5E' : '#000',
          borderRadius: selected ? '10px' : '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
        }}
      >
        {/* level 아이콘 */}
        <img
          src={selected ? level2Icon : level1Icon}
          alt="level"
          style={{ width: '72px', height: '72px', position: 'relative', zIndex: 4 }}
        />
      </div>

      {/* 텍스트 */}
      <div
        style={{
          position: 'absolute',
          left: '100px',
          top: 0,
          width: '930px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
        }}
      >
        <p
          style={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Coda',
            fontSize: '30px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            margin: 0,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default MissionCard;
