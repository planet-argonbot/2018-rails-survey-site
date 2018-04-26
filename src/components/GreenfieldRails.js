import React from 'react';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';

class GreenfieldRails extends React.Component {
  render() {

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
          data={pieChartData}
          options={chartOptions.pieOptions}
          responsiveOptions={chartOptions.pieResponsiveOptions}
          type={'Pie'} />
      </div>
    );
  }
}

export default GreenfieldRails;
