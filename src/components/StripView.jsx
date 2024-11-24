import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './StripView.css';

const StripView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const containers = location.state?.containers || [];
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSave = () => {
    setShowPopup(true);
  };

  const handleUpdatePrices = () => {
    // Simular actualización de precios
    setTimeout(() => {
      setShowPopup(false);
      setShowSuccessMessage(true);
      // Ocultar mensaje de éxito después de 2 segundos
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    }, 1000);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div style={{ 
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      margin: '4rem auto',
      maxWidth: '1200px',
      position: 'relative'
    }}>
      <h2 style={{ color: 'red', marginBottom: '20px' }}>Vista de la góndola con LightShelf</h2>
      
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        {containers.map((stripItems, index) => (
          <div key={index} style={{
            width: '100%',
            maxWidth: '1200px',
            backgroundColor: '#f0f0f0',
            border: '2px solid grey',
            borderRadius: '8px',
            padding: '10px',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'nowrap',
              maxWidth: '100%',
              overflowX: 'auto'
            }}>
              {stripItems.map((item, idx) => (
                <div key={idx} style={{
                  flex: '0 0 auto',
                  width: '150px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        padding: '20px',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 100
      }}>
        <button 
          onClick={() => navigate(-1)}
          style={{
            padding: '12px 24px',
            backgroundColor: 'white',
            color: 'red',
            border: '2px solid red',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          Volver Atrás
        </button>

        <button 
          onClick={handleSave}
          style={{
            padding: '12px 24px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          Guardar Cambios
        </button>

        <button 
          onClick={() => navigate('/')}
          style={{
            padding: '12px 24px',
            backgroundColor: 'white',
            color: 'red',
            border: '2px solid red',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          Volver al Inicio
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>¿Deseas actualizar las etiquetas de la góndola?</h3>
            <div className="popup-buttons">
              <button onClick={handleUpdatePrices}>Sí, actualizar</button>
              <button onClick={handleClose}>No, cerrar</button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="success-message">
          ¡Listo! Etiqueta actualizadas correctamente
        </div>
      )}
    </div>
  );
};

export default StripView;
