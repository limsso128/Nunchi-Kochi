import { useNavigate } from 'react-router-dom';
import step4Background from '../assets/images/step4_background.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';

function Step4_1() {
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
          text={'내꺼만 챙기고 가만히 있자 동료들이 날 계속 응시하다 사수님이 다른 동료분들의\n수저와 물을 따르신다'}
          onNext={() => navigate('/step5')}
        />
      </div>
    </Layout>
  );
}

export default Step4_1;
