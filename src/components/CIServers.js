import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';

class CIServers extends React.Component {
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
        'CIRCLE CI: 21%',
        'JENKINS: 17%',
        'TRAVIS CI: 15%',
        'NONE: 13%',
        'GITLAB: 10%',
        'CODESHIP: 8%',
        'OTHER: 16%'
      ],
      series: [
        {meta: 'CIRCLE CI', value: 21},
        {meta: 'JENKINS', value: 17},
        {meta: 'TRAVIS CI', value: 15},
        {meta: 'NONE', value: 13},
        {meta: 'GITLAB', value: 10},
        {meta: 'CODESHIP', value: 8},
        {meta: 'OTHER', value: 16},
      ]
    };

    return (
      <div>
        <ChartistGraph
          className={'ct-custom-donut'}
          data={pieChartData}
          responsiveOptions={pieResponsiveOptions}
          options={pieOptions}
          type={'Pie'} />
      </div>
    );
  }
}

export default CIServers;
