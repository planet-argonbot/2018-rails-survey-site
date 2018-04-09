import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import 'chartist-plugin-tooltips';
import ChartistPluginLegend from 'chartist-plugin-legend';

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
      width: '80%',
      chartPadding: 20,
      plugins: [
        ChartistPluginLegend({
          clickable: true
        }),
        Chartist.plugins.tooltip({
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        })
      ]
    };

    const type = 'Line';

    return (
      <div>
        <ChartistGraph className={'ct-double-octave'} data={data} type={type} options={options} />
      </div>
    );
  }
}

export default OperatingSystems;
