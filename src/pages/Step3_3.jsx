import { useNavigate, useLocation } from 'react-router-dom';
import step3Background from '../assets/images/step3_background.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';
import ScoreOverlay from '../components/ScoreOverlay';

const TIP_TEXT = `일을 기다리기 보다는 먼저\n일을 찾는 자세를\n뭐라 할 사람은 없습니다!\n신입의 장점은 열정이니까요!!`;

function Step3_3() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout>
      <div style={{ position: 'relative', backgroundImage: `url(${step3Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh' }}>
        <NarrationBox
          text={'사수님이 나올때까지 읽고 있었더니 사수님께서 아직도 읽고 있냐며 말하셨다.\n..하긴 이 짧은 메뉴얼을 회의가 끝나기 까지 1시간동안 읽고 있으니 조금 이상하기도 하다.'}
          onNext={() => navigate('/step4', { state: { 명성: (location.state?.명성 ?? 0) - 30, 호감도: (location.state?.호감도 ?? 0) - 40 } })}
        />
        <ScoreOverlay blueScore={-30} pinkScore={-40} tipText={TIP_TEXT} />
      </div>
    </Layout>
  );
}

export default Step3_3;
