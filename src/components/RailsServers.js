import React from 'react';
import ChartistGraph from 'react-chartist';
import ChartistPluginLegend from 'chartist-plugin-legend';


class OperatingSystems extends React.Component {
  render() {

    const data = {
      labels: ['2014', '2016', '2018'],
      series: [
        [17, 35, 49],
        [41, 34, 24],
        [36, 30, 25]
      ]
    };

    const options = {
      fullWidth: true,
      height: '300px',
      low: 0,
      chartPadding: {
        right: 60
      },
      plugins: [
        ChartistPluginLegend({
          legendNames: ['Puma', 'Unicorn', 'Passenger'],
          clickable: true,
        })
      ]
    };

    const type = 'Line';

    return (
      <div>
        <ChartistGraph
          data={data}
          type={type}
          options={options} />
      </div>
    );
  }
}

export default OperatingSystems;
