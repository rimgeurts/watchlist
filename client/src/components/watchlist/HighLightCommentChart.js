import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";


const data = [
  ["Type",            "29-Sep-218",  { role: 'annotation'},     { role: 'style' },                                      "31-Oct-2018",                            { role: 'annotation'},  { role: 'style' } ],
  ["Gross Limit",       1000,               '1.00bn',           'stroke-width: 1.5;stroke-color: royalblue;',                      400,              '0.40bn', 'stroke-width: 1.5;stroke-color: grey;'],
  ["Net Limit",         1170,               '1.17bn',           'stroke-width: 1.5;stroke-color: royalblue;',                      460,	              '0.46bn', 'stroke-width: 1.5;stroke-color: grey;'],
  ["Net Utilisation",   660,                '0.66bn',           'stroke-width: 1.5;stroke-color: royalblue;',                     1120,	            '1.12bn', 'stroke-width: 1.5;stroke-color: grey;']
];


const options = {
  legend: 'none',
  baselineColor: 'grey',
  annotations: {
    alwaysOutside: true,
    highContrast: true,  // default is true, but be sure
    textStyle: {
      bold: false,
      color: 'grey',
      fontSize: 8
    }},
  bar: { groupWidth: "75%" },
  backgroundColor: { fill:'transparent' },
  
  hAxis: {
    //textPosition: 'none',
    textStyle : {
        fontSize: 8
    },
  },
  
  series: {
    0: {
      color: 'royalblue',
      annotations: {
        stem: {
          color: 'none',
          length: 2
        },
        textStyle: {
          color: 'black'
        }
      }
    },
    1: {
      color: 'grey',
      annotations: {
        stem: {
          color: 'none',
          length: 2
        },
        textStyle: {
          color: 'grey'
        }
      }
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
      max: 1350,
    }
  },
  chartArea:{left:20,top:10,width:"90%", height:"90%"},
  tooltip : {trigger: 'none'}
};

class HighLightCommentChart extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="ColumnChart"
          width="400px"
          height="92px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default HighLightCommentChart;
