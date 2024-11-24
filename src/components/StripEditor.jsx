import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { useNavigate, useParams } from 'react-router-dom';
import SortableItem from './SortableItem';
import etiquetaOferta from '../assets/Etiqueta-Oferta.png';
import etiquetaLiquidacion from '../assets/Etiqueta-Liquidacion.png';
import etiquetaNuevo from '../assets/Etiqueta-Nuevo.png';
import etiquetaNormal from '../assets/Etiqueta-Normal.png';
import publicidadCocaCola from '../assets/Publicidad CocaCola.png';

const MAX_STRIP_ITEMS = 6;

const StripEditor = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [availableItems] = useState([
    { id: 'etiqueta-oferta', name: 'Etiqueta Oferta', image: etiquetaOferta },
    { id: 'etiqueta-normal', name: 'Etiqueta Normal', image: etiquetaNormal },
    { id: 'etiqueta-liquidacion', name: 'Etiqueta Liquidación', image: etiquetaLiquidacion },
    { id: 'etiqueta-nuevo', name: 'Etiqueta Nuevo', image: etiquetaNuevo },
    { id: 'publicidad-cocacola', name: 'Publicidad CocaCola', image: publicidadCocaCola },
  ]);

  const [containers, setContainers] = useState(Array(5).fill([]));
  const [selectedContainerIndex, setSelectedContainerIndex] = useState(null);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || selectedContainerIndex === null) return;

    const activeItem = availableItems.find(item => item.id === active.id);
    if (activeItem && containers[selectedContainerIndex].length < MAX_STRIP_ITEMS) {
      setContainers(prevContainers => {
        const newContainers = [...prevContainers];
        newContainers[selectedContainerIndex] = [...newContainers[selectedContainerIndex], activeItem];
        return newContainers;
      });
    }
  };

  const handleDelete = (containerIndex, itemIdToDelete) => {
    setContainers(prevContainers => {
      const newContainers = [...prevContainers];
      newContainers[containerIndex] = newContainers[containerIndex].filter(item => item.id !== itemIdToDelete);
      return newContainers;
    });
  };

  const handleAccept = () => {
    if (containers.every(container => container.length === MAX_STRIP_ITEMS)) {
      navigate('/strip-view', { state: { containers } });
    }
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '4rem auto',
    padding: '2rem',
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: 'red', marginBottom: '20px' }}>
        Editor de Flejes - {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      
      <div style={{
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ marginBottom: '15px' }}>Etiquetas Disponibles</h3>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={availableItems.map(item => item.id)} strategy={horizontalListSortingStrategy}>
            <div style={{ display: 'flex', gap: '10px' }}>
              {availableItems.map(item => (
                <SortableItem key={item.id} id={item.id} item={item} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
      
      {containers.map((stripItems, index) => (
        <div 
          key={index} 
          onClick={() => setSelectedContainerIndex(index)}
          style={{
            width: '100%',
            minHeight: '80px',
            backgroundColor: selectedContainerIndex === index ? '#ffffff' : '#e0e0e0',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: '15px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            cursor: 'pointer'
          }}
        >
          <p style={{ 
            marginBottom: '10px', 
            color: '#555',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '1rem'
          }}>
            {stripItems.length}/{MAX_STRIP_ITEMS} flejes utilizados
          </p>
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={stripItems.map(item => item.id)} strategy={horizontalListSortingStrategy}>
                <div style={{ display: 'flex', gap: '5px', minWidth: '100%' }}>
                  {stripItems.map(item => (
                    <SortableItem 
                      key={item.id} 
                      id={item.id} 
                      item={item}
                      onDelete={() => handleDelete(index, item.id)}
                      showDeleteButton={true}
                      isInStrip={true}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>
        </div>
      ))}

      <button
        style={{
          width: '200px',
          padding: '12px 24px',
          fontSize: '1.1rem',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '20px',
          fontFamily: 'Montserrat, sans-serif',
          transition: 'transform 0.2s ease, background-color 0.2s ease',
          alignSelf: 'center',
          display: 'block',
          margin: '20px auto 0'
        }}
        onClick={handleAccept}
        disabled={!containers.every(container => container.length === MAX_STRIP_ITEMS)}
      >
        Aceptar
      </button>
    </div>
  );
};

export default StripEditor;
