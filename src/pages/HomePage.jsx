import { useNavigate } from 'react-router-dom';
import startBackground from '../assets/images/start_background.png';
import Layout from '../components/Layout';
import { playClick } from '../utils/sound';

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
            top: '580px',
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
          onClick={() => { playClick(); navigate('/name-input'); }}
        >
          &lt;&lt; start game &gt;&gt;
        </p>
      </div>
    </Layout>
  );
}

export default HomePage;
