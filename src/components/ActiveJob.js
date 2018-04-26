import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';


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
          appendToBody: false,
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
        Chartist.plugins.legend({
          clickable: false
        })
      ]
    };


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
          responsiveOptions={chartOptions.pieResponsiveOptions}
          type={'Pie'} />
      </div>
    );
  }
}

export default ActiveJob;
