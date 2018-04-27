import React from 'react';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';

class CodeQuality extends React.Component {
  render() {

    const data = {
      labels: [
        'RUBOCOP',
        'SIMPLECOV',
        'CODE CLIMATE',
        'RUBYCRITIC',
        'COVERALLS',
        'OTHER',
      ],
      series: [
        {
          className: 'ct-series-c',
          data: [
            {'meta': 'RUBOCOP', 'value': 49},
            {'meta': 'SIMPLECOV', 'value': 25},
            {'meta': 'CODE CLIMATE', 'value': 17},
            {'meta': 'RUBYCRITIC', 'value': 4},
            {'meta': 'COVERALLS', 'value': 3},
            {'meta': 'OTHER', 'value': 2}
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

export default CodeQuality;
