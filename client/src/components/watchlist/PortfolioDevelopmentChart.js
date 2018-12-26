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
  
  ['Current', current,'opacity: 1',		0,'opacity: 0', 	0,'opacity: 0', 	0,'opacity: 0',   current/100 + 'bn', 'fill-color: #63A74A'],
  ['Increase',current,'opacity: 0', 	increase,'opacity: 1', 	0,'opacity: 0', 	0,'opacity: 0',   increase/100 + 'bn', 'fill-color: #63A74A'],
  ['Decrease', (current + increase) - decrease ,'opacity: 0', 		0,'opacity: 1', 	decrease,'opacity: 1', 	0,'opacity: 0',   decrease/100 + 'bn', 'fill-color: #63A74A'],
  ['Previous', previous,'opacity: 1',		0,'opacity: 0', 	0,'opacity: 0', 	0,'opacity: 1',   previous/100 + 'bn', 'fill-color: #63A74A'],
];


const options = {
  
  legend: 'none',

  annotations: {
    textStyle: {
      // bold: true,
      // The color of the text.
      color: 'black',
      fontSize: 7
    },
    stem: {
      color: 'none',
      length: 2
    }
  },
  isStacked: true,
  chartArea:{left:10,top:0,width:"90%", height:"90%"},
  tooltip : {trigger: 'none'},
  bar: { groupWidth: "80%" },
  backgroundColor: { fill:'transparent' },
  baselineColor: 'none',
  
  hAxis: {
    //textPosition: 'none',
    textStyle : {
        fontSize: 7
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
  },
};

class PortfolioDevelopmentChart extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="ColumnChart"
          width="270px"
          height="129px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default PortfolioDevelopmentChart;
