import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import step2Background from '../assets/images/step2_background.png';
import Layout from '../components/Layout';
import DialogueBox from '../components/DialogueBox';
import NarrationBox from '../components/NarrationBox';

const steps = [
  { type: 'dialogue', text: '안녕하세요, 00사수님 좋은 아침입니다ㅎㅎ' },
  { type: 'narration', text: '내가 먼저 반갑게 인사하니 사수님께서도 반갑게 인사해주셨다.\n서로 기분 좋게 회사에 출근 했다.' },
];

function Step2_2() {
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

export default Step2_2;
