import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';
import ChartistPluginLegend from 'chartist-plugin-legend';
import 'chartist-plugin-axistitle';

class OperatingSystems extends React.Component {
  render() {

    const data = {
      labels: ['2009', '2012', '2014', '2016', '2018'],
      series: [
        {'name': 'Windows', 'data': [7, 2, 2, 2, 1] },
        {'name': 'Mac', 'data': [68, 73, 76, 77, 76] },
        {'name': 'Linux', 'data': [25, 25, 26, 21, 23] }
      ]
    };

    const options = {
      fullWidth: true,
      chartPadding: {
        right: 60,
        top: 40,
      },
      plugins: [
        ChartistPluginLegend({
          clickable: true
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
          className={'ct-double-octave'}
          data={data}
          type={type}
          options={options} />
      </div>
    );
  }
}

export default OperatingSystems;
