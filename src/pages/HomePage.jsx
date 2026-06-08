import { useNavigate } from 'react-router-dom';
import startBackground from '../assets/images/start_background.png';
import Layout from '../components/Layout';

function HomePage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${startBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        <p
          style={{
            position: 'absolute',
            top: '494px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '377px',
            height: '45px',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: '"Cinzel Decorative"',
            fontSize: '30px',
            fontStyle: 'normal',
            fontWeight: 900,
            lineHeight: 'normal',
            margin: 0,
            cursor: 'pointer',
          }}
          onClick={() => navigate('/step1')}
        >
          &lt;&lt; start game &gt;&gt;
        </p>
        <p
          style={{
            position: 'absolute',
            top: '552px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '377px',
            height: '45px',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: '"Cinzel Decorative"',
            fontSize: '30px',
            fontStyle: 'normal',
            fontWeight: 900,
            lineHeight: 'normal',
            margin: 0,
            cursor: 'pointer',
          }}
        >
          &lt;&lt; 지식 사전 &gt;&gt;
        </p>
      </div>
    </Layout>
  );
}

export default HomePage;
