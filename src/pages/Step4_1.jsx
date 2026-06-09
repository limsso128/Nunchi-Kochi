import { useNavigate, useLocation } from 'react-router-dom';
import step4Background from '../assets/images/step4_background.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';
import ScoreOverlay from '../components/ScoreOverlay';

const TIP_TEXT = `당신은 이 회사의 막내입니다.\n무언갈 준비해야할 상황이라면\n응당 회사의 제일 아랫사람이\n움직이는게 그림이 좋겠죠?`;

function Step4_1() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout>
      <div style={{ position: 'relative', backgroundImage: `url(${step4Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh' }}>
        <NarrationBox
          text={'내꺼만 챙기고 가만히 있자 동료들이 날 계속 응시하다 사수님이 다른 동료분들의\n수저와 물을 따르신다'}
          onNext={() => navigate('/step5', { state: { 명성: (location.state?.명성 ?? 0) - 40, 호감도: (location.state?.호감도 ?? 0) - 30 } })}
        />
        <ScoreOverlay blueScore={-40} pinkScore={-30} tipText={TIP_TEXT} />
      </div>
    </Layout>
  );
}

export default Step4_1;
