import { useState } from 'react';
import step1Background from '../assets/images/Step1.png';
import Layout from '../components/Layout';
import MissionCard from '../components/MissionCard';

const dialogues = [
  '띠디디띠-(알람음)',
  '으음..',
  '아.. 일어나야하는데...',
];

function Step1() {
  const [index, setIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);

  const handleNext = () => {
    if (index < dialogues.length - 1) {
      setIndex(index + 1);
    } else {
      setShowChoices(true);
    }
  };

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
          <>
            <div
              style={{
                position: 'absolute',
                top: '538px',
                left: '35px',
                width: '181px',
                height: '64px',
                background: 'rgba(21, 22, 26, 0.80)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  width: '151px',
                  height: '43px',
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'Coda',
                  fontSize: '30px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  margin: 0,
                }}
              >
                user
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '602px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1197px',
                height: '202px',
                background: 'rgba(21, 22, 26, 0.80)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  width: '1111px',
                  height: '49px',
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'Coda',
                  fontSize: '30px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  margin: 0,
                }}
              >
                {dialogues[index]}
              </p>
            </div>
            <p
              style={{
                position: 'absolute',
                top: '744px',
                left: '1159px',
                width: '57px',
                height: '35px',
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Coda',
                fontSize: '30px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                margin: 0,
                cursor: 'pointer',
                zIndex: 10,
              }}
              onClick={handleNext}
            >
              &gt;
            </p>
            <div
              style={{
                position: 'absolute',
                top: '616.5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1166px',
                height: '173.5px',
                border: '2px solid #000',
                boxSizing: 'border-box',
              }}
            />
          </>
        )}
      </div>
    </Layout>
  );
}

export default Step1;
