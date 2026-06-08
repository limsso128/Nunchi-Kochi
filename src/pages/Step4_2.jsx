import { useNavigate } from 'react-router-dom';
import step4Background from '../assets/images/step4_background.png';
import Layout from '../components/Layout';
import NarrationBox from '../components/NarrationBox';

const TIP_TEXT = `당신은 이 회사의 막내입니다.\n무언갈 준비해야할 상황이라면\n응당 회사의 제일 아랫사람이\n움직이는게 그림이 좋겠죠?`;

function ScoreOverlay({ score }) {
  const isPlus = score > 0;
  return (
    <>
      <div style={{
        position: 'absolute', top: '202px', left: '704px',
        width: '275px', height: '49px',
        color: '#0BF',
        textAlign: 'center',
        WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#000',
        fontFamily: 'Coda', fontSize: '40px', fontStyle: 'normal',
        fontWeight: 800, lineHeight: 'normal', zIndex: 20,
      }}>
        {isPlus ? `+${score}` : score}
      </div>
      <div style={{
        position: 'absolute', top: '194px', left: '979px',
        width: '239px', height: '130px',
        border: '1px solid #000', background: '#9D9D9D',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 20,
      }}>
        <p style={{
          width: '205px', color: '#FFF', fontFamily: 'Coda',
          fontSize: '15px', fontStyle: 'normal', fontWeight: 800,
          lineHeight: 'normal', margin: 0,
          whiteSpace: 'pre-line', wordBreak: 'keep-all', textAlign: 'center',
        }}>
          {TIP_TEXT}
        </p>
      </div>
    </>
  );
}

function Step4_2() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div style={{
        position: 'relative',
        backgroundImage: `url(${step4Background})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh',
      }}>
        <NarrationBox
          text={'몇초간의 정적인 시간이 있고 사수님이 내꺼 포함 대리님, 팀장님, 다른 동료분들의\n수저와 물을 준비해 주셨다.'}
          onNext={() => navigate('/step5')}
        />
        <ScoreOverlay score={-40} />
        <div style={{
          position: 'absolute', top: '260px', left: '788px',
          width: '275px', height: '49px',
          color: '#F0A',
          textAlign: 'center',
          WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#000',
          fontFamily: 'Coda', fontSize: '40px', fontStyle: 'normal',
          fontWeight: 800, lineHeight: 'normal', zIndex: 21,
        }}>
          -30
        </div>
      </div>
    </Layout>
  );
}

export default Step4_2;
