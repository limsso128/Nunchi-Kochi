import NextButton from './NextButton';

function DialogueBox({ text, onNext }) {
  return (
    <>
      {/* user 박스 */}
      <div
        style={{
          position: 'absolute',
          top: '538px',
          left: '35px',
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
          user
        </p>
      </div>

      {/* 대화창 */}
      <div
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
        }}
      >
        <p
          style={{
            width: '1111px',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Coda',
            fontSize: '30px',
            fontWeight: 400,
            lineHeight: 'normal',
            margin: 0,
          }}
        >
          {text}
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

      {/* > 버튼 */}
      <NextButton onClick={onNext} top="744px" left="1159px" />
    </>
  );
}

export default DialogueBox;
