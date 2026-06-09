import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import step1Background from '../assets/images/Step1.png';
import clockImg from '../assets/images/clock.png';
import Layout from '../components/Layout';
import DialogueBox from '../components/DialogueBox';
import NarrationBox from '../components/NarrationBox';

function Step1_A() {
  const navigate = useNavigate();
  const [showGradient, setShowGradient] = useState(false);
  const [showAlarm, setShowAlarm] = useState(false);
  const [showPanic, setShowPanic] = useState(false);

  const handleFirst = () => {
    setShowGradient(true);
    setTimeout(() => {
      setShowGradient(false);
      setShowAlarm(true);
    }, 1500);
  };

  return (
    <Layout>
      <div style={{
        position: 'relative',
        backgroundImage: `url(${step1Background})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh',
      }}>
        {/* 시계 이미지 */}
        <div style={{
          position: 'absolute', top: '171px', left: '50%',
          transform: 'translateX(-50%)', width: '556px', height: '556px',
          background: `url(${clockImg}) 50% / cover no-repeat`, zIndex: 0,
        }} />

        {/* 첫 대화창 */}
        {!showGradient && !showAlarm && (
          <DialogueBox text="에이, 그래 5분만 더 잔다고 뭐가 크게 달라진다고.." onNext={handleFirst} />
        )}

        {/* 그라디언트 오버레이 */}
        {showGradient && (
          <div style={{
            position: 'absolute', top: 0, left: '50%',
            transform: 'translateX(-50%)', width: '1280px', height: '832px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.90) 20.37%, rgba(51,51,51,0.00) 51.4%, rgba(0,0,0,0.90) 77.1%)',
            zIndex: 5,
          }} />
        )}

        {/* 알람 나레이션 */}
        {showAlarm && !showPanic && (
          <NarrationBox text="띠디디디-!!" onNext={() => setShowPanic(true)} />
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
