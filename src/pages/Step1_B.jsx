import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import step1Background from '../assets/images/Step1.png';
import deImage from '../assets/images/de.png';
import Layout from '../components/Layout';
import DialogueBox from '../components/DialogueBox';
import NarrationBox from '../components/NarrationBox';

const steps = [
  { type: 'dialogue', text: '(아, 인터넷에 유명한 일찍 일어나기 방법이 있었지.. 궁금했는데 이참에 해볼까..?)' },
  { type: 'narration', text: '인터넷 속설 방법\n1. 먼저 일어날 시간을 생각하세요!\n2. 그 다음 계속 그 시간을 생각하며 베개를 인정사정 없이 주먹으로 때리세요!\n3. 그러면 일어날 시간에 저절로 몸이 깨어 납니다!!' },
  { type: 'narration', text: '퍽-! 퍼퍽-!!' },
  { type: 'dialogue', text: '음..~ 이제 안심하고 잘 수 있겠어!' },
  { type: 'gradient' },
  { type: 'narration', text: '짹짹~' },
  { type: 'dialogue', text: '꺄아ㅏㅏ-!! 늦었다!!' },
];

function Step1_B() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [showGradient, setShowGradient] = useState(false);

  const handleNext = () => {
    const next = index + 1;
    if (next >= steps.length) {
      navigate('/step1-a1');
      return;
    }
    if (steps[next].type === 'gradient') {
      setShowGradient(true);
      setTimeout(() => {
        setShowGradient(false);
        setIndex(next + 1);
      }, 1500);
    } else {
      setIndex(next);
    }
  };

  const current = steps[index];

  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${step1Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        {/* de 이미지 - 대화창보다 뒤 */}
        <img
          src={deImage}
          alt=""
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '600px',
            maxHeight: '500px',
            objectFit: 'contain',
            zIndex: 0,
          }}
        />

        {showGradient && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1280px',
              height: '832px',
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.90) 20.37%, rgba(51, 51, 51, 0.00) 51.4%, rgba(0, 0, 0, 0.90) 77.1%)',
              zIndex: 5,
            }}
          />
        )}

        {!showGradient && current.type === 'dialogue' && (
          <DialogueBox text={current.text} onNext={handleNext} />
        )}

        {!showGradient && current.type === 'narration' && (
          <NarrationBox text={current.text} onNext={handleNext} />
        )}
      </div>
    </Layout>
  );
}

export default Step1_B;
