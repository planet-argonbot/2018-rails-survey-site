import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';

class TestCoverage extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 80,
      showLabel: false,
      height: '300px',
      plugins: [
        ChartistPluginLegend({
          clickable: false
        }),
        Chartist.plugins.tooltip({
          appendToBody: false,
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
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
