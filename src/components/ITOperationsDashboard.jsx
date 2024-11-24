import React from 'react';
import { useNavigate } from 'react-router-dom';
import etiquetaOferta from '../assets/Etiqueta-Oferta.png';

const ITOperationsDashboard = ({ userRole }) => {
  const navigate = useNavigate();

  const containerStyle = {
    width: '100%',
    maxWidth: '1400px',
    margin: '2rem auto',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center center',
    minHeight: '100vh',
    backgroundColor: 'transparent'
  };

  const headerStyle = {
    color: '#dc3545',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
    fontFamily: 'Flamante Roma, sans-serif',
    fontWeight: 'bold'
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    width: '100%',
    padding: '1rem'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '2px solid transparent',
    height: '100%',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '1.5rem',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '1.4rem',
    color: '#dc3545',
    marginBottom: '0.5rem',
    fontFamily: 'Flamante Roma, sans-serif'
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#6c757d',
    lineHeight: '1.5',
  };

  const handleMouseOver = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 10px 20px rgba(220, 53, 69, 0.2)';
    card.style.borderColor = '#dc3545';
  };

  const handleMouseOut = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    card.style.borderColor = 'transparent';
  };

  // Opciones según el rol del usuario
  const getOptionsForRole = () => {
    if (userRole === 'store_admin') {
      return [
        {
          name: 'Actualizar precios',
          action: () => navigate('/store-selector'),
          image: 'https://play-lh.googleusercontent.com/QzJM-JULtutSqefQu5TNr_HEG7zvZJbRfe61ZqdmpVzNRCfE2B0nRWvNgcH7eAiMrP0',
          description: 'Actualizar los precios en la tienda seleccionada',
        }
      ];
    }
    
    return [
      {
        name: 'Actualizar precios',
        action: () => navigate('/store-selector'),
        image: 'https://play-lh.googleusercontent.com/QzJM-JULtutSqefQu5TNr_HEG7zvZJbRfe61ZqdmpVzNRCfE2B0nRWvNgcH7eAiMrP0',
        description: 'Actualizar los precios en la tienda seleccionada',
      },
      {
        name: 'Cargar publicidad',
        action: () => navigate('/publicity-view'),
        image: 'https://www.cocacolaep.com/assets/Uploads/resources/Coca-Cola-1210.jpg',
        description: 'Cargar y gestionar publicidad',
      },
      
    ];
  };

  const options = getOptionsForRole();

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Panel de Operaciones TI</h1>
      <div style={gridContainerStyle}>
        {options.map((option, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={option.action}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img 
              src={option.image} 
              alt={option.name} 
              style={imageStyle}
            />
            <div style={contentStyle}>
              <h3 style={titleStyle}>{option.name}</h3>
              <p style={descriptionStyle}>{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ITOperationsDashboard;
