import React from 'react';
import ChartistGraph from 'react-chartist';

class Airbrake extends React.Component {
  render() {

    const data = {
      labels: ['2009', '2012', '2014', '2016', '2018'],
      series: [
        [36, 53, 28, 21, 11]
      ]
    };

    const options = {
      fullWidth: true,
      chartPadding: 40,
      height: '300px',
      low: 0,
    };

    const type = 'Line';

    return (
      <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    );
  }
}

export default Airbrake;
