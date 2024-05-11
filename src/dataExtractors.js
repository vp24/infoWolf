export const extractValuationData = (scrapedData) => {
  if (!scrapedData || !scrapedData.valuationSectionHTML) {
    return null;
  }

  const parser = new DOMParser();
  const valuationTable = parser.parseFromString(scrapedData.valuationSectionHTML, 'text/html');
  const headerRow = valuationTable.querySelector('thead tr');
  const dataRows = valuationTable.querySelectorAll('tbody tr');

  const years = Array.from(headerRow.querySelectorAll('th')).map(th => th.textContent.trim());

  const currencyUnitElement = valuationTable.querySelector('.pr-10');
  const currencyUnit = currencyUnitElement ? currencyUnitElement.innerHTML : '';

  const data = Array.from(dataRows).map(row => {
    const cells = row.querySelectorAll('td');
    return Array.from(cells).map(cell => cell.textContent.trim());
  });

  return {
    years,
    currencyUnit,
    capitalization: data[0],
    enterpriseValue: data[1],
    peRatio: data[2],
    yield: data[3],
    capitalizationRevenue: data[4],
    evRevenue: data[5],
    evEbitda: data[6],
    evFcf: data[7],
    fcfYield: data[8],
    priceToBook: data[9],
    numberOfStocks: data[10],
    referencePrice: data[11],
    announcementDate: data[12],
  };
};

export const extractIncomeStatementData = (scrapedData) => {
  if (!scrapedData || !scrapedData.iseECardHTML) {
    return null;
  }

  const parser = new DOMParser();
  const incomeStatementTable = parser.parseFromString(scrapedData.iseECardHTML, 'text/html');
  const headerRow = incomeStatementTable.querySelector('thead tr');
  const dataRows = incomeStatementTable.querySelectorAll('tbody tr');

  const years = Array.from(headerRow.querySelectorAll('th')).map(th => th.textContent.trim());

  const currencyUnitElement = incomeStatementTable.querySelector('.pr-10');
  const currencyUnit = currencyUnitElement ? currencyUnitElement.innerHTML : '';

  const data = Array.from(dataRows).map(row => {
    const cells = row.querySelectorAll('td');
    return Array.from(cells).map(cell => cell.textContent.trim());
  });

  return {
    years,
    currencyUnit,
    netSales: data[0],
    ebitda: data[1],
    ebit: data[2],
    operatingMargin: data[3],
    earningsBeforeTax: data[4],
    netIncome: data[5],
    netMargin: data[6],
    eps: data[7],
    freeCashFlow: data[8],
    fcfMargin: data[9],
    fcfConversionEbitda: data[10],
    fcfConversionNetIncome: data[11],
    dividendPerShare: data[12],
    announcementDate: data[13],
  };
};

export const extractBalanceSheetData = (scrapedData) => {
  if (!scrapedData || !scrapedData.bsaACardHTML) {
    return null;
  }

  const parser = new DOMParser();
  const balanceSheetTable = parser.parseFromString(scrapedData.bsaACardHTML, 'text/html');
  const headerRow = balanceSheetTable.querySelector('thead tr');
  const dataRows = balanceSheetTable.querySelectorAll('tbody tr');

  const years = Array.from(headerRow.querySelectorAll('th')).map(th => th.textContent.trim());

  const currencyUnitElement = balanceSheetTable.querySelector('.pr-10');
  const currencyUnit = currencyUnitElement ? currencyUnitElement.innerHTML : '';

  const data = Array.from(dataRows).map(row => {
    const cells = row.querySelectorAll('td');
    return Array.from(cells).map(cell => cell.textContent.trim());
  });

  return {
    years,
    currencyUnit,
    netDebt: data[0],
    netCashPosition: data[1],
    leverageDebtEBITDA: data[2],
    freeCashFlow: data[3],
    ROE: data[4],
    ROA: data[5],
    assets: data[6],
    bookValuePerShare: data[7],
    cashFlowPerShare: data[8],
    capex: data[9],
    capexSales: data[10],
    announcementDate: data[11],
  };
};

export const extractSummaryData = (incomeStatementData, balanceSheetData, valuationData) => {
  if (!incomeStatementData || !balanceSheetData || !valuationData) {
    return null;
  }

  const years = incomeStatementData.years.slice(-3);
  const sales = {
    label: incomeStatementData.netSales[0],
    values: incomeStatementData.netSales.slice(-3),
  };
  const netIncome = {
    label: incomeStatementData.netIncome[0],
    values: incomeStatementData.netIncome.slice(-3),
  };
  const netCashPosition = {
    label: balanceSheetData.netCashPosition[0],
    values: balanceSheetData.netCashPosition.slice(-3),
  };
  const peRatio = {
    label: valuationData.peRatio[0],
    values: valuationData.peRatio.slice(-3),
  };
  const yield_ = {
    label: valuationData.yield[0],
    values: valuationData.yield.slice(-3),
  };
  const capitalization = {
    label: valuationData.capitalization[0],
    values: valuationData.capitalization.slice(-3),
  };
  const evSales = {
    label: valuationData.evRevenue[0],
    values: valuationData.evRevenue.slice(-3),
  };

  return {
    years,
    sales,
    netIncome,
    netCashPosition,
    peRatio,
    yield: yield_,
    capitalization,
    evSales,
  };
};