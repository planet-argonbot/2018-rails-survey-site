import React from 'react';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';

class NotUpdated extends React.Component {
  render() {

    const data = {
      labels: [
        'TIME',
        'BUDGET',
        'GEM DEPENDENCIES',
        'MANAGEMENT',
        'OTHER'],
      series: [
        {
          className: 'ct-series-a',
          data: [
            {'meta': 'TIME', 'value': 46},
            {'meta': 'BUDGET', 'value': 19},
            {'meta': 'GEM DEPENDENCIES', 'value': 16},
            {'meta': 'MANAGEMENT', 'value': 15},
            {'meta': 'OTHER', 'value': 3}
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

export default NotUpdated;
