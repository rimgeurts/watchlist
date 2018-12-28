import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const current = 100;
const increase = 30;
const decrease = 50;
const previous = 80;

const data = [
  ['Labels', 
      'Current', { role: 'annotation', role:'style' }, 
      'Increase', { role: 'annotation', role:'style' }, 
      'Decrease', { role: 'annotation', role:'style' },
      'Previous', { role: 'annotation', role:'style' },
      {role: 'annotation'}, {role:'style'} 
  ],
  
  ['Oct-2018', current,'opacity: 1',		0,'opacity: 0', 	0,'opacity: 0', 	0,'opacity: 0',   current/100 + 'bn', 'fill-color: #63A74A'],
  ['Increase',current,'opacity: 0', 	increase,'opacity: 1', 	0,'opacity: 0', 	0,'opacity: 0',   increase/100 + 'bn', 'fill-color: #63A74A'],
  ['Decrease', (current + increase) - decrease ,'opacity: 0', 0,'opacity: 0', 	decrease,'opacity: 1', 	0,'opacity: 0',   decrease/100 + 'bn', 'fill-color: #63A74A'],
  ['Sep-2018', 0,'opacity: 0',		0,'opacity: 0', 	0,'opacity: 0', 	previous,'opacity: 1',   previous/100 + 'bn', 'fill-color: #63A74A'],
];


const options = {
  
  legend: 'none',

  annotations: {
    alwaysOutside: true,
    textStyle: {
      // bold: true,
      // The color of the text.
      color: 'black',
      fontSize: 8
    },
    stem: {
      color: 'none',
      length: 2
    }
  },
  isStacked: true,
  chartArea:{left:30,top:0,width:"100%", height:"85%"},
  tooltip : {trigger: 'none'},
  bar: { groupWidth: "80%" },
  backgroundColor: { fill:'transparent' },
  baselineColor: 'grey',
  
  hAxis : { 
    textStyle : {
        fontSize: 8 // or the number you want
    }
  },

  series: {
    0: {
      color: 'royalblue'
    },
    1: {
      color: '#357a38'
      },
    2: {
      color: '#b71c1c'
      },
    3: {
      color: 'grey',
      }
  },
  animation: {
    startup: true,
    easing: "linear",
    duration: 501
  },

  vAxis: {
    ticks: [],
    viewWindow: {
      min: 0,
      max: 160,
    }
  }
};

class PortfolioDevelopmentChart extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="ColumnChart"
          width="245px"
          height="117px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default PortfolioDevelopmentChart;
