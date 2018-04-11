import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';


class NewRelic extends React.Component {
  render() {

    const data = {
      labels: ['2009', '2012', '2014', '2016', '2018'],
      series: [
        [0, 2, 5, 21, 20],
        [73, 95, 97, 78, 46],
        [0, 3, 6, 3, 33]
      ]
    };

    const options = {
      fullWidth: true,
      height: '350px',
      chartPadding: 30,
      plugins: [
        Chartist.plugins.tooltip({
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
        ChartistPluginLegend({
          legendNames: ['Performance Monitoring', 'Uptime Monitoring', 'Application Exception Tracking'],
          clickable: true,
        })
      ]
    };

    const type = 'Line';

    return (
      <div>
        <ChartistGraph
          data={data}
          type={type}
          options={options} />
      </div>
    );
  }
}

export default NewRelic;
