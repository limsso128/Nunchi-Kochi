import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import step5Background from '../assets/images/step5_background.png';
import step5_1Background from '../assets/images/step5_1_background.png';
import step5_2Background from '../assets/images/step5_2_background.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';
import DialogueBox from '../components/DialogueBox';

const steps = [
  { type: 'narration', bg: 'step5',   text: '드디어 근무시간이 끝났다.\n이제 집에 돌아간다.' },
  { type: 'dialogue',  bg: 'step5',   speaker: 'user', text: '오늘 정말 힘들었다..' },
  { type: 'dialogue',  bg: 'step5_1', speaker: 'user', text: '(아침에 사수분 만날 때 아찔 했지.. 식사시간에 또 어땠고...)' },
  { type: 'dialogue',  bg: 'step5_2', speaker: 'user', text: '그래도... 오늘 하루 잘 보냈다..!' },
  { type: 'narration', bg: 'step5_2', gradient: true, text: '...이제 자야겠다.....' },
];

const bgMap = {
  step5:   step5Background,
  step5_1: step5_1Background,
  step5_2: step5_2Background,
};

function Step5() {
  const navigate = useNavigate();
  const location = useLocation();
  const scoreState = { 명성: location.state?.명성 ?? 0, 호감도: location.state?.호감도 ?? 0 };
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    const next = index + 1;
    if (next >= steps.length) {
      navigate('/step6', { state: scoreState });
      return;
    }
    setIndex(next);
  };

  const current = steps[index];
  const bg = bgMap[current.bg];

  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        {current.gradient && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1280px',
              height: '832px',
              background: 'linear-gradient(180deg, #000 20.37%, rgba(51, 51, 51, 0.00) 51.4%, #000 77.1%)',
              zIndex: 5,
            }}
          />
        )}

        {current.type === 'narration' && (
          <NarrationBox text={current.text} onNext={handleNext} />
        )}
        {current.type === 'dialogue' && (
          <DialogueBox text={current.text} onNext={handleNext} speaker={current.speaker} />
        )}
      </div>
    </Layout>
  );
}

export default Step5;
