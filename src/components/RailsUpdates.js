import React from 'react';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';

class RailsUpdates extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 60,
      donutSolid: true,
      showLabel: false,
      chartPadding: 20,
      height: '400px',
      plugins: [
        ChartistPluginLegend()
      ]
    };

    const pieResponsiveOptions = [
      ['screen and (max-width: 544px)', {
        height: '300px',
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
      <div class="row margin-top-xl justify-content-center">
        <div class="col-md-6">
          <p class="h6">How many apps are kept updated to the most recent (Rails/Ruby) release?</p>
          <ChartistGraph
            className={'ct-custom-donut'}
            data={releasesPieChartData}
            options={pieOptions}
            responsiveOptions={pieResponsiveOptions}
            type={'Pie'} />
        </div>
        <div class="col-md-6">
          <p class="h6">If not all, why not?</p>
          <ChartistGraph
            className={'ct-custom-donut'}
            data={notUpdatedPieChartData}
            options={pieOptions}
            responsiveOptions={pieResponsiveOptions}
            type={'Pie'} />
        </div>
      </div>
    );
  }
}

export default RailsUpdates;
