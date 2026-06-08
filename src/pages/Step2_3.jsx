import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import step2Background from '../assets/images/step2_background.png';
import Layout from '../components/Layout';
import DialogueBox from '../components/DialogueBox';
import NarrationBox from '../components/NarrationBox';

const steps = [
  { type: 'dialogue', text: '어?!! 사수님~~!!' },
  { type: 'dialogue', text: '우와~! 이런데서 다 만나네요ㅎㅎ!!' },
  { type: 'narration', text: '주위사람들이 모두 나와 사수님을 응시한다.' },
  { type: 'dialogue', text: '...{user}사원, 조금 조용히 인사할까요?;//' },
  { type: 'narration', text: '사수님께 작은 꾸중을 들으며 출근했다.' },
];

function Step2_3() {
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

export default Step2_3;
