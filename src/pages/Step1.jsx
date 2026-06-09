import { useState } from 'react';
import step1Background from '../assets/images/Step1.png';
import Layout from '../components/Layout';
import MissionCard from '../components/MissionCard';
import DialogueBox from '../components/DialogueBox';

const dialogues = [
  '띠디디띠-(알람음)',
  '으음..',
  '아.. 일어나야하는데...',
];

function Step1() {
  const [index, setIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);

  const handleNext = () => {
    if (index < dialogues.length - 1) setIndex(index + 1);
    else setShowChoices(true);
  };

  return (
    <Layout>
      <div style={{
        position: 'relative',
        backgroundImage: `url(${step1Background})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh',
      }}>
        {showChoices ? (
          <>
            <div style={{ position: 'absolute', top: '480px', left: '50%', transform: 'translateX(-50%)' }}>
              <MissionCard text="1.알람을 5분 뒤로 맞춘 후 조금만 더 잔다" index={1} />
            </div>
            <div style={{ position: 'absolute', top: '590px', left: '50%', transform: 'translateX(-50%)' }}>
              <MissionCard text="2.인터넷 방법 중 하나인 배게를 세게 치며 일어날 시간을 말한 뒤 잔다" index={2} />
            </div>
            <div style={{ position: 'absolute', top: '700px', left: '50%', transform: 'translateX(-50%)' }}>
              <MissionCard text="3.무거운 눈을 뜨고 지금 바로 출근 준비를 한다" index={3} />
            </div>
          </>
        ) : (
          <DialogueBox text={dialogues[index]} onNext={handleNext} />
        )}
      </div>
    </Layout>
  );
}

export default Step1;
