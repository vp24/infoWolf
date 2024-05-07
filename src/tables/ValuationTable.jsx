import React from 'react';
import './tables.css';

const ValuationTable = ({ valuationData }) => {
  if (!valuationData) {
    return null;
  }

  const superscriptLabel = (label) => {
    const parts = label.split(/(\s\d+)/);
    if (parts.length > 1) {
      parts[parts.length - 2] = parts[parts.length - 2].trim();
      parts[parts.length - 2] = <sup>{parts[parts.length - 2]}</sup>;
    }
    return <td>{parts}</td>;
  };

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
            {superscriptLabel(valuationData.capitalization[0])}
            {valuationData.capitalization.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(valuationData.enterpriseValue[0])}
            {valuationData.enterpriseValue.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(valuationData.peRatio[0])}
            {valuationData.peRatio.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(valuationData.yield[0])}
            {valuationData.yield.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(valuationData.capitalizationRevenue[0])}
            {valuationData.capitalizationRevenue.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(valuationData.evRevenue[0])}
            {valuationData.evRevenue.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(valuationData.evEbitda[0])}
            {valuationData.evEbitda.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(valuationData.evFcf[0])}
            {valuationData.evFcf.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(valuationData.fcfYield[0])}
            {valuationData.fcfYield.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(valuationData.priceToBook[0])}
            {valuationData.priceToBook.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(valuationData.numberOfStocks[0])}
            {valuationData.numberOfStocks.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(valuationData.referencePrice[0])}
            {valuationData.referencePrice.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(valuationData.announcementDate[0])}
            {valuationData.announcementDate.slice(1).map((value, index) => (
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