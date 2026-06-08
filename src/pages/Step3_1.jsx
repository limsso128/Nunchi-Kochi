import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import step3Background from '../assets/images/step3_background.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';

const steps = [
  { type: 'narration', text: '마침 옆자리 주임님께서 파쇄할 서류가 많았는데\n도와달라고 하셨다.' },
];

function Step3_1() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < steps.length - 1) {
      setIndex(index + 1);
    } else {
      navigate('/step4');
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
        <NarrationBox text={current.text} onNext={handleNext} />
      </div>
    </Layout>
  );
}

export default Step3_1;
