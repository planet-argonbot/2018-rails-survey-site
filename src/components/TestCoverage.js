import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';

class TestCoverage extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      showLabel: false,
      height: '300px',
      plugins: [
        ChartistPluginLegend(),
        Chartist.plugins.tooltip({
          appendToBody: true,
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
      ]
    };

    const pieResponsiveOptions = [
      ['screen and (max-width: 498px)', {
        height: '200px',
        donutWidth: 20,
      }],
      ['screen and (min-width: 499px) and (max-width: 768px)', {
        height: '250px',
        donutWidth: 40,
      }]
    ];

    const pieChartData = {
      labels: [
        'ALL: 29%',
        'MOST: 25%',
        'SOME: 18%',
        'NONE: 18%',
        'HALF: 11%'
      ],
      series: [
        {meta: 'ALL', value: 29},
        {meta: 'MOST', value: 25},
        {meta: 'SOME', value: 18},
        {meta: 'NONE', value: 18},
        {meta: 'HALF', value: 11},
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

export default TestCoverage;
