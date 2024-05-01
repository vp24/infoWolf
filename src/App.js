// App.js
import React, { useState } from 'react';
import axios from 'axios';
import ValuationTable from './tables/ValuationTable';
import IncomeStatementTable from './tables/IncomeStatementTable';
import BalanceSheetTable from './tables/BalanceSheetTable';
import SummaryTable from './tables/SummaryTable';
import {
  extractValuationData,
  extractIncomeStatementData,
  extractBalanceSheetData,
  extractSummaryData,
} from './dataExtractors';
import './App.css';

function App() {
  const [ticker, setTicker] = useState('');
  const [scrapedData, setScrapedData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (ticker.trim() === '') return;

    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/search?ticker=${ticker}`);
      setScrapedData(response.data);
      setError(null);
    } catch (error) {
      setScrapedData(null);
      setError(error.response.data);
    }
    setLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const valuationData = extractValuationData(scrapedData);
  const incomeStatementData = extractIncomeStatementData(scrapedData);
  const balanceSheetData = extractBalanceSheetData(scrapedData);
  const summaryData = extractSummaryData(incomeStatementData, balanceSheetData, valuationData);

  return (
    <div className="app">
      <h1>InfoWolf</h1>
      <div className="search-container">
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter stock ticker"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {scrapedData && (
        <div className="data-container">
          <div className="market-cap-container">
            <h2 className="section-title">Market Cap</h2>
            <h3 className="market-cap">{valuationData.capitalization[6]}</h3>
            <p className="currency-unit" dangerouslySetInnerHTML={{ __html: valuationData.currencyUnit }}></p>
          </div>

          <div className="scraped-link-container">
            <p>Scraped from: <a href={scrapedData.link} target="_blank" rel="noopener noreferrer">{scrapedData.link}</a></p>
          </div>

          <SummaryTable
            years={summaryData.years}
            sales={summaryData.sales}
            netIncome={summaryData.netIncome}
            netCashPosition={summaryData.netCashPosition}
            peRatio={summaryData.peRatio}
            yield={summaryData.yield}
            capitalization={summaryData.capitalization}
            evSales={summaryData.evSales}
          />

          <ValuationTable valuationData={valuationData} />
          <IncomeStatementTable incomeStatementData={incomeStatementData} />
          <BalanceSheetTable balanceSheetData={balanceSheetData} />
        </div>
      )}
    </div>
  );
}

export default App;