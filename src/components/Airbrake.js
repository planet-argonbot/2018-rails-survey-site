import React from 'react';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';


class Airbrake extends React.Component {
  render() {

    const data = {
      labels: ['2009', '2012', '2014', '2016', '2018'],
      series: [
        {'name': 'Airbrake', 'data': [36, 53, 28, 21, 11] },
        {'name': 'ExceptionNotifier plugin', 'data': [58, 34, 24, 15, 2] },
        {'name': 'NewRelic', 'data': [0, 2, 0, 0, 20] },
        {'name': 'Rollbar', 'data': [0, 0, 4, 18, 14] },
        {'name': 'Honeybadger', 'data': [0, 0, 13, 12, 8] }
      ]
    };

    return (
      <div>
        <ChartistGraph
          data={data}
          options={chartOptions.lineOptions}
          responsiveOptions={chartOptions.lineResponsiveOptions}
          type={'Line'} />
      </div>
    );
  }
}

export default Airbrake;
