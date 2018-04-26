import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';

class GreenfieldRails extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      showLabel: false,
      donutWidth: 80,
      height: '300px',
      plugins: [
        Chartist.plugins.tooltip({
          appendToBody: false,
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
        Chartist.plugins.legend({
          clickable: false
        }),
      ]
    };


    const pieChartData = {
      labels: [
        'ASSET PIPELINE: 55%',
        'YARN/WEBPACK: 44%',
        'OTHER: 2%'
      ],
      series: [
        {meta: 'ASSET PIPELINE', value: 55},
        {meta: 'YARN/WEBPACK', value: 44},
        {meta: 'OTHER', value: 2},
      ]
    };

    return (
      <div>
        <ChartistGraph
          className={'ct-custom-donut'}
          responsiveOptions={chartOptions.pieResponsiveOptions}
          data={pieChartData}
          options={pieOptions}
          type={'Pie'} />
      </div>
    );
  }
}

export default GreenfieldRails;
