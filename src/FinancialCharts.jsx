import React from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const FinancialCharts = ({ years, sales, netIncome, netMargin }) => {
  // Extract values from sales, netIncome, and netMargin arrays
  const salesValues = sales.slice(1).map(value => parseInt(value.replace(/,/g, '')));
  const netIncomeValues = netIncome.slice(1).map(value => parseInt(value.replace(/,/g, '')));
  const netMarginValues = netMargin.slice(1).map(value => parseFloat(value.replace('%', '')));

  const data = {
    labels: years.slice(1),
    datasets: [
      {
        label: 'Sales',
        data: salesValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        yAxisID: 'y1',
      },
      {
        label: 'Net Income',
        data: netIncomeValues,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        yAxisID: 'y1',
      },
      {
        label: 'Net Margin',
        data: netMarginValues,
        borderColor: 'rgba(255, 99, 132, 1)',
        type: 'line',
        fill: false,
        yAxisID: 'y2',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Financial Performance',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toFixed(2);
              if (context.datasetIndex === 2) {
                label += '%';
              }
            }
            return label;
          },
        },
      },
    },
    scales: {
      y1: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y2: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default FinancialCharts;