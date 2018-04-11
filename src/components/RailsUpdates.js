import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';


class RailsUpdates extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 50,
      chartPadding: 5,
      donutSolid: true,
      showLabel: false,
      height: '300px',
      plugins: [
        Chartist.plugins.tooltip({
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
        ChartistPluginLegend()
      ]
    };

    const pieResponsiveOptions = [
      ['screen and (max-width: 544px)', {
        height: '200px',
        donutWidth: 20,
      }],

      ['screen and (min-width: 545px)', {
        height: '250px',
        donutWidth: 30,
      }]
    ];

    const releasesPieChartData = {
      labels: ['ALL: 13%', 'MOST: 37%', 'SOME: 35%', 'NONE: 13%'],
      series: [13, 37, 35, 13]
    };

    const notUpdatedPieChartData = {
      labels: ['TIME: 47%', 'BUDGET: 20%', 'DEPENDENCIES ON GEMS: 12%', 'MANAGEMENT: 10%', 'OTHER: 20%'],
      series: [47, 20, 12, 10, 20]
    };

    return (
      <div class="row margin-top-xl justify-content-center">
        <div class="col-lg-6 margin-top-md">
          <p class="h6">How many apps are kept updated to the most recent (Rails/Ruby) release?</p>
          <ChartistGraph
            className={'ct-custom-donut align-bottom'}
            data={releasesPieChartData}
            options={pieOptions}
            responsiveOptions={pieResponsiveOptions}
            type={'Pie'} />
        </div>
        <div class="col-lg-6 margin-top-md">
          <p class="h6">If not all, why not?</p>
          <ChartistGraph
            className={'ct-custom-donut align-bottom'}
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
