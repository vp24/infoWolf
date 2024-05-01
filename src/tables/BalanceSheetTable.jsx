import React from 'react';
import './tables.css';


const BalanceSheetTable = ({ balanceSheetData }) => {
  if (!balanceSheetData) {
    return null;
  }

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
            {balanceSheetData.netDebt.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {balanceSheetData.netCashPosition.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {balanceSheetData.leverageDebtEBITDA.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {balanceSheetData.freeCashFlow.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {balanceSheetData.ROE.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {balanceSheetData.ROA.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {balanceSheetData.assets.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {balanceSheetData.bookValuePerShare.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {balanceSheetData.cashFlowPerShare.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {balanceSheetData.capex.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {balanceSheetData.capexSales.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
          <tr>
            {balanceSheetData.announcementDate.map((value, index) => (
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