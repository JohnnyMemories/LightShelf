import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onLoginClick, isLoggedIn, selectedStore, onLogout }) => {
  const navigate = useNavigate();

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 1000,
    },
    logo: {
      height: '40px',
      transition: 'transform 0.3s ease',
    },
    links: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    linkItem: {
      color: '#555',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      fontFamily: 'Flamante Roma, sans-serif',
    },
    storeDisplay: {
      marginLeft: '2rem',
      color: 'red',
      fontFamily: 'Flamante Roma, sans-serif',
    },
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = styles.linkItemHover.backgroundColor;
    e.currentTarget.style.color = styles.linkItemHover.color;
    e.currentTarget.style.transform = styles.linkItemHover.transform;
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = '#555';
    e.currentTarget.style.transform = 'scale(1)';
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <nav style={styles.navbar}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">
          <img
            src="https://www.prontocopec.cl/wp-content/themes/pronto-theme/img/LOGO-PRONTO-COPEC.png"
            alt="Pronto Copec Logo"
            style={styles.logo}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </Link>
        {selectedStore && (
          <span style={styles.storeDisplay}>
            Tienda: {selectedStore}
          </span>
        )}
      </div>
      <ul style={styles.links}>
        <li>
          <Link 
            to="/quienes-somos" 
            style={styles.linkItem}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'red';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#555';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Quiénes Somos
          </Link>
        </li>
        
        {!isLoggedIn ? (
          <li>
            <div
              onClick={onLoginClick}
              style={styles.linkItem}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'red';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#555';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Iniciar Sesión
            </div>
          </li>
        ) : (
          <>
            <li>
              <Link 
                to="/dashboard" 
                style={styles.linkItem}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'red';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#555';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Acciones
              </Link>
            </li>
            <li>
              <div
                onClick={handleLogout}
                style={styles.linkItem}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'red';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#555';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Cerrar Sesión
              </div>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
