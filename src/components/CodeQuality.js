import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';

class CodeQuality extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      chartPadding: 5,
      showLabel: false,
      height: '300px',
      plugins: [
        Chartist.plugins.tooltip({
          appendToBody: true,
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
        ChartistPluginLegend(),
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
      labels: [
        'RUBOCOP: 49%',
        'SIMPLECOV: 25%',
        'CODE CLIMATE: 17%',
        'RUBYCRITIC: 4%',
        'COVERALLS: 3%',
        'OTHER: 2%'
      ],
      series: [49, 25, 17, 4, 3, 2]
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

export default CodeQuality;
