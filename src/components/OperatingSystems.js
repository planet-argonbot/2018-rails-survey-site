import React from 'react';
import ChartistGraph from 'react-chartist';


class OperatingSystems extends React.Component {
  render() {

    const data = {
      labels: ['2009', '2012', '2014', '2016', '2018'],
      series: [
        [7, 2, 2, 2, 1],
        [68, 73, 76, 77, 76],
        [25, 25, 26, 21, 23]
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

export default OperatingSystems;
