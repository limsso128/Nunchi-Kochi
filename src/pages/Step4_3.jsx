import { useNavigate } from 'react-router-dom';
import step4Background from '../assets/images/step4_background.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';

function Step4_3() {
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
          text={'동료들이 모두 고맙다며 즐거운 식사시간이 되었다.'}
          onNext={() => navigate('/step5')}
        />
      </div>
    </Layout>
  );
}

export default Step4_3;
