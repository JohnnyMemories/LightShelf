import React from 'react';
import { useNavigate } from 'react-router-dom';
import etiquetaOferta from '../assets/Etiqueta-Oferta.png';
import iconoExcel from '../assets/icono-excel.png';

const Dashboard = ({ userRole }) => {
  const navigate = useNavigate();

  // Estilos inline
  const styles = {
    dashboardContainer: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      fontSize: '2.5rem',
      color: '#dc3545',
      textAlign: 'center',
      marginBottom: '2rem',
      fontWeight: '700',
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      padding: '2rem',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
    },
    imageExcel: {
      width: '50px',
      height: '50px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '1rem',
      transition: 'all 0.3s ease',
    },
    imageEtiqueta: {
      width: '100px',
      height: 'auto',
      objectFit: 'contain',
      borderRadius: '8px',
      marginBottom: '1rem',
      transition: 'all 0.3s ease',
    },
    cardTitle: {
      fontSize: '1.25rem',
      color: '#dc3545',
      marginBottom: '1rem',
      fontWeight: '600',
    },
    description: {
      fontSize: '1rem',
      color: '#6c757d',
      textAlign: 'center',
      lineHeight: '1.5',
    }
  };

  const handleMouseOver = (e) => {
    const card = e.currentTarget;
    const image = card.querySelector('img');
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 10px 20px rgba(220, 53, 69, 0.2)';
    card.style.borderColor = '#dc3545';
    if (image) {
      image.style.transform = 'scale(1.05)';
    }
  };

  const handleMouseOut = (e) => {
    const card = e.currentTarget;
    const image = card.querySelector('img');
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
    card.style.borderColor = 'transparent';
    if (image) {
      image.style.transform = 'scale(1)';
    }
  };

  // El resto del código permanece igual
  const getOptionsForRole = () => {
    if (userRole === 'store_admin') {
      return [
        {
          name: 'Resumen última Actualización',
          action: () => navigate('/last-update-summary'),
          image: iconoExcel,
          description: 'Ver el resumen de la última actualización de precios',
        },
        {
          name: 'Modificar flejes de tienda',
          action: () => navigate('/select-gondola'),
          image: etiquetaOferta,
          description: 'Modificar los flejes de las tiendas',
        },
      ];
    }
  };

  const options = getOptionsForRole();

  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.title}>Acciones</h1>
      <div style={styles.cardContainer}>
        {options.map((option, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={option.action}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img
              src={option.image}
              alt={option.name}
              style={option.name.includes('flejes') ? styles.imageEtiqueta : styles.imageExcel}
            />
            <h3 style={styles.cardTitle}>{option.name}</h3>
            <p style={styles.description}>{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
