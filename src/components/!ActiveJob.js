import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';


class ActiveJob extends React.Component {
  render() {

    const data = {
      labels: ['SIDEKIQ', 'DELAYED JOB', 'RESQUE', 'ACTIVE ASYNC JOB', 'SUCKER PUNCH', 'ACTIVE JOB INLINE', 'SNEAKERS', 'QUE', 'BACKBURNER', 'QUEUE CLASSIC', 'QU', 'OTHER'],
      series: [
        [50, 50, 21, 13, 5, 3, 2, 1, 1, 0, 0, 3]
      ]
    };

    const options = {
      seriesBarDistance: 10,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 70
      },
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
        <ChartistGraph
          className={'ct-horizontal-bar'}
          data={data}
          options={options}
          responsiveOptions={responsiveOptions}
          type={type} />
      </div>
    );
  }
}

export default ActiveJob;
