function NextButton({ onClick, top, left }) {
  return (
    <p
      style={{
        position: 'absolute',
        top: top,
        left: left,
        width: '57px',
        height: '35px',
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Coda',
        fontSize: '30px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        margin: 0,
        cursor: 'pointer',
        zIndex: 10,
      }}
      onClick={onClick}
    >
      &gt;
    </p>
  );
}

export default NextButton;
