import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import step1_1Background from '../assets/images/Step1_1.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';
import DialogueBox from '../components/DialogueBox';
import ScoreOverlay from '../components/ScoreOverlay';

const choiceTexts = {
  1: '',
  2: '',
  3: '(알람을 끄고 바로 눈을 떠서 준비를 맞쳤다.)',
};

const TIP_TEXT = `단정한 차림은 기본 예의입니다.\n언제나 10분 일찍 준비하면\n여유롭고 단정한\n모습을 유지하세요!`;

function Step1_1() {
  const navigate = useNavigate();
  const location = useLocation();
  const choice = location.state?.choice;
  const text = choiceTexts[choice] ?? '(알람을 끄고 바로 눈을 떠서 준비를 맞쳤다.)';
  const [showNext, setShowNext] = useState(false);

  return (
    <Layout>
      <div style={{ position: 'relative', backgroundImage: `url(${step1_1Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh' }}>
        {!showNext ? (
          <>
            <NarrationBox text={text} onNext={() => setShowNext(true)} />
            <ScoreOverlay blueScore={15} pinkScore={0} tipText={TIP_TEXT} />
          </>
        ) : (
          <DialogueBox text="다녀오겠습니다~" onNext={() => navigate('/step2', { state: { 명성: 15, 호감도: 0 } })} />
        )}
      </div>
    </Layout>
  );
}

export default Step1_1;
