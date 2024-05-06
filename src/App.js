import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import ValuationTable from './tables/ValuationTable';
import IncomeStatementTable from './tables/IncomeStatementTable';
import BalanceSheetTable from './tables/BalanceSheetTable';
import SummaryTable from './tables/SummaryTable';
import FinancialCharts from './FinancialCharts';
import SignIn from './SignIn';
import Register from './Register';
import Header from './Header';
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSearch = async () => {
    if (ticker.trim() === '') return;

    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`https://mktapi.onrender.com/search?ticker=${ticker}`, {
        headers: {
          Authorization: token,
        },
      });
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

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  const valuationData = extractValuationData(scrapedData);
  const incomeStatementData = extractIncomeStatementData(scrapedData);
  const balanceSheetData = extractBalanceSheetData(scrapedData);
  const summaryData = extractSummaryData(incomeStatementData, balanceSheetData, valuationData);

  return (
    <Router>
      <div className="app">
        <Header isAuthenticated={isAuthenticated} handleSignOut={handleSignOut} />
        <Routes>
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <>
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
                      <FinancialCharts
                        years={incomeStatementData.years}
                        sales={incomeStatementData.netSales}
                        netIncome={incomeStatementData.netIncome}
                        netMargin={incomeStatementData.netMargin}
                      />
                      <ValuationTable valuationData={valuationData} />
                      <IncomeStatementTable incomeStatementData={incomeStatementData} />
                      <BalanceSheetTable balanceSheetData={balanceSheetData} />
                    </div>
                  )}
                </>
              ) : (
                <div className="auth-container">
                  <p className="auth-message">Please sign in to access the application.</p>
                  <Link to="/signin" className="sign-in-link">Sign In</Link>
                </div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;