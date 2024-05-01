import React from 'react';
import './tables.css';


const IncomeStatementTable = ({ incomeStatementData }) => {
  if (!incomeStatementData) {
    return null;
  }

  return (
    <div>
      <h3>Income Statement</h3>
      <table className='tables'>
        <thead>
          <tr>
            {incomeStatementData.years.map((year, index) => (
              <th key={index}>{year}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {incomeStatementData.netSales.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.ebitda.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.ebit.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.operatingMargin.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.earningsBeforeTax.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.netIncome.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.netMargin.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.eps.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.freeCashFlow.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.fcfMargin.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.fcfConversionEbitda.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.fcfConversionNetIncome.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.dividendPerShare.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {incomeStatementData.announcementDate.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={incomeStatementData.years.length} dangerouslySetInnerHTML={{ __html: incomeStatementData.currencyUnit }}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default IncomeStatementTable;