import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';

class CIServers extends React.Component {
  render() {

    const data = {
      labels: [
        'CIRCLE CI',
        'JENKINS',
        'TRAVIS CI',
        'NONE',
        'GITLAB',
        'CODESHIP',
        'OTHER'
      ],
      series: [
        {
          className: 'ct-series-e',
          data: [
            {'meta': 'CIRCLE CI', 'value': 21},
            {'meta': 'JENKINS', 'value': 17},
            {'meta': 'TRAVIS CI', 'value': 15},
            {'meta': 'NONE', 'value': 13},
            {'meta': 'GITLAB', 'value': 10},
            {'meta': 'CODESHIP', 'value': 8},
            {'meta': 'OTHER', 'value': 16},
          ]
        },
      ]
    };

    const options = {
      fullWidth: true,
      chartPadding: {
        left: 10,
        top: 20,
        right: 10,
        bottom: 10,
      },
      height: 300,
      high: 50,
      low: 0,
      axisY: {
        onlyInteger: true,
      },
      plugins: [
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
            flipTitle: false,
          }
        })
      ]
    };


    return (
      <div>
        <ChartistGraph
          data={data}
          options={options}
          responsiveOptions={chartOptions.barResponsiveOptions}
          type={'Bar'} />
      </div>
    );
  }
}

export default CIServers;
