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

const TIP_TEXT = `회사 밖에서 회사 동료를 만나면\n피하기 보단 먼저 가볍게\n인사를 해보아요!`;

function ScoreOverlay({ score }) {
  const isPlus = score > 0;
  return (
    <>
      <div style={{
        position: 'absolute', top: '202px', left: '704px',
        width: '275px', height: '49px',
        color: '#0BF',
        textAlign: 'center',
        WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#000',
        fontFamily: 'Coda', fontSize: '40px', fontStyle: 'normal',
        fontWeight: 800, lineHeight: 'normal', zIndex: 20,
      }}>
        {isPlus ? `+${score}` : score}
      </div>
      <div style={{
        position: 'absolute', top: '194px', left: '979px',
        width: '239px', height: '130px',
        border: '1px solid #000', background: '#9D9D9D',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 20,
      }}>
        <p style={{
          width: '205px', color: '#FFF', fontFamily: 'Coda',
          fontSize: '15px', fontStyle: 'normal', fontWeight: 800,
          lineHeight: 'normal', margin: 0,
          whiteSpace: 'pre-line', wordBreak: 'keep-all', textAlign: 'center',
        }}>
          {TIP_TEXT}
        </p>
      </div>
    </>
  );
}

function Step2_3() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const isLast = index === steps.length - 1;

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
      <div style={{
        position: 'relative',
        backgroundImage: `url(${step2Background})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh',
      }}>
        {current.type === 'dialogue' && <DialogueBox text={current.text} onNext={handleNext} />}
        {current.type === 'narration' && <NarrationBox text={current.text} onNext={handleNext} />}
        {isLast && <ScoreOverlay score={-15} />}
        {isLast && (
          <div style={{
            position: 'absolute', top: '260px', left: '788px',
            width: '275px', height: '49px',
            color: '#F0A',
            textAlign: 'center',
            WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#000',
            fontFamily: 'Coda', fontSize: '40px', fontStyle: 'normal',
            fontWeight: 800, lineHeight: 'normal', zIndex: 21,
          }}>
            -30
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Step2_3;
