import React from 'react';
import './tables.css';


const ValuationTable = ({ valuationData }) => {
  if (!valuationData) {
    return null;
  }

  return (
    <div>
      <h3>Valuation</h3>
      <table className='tables'>
        <thead>
          <tr>
            {valuationData.years.map((year, index) => (
              <th key={index}>{year}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {valuationData.capitalization.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {valuationData.enterpriseValue.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {valuationData.peRatio.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {valuationData.yield.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {valuationData.capitalizationRevenue.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {valuationData.evRevenue.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {valuationData.evEbitda.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {valuationData.evFcf.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {valuationData.fcfYield.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {valuationData.priceToBook.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {valuationData.numberOfStocks.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {valuationData.referencePrice.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {valuationData.announcementDate.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={valuationData.years.length} dangerouslySetInnerHTML={{ __html: valuationData.currencyUnit }}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ValuationTable;