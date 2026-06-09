import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import step2Background from '../assets/images/step2_background.png';
import Layout from '../components/Layout';
import DialogueBox from '../components/DialogueBox';
import NarrationBox from '../components/NarrationBox';
import ScoreOverlay from '../components/ScoreOverlay';

const steps = [
  { type: 'dialogue', speaker: 'user',  text: '크흠..(아직 어색해.. 그냥 아침 플리나 들으며 출근하장;;)' },
  { type: 'dialogue', speaker: '사수님', text: '...혹시, {user}사원? 아~ 맞네!ㅎㅎ' },
  { type: 'dialogue', speaker: '사수님', text: '흐흠~...' },
  { type: 'narration', text: '이어폰을 꽂고 있어 사수님의 말에 바로 대답하지 못했다.. 뒤늦게 알아차려\n뻘쭘하고 어색한 출근길이 되었다..' },
];

const TIP_TEXT = `회사 밖에서 회사 동료를 만나면\n피하기 보단 먼저 가볍게\n인사를 해보아요!`;

function Step2_1() {
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
        {current.type === 'dialogue' && <DialogueBox text={current.text} onNext={handleNext} speaker={current.speaker} />}
        {current.type === 'narration' && <NarrationBox text={current.text} onNext={handleNext} />}
        {isLast && <ScoreOverlay blueScore={-15} pinkScore={-30} tipText={TIP_TEXT} />}
      </div>
    </Layout>
  );
}

export default Step2_1;
