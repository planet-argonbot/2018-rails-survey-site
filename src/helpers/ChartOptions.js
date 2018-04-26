import Chartist from 'chartist';
import 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';
import 'chartist-plugin-axistitle';

// BREAKPOINTS
const breakpoints = {
  xsScreen: '576',
  smScreen: '768',
  mdScreen: '992',
  lgScreen: '1200'
};

const chartOptions = {
  pieOptions: {
    donut: true,
    showLabel: false,
    donutWidth: 80,
    height: '300px',
    plugins: [
      Chartist.plugins.legend({
        clickable: false
      }),
      Chartist.plugins.tooltip({
        appendToBody: false,
        transformTooltipTextFnc: function(value) {
          return value + '%';
        }
      }),
    ]
  },
  pieResponsiveOptions: [
    [`screen and (max-width: ${breakpoints.xsScreen}px)`, {
      height: '200px',
      donutWidth: 50,
    }],
    [`screen and (min-width: ${breakpoints.xsScreen}px) and (max-width: ${breakpoints.smScreen}px)`, {
      height: '250px',
      donutWidth: 60,
    }]
  ],
  gaugeOptions: {
    donut: true,
    donutWidth: 50,
    startAngle: 270,
    total: 200,
    showLabel: false,
    height: '300px',
    plugins: [
      Chartist.plugins.tooltip({
        appendToBody: false,
        transformTooltipTextFnc: function(value) {
          return value + '%';
        }
      }),
    ]
  },
  gaugeResponsiveOptions: [
    [`screen and (max-width: ${breakpoints.xsScreen}px)`, {
      height: '200px',
      donutWidth: 20,
    }],
    [`screen and (min-width: ${breakpoints.xsScreen}px) and (max-width: ${breakpoints.smScreen}px)`, {
      height: '250px',
      donutWidth: 40,
    }]
  ],
  barResponsiveOptions: [
    [`screen and (max-width: ${breakpoints.xsScreen}px)`, {
      height: '250px',
    }],
    [`screen and (max-width: ${breakpoints.mdScreen}px)`, {
      seriesBarDistance: 10,
    }],
  ],
  lineResponsiveOptions: [
    [`screen and (max-width: ${breakpoints.smScreen}px)`, {
      height: '250px',
      chartPadding: {
        left: 20,
        right: 30,
      },
    }],
  ]

};

export default chartOptions;
