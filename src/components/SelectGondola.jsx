import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import union from '../assets/union.svg';
import vector32 from '../assets/vector-32.svg';
import vector42 from '../assets/vector-42.svg';
import './selectgondola.css';

const SelectGondola = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const navigate = useNavigate();

  const handleAreaClick = (id) => {
    setSelectedArea(id);
    setTimeout(() => {
      navigate(`/strip-editor/${id}`);
    }, 200);
  };

  return (
    <div className="desktop">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            {/* Base rectangle */}
            <div className="rectangle" />
            
            {/* Vitrina Helados Area */}
            <div className="div" />
            <div className="text-wrapper" onClick={() => handleAreaClick('vitrinaHelados')}>
              VITRINA HELADOS
            </div>

            {/* Vitrina Lácteos Area */}
            <div className="rectangle-2" />
            <div className="text-wrapper-lacteos" onClick={() => handleAreaClick('vitrinaLacteos')}>
              VITRINA LACTEOS
            </div>
            {/* Vectors and Union */}
            <img className="vector" alt="Vector" src={vector42} />
            <img className="img" alt="Vector" src={vector32} />
            <div className="rectangle-3" />
            <img className="union" alt="Union" src={union} />

            {/* Ellipses */}
            <div className="ellipse" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />

            {/* Cocina Area */}
            <div className="rectangle-4" />
            <div className="text-wrapper-2" onClick={() => handleAreaClick('cocina')}>COCINA</div>

            {/* Baño Area */}
            <div className="rectangle-6" />
            <div className="text-wrapper-3" onClick={() => handleAreaClick('banio')}>BAÑO</div>

            {/* Bebidas Area */}
            <div className="rectangle-7" />
            <div className="text-wrapper-4" onClick={() => handleAreaClick('bebidas')}>BEBIDAS</div>

            {/* Artículos Area */}
            <div className="rectangle-8" />
            <div className="rectangle-9" />
            <div className="text-wrapper-5" onClick={() => handleAreaClick('articulos')}>ARTICULOS</div>

            {/* Preparaciones Area */}
            <div className="rectangle-10" />
            <div className="rectangle-11" />
            <div className="rectangle-12" />
            <div className="text-wrapper-6" onClick={() => handleAreaClick('preparaciones')}>
              PREPARACIONES
            </div>

            {/* Caja Area */}
            <div className="rectangle-13" />
            <div className="text-wrapper-7" onClick={() => handleAreaClick('caja')}>CAJA</div>

            {/* Bollería Area */}
            <div className="text-wrapper-8" onClick={() => handleAreaClick('bolleria')}>BOLLERIA</div>

            {/* Snacks Area */}
            <div className="rectangle-14" />
            <div className="rectangle-15" />
            <div className="rectangle-16" />
            <div className="text-wrapper-9" onClick={() => handleAreaClick('snacks')}>SNACKS</div>

            {/* Bebidas Alcohólicas Area */}
            <div className="rectangle-17" />
            <div className="rectangle-18" />
            <div className="rectangle-19" />
            <div className="text-wrapper-10" onClick={() => handleAreaClick('bebidasAlc')}>
              {'BEBIDAS ALCOHOLICAS \n Y MINIMARKET'}
            </div>

            {/* Additional rectangles */}
            <div className="overlap-2">
              <div className="rectangle-20" />
              <div className="rectangle-21" />
            </div>
            <div className="rectangle-22" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectGondola;
