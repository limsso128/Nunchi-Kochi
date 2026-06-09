import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import step2Background from '../assets/images/step2_background.png';
import Layout from '../components/Layout';
import DialogueBox from '../components/DialogueBox';
import NarrationBox from '../components/NarrationBox';
import ScoreOverlay from '../components/ScoreOverlay';

const steps = [
  { type: 'dialogue', text: '어?!! 사수님~~!!' },
  { type: 'dialogue', text: '우와~! 이런데서 다 만나네요ㅎㅎ!!' },
  { type: 'narration', text: '주위사람들이 모두 나와 사수님을 응시한다.' },
  { type: 'dialogue', text: '...{user}사원, 조금 조용히 인사할까요?;//' },
  { type: 'narration', text: '사수님께 작은 꾸중을 들으며 출근했다.' },
];

const TIP_TEXT = `회사 밖에서 회사 동료를 만나면\n피하기 보단 먼저 가볍게\n인사를 해보아요!`;

function Step2_3() {
  const navigate = useNavigate();
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const isLast = index === steps.length - 1;

  const handleNext = () => {
    if (index < steps.length - 1) setIndex(index + 1);
    else navigate('/step3', { state: { 명성: (location.state?.명성 ?? 0) - 15, 호감도: (location.state?.호감도 ?? 0) - 30 } });
  };

  const current = steps[index];

  return (
    <Layout>
      <div style={{ position: 'relative', backgroundImage: `url(${step2Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh' }}>
        {current.type === 'dialogue' && <DialogueBox text={current.text} onNext={handleNext} />}
        {current.type === 'narration' && <NarrationBox text={current.text} onNext={handleNext} />}
        {isLast && <ScoreOverlay blueScore={-15} pinkScore={-30} tipText={TIP_TEXT} />}
      </div>
    </Layout>
  );
}

export default Step2_3;
