// BREAKPOINTS
const breakpoints = {
  xsScreen: '576',
  smScreen: '768',
  mdScreen: '992',
  lgScreen: '1200'
};


const chartOptions = {
  pieResponsiveOptions: [
    [`screen and (max-width: ${breakpoints.xsScreen}px)`, {
      height: '200px',
      donutWidth: 50,
    }],
    [`screen and (min-width: ${breakpoints.xsScreen}px) and (max-width: ${breakpoints.smScreen}px)`, {
      height: '250px',
      donutWidth: 60,
    }]
  ]

};

export default chartOptions;
