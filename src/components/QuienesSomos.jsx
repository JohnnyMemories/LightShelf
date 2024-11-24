import React from 'react';
import juanImage from '../assets/juan.jpg';
import pauliImage from '../assets/pauli.jpg';
import joacoImage from '../assets/joaco.jpg';

const teamMembers = [
  {
    name: 'Juan Agüero',
    role: 'Desarrollador',
    image: juanImage,
    description: 'Desarrollador de la aplicación LightShelf',
  },
  {
    name: 'Paulina Campos',
    role: 'UX/UI Designer',
    image: pauliImage,
    description: 'Apasionada por el diseño y la experiencia de usuario.',
  },
  {
    name: 'Joaquín Rivas',
    role: 'Analista de Datos',
    image: joacoImage,
    description: 'Experta en análisis de datos y estadística.',
  },
];

const QuienesSomos = () => {
  const handleMouseEnter = (index) => {
    const element = document.querySelectorAll('.team-member')[index];
    if (element) {
      element.style.transform = 'scale(1.1)';
    }
  };

  const handleMouseLeave = (index) => {
    const element = document.querySelectorAll('.team-member')[index];
    if (element) {
      element.style.transform = 'scale(1)';
    }
  };

  return (
    <div style={styles.aboutUs}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>Conoce al Equipo</h1>
        <div style={styles.teamContainer}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member"
              style={styles.teamMember}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img src={member.image} alt={member.name} style={styles.teamMemberImage} />
              <h2 style={styles.name}>{member.name}</h2>
              <h3 style={styles.role}>{member.role}</h3>
              <p style={styles.description}>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  aboutUs: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    backgroundImage: 'url("/src/assets/pronto_copec.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    marginTop: '-80px',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '1200px',
    padding: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'red',
    marginBottom: '2rem',
    textAlign: 'center',
    fontFamily: 'Flamante Roma, sans-serif',
  },
  teamContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '1200px',
    marginTop: '2rem',
  },
  teamMember: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    width: '250px',
    transition: 'transform 0.3s ease',
    textAlign: 'center',
    cursor: 'pointer',
  },
  teamMemberImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    border: '3px solid red',
  },
  name: {
    fontSize: '1.5rem',
    margin: '0.5rem 0',
    color: '#333',
  },
  role: {
    fontSize: '1.2rem',
    color: 'red',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    color: '#777',
    lineHeight: '1.4',
  },
};

export default QuienesSomos;
