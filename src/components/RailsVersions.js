import React from 'react';
import ChartistGraph from 'react-chartist';


class RailsVersions extends React.Component {
  render() {

    const data = {
      labels: ['5.2', '5.1', '5.0', '4.2', '4.1', '4.0', '3.2', '3.1', '3.0 or earlier'],
      series: [
        [16, 24, 15, 23, 6, 3, 7, 1, 3]
      ]
    };

    const options = {
      fullWidth: true,
      chartPadding: {
        right: 100
      },
      high: 30,
      low: 5,
      axisY: {
        labelInterpolationFnc: function(value) {
          return value + ' %';
        },
      },
      // plugins: [
      //   Chartist.plugins.tooltip({
      //     transformTooltipTextFnc: function(value) {
      //       return value + '%';
      //     }
      //   })
      // ]
    };

    const responsiveOptions = [
      ['screen and (max-width: 544px)', {
        seriesBarDistance: 10,
        fullWidth: true,
        height: '500px',
        reverseData: true,
        horizontalBars: true,
        axisY: {
          labelInterpolationFnc: function(value) {
            return value;
          },
          offset: 70
        }
      }]
    ];

    const type = 'Bar';

    return (
      <div>
        <ChartistGraph data={data} options={options} responsiveOptions={responsiveOptions} type={type} />
      </div>
    );
  }
}

export default RailsVersions;
