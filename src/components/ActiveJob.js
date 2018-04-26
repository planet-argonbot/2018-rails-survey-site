import React from 'react';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';

class ActiveJob extends React.Component {
  render() {

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
          options={chartOptions.pieOptions}
          responsiveOptions={chartOptions.pieResponsiveOptions}
          type={'Pie'} />
      </div>
    );
  }
}

export default ActiveJob;
