import { useLocation } from 'react-router-dom';
import step1_1Background from '../assets/images/Step1_1.png';
import Layout from '../components/Layout';

const choiceTexts = {
  1: '',
  2: '',
  3: '(알람을 끄고 바로 눈을 떠서 준비를 맞쳤다.)',
};

function Step1_1() {
  const location = useLocation();
  const choice = location.state?.choice;
  const text = choiceTexts[choice] ?? '(알람을 끄고 바로 눈을 떠서 준비를 맞쳤다.)';

  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${step1_1Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '94vw',
            height: '314px',
            background: 'rgba(21, 22, 26, 0.80)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              color: '#FFF',
              fontFamily: 'Coda, sans-serif',
              fontSize: '30px',
              fontWeight: 400,
              textAlign: 'center',
              display: 'block',
            }}
          >
            {text || '(알람을 끄고 바로 눈을 떠서 준비를 맞쳤다.)'}
          </span>
        </div>
      </div>
    </Layout>
  );
}

export default Step1_1;
