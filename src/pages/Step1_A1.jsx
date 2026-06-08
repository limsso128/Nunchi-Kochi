import { useState } from 'react';
import step1_1Background from '../assets/images/Step1_1.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';

const dialogues = [
  '우당탕-',
  '늦잠을 자서 세수도 못하고 옷만 빠르게 입고 집을 나선다.',
];

function Step1_A1() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < dialogues.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${step1_1Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        <NarrationBox text={dialogues[index]} onNext={handleNext} />
      </div>
    </Layout>
  );
}

export default Step1_A1;
