import React from 'react';
import { useNavigate } from 'react-router-dom';

const ModifyStrips = () => {
  const navigate = useNavigate();

  const containerStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '4rem auto',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: 'calc(100vh - 100px)'
  };

  const optionsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
    marginTop: '2rem',
    width: '100%',
    maxWidth: '1200px',
  };

  const optionButtonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    fontSize: '1.2rem',
    backgroundColor: 'white', // Botón blanco
    color: 'red', // Letras rojas
    border: 'white', // Borde rojo
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s, transform 0.2s',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Flamante Roma, sans-serif'
  };

  const optionButtonHoverStyle = {
    backgroundColor: 'red', // Fondo rojo en hover
    color: 'white', // Letras blancas en hover
  };

  const optionImageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '1rem',
    borderRadius: '8px',
  };

  const handleMouseOver = (e) => {
    const button = e.currentTarget;
    button.style.backgroundColor = optionButtonHoverStyle.backgroundColor;
    button.style.color = optionButtonHoverStyle.color;
    button.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e) => {
    const button = e.currentTarget;
    button.style.backgroundColor = 'white'; // Volver al fondo blanco
    button.style.color = 'red'; // Letras rojas
    button.style.transform = 'scale(1)';
  };

  const options = [
    {
      name: 'Bebida',
      action: () => navigate('/strip-editor/bebidas'),
      image: 'https://laterrazadelcanelo.cl/wp-content/uploads/2020/09/coca-cola-350cc.jpg',
      description: 'Modificar flejes de productos de bebidas',
    },
    {
      name: 'Snacks Dulces',
      action: () => navigate('/strip-editor/snacks-dulces'),
      image: 'https://i.btcdn.co/r/czo0MDY0LGc6MTAwMHg/cdb87b86/667046-7613030612339.jpg',
      description: 'Modificar flejes de snacks dulces',
    },
    {
      name: 'Snacks Salados',
      action: () => navigate('/strip-editor/snacks-salados'),
      image: 'https://brindo.cl/658-thickbox_default/1x-papas-fritas-lays-corte-americano-230grs.jpg',
      description: 'Modificar flejes de snacks salados',
    },
    {
      name: 'Bolleria',
      action: () => navigate('/strip-editor/bolleria'),
      image: 'https://www.prontocopec.cl/wp-content/uploads/2023/03/d-categoria.png',
      description: 'Modificar flejes de bollería',
    },
    {
      name: 'Productos Copec',
      action: () => navigate('/strip-editor/productos-copec'),
      image: 'https://www.tiendacopec.cl/cdn/shop/files/prontin-02.png?v=1723213972&width=1200',
      description: 'Modificar flejes de productos Copec',
    },
  ];

  return (
    <div style={containerStyle}>
      <h2>Modificar Flejes de Tienda</h2>
      <div style={optionsContainerStyle}>
        {options.map((option, index) => (
          <button
            key={index}
            style={optionButtonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={option.action}
            title={option.description} // Tooltip con descripción
          >
            <img src={option.image} alt={option.name} style={optionImageStyle} />
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModifyStrips;
