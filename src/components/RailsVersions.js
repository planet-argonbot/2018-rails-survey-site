import React from 'react';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';


class RailsVersions extends React.Component {
  render() {

    const data = {
      labels: [
        '5.2',
        '5.1',
        '5.0',
        '4.2',
        '4.1',
        '4.0',
        '3.2',
        '3.1',
        '3.0 or earlier'
      ],
      series: [
        {
          className: 'ct-series-b',
          data: [
            {'meta': 'v5.2', 'value': 16},
            {'meta': 'v5.1', 'value': 24},
            {'meta': 'v5.0', 'value': 15},
            {'meta': 'v4.2', 'value': 23},
            {'meta': 'v4.1', 'value': 6},
            {'meta': 'v4.0', 'value': 3},
            {'meta': 'v3.2', 'value': 7},
            {'meta': 'v3.1', 'value': 1},
            {'meta': 'v3.0 or earlier', 'value': 3}
          ]
        }
      ]
    };

    return (
      <div>
        <ChartistGraph
          data={data}
          options={chartOptions.barOptions}
          responsiveOptions={chartOptions.barResponsiveOptions}
          type={'Bar'} />
      </div>
    );
  }
}

export default RailsVersions;
