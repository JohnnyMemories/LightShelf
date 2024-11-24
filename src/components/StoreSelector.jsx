import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const StoreSelector = () => {
  const [regions, setRegions] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [stores, setStores] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = () => {
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

      const uniqueRegions = [...new Set(data.map(item => item.region))].sort();
      setRegions(uniqueRegions);
      setStores(data);
    };

    fetchData();
  }, []);

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setSelectedSector('');
    setSelectedStore('');
    const filteredSectors = [...new Set(stores.filter(store => store.region === region).map(store => store.sector))].sort();
    setSectors(filteredSectors);
  };

  const handleSectorChange = (e) => {
    const sector = e.target.value;
    setSelectedSector(sector);
    setSelectedStore('');
  };

  const filteredStores = stores.filter(store => store.sector === selectedSector && store.region === selectedRegion);

  const handleSubmit = () => {
    if (selectedStore) {
      navigate('/price-updater', { 
        state: { 
          store: selectedStore 
        }
      });
    }
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '800px',
    margin: '4rem auto',
    padding: '2rem',
    fontFamily: 'Flamante Roma, sans-serif',
    minHeight: 'calc(100vh - 100px)'
  };

  const selectContainerStyle = {
    marginBottom: '1.5rem',
    width: '100%',
    maxWidth: '500px',
    margin: '1rem auto'
  };

  const selectStyle = {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#000',
    color: 'white',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
    outline: 'none',
    fontFamily: 'Flamante Roma, sans-serif'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Selecciona una tienda</h2>
      
      <div style={selectContainerStyle}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#555' }}>
          Región:
        </label>
        <select 
          style={selectStyle}
          value={selectedRegion} 
          onChange={handleRegionChange}
        >
          <option value="">Seleccione una región</option>
          {regions.map((region, index) => (
            <option key={index} value={region}>{region}</option>
          ))}
        </select>
      </div>
      
      <div style={selectContainerStyle}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#555' }}>
          Sector:
        </label>
        <select 
          style={selectStyle}
          value={selectedSector} 
          onChange={handleSectorChange}
          disabled={!selectedRegion}
        >
          <option value="">Seleccione un sector</option>
          {sectors.map((sector, index) => (
            <option key={index} value={sector}>{sector}</option>
          ))}
        </select>
      </div>
      
      <div style={selectContainerStyle}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#555' }}>
          Tienda:
        </label>
        <select 
          style={selectStyle}
          value={selectedStore} 
          onChange={(e) => setSelectedStore(e.target.value)} 
          disabled={!selectedSector}
        >
          <option value="">Seleccione una tienda</option>
          {filteredStores.map((store, index) => (
            <option key={index} value={store.store}>{store.store}</option>
          ))}
        </select>
      </div>
      
      <button 
        style={{
          width: '100%',
          padding: '0.75rem',
          fontSize: '1rem',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '1.5rem',
          fontFamily: 'Flamante Roma, sans-serif'
        }}
        onClick={handleSubmit}
        disabled={!selectedStore}
      >
        Continuar
      </button>
    </div>
  );
};

export default StoreSelector;
