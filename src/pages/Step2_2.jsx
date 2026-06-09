import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import step2Background from '../assets/images/step2_background.png';
import Layout from '../components/Layout';
import DialogueBox from '../components/DialogueBox';
import NarrationBox from '../components/NarrationBox';
import ScoreOverlay from '../components/ScoreOverlay';

const steps = [
  { type: 'dialogue', text: '안녕하세요, 00사수님 좋은 아침입니다ㅎㅎ' },
  { type: 'narration', text: '내가 먼저 반갑게 인사하니 사수님께서도 반갑게 인사해주셨다.\n서로 기분 좋게 회사에 출근 했다.' },
];

const TIP_TEXT = `회사 밖에서 회사 동료를 만나면\n피하기 보단 먼저 가볍게\n인사를 해보아요!`;

function Step2_2() {
  const navigate = useNavigate();
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const isLast = index === steps.length - 1;

  const handleNext = () => {
    if (index < steps.length - 1) setIndex(index + 1);
    else navigate('/step3', { state: { 명성: (location.state?.명성 ?? 0) + 15, 호감도: (location.state?.호감도 ?? 0) + 30 } });
  };

  const current = steps[index];

  return (
    <Layout>
      <div style={{ position: 'relative', backgroundImage: `url(${step2Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh' }}>
        {current.type === 'dialogue' && <DialogueBox text={current.text} onNext={handleNext} />}
        {current.type === 'narration' && <NarrationBox text={current.text} onNext={handleNext} />}
        {isLast && <ScoreOverlay blueScore={15} pinkScore={30} tipText={TIP_TEXT} />}
      </div>
    </Layout>
  );
}

export default Step2_2;
