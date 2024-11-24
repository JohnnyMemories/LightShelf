import React, { useState, useEffect } from 'react';

const LoginForm = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const [regions, setRegions] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [stores, setStores] = useState([]);
  const [showStoreSelector, setShowStoreSelector] = useState(false);

  useEffect(() => {
    const data = [
      { region: 'Metropolitana', sector: 'Huechuraba', store: 'Pronto Pedro Fontova' },
        { region: 'Metropolitana', sector: 'Macul', store: 'Pronto Departamental' },
        { region: 'Metropolitana', sector: 'Santiago', store: 'Pronto Las Condes' },
        { region: 'Metropolitana', sector: 'La Florida', store: 'Pronto La Florida' },
        { region: 'Metropolitana', sector: 'Puente Alto', store: 'Pronto C Henriquez' },
        { region: 'Metropolitana', sector: 'Nuñoa', store: 'Pronto Vic Mackenna 1990' },
        { region: 'Metropolitana', sector: 'Santiago', store: 'Pronto Cantagallo' },
        { region: 'Metropolitana', sector: 'Santiago', store: 'Pronto Manquehue' },
        { region: 'Metropolitana', sector: 'Puente Alto', store: 'Pronto Gabriela' },
        { region: 'Valparaíso', sector: 'Viña del Mar', store: 'Pronto Uai Viña Del Mar' },
        { region: 'Valparaíso', sector: 'Valparaíso', store: 'Pronto Barra Placilla' },
        { region: 'Valparaíso', sector: 'Viña del Mar', store: 'Pronto Las Salinas' },
        { region: 'Antofagasta', sector: 'Antofagasta', store: 'Pronto Perez Zujovic' },
        { region: 'Antofagasta', sector: 'Antofagasta', store: 'Pronto Antofagasta' },
        { region: 'Biobío', sector: 'Concepción', store: 'Pronto Udd Concepción' },
        { region: 'Biobío', sector: 'Concepción', store: 'Pronto Paicaví' },
        { region: 'Metropolitana', sector: 'Santiago', store: 'Pronto Ciuc Piso 8' },
        { region: 'Metropolitana', sector: 'Santiago', store: 'Pronto Uss Casino Sede Los Leones' },
        { region: 'Metropolitana', sector: 'Santiago', store: 'Pronto Casino Unab' },
        { region: 'Metropolitana', sector: 'Santiago', store: 'Pronto Metro Vicuña Mackenna' },
        { region: 'Metropolitana', sector: 'Providencia', store: 'Pronto Bellavista Pío Nono' },
        { region: 'Biobío', sector: 'Concepción', store: 'Pronto Pedro De Valdivia' },
        { region: 'Valparaíso', sector: 'Viña del Mar', store: 'Pronto Troncal Sur' },
        { region: 'Temuco', sector: 'Temuco', store: 'Pronto Calle Temuco' },
        { region: 'Valparaíso', sector: 'Valparaíso', store: 'Pronto Valparaíso' },
        { region: 'Los Lagos', sector: 'Pto Montt', store: 'Pronto Barra Pargua' },
        { region: 'Los Lagos', sector: 'Pto Montt', store: 'Pronto Puerto Montt' },
        { region: 'Los Lagos', sector: 'Pto Varas', store: 'Pronto Puerto Varas' },
        { region: 'Los Lagos', sector: 'Loncoche', store: 'Pronto Loncoche' },
        { region: 'Atacama', sector: 'Copiapó', store: 'Pronto Barra Copiapó' },
        { region: 'Atacama', sector: 'Copiapó', store: 'Pronto Copiapó' },
        { region: 'Valparaíso', sector: 'Viña del Mar', store: 'Pronto Viña Plaza Sucre' },
        { region: 'Metropolitana', sector: 'Santiago', store: 'Pronto Isidora' },
        { region: 'Metropolitana', sector: 'Santiago', store: 'Pronto Rosario Norte' },
        { region: 'Antofagasta', sector: 'Pozo Almonte', store: 'Barra Pozo Al Monte' },
        { region: 'Biobío', sector: 'Chillán', store: 'Barra Chillán Poniente' },
        { region: 'Biobío', sector: 'Chillán', store: 'Barra Chillán Oriente' },
        { region: 'Biobío', sector: 'Cabrero', store: 'Pronto Cabrero' },
        { region: 'Metropolitana', sector: 'Talagante', store: 'Pronto Ruta 78 O' },
        { region: 'Metropolitana', sector: 'Nos', store: 'Pronto Nos' },
        { region: 'Metropolitana', sector: 'Talagante', store: 'Pronto Puente' },
        { region: 'Biobío', sector: 'Talcahuano', store: 'Pronto Talcahuano' },
        { region: 'Biobío', sector: 'Los Angeles', store: 'Pronto Los Angeles O' },
        { region: 'Los Lagos', sector: 'Trafun', store: 'Pronto Trafun Oriente' },
        { region: 'Los Lagos', sector: 'San José de Mariquina', store: 'Pronto San José De La Mariquina' },
        { region: 'Los Lagos', sector: 'Trafun', store: 'Pronto Trafun Poniente' },
        { region: 'Biobío', sector: 'San Pedro de la Paz', store: 'Pronto Michimalonco' },
    ];
    
    setStores(data);
    const uniqueRegions = [...new Set(data.map(store => store.region))].sort();
    setRegions(uniqueRegions);
  }, []);

   const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setSelectedSector('');
    setSelectedStore('');
    setSectors([...new Set(stores.filter(store => store.region === region).map(store => store.sector))].sort());
  };

  const handleSectorChange = (e) => {
    setSelectedSector(e.target.value);
    setSelectedStore('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !selectedRole || (selectedRole === 'store_admin' && !selectedStore)) {
      alert('Por favor complete todos los campos');
      return;
    }
    if (email === 'operador@pronto.cl' && password === 'operador123') {
      onLogin(selectedRole, selectedStore);
    } else if (email === 'tienda@pronto.cl' && password === 'tienda123') {
      onLogin('store_admin', selectedStore);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.formContainer}>
        <button style={styles.closeButton} onClick={onClose}>×</button>
        {!selectedRole ? (
          <>
            <h2 style={styles.heading}>Seleccione su rol</h2>
            <div style={styles.roleSelectionContainer}>
              <button 
                style={styles.roleButton}
                onClick={() => setSelectedRole('store_admin')}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff0000';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#cc0000';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                Administrador de Tienda
              </button>
              <button 
                style={styles.roleButton}
                onClick={() => setSelectedRole('it_operator')}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff0000';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#cc0000';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                Operador TI
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 style={styles.subheading}>Iniciar Sesión como {selectedRole === 'store_admin' ? 'Administrador de Tienda' : 'Operador TI'}</h2>
            <form onSubmit={handleSubmit}>
              <input
                style={styles.input}
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                style={styles.input}
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {selectedRole === 'store_admin' && (
                <>
                  <select style={styles.select} value={selectedRegion} onChange={handleRegionChange}>
                    <option value="">Seleccione una región</option>
                    {regions.map((region, index) => (
                      <option key={index} value={region}>{region}</option>
                    ))}
                  </select>
                  <select
                    style={styles.select}
                    value={selectedSector}
                    onChange={handleSectorChange}
                    disabled={!selectedRegion}
                  >
                    <option value="">Seleccione un sector</option>
                    {sectors.map((sector, index) => (
                      <option key={index} value={sector}>{sector}</option>
                    ))}
                  </select>
                  <select
                    style={styles.select}
                    value={selectedStore}
                    onChange={(e) => setSelectedStore(e.target.value)}
                    disabled={!selectedSector}
                  >
                    <option value="">Seleccione una tienda</option>
                    {stores.filter(store => store.sector === selectedSector && store.region === selectedRegion)
                           .map((store, index) => (
                      <option key={index} value={store.store}>{store.store}</option>
                    ))}
                  </select>
                </>
              )}
              <button 
                style={styles.submitButton} 
                type="submit"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff0000';
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#cc0000';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                Ingresar
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

// Styling objects with dynamic and aesthetic improvements
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    transition: 'all 0.3s ease',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '1px',
    right: '1px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#333',
    transition: 'color 0.3s ease',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '1rem',
    marginTop: '1rem',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1.25rem',
    color: '#444',
    marginBottom: '1.5rem',
    textAlign: 'center',
    marginTop: '1.5rem',
  },
  roleSelectionContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '1.5rem',
  },
  roleButton: {
    width: '160px',
    padding: '10px 20px',
    borderRadius: '8px',
    backgroundColor: '#cc0000',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
  },
  select: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
    color: 'black',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#cc0000',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '1rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
};

export default LoginForm;
