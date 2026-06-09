import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import step1_1Background from '../assets/images/Step1_1.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';
import ScoreOverlay from '../components/ScoreOverlay';

const dialogues = [
  '우당탕-',
  '늦잠을 자서 세수도 못하고 옷만 빠르게 입고 집을 나선다.',
];

const TIP_TEXT = `단정한 차림은 기본 예의입니다.\n언제나 10분 일찍 준비하면\n여유롭고 단정한\n모습을 유지하세요!`;

function Step1_A1() {
  const navigate = useNavigate();
  const location = useLocation();
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < dialogues.length - 1) setIndex(index + 1);
    else navigate('/step2', { state: { 명성: -15, 호감도: 0 } });
  };

  return (
    <Layout>
      <div style={{ position: 'relative', backgroundImage: `url(${step1_1Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh' }}>
        <NarrationBox text={dialogues[index]} onNext={handleNext} />
        {index === 1 && <ScoreOverlay blueScore={-15} pinkScore={0} tipText={TIP_TEXT} />}
      </div>
    </Layout>
  );
}

export default Step1_A1;
