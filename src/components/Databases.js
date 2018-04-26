import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';

class Databases extends React.Component {
  render() {

    const data = {
      labels: ['2009', '2012', '2014', '2016', '2018'],
      series: [
        {'name': 'PostgreSQL', 'data': [28, 62, 72, 84, 85] },
        {'name': 'MySQL', 'data': [64, 31, 22, 14, 12] },
        {'name': 'Other', 'data': [8, 7, 6, 2, 3] }
      ]
    };

    const options = {
      fullWidth: true,
      height: '300px',
      chartPadding: {
        right: 40,
        left: 20
      },
      plugins: [
        Chartist.plugins.legend({
          legendNames: ['PostgreSQL', 'MySQL', 'Other'],
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
          options={options}
          responsiveOptions={chartOptions.lineResponsiveOptions}/>
      </div>
    );
  }
}

export default Databases;
