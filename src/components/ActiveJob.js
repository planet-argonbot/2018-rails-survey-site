import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';
import ChartistPluginLegend from 'chartist-plugin-legend';


class ActiveJob extends React.Component {
  render() {
    const options = {
      donut: true,
      donutWidth: 80,
      showLabel: false,
      padding: {
        bottom: 20,
      },
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

    const data = {
      labels: [
        'SIDEKIQ: 50%',
        'DELAYED JOB: 21%',
        'RESQUE: 13%',
        'ACTIVE ASYNC JOB: 5%',
        'SUCKER PUNCH: 3%',
        'OTHER: 7%'],
      series: [
        {meta: 'SIDEKIQ', value: 50},
        {meta: 'DELAYED JOB', value: 21},
        {meta: 'RESQUE', value: 13},
        {meta: 'ACTIVE ASYNC JOB', value: 5},
        {meta: 'SUCKER PUNCH', value: 3},
        {meta: 'OTHER', value: 7},
      ]
    };

    return (
      <div>
        <ChartistGraph
          className={'ct-custom-donut'}
          data={data}
          options={options}
          responsiveOptions={pieResponsiveOptions}
          type={'Pie'} />
      </div>
    );
  }
}

export default ActiveJob;
