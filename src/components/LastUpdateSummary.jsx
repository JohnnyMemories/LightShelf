import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import './LastUpdateSummary.css';

const LastUpdateSummary = () => {
  const navigate = useNavigate();

  const handleDownloadExcel = () => {
    // Crear los datos para el Excel usando el formato del PriceUpdater
    const data = [
        ['Producto', 'Precio Actualizado', 'Precio Anterior', 'Cambio'],
        ['Jugo Watts Tutikiwi 1.5L', '1690', '', 'Producto nuevo'],
        ['Coca Cola Light 591cc', '1490', '1590', '-100'],
        ['Termo Iguazu Verde', '27990', '', 'Producto nuevo'],
        ['Bilz Zero Pet 500 cc', '1390', '1450', '-60'],
        ['Galletas Mini Selz Cracker 35g', '450', '', 'Producto nuevo'],
        ['Manta Roll Up Negro/Blanco', '13990', '', 'Producto nuevo'],
        ['Pepsi  600 cc', '1390', '1450', '-60'],
        ['Bilz Pet 600cc', '1390', '1450', '-60'],
        ['Agua Cachantun 1L', '1890', '2190', '-300'],
        ['Chicle Mentos Botella Up2U60g', '2990', '', 'Producto nuevo'],
        ['Galletas Gran Cereal Muesli 135g', '990', '', 'Producto nuevo'],
        ['Pepsi Zero 600 cc', '1390', '1450', '-60'],
        ['Jugo Nectar Andina Durazno 1L', '1490', '', 'Producto nuevo'],
        ['Coca Cola Sin Azucar 591cc', '1490', '1590', '-100'],
        ['Botella Atuel Blanco', '12990', '', 'Producto nuevo'],
        ['Fanta Pomelo Sin Azucar 591cc', '1490', '1390', '100'],
        ['Gatolate 30g', '600', '', 'Producto nuevo'],
        ['Fanta Sin Azucar 591cc', '1490', '1590', '-100'],
        ['Kem Zero Pet 600cc', '1390', '1450', '-60'],
        ['Mug Chalten Verde', '6990', '', 'Producto nuevo'],
        ['Sprite Zero 591cc', '1490', '1590', '-100'],
        ['Gomitas Calyptus Mentol 25Gr', '350', '', 'Producto nuevo'],
        ['Kem Pet 600cc', '1390', '1450', '-60'],
        ['Kem Xtreme 600 cc', '1390', '1450', '-60'],
        ['Fanta 591cc', '1490', '1590', '-100'],
        ['Mug Road Blanco/Negro', '7990', '', 'Producto nuevo'],
        ['Mentitas Masti Crunch 13g', '450', '', 'Producto nuevo'],
        ['Galletas Tuareg 48g', '650', '', 'Producto nuevo'],
        ['Kem Xtreme Sugar Free 600 cc', '1390', '1450', '-60'],
        ['Pap Zero PET 500 cc', '1390', '1450', '-60'],
        ['Mug Road Plata/Negro', '7990', '', 'Producto nuevo'],
        ['Mug Retro Blanco', '6990', '', 'Producto nuevo'],
        ['Sprite Pet 591', '1490', '1590', '-100'],
        ['Coca Cola 591cc', '1490', '1590', '-100'],
        ['Agua Vital Sin Gas 990ml', '1850', '2040', '-190'],
        ['Botella Atuel Negro', '12990', '', 'Producto nuevo'],
        ['Pap Pet 600cc', '1390', '1450', '-60'],
    ];
    

    // Crear el libro de trabajo
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);

    // Añadir la hoja al libro
    XLSX.utils.book_append_sheet(wb, ws, 'Resumen Precios');

    // Guardar el archivo
    XLSX.writeFile(wb, 'resumen_actualizacion_precios.xlsx');
  };

  return (
    <div className="summary-container">
      <h2 className="summary-title">Resumen de la Última Actualización</h2>
      
      <div className="summary-content">
        <div className="summary-card">
          <h3>Última actualización</h3>
          <p>Fecha: 25/11/2024</p>
          <p>Tienda: Pronto Copec Las Condes</p>
          <p>Total productos actualizados: 156</p>
        </div>

        <div className="summary-details">
          <h3>Detalles</h3>
          <ul>
            <li>Aumentos de precio: 45</li>
            <li>Disminuciones de precio: 32</li>
            <li>Sin cambios: 79</li>
          </ul>
        </div>
      </div>

      <div className="button-group">
        <button 
          className="download-button excel"
          onClick={handleDownloadExcel}
        >
          Descargar Excel
        </button>
        <button 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default LastUpdateSummary;