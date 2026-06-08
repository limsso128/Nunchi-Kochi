import { useNavigate, useLocation } from 'react-router-dom';
import step3Background from '../assets/images/step3_background.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';

const TIP_TEXT = `일을 기다리기 보다는 먼저\n일을 찾는 자세를\n뭐라 할 사람은 없습니다!\n신입의 장점은 열정이니까요!!`;

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

function Step3_2() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout>
      <div style={{
        position: 'relative',
        backgroundImage: `url(${step3Background})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh',
      }}>
        <NarrationBox
          text={'간식을 먹으며 자체쉬는 시간을 가지다 지나가던 대리님에게 걸렸다..\n대리님이 이 일 이후로 안 좋게보시는 것같다...'}
          onNext={() => navigate('/step4', { state: { 명성: (location.state?.명성 ?? 0) - 30, 호감도: (location.state?.호감도 ?? 0) - 40 } })}
        />
        <ScoreOverlay score={-30} />
        <div style={{
          position: 'absolute', top: '260px', left: '788px',
          width: '275px', height: '49px',
          color: '#F0A',
          textAlign: 'center',
          WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#000',
          fontFamily: 'Coda', fontSize: '40px', fontStyle: 'normal',
          fontWeight: 800, lineHeight: 'normal', zIndex: 21,
        }}>
          -40
        </div>
      </div>
    </Layout>
  );
}

export default Step3_2;
