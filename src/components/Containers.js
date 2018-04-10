import React from 'react';
import ChartistGraph from 'react-chartist';

class Containers extends React.Component {
  render() {
    const pieOptions = {
      donut: true,
      donutWidth: 20,
      startAngle: 270,
      total: 200,
      showLabel: false
    };


    const pieChartData = {
      series: [56, 44]
    };

    return (
      <div>
        <ChartistGraph 
          data={pieChartData}
          options={pieOptions}
          class='ct-chart1'
          type={'Pie'} />
        <p class="montserrat-lc small">of developers are using tools like Docker and Kubermetes now</p>
      </div>

    );
  }
}

export default Containers;
