import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/candlestickchart#Waterfall
var dataold = [
  ['Year', 'Sales', 'Expenses'],
  ['2004',  1000,      400],
  ['2005',  1170,      460],
  ['2006',  660,       1120],
  ['2007',  1030,      540]
];

const data = [
  ["Type",            "29-Sep-218",  { role: 'annotation'},         "31-Oct-2018", { role: 'annotation'}],
  ["Gross Limit",       1000,               '1.00bn',                      400,              '0.40bn'],
  ["Net Limit",         1170,               '1.17bn',                      460,	              '0.46bn'],
  ["Net Utilisation",   660,                '0.66bn',                      1120,	            '1.12bn']
];


const options = {
  annotations: {
    alwaysOutside: true,
    highContrast: true,  // default is true, but be sure
    textStyle: {
      bold: false,
      color: 'grey',
      fontSize: 7
    }},
  bar: { groupWidth: "80%" },
  backgroundColor: { fill:'transparent' },
  series: [ {color: 'royalblue'}, {color: 'gray'} ], //{ 1: {color: 'grey'} },

  series: {
    0: {
      color: 'royalblue',
      annotations: {
        stem: {
          color: 'black',
          length: 5
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
          color: 'grey',
          length: 5
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
  hAxis: {
    textStyle : {
        fontSize: 7
    },
    ticks: []
  },
  vAxis: {
    ticks: []
  },
  chartArea:{left:1,top:0,width:"100%"},
  tooltip : {trigger: 'none'}
};
class BarChart extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="220px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default BarChart;
