import React from 'react';
import ChartistGraph from 'react-chartist';


class RailsServers extends React.Component {
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
      width: '500px',
    };

    const type = 'Line';

    return (
      <div>
        <ChartistGraph data={data} type={type} options={options} />
      </div>
    );
  }
}

export default RailsServers;
