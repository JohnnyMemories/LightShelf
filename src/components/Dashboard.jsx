import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ userRole }) => {
  const navigate = useNavigate();

  const dashboardContainerStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const optionsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
    width: '100%',
    padding: '0 1rem'
  };

  const optionButtonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    fontSize: '1.1rem',
    backgroundColor: 'white',
    color: 'red',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%',
    maxWidth: '300px',
    margin: '0 auto',
    height: '200px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Flamante Roma, sans-serif'
  };

  const handleMouseOver = (e) => {
    const button = e.currentTarget;
    button.style.backgroundColor = 'red';
    button.style.color = 'white';
    button.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e) => {
    const button = e.currentTarget;
    button.style.backgroundColor = 'white';
    button.style.color = 'red';
    button.style.transform = 'scale(1)';
  };

  // Definir las opciones según el rol del usuario
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
    
    // Para otros roles, mostrar todas las opciones
    return [
      {
        name: 'Actualizar precios',
        action: () => navigate('/store-selector'),
        image: 'https://play-lh.googleusercontent.com/QzJM-JULtutSqefQu5TNr_HEG7zvZJbRfe61ZqdmpVzNRCfE2B0nRWvNgcH7eAiMrP0',
        description: 'Actualizar los precios en la tienda seleccionada',
      },
      {
        name: 'Cargar publicidad',
        action: () => console.log('Cargar publicidad'),
        image: 'https://www.cocacolaep.com/assets/Uploads/resources/Coca-Cola-1210.jpg',
        description: 'Cargar y gestionar publicidad',
      },
      {
        name: 'Modificar flejes de tienda',
        action: () => navigate('/modify-strips'),
        image: 'https://tagsprinter.com/es/forms/cenniki/api/screenshots/price-tag-60276_es_ES.png',
        description: 'Modificar los flejes de las tiendas',
      },
    ];
  };

  const options = getOptionsForRole();

  return (
    <div style={dashboardContainerStyle}>
      <h2>¿Qué deseas hacer?</h2>
      <div style={optionsContainerStyle}>
        {options.map((option, index) => (
          <button
            key={index}
            style={optionButtonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={option.action}
            title={option.description}
          >
            <img 
              src={option.image} 
              alt={option.name} 
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'cover',
                borderRadius: '5px',
                marginBottom: '1rem',
              }} 
            />
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
