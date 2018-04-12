import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';


class RailsUpdates extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      showLabel: false,
      donutWidth: 60,
      height: '300px',
      plugins: [
        ChartistPluginLegend(),
        Chartist.plugins.tooltip({
          appendToBody: true,
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
      ]
    };

    const pieResponsiveOptions = [
      ['screen and (max-width: 498px)', {
        height: '200px',
        donutWidth: 20,
      }],
      ['screen and (min-width: 499px) and (max-width: 768px)', {
        height: '250px',
        donutWidth: 40,
      }]
    ];

    const releasesPieChartData = {
      labels: [
        'ALL: 13%',
        'MOST: 37%',
        'SOME: 35%',
        'NONE: 13%'
      ],
      series: [
        {meta: 'ALL', value: 13},
        {meta: 'MOST', value: 37},
        {meta: 'SOME', value: 35},
        {meta: 'NONE', value: 13}
      ]
    };

    const notUpdatedPieChartData = {
      labels: [
        'TIME: 47%',
        'BUDGET: 20%',
        'GEM DEPENDENCIES: 12%',
        'MANAGEMENT: 10%',
        'OTHER: 20%'],
      series: [
        {meta: 'TIME', value: 47},
        {meta: 'BUDGET', value: 20},
        {meta: 'GEM DEPENDENCIES', value: 12},
        {meta: 'MANAGEMENT', value: 10},
        {meta: 'OTHER', value: 20}
      ]
    };

    return (
      <div class="row margin-top-xl justify-content-center">
        <div class="col-lg-6 margin-top-md">
          <p class="h6">How many apps are kept updated to the most recent (Rails/Ruby) release?</p>
          <ChartistGraph
            data={releasesPieChartData}
            options={pieOptions}
            responsiveOptions={pieResponsiveOptions}
            type={'Pie'} />
        </div>
        <div class="col-lg-6 margin-top-md">
          <p class="h6">If not all, why not?</p>
          <br/>
          <ChartistGraph
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
