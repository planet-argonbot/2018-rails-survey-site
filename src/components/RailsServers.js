import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';
import 'chartist-plugin-axistitle';


class RailsServers extends React.Component {
  render() {

    const data = {
      labels: ['2014', '2016', '2018'],
      series: [
        {'name': 'Puma', 'data': [17, 35, 49] },
        {'name': 'Unicorn', 'data': [41, 34, 24] },
        {'name': 'Passenger', 'data': [36, 30, 25] }
      ]
    };

    const options = {
      fullWidth: true,
      height: '300px',
      low: 0,
      chartPadding: {
        right: 60,
      },
      plugins: [
        ChartistPluginLegend({
          legendNames: ['Puma', 'Unicorn', 'Passenger'],
          clickable: true,
        }),
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
            offset: {
              x: 0,
              y: -1
            },
            flipTitle: false,
          }
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

export default RailsServers;
