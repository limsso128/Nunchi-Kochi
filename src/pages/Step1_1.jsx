import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
          <>
            <NarrationBox text={text} onNext={() => setShowNext(true)} />

            {/* +15 텍스트 */}
            <div
              style={{
                position: 'absolute',
                top: '202px',
                left: '704px',
                width: '275px',
                height: '49px',
                color: '#0BF',
                textAlign: 'center',
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#000',
                fontFamily: 'Coda',
                fontSize: '40px',
                fontStyle: 'normal',
                fontWeight: 800,
                lineHeight: 'normal',
                zIndex: 20,
              }}
            >
              +15
            </div>

            {/* 회색 네모 박스 */}
            <div
              style={{
                position: 'absolute',
                top: '194px',
                left: '979px',
                width: '239px',
                height: '130px',
                border: '1px solid #000',
                background: '#9D9D9D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 20,
              }}
            >
              <p
                style={{
                  width: '205px',
                  color: '#FFF',
                  fontFamily: 'Coda',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 800,
                  lineHeight: 'normal',
                  margin: 0,
                  whiteSpace: 'pre-line',
                  wordBreak: 'keep-all',
                  textAlign: 'center',
                }}
              >
                {`단정한 차림은 기본 예의입니다.\n언제나 10분 일찍 준비하면\n여유롭고 단정한\n모습을 유지하세요!`}
              </p>
            </div>
          </>
        ) : (
          <DialogueBox text="다녀오겠습니다~" onNext={() => navigate('/step2')} />
        )}
      </div>
    </Layout>
  );
}

export default Step1_1;
