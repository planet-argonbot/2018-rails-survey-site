import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';


class NotUpdated extends React.Component {
  render() {

    const data = {
      labels: [
        'TIME',
        'BUDGET',
        'GEM DEPENDENCIES',
        'MANAGEMENT',
        'OTHER'],
      series: [
        {
          className: 'ct-series-a',
          data: [
            {'meta': 'TIME', 'value': 46},
            {'meta': 'BUDGET', 'value': 19},
            {'meta': 'GEM DEPENDENCIES', 'value': 16},
            {'meta': 'MANAGEMENT', 'value': 15},
            {'meta': 'OTHER', 'value': 3}
          ]
        }
      ]
    };


    const options = {
      fullWidth: true,
      chartPadding: {
        left: 10,
        top: 10,
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
      ['screen and (max-width: 544px)', {
        seriesBarDistance: 10,
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

export default NotUpdated;
