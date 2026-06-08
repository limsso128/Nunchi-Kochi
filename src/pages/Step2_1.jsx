import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import step2Background from '../assets/images/step2_background.png';
import Layout from '../components/Layout';
import DialogueBox from '../components/DialogueBox';
import NarrationBox from '../components/NarrationBox';

const steps = [
  { type: 'dialogue', text: '크흠..(아직 어색해.. 그냥 아침 플리나 들으며 출근하장;;)' },
  { type: 'dialogue', text: '...혹시, {user}사원? 아~ 맞네!ㅎㅎ' },
  { type: 'dialogue', text: '흐흠~...' },
  { type: 'narration', text: '이어폰을 꽂고 있어 사수님의 말에 바로 대답하지 못했다.. 뒤늦게 알아차려\n뻘쭘하고 어색한 출근길이 되었다..' },
];

function Step2_1() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < steps.length - 1) {
      setIndex(index + 1);
    } else {
      navigate('/step3');
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
        {current.type === 'dialogue' && (
          <DialogueBox text={current.text} onNext={handleNext} />
        )}
        {current.type === 'narration' && (
          <NarrationBox text={current.text} onNext={handleNext} />
        )}
      </div>
    </Layout>
  );
}

export default Step2_1;
