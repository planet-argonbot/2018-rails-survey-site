import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';

class CIServers extends React.Component {
  render() {

    const data = {
      labels: [
        'CIRCLE CI',
        'JENKINS',
        'TRAVIS',
        'NONE',
        'GITLAB',
        'CODESHIP',
        'OTHER'
      ],
      series: [
        {
          className: 'ct-series-a',
          data: [21, 17, 15, 13, 10, 8, 16]
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
          type={'Bar'} />
      </div>
    );
  }
}

export default CIServers;
