import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';


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
    const options = {
      fullWidth: true,
      chartPadding: {
        right: 40
      },
      height: '400px',
      plugins: [
        Chartist.plugins.legend({
          clickable: false,
        }),
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
            offset: {
              x: 0,
              y: -1
            },
            flipTitle: false,
          }
        })
      ]
    };

    const responsiveOptions = [
      ['screen and (max-width: 600px)', {
        height: '250px',
        chartPadding: {
          right: 20,
        },
      }
      ],

    ];

    const type = 'Line';

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

export default Airbrake;
