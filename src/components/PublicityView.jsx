import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import cocacolaVideo from '../assets/cocacola.mp4';

const PublicityView = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      videoRef.current.src = url;
      videoRef.current.play();
    }
  };

  const styles = {
    container: {
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      margin: '4rem auto',
      maxWidth: '1200px',
      position: 'relative'
    },
    title: {
      color: '#dc3545',
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: '700'
    },
    videoContainer: {
      width: '100%',
      maxWidth: '800px',
      marginBottom: '2rem'
    },
    video: {
      width: '100%',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem'
    },
    button: {
      padding: '0.8rem 2rem',
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.3s ease'
    },
    uploadButton: {
      padding: '0.8rem 2rem',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.3s ease'
    },
    hiddenInput: {
      display: 'none'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Publicidad Actual</h2>
      <div style={styles.videoContainer}>
        <video 
          ref={videoRef}
          style={styles.video}
          controls
          autoPlay
          loop
          muted
        >
          <source src={cocacolaVideo} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      <div style={styles.buttonContainer}>
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          style={styles.hiddenInput}
        />
        <button 
          style={styles.uploadButton}
          onClick={() => fileInputRef.current.click()}
        >
          Cargar Nuevo Video
        </button>
        <button 
          style={styles.button}
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default PublicityView;