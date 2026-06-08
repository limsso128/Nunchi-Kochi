import NextButton from './NextButton';

function StoryBox({ text, onNext }) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '94vw',
          height: '314px',
          background: 'rgba(21, 22, 26, 0.80)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* 테두리 */}
        <div
          style={{
            position: 'absolute',
            width: '97%',
            height: '269px',
            border: '2px solid #000',
            boxSizing: 'border-box',
            pointerEvents: 'none',
          }}
        />
        {/* 텍스트 */}
        <p
          style={{
            position: 'relative',
            zIndex: 1,
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Coda',
            fontSize: '30px',
            fontWeight: 400,
            lineHeight: 'normal',
            margin: 0,
            padding: '0 40px',
          }}
        >
          {text}
        </p>
      </div>
      {/* > 버튼: 박스 오른쪽 하단 */}
      <NextButton onClick={onNext} top="calc(50% + 100px)" left="calc(50% + 44vw)" />
    </>
  );
}

export default StoryBox;
