import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import step2Background from '../assets/images/step2_background.png';
import Layout from '../components/Layout';
import DialogueBox from '../components/DialogueBox';
import MissionCard from '../components/MissionCard';

const steps = [
  { type: 'dialogue', text: '(휴우~.. 늦지 않게 나왔다;;)' },
  { type: 'dialogue', text: '어.. 저분은..?' },
  { type: 'dialogue', text: '(첫날부터 사수님을 마주치다니, 지금 인사를 해야 할까?)' },
];

const choices = [
  { index: 1, text: '1. 어색하니까 그냥 모른척 지나간다.', route: '/step2-1' },
  { index: 2, text: '2. 사수님께 다가가 조심스럽게 인사를 한다.', route: '/step2-2' },
  { index: 3, text: '3. 멀리서부터 큰소리로 인사하며 다가간다.', route: '/step2-3' },
];

function Step2() {
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
          backgroundImage: `url(${step2Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        {!showChoices && (
          <DialogueBox text={current.text} onNext={handleNext} />
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

export default Step2;
