import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './PriceUpdater.css';

const csvData = `Sku;Articulo;Precio 2024-09-03;Precio 2024-09-02;Upc;;;
176172;Jugo Watts Tutikiwi 1.5L;1690;;7801620002343;;;
144893;Coca Cola Light 591cc;1490;1590;7801610000595;;;
183621;Termo Iguazu Verde;27990;;17798385662608;;;
145319;Bilz Zero Pet 500 cc;1390;1450;7801620004965;;;
143726;Galletas Mini Selz Cracker 35g;450;;7802225689021;;;
183622;Manta Roll Up Negro/Blanco;13990;;17798385661304;;;
177673;Pepsi  600 cc;1390;1450;7801620009373;;;
180430;Bilz Pet 600cc;1390;1450;7801620009502;;;
146996;Agua Cachantun 1L;1890;2190;7801620005412;;;
179350;Chicle Mentos Botella Up2U60g;2990;;75072582;;;
138780;Galletas Gran Cereal Muesli 135g;990;;7802215302060;;;
177674;Pepsi Zero 600 cc;1390;1450;7801620009342;;;
131786;Jugo Nectar Andina Durazno 1L;1490;;7802820500097;;;
144892;Coca Cola Sin Azucar 591cc;1490;1590;7801610000601;;;
183619;Botella Atuel Blanco;12990;;17798385669447;;;
178808;Fanta Pomelo Sin Azucar 591cc;1490;1390;7801610285817;;;
176534;Gatolate 30g;600;;7802000009969;;;
148244;Fanta Sin Azucar 591cc;1490;1590;7801610059173;;;
180427;Kem Zero Pet 600cc;1390;1450;7801620009410;;;
183615;Mug Chalten Verde;6990;;17798385664183;;;
148245;Sprite Zero 591cc;1490;1590;7801610591864;;;
170232;Gomitas Calyptus Mentol 25Gr;350;;7802200139664;;;
180421;Kem Pet 600cc;1390;1450;7801620009441;;;
177675;Kem Xtreme 600 cc;1390;1450;7801620009434;;;
147022;Fanta 591cc;1490;1590;7801610591161;;;
183617;Mug Road Blanco/Negro;7990;;17798127207548;;;
180831;Mentitas Masti Crunch 13g;450;;7750885017725;;;
170320;Galletas Tuareg 48g;650;;78030299;;;
177676;Kem Xtreme Sugar Free 600 cc;1390;1450;7801620009427;;;
145320;Pap Zero PET 500 cc;1390;1450;7801620004927;;;
183618;Mug Road Plata/Negro;7990;;17798127207555;;;
183616;Mug Retro Blanco;6990;;17798127209733;;;
147023;Sprite Pet 591;1490;1590;7801610591925;;;
144873;Coca Cola 591cc;1490;1590;7801610000571;;;
145616;Agua Vital Sin Gas 990ml;1850;2040;7802820990102;;;
183620;Botella Atuel Negro;12990;;17798385669430;;;
180424;Pap Pet 600cc;1390;1450;7801620009380;;;`;

const PriceUpdater = () => {
  const location = useLocation();
  const { store } = location.state || {};
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState(null);

  const handleUpdatePrices = () => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        const lines = csvData.split('\n');
        const headers = lines[0].split(';');
        const priceIndex = headers.indexOf('Precio 2024-09-03');
        const articleIndex = headers.indexOf('Articulo');
        const oldPriceIndex = headers.indexOf('Precio 2024-09-02');

        const prices = lines.slice(1).map(line => {
          const values = line.split(';');
          return {
            product: values[articleIndex],
            price: parseFloat(values[priceIndex]),
            oldPrice: parseFloat(values[oldPriceIndex]),
          };
        }).filter(item => !isNaN(item.price));

        const totalUpdated = prices.length;
        const increases = prices.filter(item => item.price > item.oldPrice).length;
        const decreases = prices.filter(item => item.price < item.oldPrice).length;
        const newProducts = prices.filter(item => !item.oldPrice).length;

        setSummary({
          totalUpdated,
          increases,
          decreases,
          newProducts,
          detailedChanges: prices,
        });
      } catch (error) {
        console.error('Error processing CSV data:', error);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  const handleDownloadSummary = () => {
    const detailedSummary = summary.detailedChanges
      .map(change => {
        const priceChange = change.oldPrice ? (change.price - change.oldPrice).toFixed(2) : 'Producto nuevo';
        return `${change.product}: $${change.price.toFixed(2)} (Cambio: ${priceChange})`;
      })
      .join('\n');

    const fullSummary = `
Resumen de actualización de precios para ${store}

Total de productos actualizados: ${summary.totalUpdated}
Aumentos de precio: ${summary.increases}
Disminuciones de precio: ${summary.decreases}
Productos nuevos: ${summary.newProducts}

Precios detallados:
${detailedSummary}
    `;

    const blob = new Blob([fullSummary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resumen_precios_${store.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="price-updater-container">
      <h2 className="header">Actualización de Precios desde Sckuba para {store}</h2>
      
      <div className="image-container">
        <img
          src="https://play-lh.googleusercontent.com/QzJM-JULtutSqefQu5TNr_HEG7zvZJbRfe61ZqdmpVzNRCfE2B0nRWvNgcH7eAiMrP0"
          alt="Sckuba Logo"
          className="logo"
        />
      </div>

      {!summary && (
        <div className="button-container">
          <button 
            onClick={handleUpdatePrices} 
            className={`update-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading && <span className="spinner"></span>}
            {isLoading ? 'Actualizando...' : 'Actualizar Precios'}
          </button>
        </div>
      )}

      {summary && (
        <div className="summary-container">
          <h3>Resumen de actualización a 26/11/2024</h3>
          <div className="summary-stats">
            <p>Total de productos actualizados: {summary.totalUpdated}</p>
            <p>Aumentos de precio: {summary.increases}</p>
            <p>Disminuciones de precio: {summary.decreases}</p>
            <p>Productos nuevos: {summary.newProducts}</p>
          </div>

          <table className="summary-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio Actualizado</th>
                <th>Cambio</th>
              </tr>
            </thead>
            <tbody>
              {summary.detailedChanges.map((item, index) => {
                const priceChange = item.oldPrice
                  ? `${(item.price - item.oldPrice).toFixed(2)}`
                  : 'Producto nuevo';
                return (
                  <tr key={index}>
                    <td>{item.product}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{priceChange}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button onClick={handleDownloadSummary} className="download-button">
            Descargar resumen detallado
          </button>
        </div>
      )}
    </div>
  );
};

export default PriceUpdater;