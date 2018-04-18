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
          className: 'ct-series-e',
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
          appendToBody: true,
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

    const responsiveOptions = [
      ['screen and (max-width: 992px)', {
        seriesBarDistance: 10,
      }
      ],
      ['screen and (max-width: 600px)', {
        height: '250px',
      }
      ]

    ];

    return (
      <div>
        <ChartistGraph
          data={data}
          options={options}
          responsiveOptions={responsiveOptions}
          type={'Bar'} />
      </div>
    );
  }
}

export default CIServers;
