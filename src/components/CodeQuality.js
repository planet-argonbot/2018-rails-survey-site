import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';

class CodeQuality extends React.Component {
  render() {

    const data = {
      labels: [
        'RUBOCOP',
        'SIMPLECOV',
        'CODE CLIMATE',
        'RUBYCRITIC',
        'COVERALLS',
        'OTHER',
      ],
      series: [
        {
          className: 'ct-series-c',
          data: [49, 25, 17, 4, 3, 2]
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

export default CodeQuality;
