import React from 'react';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';
import chartOptions from '../helpers/ChartOptions';


class RailsUpdates extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      showLabel: false,
      donutWidth: 80,
      height: '300px',
      plugins: [
        ChartistPluginLegend({
          clickable: false
        }),
        Chartist.plugins.tooltip({
          appendToBody: false,
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        }),
      ]
    };

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
          options={pieOptions}
          responsiveOptions={chartOptions.pieResponsiveOptions}
          type={'Pie'} />
      </div>
    );
  }
}

export default RailsUpdates;
