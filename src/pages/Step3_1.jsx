import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import step3Background from '../assets/images/step3_background.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';
import ScoreOverlay from '../components/ScoreOverlay';

const steps = [
  { type: 'narration', text: '마침 옆자리 주임님께서 파쇄할 서류가 많았는데\n도와달라고 하셨다.' },
];

const TIP_TEXT = `일을 기다리기 보다는 먼저\n일을 찾는 자세를\n뭐라 할 사람은 없습니다!\n신입의 장점은 열정이니까요!!`;

function Step3_1() {
  const navigate = useNavigate();
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const isLast = index === steps.length - 1;

  const handleNext = () => {
    if (index < steps.length - 1) setIndex(index + 1);
    else navigate('/step4', { state: { 명성: (location.state?.명성 ?? 0) + 30, 호감도: (location.state?.호감도 ?? 0) + 40 } });
  };

  const current = steps[index];

  return (
    <Layout>
      <div style={{ position: 'relative', backgroundImage: `url(${step3Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh' }}>
        <NarrationBox text={current.text} onNext={handleNext} />
        {isLast && <ScoreOverlay blueScore={30} pinkScore={40} tipText={TIP_TEXT} />}
      </div>
    </Layout>
  );
}

export default Step3_1;
