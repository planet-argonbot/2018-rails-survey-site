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
        [16, 24, 15, 23, 6, 3, 7, 1, 3]
      ]
    };

    const options = {
      fullWidth: true,
      chartPadding: 30,
      high: 30,
      low: 0,
      divisor: 5,
      axisY: {
        labelInterpolationFnc: function(value) {
          return value + '%';
        },
      },
      plugins: [
        Chartist.plugins.tooltip({
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
        // Chartist.plugins.ctAxisTitle({
        //   axisY: {
        //     axisTitle: 'Percent',
        //     axisClass: 'ct-axis-title',
        //     textAnchor: 'middle',
        //     offset: {
        //       x: 0,
        //       y: -1
        //     },
        //     flipTitle: false,
        //   }
        // })
      ]
    };

    const responsiveOptions = [
      ['screen and (max-width: 544px)', {
        seriesBarDistance: 10,
        axisY: {
          labelInterpolationFnc: function(value) {
            return value;
          },

        }
      }]
    ];

    const type = 'Bar';

    return (
      <div class="row justify-content-center margin-top-xl">
        <div class="col-md-10">
          <div class="h6">Which versions of Rails are you using? </div>
          <ChartistGraph
            className={'ct-vertical-bar ct-octave'}
            data={data}
            options={options}
            responsiveOptions={responsiveOptions}
            type={type} />
        </div>
      </div>
    );
  }
}

export default RailsVersions;
