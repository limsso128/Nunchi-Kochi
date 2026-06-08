import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import step1_1Background from '../assets/images/Step1_1.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';
import DialogueBox from '../components/DialogueBox';

const choiceTexts = {
  1: '',
  2: '',
  3: '(알람을 끄고 바로 눈을 떠서 준비를 맞쳤다.)',
};

function Step1_1() {
  const location = useLocation();
  const choice = location.state?.choice;
  const text = choiceTexts[choice] ?? '(알람을 끄고 바로 눈을 떠서 준비를 맞쳤다.)';
  const [showNext, setShowNext] = useState(false);

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
        {!showNext ? (
          <NarrationBox text={text} onNext={() => setShowNext(true)} />
        ) : (
          <DialogueBox text="다녀오겠습니다~" onNext={() => {}} />
        )}
      </div>
    </Layout>
  );
}

export default Step1_1;
