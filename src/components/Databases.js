import React from 'react';
import ChartistGraph from 'react-chartist';


class Databases extends React.Component {
  render() {

    const data = {
      labels: ['2009', '2012', '2014', '2016', '2018'],
      series: [
        [28, 62, 72, 84, 85],
        [64, 31, 22, 14, 12],
        [8, 7, 6, 2, 3]
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

export default Databases;
