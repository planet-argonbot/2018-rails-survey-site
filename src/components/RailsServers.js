import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';

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
        right: 40,
        left: 20
      },
      plugins: [
        Chartist.plugins.legend({
          legendNames: [
            'Puma',
            'Unicorn',
            'Passenger'
          ],
          clickable: false,
        }),
        Chartist.plugins.tooltip({
          appendToBody: false,
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


    return (
      <div>
        <ChartistGraph
          data={data}
          type={'Line'}
          responsiveOptions={chartOptions.lineResponsiveOptions}
          options={options} />
      </div>
    );
  }
}

export default RailsServers;
