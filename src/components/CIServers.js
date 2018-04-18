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
