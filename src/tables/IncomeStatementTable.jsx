import React from 'react';
import './tables.css';

const IncomeStatementTable = ({ incomeStatementData }) => {
  if (!incomeStatementData) {
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
            {superscriptLabel(incomeStatementData.netSales[0])}
            {incomeStatementData.netSales.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.ebitda[0])}
            {incomeStatementData.ebitda.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.ebit[0])}
            {incomeStatementData.ebit.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.operatingMargin[0])}
            {incomeStatementData.operatingMargin.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.earningsBeforeTax[0])}
            {incomeStatementData.earningsBeforeTax.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.netIncome[0])}
            {incomeStatementData.netIncome.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.netMargin[0])}
            {incomeStatementData.netMargin.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.eps[0])}
            {incomeStatementData.eps.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.freeCashFlow[0])}
            {incomeStatementData.freeCashFlow.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.fcfMargin[0])}
            {incomeStatementData.fcfMargin.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.fcfConversionEbitda[0])}
            {incomeStatementData.fcfConversionEbitda.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.fcfConversionNetIncome[0])}
            {incomeStatementData.fcfConversionNetIncome.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.dividendPerShare[0])}
            {incomeStatementData.dividendPerShare.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(incomeStatementData.announcementDate[0])}
            {incomeStatementData.announcementDate.slice(1).map((value, index) => (
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