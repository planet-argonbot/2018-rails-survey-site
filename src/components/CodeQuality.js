import React from 'react';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';

class CodeQuality extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 60,
      donutSolid: true,
      showLabel: false,
      chartPadding: 20,
      height: '400px',
      plugins: [
        ChartistPluginLegend()
      ]
    };

    const pieResponsiveOptions = [
      ['screen and (max-width: 544px)', {
        height: '300px',
      }]
    ];

    const pieChartData = {
      labels: ['RUBOCOP', 'SIMPLECOV', 'CODE CLIMATE', 'RUBYCRITIC', 'COVERALLS', 'OTHER OPTION'
      ],
      series: [49, 25, 17, 4, 3, 2]
    };

    return (
      <div>
        <ChartistGraph className={'ct-custom-donut'} data={pieChartData} options={pieOptions} responsiveOptions={pieResponsiveOptions} type={'Pie'} />
      </div>

    );
  }
}

export default CodeQuality;
