import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import '../../styles/components/TenorProfileChart.scss'


const tenorBracket1 = 100;
const tenorBracket2 = 30;
const tenorBracket3 = 40;
const tenorBracket4 = 50;

const data = [
  ['Labels', 
      '<1Y', { role: 'annotation', role:'style' }, 
      '1-5Y', { role: 'annotation', role:'style' }, 
      '5-10Y', { role: 'annotation', role:'style' },
      '>10Y', { role: 'annotation', role:'style' },
      {role: 'annotation'}, {role:'style'} 
  ],
  
  ['<1Y', tenorBracket1,'opacity: 1',		0,'opacity: 0', 	0,'opacity: 0', 	0,'opacity: 0',   tenorBracket1/100 + 'bn', 'fill-color: #63A74A'],
  ['1-5Y',tenorBracket1,'opacity: 0', 	tenorBracket2,'opacity: 1', 	0,'opacity: 0', 	0,'opacity: 0',   tenorBracket2/100 + 'bn', 'fill-color: #63A74A'],
  ['5-10Y', tenorBracket1 + tenorBracket2 ,'opacity: 0', 0,'opacity: 0', 	tenorBracket3,'opacity: 1', 	0,'opacity: 0',   tenorBracket3/100 + 'bn', 'fill-color: #63A74A'],
  ['>10Y', tenorBracket1 + tenorBracket2 + tenorBracket3,'opacity: 0',		0,'opacity: 0', 	0,'opacity: 0', 	tenorBracket4,'opacity: 1',   tenorBracket4/100 + 'bn', 'fill-color: #63A74A'],
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
  chartArea:{left:30,top:20,width:"100%", height:"70%"},
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
      color: 'royalblue'
      },
    2: {
      color: 'royalblue'
      },
    3: {
      color: 'royalblue'
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
      max: 260,
    }
  }
};

class TenorProfileChart extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="arrow-container">
          <div className="text-container">
            <div className="arrow-text-1">
                  <span className="arrow-text-1__current">80% </span> 
                  <span className="arrow-text-1__previous"> (82.5%)</span>             
            </div>
            <div className="arrow-text-2">
                  <span className="arrow-text-2__current">80% </span> 
                  <span className="arrow-text-2__previous"> (82.5%)</span>            
            </div>
          </div>
          <div className="arrow1">
            <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="15px">
              <defs>
                <marker id="startarrow" markerWidth="10" markerHeight="7" 
                    refX="10" refY="3.5" orient="auto">
                  <polygon points="10 0, 10 7, 0 3.5" fill="grey" />
                </marker>
                <marker id="endarrow" markerWidth="10" markerHeight="7" 
                    refX="0" refY="3.5" orient="auto" markerUnits="strokeWidth">
                  <polygon points="0 0, 10 3.5, 0 7" fill="grey" />
                </marker>
              </defs>
              <line x1="10" y1="10" x2="90" y2="10" stroke="grey" strokeWidth="1" 
                  markerEnd="url(#endarrow)" markerStart="url(#startarrow)" />
            </svg>  
          </div>

          <div className="arrow2">
            <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="15px">
              <defs>
                <marker id="startarrow" markerWidth="10" markerHeight="7" 
                    refX="10" refY="3.5" orient="auto">
                  <polygon points="10 0, 10 7, 0 3.5" fill="grey" />
                </marker>
                <marker id="endarrow" markerWidth="10" markerHeight="7" 
                    refX="0" refY="3.5" orient="auto" markerUnits="strokeWidth">
                  <polygon points="0 0, 10 3.5, 0 7" fill="grey" />
                </marker>
              </defs>
              <line x1="10" y1="10" x2="90" y2="10" stroke="grey" strokeWidth="1" 
                  markerEnd="url(#endarrow)" markerStart="url(#startarrow)" />
            </svg>  
          </div>
        </div>

        <Chart
          chartType="ColumnChart"
          width="245px"
          height="115px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default TenorProfileChart;
