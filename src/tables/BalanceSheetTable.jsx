import React from 'react';
import './tables.css';

const BalanceSheetTable = ({ balanceSheetData }) => {
  if (!balanceSheetData) {
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
      <h3>Balance Sheet</h3>
      <table className='tables'>
        <thead>
          <tr>
            {balanceSheetData.years.map((year, index) => (
              <th key={index}>{year}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {superscriptLabel(balanceSheetData.netDebt[0])}
            {balanceSheetData.netDebt.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(balanceSheetData.netCashPosition[0])}
            {balanceSheetData.netCashPosition.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(balanceSheetData.leverageDebtEBITDA[0])}
            {balanceSheetData.leverageDebtEBITDA.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(balanceSheetData.freeCashFlow[0])}
            {balanceSheetData.freeCashFlow.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(balanceSheetData.ROE[0])}
            {balanceSheetData.ROE.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(balanceSheetData.ROA[0])}
            {balanceSheetData.ROA.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(balanceSheetData.assets[0])}
            {balanceSheetData.assets.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(balanceSheetData.bookValuePerShare[0])}
            {balanceSheetData.bookValuePerShare.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(balanceSheetData.cashFlowPerShare[0])}
            {balanceSheetData.cashFlowPerShare.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(balanceSheetData.capex[0])}
            {balanceSheetData.capex.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(balanceSheetData.capexSales[0])}
            {balanceSheetData.capexSales.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {superscriptLabel(balanceSheetData.announcementDate[0])}
            {balanceSheetData.announcementDate.slice(1).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={balanceSheetData.years.length} dangerouslySetInnerHTML={{ __html: balanceSheetData.currencyUnit }}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default BalanceSheetTable;