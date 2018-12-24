import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

// Ref : https://developers.google.com/chart/interactive/docs/gallery/candlestickchart#Waterfall
const data = [
  ["Day", "", "", "", "", {
    role: 'annotation', 
    type: 'string',
    calc: 'stringify' }],
  ["28-Sep-2018", 0, 0, 38, 38, "ddd"],
  ["Increase", 38, 38, 55, 55, "sdds"],
  ["Decrease", 55, 55, 29, 29, "dssd"],
  ["31-Oct-2018", 0, 0, 29, 29, "sdsd"]
];

const options = {
  legend: "none",
  bar: { groupWidth: "80%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "royalblue" } // green
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
  animation: {
    startup: true,
    easing: "linear",
    duration: 501
  },
  chartArea:{left:1,top:0,width:"100%"},
  backgroundColor: { fill:'transparent' },
  tooltip : {trigger: 'none'}
};
class Waterfall extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="CandlestickChart"
          width="261px"
          height="220px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default Waterfall;
