import React from 'react';
import ChartistGraph from 'react-chartist';

class RailsUpdates extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 60,
      donutSolid: true,
      labelOffset: 10,
      chartPadding: 20,
    };

    const pieResponsiveOptions = [
      ['screen and (min-width: 544px)', {
        labelOffset: 0,
        labelDirection: 'explode',
        fullWidth: true,
        height: '400px',
      }]
    ];

    const releasesPieChartData = {
      labels: ['ALL', 'MOST', 'SOME', 'NONE'],
      series: [13, 37, 35, 13]
    };

    const notUpdatedPieChartData = {
      labels: ['TIME', 'BUDGET', 'DEPENDENCIES ON GEMS', 'MANAGEMENT', 'OTHER'],
      series: [47, 20, 12, 10, 20]
    };

    return (
      <div class="row">
        <div class="col">
          <p class="h6">How many apps are kept updated to the most recent (Rails/Ruby) release?</p>
          <ChartistGraph data={releasesPieChartData} options={pieOptions} responsiveOptions={pieResponsiveOptions} class='ct-chart1' type={'Pie'} />
        </div>
        <div class="col">
          <p class="h6">If not all, why not?</p>
          <ChartistGraph data={notUpdatedPieChartData} options={pieOptions} responsiveOptions={pieResponsiveOptions} class='ct-chart2' type={'Pie'} />
        </div>
      </div>
    );
  }
}

export default RailsUpdates;
