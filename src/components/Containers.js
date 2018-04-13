import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';


class Containers extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 60,
      startAngle: 270,
      total: 200,
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


    const pieChartData = {
      labels: [
        'Using Containers: 56%',
        'No Containers: 41%',
      ],
      series: [
        {meta: 'Using Containers', value: 56},
        {meta: 'Not Using Containers', value: 44},
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

    return (
      <div>
        <ChartistGraph
          className={'ct-gauge'}
          data={pieChartData}
          options={pieOptions}
          responsiveOptions={pieResponsiveOptions}
          type={'Pie'} />
        <span class='gauge-label'>56%</span><p class="montserrat-lc small">of developers are using tools like Docker and Kubernetes now</p>
      </div>
    );
  }
}

export default Containers;
