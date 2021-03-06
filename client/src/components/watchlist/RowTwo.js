import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'
import '../../styles/layout/_grids.scss';
import '../../styles/components/_cards.scss';
import '../../styles/layout/_layout.scss';
import Waterfall from './Waterfall';
import HighLightCommentChart from './HighLightCommentChart';
import HighLightCommentChartTable from './HighLightCommentChartTable';
import HighlightCommentsTable from './HighlightCommentsTable'


class RowTwo extends React.Component {

    render() {
        return (
                <div className="container-2-columns">
                    <div className="item item--1">
                        <div className="card">
                            <div className="card__side card__side--size-large card__side--front-x">
                                 <p className="card card__header">Highlight Comments</p>    
                                 <HighlightCommentsTable />                               
                            </div>
                            <div className="card__side card__side--size-large card__side--back card__side--back-x">
                                Back
                            </div>
                        </div>
                    </div>
                    <div className="item item--1">
                        <div className="card">
                            <div className="card__side card__side--size-large card__side--front-x">
                                    <p className="card card__header">Sovereign / Sub-sovereign</p>                                   
                                    <HighLightCommentChart /> 
                                    <HighLightCommentChartTable /> 
                            </div>
                            <div className="card__side card__side--size-large card__side--back card__side--back-x">
                                Back
                            </div>
                        </div>
                    </div>
                
                </div>
        )
    }
}

export default RowTwo;