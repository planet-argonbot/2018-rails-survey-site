import React from 'react';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';

class CIServers extends React.Component {
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
      labels: [
        'CIRCLE CI: 21%',
        'JENKINS: 17%',
        'TRAVIS CI: 15%',
        'NONE: 13%',
        'GITLAB: 10%',
        'CODESHIP: 8%',
        'OTHER: 16%'
      ],
      series: [21, 17, 15, 13, 10, 8, 16]
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

export default CIServers;
