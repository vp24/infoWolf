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
  const netDebt = {
    label: balanceSheetData.netDebt[0],
    values: balanceSheetData.netDebt.slice(-3),
  };
  const peRatio = {
    label: valuationData.peRatio[0],
    values: valuationData.peRatio.slice(-3),
  };
  const yield_ = {
    label: valuationData.yield[0],
    values: valuationData.yield.slice(-3),
  };
  let capitalization = {
    label: valuationData.capitalization[0],
    values: valuationData.capitalization.slice(-3),
  };
  
  // Modify the capitalization label
  if (capitalization.label.includes('Capitalization')) {
    capitalization.label = 'Mkt Cap';
  }
  
  const evSales = {
    label: valuationData.evRevenue[0],
    values: valuationData.evRevenue.slice(-3),
  };

  return {
    years,
    sales,
    netIncome,
    netCashPosition,
    netDebt,
    peRatio,
    yield: yield_,
    capitalization,
    evSales,
  };
};