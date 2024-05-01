import React from 'react';
import './tables.css';

const SummaryTable = ({ years, sales, netIncome, netCashPosition, peRatio, yield: yield_, capitalization, evSales }) => {
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
            <td>{sales.label}</td>
            {sales.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            <td>{netIncome.label}</td>
            {netIncome.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            <td>{netCashPosition.label}</td>
            {netCashPosition.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            <td>{peRatio.label}</td>
            {peRatio.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            <td>{yield_.label}</td>
            {yield_.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            <td>{capitalization.label}</td>
            {capitalization.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            <td>{evSales.label}</td>
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