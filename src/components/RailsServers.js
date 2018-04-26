import React from 'react';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';

class RailsServers extends React.Component {
  render() {

    const data = {
      labels: ['2014', '2016', '2018'],
      series: [
        {'name': 'Puma', 'data': [17, 35, 49] },
        {'name': 'Unicorn', 'data': [41, 34, 24] },
        {'name': 'Passenger', 'data': [36, 30, 25] }
      ]
    };

    return (
      <div>
        <ChartistGraph
          data={data}
          type={'Line'}
          responsiveOptions={chartOptions.lineResponsiveOptions}
          options={chartOptions.lineOptions} />
      </div>
    );
  }
}

export default RailsServers;
