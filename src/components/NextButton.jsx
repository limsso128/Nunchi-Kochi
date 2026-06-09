import { playClick } from '../utils/sound';

function NextButton({ onClick, top, left }) {
  const handleClick = () => {
    playClick();
    onClick();
  };

  return (
    <p
      style={{
        position: 'absolute',
        top: top,
        left: left,
        width: '57px',
        height: '35px',
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Coda',
        fontSize: '30px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        margin: 0,
        cursor: 'pointer',
        zIndex: 10,
        animation: 'pulse 1s ease-in-out infinite',
      }}
      onClick={handleClick}
    >
      &gt;
    </p>
  );
}

export default NextButton;
