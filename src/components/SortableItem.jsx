import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({ id, item, onDelete, showDeleteButton, isInStrip }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: '150px',
    height: '50px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: '10px',
    margin: '10px',
    cursor: 'grab',
    position: 'relative',
  };

  const deleteButtonStyle = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '20%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    zIndex: 1000,
    transition: 'transform 0.2s ease',
    ':hover': {
      transform: 'scale(1.1)',
    }
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div {...attributes} {...listeners} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src={item.image} 
          alt={item.name} 
          style={{ 
            width: '120px', 
            height: '160px', 
            objectFit: 'contain',
            marginBottom: '10px' 
          }} 
        />
      </div>
      {showDeleteButton && isInStrip && (
        <button
          style={deleteButtonStyle}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onDelete) onDelete();
          }}
          type="button"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SortableItem;
