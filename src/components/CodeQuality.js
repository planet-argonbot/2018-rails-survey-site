import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';

class CodeQuality extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 80,
      showLabel: false,
      height: '300px',
      plugins: [
        Chartist.plugins.tooltip({
          appendToBody: true,
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
        ChartistPluginLegend({
          clickable: false
        })
      ]
    };

    const pieResponsiveOptions = [
      ['screen and (max-width: 576px)', {
        height: '200px',
        donutWidth: 50,
      }],
      ['screen and (min-width: 577px) and (max-width: 768px)', {
        height: '250px',
        donutWidth: 60,
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
      series: [
        {meta: 'RUBOCOP', value: 49},
        {meta: 'SIMPLECOV', value: 25},
        {meta: 'CODE CLIMATE', value: 17},
        {meta: 'RUBYCRITIC', value: 4},
        {meta: 'COVERALLS', value: 3},
        {meta: 'OTHER', value: 2},
      ]
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
