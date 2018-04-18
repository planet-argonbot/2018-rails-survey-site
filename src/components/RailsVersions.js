import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';
import 'chartist-plugin-axistitle';


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

    const options = {
      fullWidth: true,
      chartPadding: {
        left: 10,
        top: 20,
        right: 10,
      },
      height: 300,
      high: 30,
      low: 0,
      axisY: {
        onlyInteger: true,
      },
      plugins: [
        Chartist.plugins.tooltip({
          appendToBody: true,
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
      ]
    ];

    const type = 'Bar';

    return (
      <div>
        <ChartistGraph
          data={data}
          options={options}
          responsiveOptions={responsiveOptions}
          type={type} />
      </div>
    );
  }
}

export default RailsVersions;
