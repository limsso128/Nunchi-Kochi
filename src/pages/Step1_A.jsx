import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import step1Background from '../assets/images/Step1.png';
import clockImg from '../assets/images/clock.png';
import Layout from '../components/Layout';
import NextButton from '../components/NextButton';
import DialogueBox from '../components/DialogueBox';

const dialogues = [
  '에이, 그래 5분만 더 잔다고 뭐가 크게 달라진다고..',
];

function Step1_A() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [showGradient, setShowGradient] = useState(false);
  const [showAlarm, setShowAlarm] = useState(false);
  const [showPanic, setShowPanic] = useState(false);

  const handleNext = () => {
    if (index < dialogues.length - 1) {
      setIndex(index + 1);
    } else {
      setShowGradient(true);
      setTimeout(() => {
        setShowGradient(false);
        setShowAlarm(true);
      }, 1500);
    }
  };

  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${step1Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        {/* 시계 이미지 */}
        <div
          style={{
            position: 'absolute',
            top: '171px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '556px',
            height: '556px',
            aspectRatio: '1/1',
            background: `url(${clockImg}) 50% / cover no-repeat`,
            zIndex: 0,
          }}
        />

        {/* 첫 대화창 */}
        {!showGradient && !showAlarm && (
          <DialogueBox text={dialogues[index]} onNext={handleNext} />
        )}

        {/* 그라디언트 오버레이 */}
        {showGradient && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1280px',
              height: '832px',
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.90) 20.37%, rgba(51, 51, 51, 0.00) 51.4%, rgba(0, 0, 0, 0.90) 77.1%)',
              zIndex: 5,
            }}
          />
        )}

        {/* 알람 대화창 */}
        {showAlarm && !showPanic && (
          <>
            <div
              style={{
                position: 'absolute',
                top: '424px',
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
                띠디디디-!!
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '438.5px',
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
            <NextButton onClick={() => setShowPanic(true)} top="566px" left="1162px" />
          </>
        )}

        {/* 패닉 대화창 */}
        {showPanic && (
          <DialogueBox text="꺄아ㅏㅏ-!! 늦었다!!" onNext={() => navigate('/step1-a1')} />
        )}
      </div>
    </Layout>
  );
}

export default Step1_A;
