import { useNavigate, useLocation } from 'react-router-dom';
import step7Background from '../assets/images/step7_background.png';
import Layout from '../components/Layout';

function Step7() {
  const navigate = useNavigate();
  const location = useLocation();

  const 명성 = location.state?.명성 ?? 0;
  const 호감도 = location.state?.호감도 ?? 0;

  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${step7Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        {/* 명성 */}
        <div style={{
          position: 'absolute',
          top: '185px',
          left: '720px',
          width: '366px',
          height: '41px',
          color: '#0BF',
          textAlign: 'left',
          WebkitTextStrokeWidth: '1px',
          WebkitTextStrokeColor: '#000',
          fontFamily: '"Black Han Sans", Coda, sans-serif',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: 800,
          lineHeight: 'normal',
          zIndex: 10,
        }}>
          명성: {명성}
        </div>

        {/* 호감도 */}
        <div style={{
          position: 'absolute',
          top: '228px',
          left: '720px',
          width: '366px',
          height: '41px',
          color: '#F0A',
          textAlign: 'left',
          WebkitTextStrokeWidth: '1px',
          WebkitTextStrokeColor: '#000',
          fontFamily: '"Black Han Sans", Coda, sans-serif',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: 800,
          lineHeight: 'normal',
          zIndex: 10,
        }}>
          호감도: {호감도}
        </div>
      </div>
    </Layout>
  );
}

export default Step7;
