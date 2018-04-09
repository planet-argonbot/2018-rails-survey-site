import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';

class ApplicationExceptions extends React.Component {
  render() {

    const data = {
      labels: ['New Relic', 'Rollbar', 'Sentry', 'Airbrake', 'Honeybadger', 'None', 'Bugsnag', 'ExceptionNotifier plugin', 'Errbit', 'AppSignal', 'Other', 'Raygun', 'Exceptional'],
      series: [
        [20, 14, 14, 11, 8, 8, 8, 6, 4, 4, 2, 1, 0]
      ]
    };

    const options = {
      fullWidth: true,
      seriesBarDistance: 15,

      horizontalBars: true,
      plugins: [
        Chartist.plugins.tooltip({
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        })
      ]
    };

    const responsiveOptions = [
      ['screen and (min-width: 544px)', {
        seriesBarDistance: 10,
        height: '700px',
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

export default ApplicationExceptions;
