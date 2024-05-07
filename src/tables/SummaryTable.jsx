import React from 'react';
import './tables.css';

const SummaryTable = ({ years, sales, netIncome, netCashPosition, peRatio, yield: yield_, capitalization, evSales }) => {
  const superscriptLabel = (label) => {
    const parts = label.split(' ');
    const lastPart = parts[parts.length - 1];
    if (/^\d+$/.test(lastPart)) {
      parts[parts.length - 1] = <sup>{lastPart}</sup>;
    }
    return <td>{parts}</td>;
  };

  return (
    <div>
      <h3>Summary</h3>
      <table className='tables'>
        <thead>
          <tr>
            <th></th>
            {years.map((year, index) => (
              <th key={index}>{year}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {superscriptLabel(sales.label)}
            {sales.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(netIncome.label)}
            {netIncome.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(netCashPosition.label)}
            {netCashPosition.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(peRatio.label)}
            {peRatio.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(yield_.label)}
            {yield_.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(capitalization.label)}
            {capitalization.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(evSales.label)}
            {evSales.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;