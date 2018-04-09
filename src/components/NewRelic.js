import React from 'react';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';


class NewRelic extends React.Component {
  render() {

    const data = {
      labels: ['2009', '2012', '2014', '2016', '2018'],
      series: [
        [0, 2, 5, 21, 20],
        [73, 95, 97, 78, 46],
        [0, 3, 6, 3, 33]
      ]
    };

    const options = {
      fullWidth: true,
      chartPadding: 40,
      height: '300px',
      low: 0,
      plugins: [
        ChartistPluginLegend({
          clickable: true,
          legendNames: ['Application Exception', 'Performance Monitoring', 'Uptime Monitoring'],
        })
      ]
    };

    const type = 'Line';

    return (
      <div>
        <ChartistGraph data={data} type={type} options={options} />
      </div>
    );
  }
}

export default NewRelic;
