import React from 'react';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';

class RailsUpdates extends React.Component {
  render() {

    const releasesPieChartData = {
      labels: [
        'ALL: 13%',
        'MOST: 38%',
        'SOME: 35%',
        'NONE: 14%'
      ],
      series: [
        {meta: 'ALL', value: 13},
        {meta: 'MOST', value: 38},
        {meta: 'SOME', value: 35},
        {meta: 'NONE', value: 14}
      ]
    };

    return (
      <div>
        <ChartistGraph
          data={releasesPieChartData}
          options={chartOptions.pieOptions}
          responsiveOptions={chartOptions.pieResponsiveOptions}
          type={'Pie'} />
      </div>
    );
  }
}

export default RailsUpdates;
