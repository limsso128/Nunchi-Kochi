import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import step3Background from '../assets/images/step3_background.png';
import Layout from '../components/Layout';
import DialogueBox from '../components/DialogueBox';
import NarrationBox from '../components/NarrationBox';
import MissionCard from '../components/MissionCard';

const steps = [
  { type: 'dialogue', speaker: '사수님', text: '{user}님 이거 회사 메뉴얼이에요 천천히 읽으면서 숙지하고계세요~\n저는 회의가 있어서요' },
  { type: 'dialogue', speaker: 'user',   text: '네! 알겠습니다' },
  { type: 'narration', text: '10분 후' },
  { type: 'dialogue', speaker: 'user',   text: '(사수님이 준 회사 메뉴얼을 사수님이 회의에 들어간지 10분만에 다 읽었다..이제 무얼하지?)' },
];

const choices = [
  { index: 1, text: '1. 주변 다른 분들께 도와드릴 것이 있는지 물어본다.', route: '/step3-1' },
  { index: 2, text: '2. 탕비실에서 간식거리를 가져와 조용히 자체 쉬는 시간을 가진다.', route: '/step3-2' },
  { index: 3, text: '3. 회사 메뉴얼을 사수님께서 회의를 나오실 때까지 반복해 읽는다.', route: '/step3-3' },
];

function Step3() {
  const navigate = useNavigate();
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
          backgroundImage: `url(${step3Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        {!showChoices && current.type === 'dialogue' && (
          <DialogueBox text={current.text} onNext={handleNext} speaker={current.speaker} />
        )}
        {!showChoices && current.type === 'narration' && (
          <NarrationBox text={current.text} onNext={handleNext} />
        )}

        {showChoices && (
          <>
            <div style={{ position: 'absolute', top: '480px', left: '50%', transform: 'translateX(-50%)' }}>
              <MissionCard text={choices[0].text} index={choices[0].index} routeOverride={choices[0].route} />
            </div>
            <div style={{ position: 'absolute', top: '590px', left: '50%', transform: 'translateX(-50%)' }}>
              <MissionCard text={choices[1].text} index={choices[1].index} routeOverride={choices[1].route} />
            </div>
            <div style={{ position: 'absolute', top: '700px', left: '50%', transform: 'translateX(-50%)' }}>
              <MissionCard text={choices[2].text} index={choices[2].index} routeOverride={choices[2].route} />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Step3;
