import settingIcon from '../assets/icons/setting.svg';
import menuIcon from '../assets/icons/menu.svg';

function Layout({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={settingIcon}
        alt="설정"
        style={{
          position: 'absolute',
          top: '34px',
          left: '42px',
          width: '35px',
          height: '35px',
          cursor: 'pointer',
          zIndex: 100,
        }}
      />
      <img
        src={menuIcon}
        alt="메뉴"
        style={{
          position: 'absolute',
          top: '87.09px',
          left: '42px',
          width: '33px',
          height: '24px',
          cursor: 'pointer',
          zIndex: 100,
        }}
      />
      {children}
    </div>
  );
}

export default Layout;
