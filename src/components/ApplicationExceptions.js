import React from 'react';
import ChartistGraph from 'react-chartist';


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
      seriesBarDistance: 20,
      reverseData: true,
      low: 0,
      high: 25,
      horizontalBars: true,
      height: '500px',
      fullWidth: true,
      chartPadding: 40,
      axisX: {
        offset: 70,
        labelInterpolationFnc: function(value) {
          return value + '%';
        },
      }
    };

    const responsiveOptions = [
      ['screen and (max-width: 544px)', {
        seriesBarDistance: 10,
        fullWidth: true,
        reverseData: true,
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
