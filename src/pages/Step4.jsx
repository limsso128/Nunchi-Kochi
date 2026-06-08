import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import step4Background from '../assets/images/step4_background.png';
import Layout from '../components/Layout';
import DialogueBox from '../components/DialogueBox';
import NarrationBox from '../components/NarrationBox';
import MissionCard from '../components/MissionCard';

const steps = [
  { type: 'narration', text: '점심시간\n팀 동료들과 회사 근처 맛집에 왔다.' },
  { type: 'dialogue', speaker: 'user', text: '(내가 어디에 앉고, 어떻게 수저를 놓아야 하지?)' },
];

const choices = [
  { index: 1, text: '1. 안쪽으로 들어가 위생적이게 내것만 꺼내 준비한다.', route: '/step4-1' },
  { index: 2, text: '2. 맨 마지막에 앉고 일단 가만히 있는다.', route: '/step4-2' },
  { index: 3, text: '3. 내가 제일 안쪽으로 들어가 동료들의 수저와 물을 따른다.', route: '/step4-3' },
];

function Step4() {
  const navigate = useNavigate();
  const location = useLocation();
  const scoreState = { 명성: location.state?.명성 ?? 0, 호감도: location.state?.호감도 ?? 0 };
  const [index, setIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);

  const handleNext = () => {
    if (index < steps.length - 1) {
      setIndex(index + 1);
    } else {
      setShowChoices(true);
    }
  };

  const current = steps[index];

  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${step4Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        {!showChoices && current.type === 'narration' && (
          <NarrationBox text={current.text} onNext={handleNext} />
        )}
        {!showChoices && current.type === 'dialogue' && (
          <DialogueBox text={current.text} onNext={handleNext} speaker={current.speaker} />
        )}

        {showChoices && (
          <>
            <div style={{ position: 'absolute', top: '480px', left: '50%', transform: 'translateX(-50%)' }}>
              <MissionCard text={choices[0].text} index={choices[0].index} routeOverride={choices[0].route} scoreState={scoreState} />
            </div>
            <div style={{ position: 'absolute', top: '590px', left: '50%', transform: 'translateX(-50%)' }}>
              <MissionCard text={choices[1].text} index={choices[1].index} routeOverride={choices[1].route} scoreState={scoreState} />
            </div>
            <div style={{ position: 'absolute', top: '700px', left: '50%', transform: 'translateX(-50%)' }}>
              <MissionCard text={choices[2].text} index={choices[2].index} routeOverride={choices[2].route} scoreState={scoreState} />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Step4;
