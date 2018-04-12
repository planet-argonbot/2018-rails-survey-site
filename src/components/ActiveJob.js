import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';
import ChartistPluginLegend from 'chartist-plugin-legend';


class ActiveJob extends React.Component {
  render() {

    const data = {
      labels: [
        'SIDEKIQ: 50%',
        'DELAYED JOB: 21%',
        'RESQUE: 13%',
        'ACTIVE ASYNC JOB: 5%',
        'SUCKER PUNCH: 3%',
        'OTHER: 7%'],
      series:
        [50, 21, 13, 5, 3, 7]
    };

    const options = {
      donut: true,
      chartPadding: 5,
      showLabel: false,
      height: '300px',
      plugins: [
        Chartist.plugins.tooltip({
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
        ChartistPluginLegend()
      ]
    };

    const responsiveOptions = [
      ['screen and (max-width: 544px)', {
        height: '200px',
        donutWidth: 20,
      }],

      ['screen and (min-width: 545px)', {
        height: '250px',
        donutWidth: 30,
      }]
    ];

    return (
      <div>
        <ChartistGraph
          className={'ct-custom-donut align-bottom'}
          data={data}
          options={options}
          responsiveOptions={responsiveOptions}
          type={'Pie'} />
      </div>
    );
  }
}

export default ActiveJob;
