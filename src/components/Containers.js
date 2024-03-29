import React from 'react';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';


class Containers extends React.Component {
  render() {

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


    return (
      <div>
        <ChartistGraph
          className={'ct-gauge'}
          data={pieChartData}
          options={chartOptions.gaugeOptions}
          responsiveOptions={chartOptions.gaugeResponsiveOptions}
          type={'Pie'} />
        <span className='gauge-label'>58%</span><p className="montserrat-lc small"> of responses indicated they are using container tools like Docker and Kubernetes.</p>
      </div>
    );
  }
}

export default Containers;
