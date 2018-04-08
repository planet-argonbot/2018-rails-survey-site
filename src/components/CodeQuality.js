import React from 'react';
import ChartistGraph from 'react-chartist';

class CodeQuality extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 60,
      donutSolid: true,
      labelOffset: 10,
      chartPadding: 20,
    };

    const pieResponsiveOptions = [
      ['screen and (min-width: 544px)', {
        labelOffset: 0,
        labelDirection: 'explode',
        fullWidth: true,
        height: '400px',
      }]
    ];

    const pieChartData = {
      labels: ['RUBOCOP', 'SIMPLECOV', 'CODE CLIMATE', 'RUBYCRITIC', 'COVERALLS', 'OTHER OPTION'
      ],
      series: [49, 25, 17, 4, 3, 2]
    };

    return (
      <div>
        <ChartistGraph data={pieChartData} options={pieOptions} responsiveOptions={pieResponsiveOptions} class='ct-chart1' type={'Pie'} />
      </div>

    );
  }
}

export default CodeQuality;
