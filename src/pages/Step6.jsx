import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import step6Background from '../assets/images/step6_background.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';

const steps = [
  { type: 'narration', text: '오늘 하루를 둘러보자' },
];

function Step6() {
  const navigate = useNavigate();
  const location = useLocation();
  const scoreState = { 명성: location.state?.명성 ?? 0, 호감도: location.state?.호감도 ?? 0 };
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < steps.length - 1) {
      setIndex(index + 1);
    } else {
      navigate('/step7', { state: scoreState });
    }
  };

  const current = steps[index];

  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${step6Background})`,
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

export default Step6;
