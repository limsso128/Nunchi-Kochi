function NarrationBox({ text, onNext }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '94vw',
        height: '314px',
        background: 'rgba(21, 22, 26, 0.80)',
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
            fontFamily: 'Coda',
            fontSize: '30px',
            fontWeight: 400,
            lineHeight: 'normal',
            margin: 0,
            whiteSpace: 'pre-line',
          }}
        >
          {text}
        </p>
      </div>

      {/* > 버튼: 박스 상단에서 180px, 오른쪽 */}
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
        }}
        onClick={onNext}
      >
        &gt;
      </p>
    </div>
  );
}

export default NarrationBox;
