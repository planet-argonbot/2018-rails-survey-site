import React from 'react';
import ChartistGraph from 'react-chartist';

class RailsUpdates extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 20,
      donutSolid: true,
      labelOffset: 10,
      chartPadding: 20,
    };

    const pieResponsiveOptions = [
      ['screen and (min-width: 544px)', {
        labelOffset: 0,
        labelDirection: 'explode',
        fullWidth: true,
        height: '300px',
      }]
    ];

    const simplePieChartData = {
      labels: ['All', 'Most', 'Some', 'None'],
      series: [13, 37, 35, 13]
    };

    return (
      <div>
        <ChartistGraph data={simplePieChartData} options={pieOptions} responsiveOptions={pieResponsiveOptions} class='ct-chart1' type={'Pie'} />
      </div>
    );
  }
}

export default RailsUpdates;
