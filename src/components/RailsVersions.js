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
          className: 'ct-series-a',
          data: [16, 24, 15, 23, -1, -1, -1, -1, -1],
        },
        {
          className: 'ct-series-f',
          data: [-1, -1, -1, -1, 6, 3, 7, 1, 3]
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
      high: 30,
      low: 0,
      axisY: {
        onlyInteger: true,
      },
      plugins: [
        Chartist.plugins.tooltip({
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
      ['screen and (max-width: 544px)', {
        seriesBarDistance: 10,
      }
      ]
    ];

    const type = 'Bar';

    return (
      <div class="row justify-content-center margin-top-xl">
        <div class="col-md-10">
          <div class="h6">Which versions of Rails are you using? </div>
          <ChartistGraph
            className={'ct-octave'}
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
