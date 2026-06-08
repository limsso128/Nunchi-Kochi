import { useNavigate } from 'react-router-dom';
import step3Background from '../assets/images/step3_background.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';

function Step3_2() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${step3Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        <NarrationBox
          text={'간식을 먹으며 자체쉬는 시간을 가지다 지나가던 대리님에게 걸렸다..\n대리님이 이 일 이후로 안 좋게보시는 것같다...'}
          onNext={() => navigate('/step4')}
        />
      </div>
    </Layout>
  );
}

export default Step3_2;
