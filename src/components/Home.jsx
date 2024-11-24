import React from 'react';

const Home = ({ onLoginClick }) => {
  const styles = {
    page: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      backgroundImage: 'url(https://www.prontocopec.cl/wp-content/uploads/2020/07/Pronto-Copec-Vitacura.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 200,
      left: 200,
      right: 200,
      bottom: 200,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderRadius: 20,
    },
    content: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      padding: '2rem',
    },
    heading: {
      color: '#ffffff',
      fontSize: '5rem',
      marginBottom: '2rem',
      textShadow: '5px 5px 4px rgba(0, 0, 0, 1)',
    },
    loginButton: {
      padding: '1rem 2rem',
      fontSize: '1.2rem',
      backgroundColor: '#ff0000',
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    loginButtonHover: {
      backgroundColor: '#cc0000',
      transform: 'scale(1.05)',
    },
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = styles.loginButtonHover.backgroundColor;
    e.currentTarget.style.transform = styles.loginButtonHover.transform;
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = styles.loginButton.backgroundColor;
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.heading}>¡Bienvenido a LightShelf!</h1>
        <button
          style={styles.loginButton}
          onClick={onLoginClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Home;
