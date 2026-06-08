import { useNavigate } from 'react-router-dom';
import step4Background from '../assets/images/step4_background.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';

function Step4_2() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${step4Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        <NarrationBox
          text={'몇초간의 정적인 시간이 있고 사수님이 내꺼 포함 대리님, 팀장님, 다른 동료분들의\n수저와 물을 준비해 주셨다.'}
          onNext={() => navigate('/step5')}
        />
      </div>
    </Layout>
  );
}

export default Step4_2;
