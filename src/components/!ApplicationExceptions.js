import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';

class ApplicationExceptions extends React.Component {
  render() {

    const data = {
      labels: [
        'New Relic',
        'Rollbar',
        'Sentry',
        'Airbrake',
        'Honeybadger',
        'None',
        'Bugsnag',
        'ExceptionNotifier plugin',
        'Errbit',
        'AppSignal',
        'Other',
        'Raygun',
        'Exceptional'],
      series: [
        [20, 14, 14, 11, 8, 8, 8, 6, 4, 4, 2, 1, 0]
      ]
    };

    const options = {
      fullWidth: true,
      seriesBarDistance: 15,
      height: '400px',
      chartPadding: 40,

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
      ['screen and (max-width: 544px)', {
        seriesBarDistance: 10,
        fullWidth: true,
        height: '300px',
        horizontalBars: true,
        axisX: {
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
        <ChartistGraph
          className={'ct-horizontal-bar'}
          data={data} options={options}
          responsiveOptions={responsiveOptions}
          type={type} />
      </div>
    );
  }
}

export default ApplicationExceptions;
