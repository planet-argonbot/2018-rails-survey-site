import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';

class GreenfieldRails extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      showLabel: false,
      donutWidth: 80,
      height: '300px',
      plugins: [
        ChartistPluginLegend({
          clickable: false
        }),
        Chartist.plugins.tooltip({
          appendToBody: true,
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
        'ASSET PIPELINE: 55%',
        'YARN/WEBPACK: 44%',
        'OTHER: 2%'
      ],
      series: [
        {meta: 'ASSET PIPELINE', value: 55},
        {meta: 'YARN/WEBPACK', value: 44},
        {meta: 'OTHER', value: 2},
      ]
    };

    return (
      <div>
        <ChartistGraph
          className={'ct-custom-donut'}
          responsiveOptions={pieResponsiveOptions}
          data={pieChartData}
          options={pieOptions}
          type={'Pie'} />
      </div>
    );
  }
}

export default GreenfieldRails;
