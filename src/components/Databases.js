import React from 'react';
import ChartistGraph from 'react-chartist';
import chartOptions from '../helpers/ChartOptions';

class Databases extends React.Component {
  render() {

    const data = {
      labels: ['2009', '2012', '2014', '2016', '2018'],
      series: [
        {'name': 'PostgreSQL', 'data': [28, 62, 72, 84, 85] },
        {'name': 'MySQL', 'data': [64, 31, 22, 14, 12] },
        {'name': 'Other', 'data': [8, 7, 6, 2, 3] }
      ]
    };

    return (
      <div>
        <ChartistGraph
          data={data}
          options={chartOptions.lineOptions}
          responsiveOptions={chartOptions.lineResponsiveOptions}
          type={'Line'} />
      </div>
    );
  }
}

export default Databases;
