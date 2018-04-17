import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';


class Containers extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 40,
      startAngle: 270,
      total: 200,
      showLabel: false,
      height: '300px',
      plugins: [
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
        {name: 'Using Containers: 58%', className: 'ct-gauge-1'},
        {name: 'No Containers: 42%', className: 'ct-gauge-2'}
      ],
      series: [
        {meta: 'Using Containers', value: 58, className: 'ct-series-b'},
        {meta: 'Not Using Containers', value: 42, className: 'ct-series-f'},
      ]
    };

    const pieResponsiveOptions = [
      ['screen and (max-width: 498px)', {
        height: '200px',
        donutWidth: 20,
      }],
      ['screen and (min-width: 499px) and (max-width: 768px)', {
        height: '250px',
        donutWidth: 30,
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
        <span className='gauge-label'>58%</span><p className="montserrat-lc small"> of responses indicated they are using container tools like Docker and Kubernetes.</p>
      </div>
    );
  }
}

export default Containers;
