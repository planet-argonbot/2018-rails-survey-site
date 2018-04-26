import React from 'react';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';

class CIServers extends React.Component {
  render() {

    const data = {
      labels: [
        'CIRCLE CI',
        'JENKINS',
        'TRAVIS CI',
        'NONE',
        'GITLAB',
        'CODESHIP',
        'OTHER'
      ],
      series: [
        {
          className: 'ct-series-e',
          data: [
            {'meta': 'CIRCLE CI', 'value': 21},
            {'meta': 'JENKINS', 'value': 17},
            {'meta': 'TRAVIS CI', 'value': 15},
            {'meta': 'NONE', 'value': 13},
            {'meta': 'GITLAB', 'value': 10},
            {'meta': 'CODESHIP', 'value': 8},
            {'meta': 'OTHER', 'value': 16},
          ]
        },
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

export default CIServers;
