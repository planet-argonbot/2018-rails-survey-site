import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';

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

    const options = {
      fullWidth: true,
      chartPadding: {
        left: 10,
        top: 20,
        right: 10,
        bottom: 10,
      },
      height: 300,
      high: 50,
      low: 0,
      axisY: {
        onlyInteger: true,
      },
      plugins: [
        Chartist.plugins.tooltip({
          appendToBody: false,
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
        Chartist.plugins.ctAxisTitle({
          axisY: {
            axisTitle: 'Percent',
            axisClass: 'ct-axis-title',
            textAnchor: 'middle',
            flipTitle: false,
          }
        })
      ]
    };

    const responsiveOptions = [
      ['screen and (max-width: 992px)', {
        seriesBarDistance: 10,
      }
      ],
      ['screen and (max-width: 600px)', {
        height: '250px',
      }
      ]
    ];

    return (
      <div>
        <ChartistGraph
          data={data}
          responsiveOptions={responsiveOptions}
          options={options}
          type={'Bar'} />
      </div>

    );
  }
}

export default CodeQuality;
