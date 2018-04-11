import React from 'react';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';

class TestCoverage extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 50,
      chartPadding: 5,
      donutSolid: true,
      showLabel: false,
      height: '300px',
      plugins: [
        ChartistPluginLegend()
      ]
    };

    const pieResponsiveOptions = [
      ['screen and (max-width: 544px)', {
        height: '200px',
        donutWidth: 20,
      }],

      ['screen and (min-width: 545px)', {
        height: '250px',
        donutWidth: 30,
      }]
    ];

    const pieChartData = {
      labels: ['ALL', 'MOST', 'SOME', 'NONE', 'HALF'],
      series: [29, 25, 18, 18, 11]
    };

    return (
      <div>
        <ChartistGraph
          className={'ct-custom-donut'}
          data={pieChartData}
          options={pieOptions}
          responsiveOptions={pieResponsiveOptions}
          type={'Pie'} />
      </div>
    );
  }
}

export default TestCoverage;
