import React from 'react';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';

class GreenfieldRails extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 50,
      chartPadding: 5,
      donutSolid: true,
      showLabel: false,
      height: '300px',
      plugins: [
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

    const pieChartData = {
      labels: ['ASSET PIPELINE', 'YARN/WEBPACK', 'OTHER'],
      series: [55.5, 44.5, 2]
    };

    return (
      <div class="row margin-top-xl justify-content-center">
        <div class="col-lg-10 margin-top-md">
          <p class="h6">For greenfield Rails projects, what are you using to manage Javascript libraries?</p>
          <ChartistGraph
            className={'ct-custom-donut'}
            data={pieChartData}
            options={pieOptions}
            responsiveOptions={pieResponsiveOptions}
            type={'Pie'} />
        </div>
      </div>
    );
  }
}

export default GreenfieldRails;
