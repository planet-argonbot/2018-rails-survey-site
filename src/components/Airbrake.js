import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';

class Airbrake extends React.Component {
  render() {

    const data = {
      labels: ['2009', '2012', '2014', '2016', '2018'],
      series: [
        {'name': 'NewRelic', 'data': [0, 0, 0, 0, 20] },
        {'name': 'Rollbar', 'data': [0, 0, 0, 0, 14] },
        {'name': 'Sentry', 'data': [0, 0, 0, 0, 14] },
        {'name': 'Airbrake', 'data': [36, 53, 28, 21, 11] },
        {'name': 'Honeybadger', 'data': [0, 0, 0, 0, 8] }
      ]
    };
    const options = {
      fullWidth: true,
      chartPadding: 20,
      plugins: [
        Chartist.plugins.tooltip({
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        })
      ]
    };
    const type = 'Line';

    return (
      <div>
        <ChartistGraph
          data={data}
          options={options}
          type={type} />
      </div>
    );
  }
}

export default Airbrake;
