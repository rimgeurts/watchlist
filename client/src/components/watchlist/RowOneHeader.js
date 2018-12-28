import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'
import '../../styles/layout/_grids.scss';
import '../../styles/components/_cards.scss';
import '../../styles/components/RowOneHeader.scss'

const previousMonth = '31-Oct-2018'
class RowOneHeader extends React.Component {
    render() {
        return (
                <div className="container-8-columns">
                    <div className="item item--1">
                    <div className="card">
                        <div className="card__side card__side--front-y">
                            <div className="card card__header"> Net Limit </div>
                            <div className="row-one row-one__current"> 2.6bn </div>
                            <div className="row-one row-one__previous-month">vs {previousMonth}</div>
                            <div className="row-one row-one__alert--red">&#916; +320m	(7.0%) </div>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--2">
                            <div className="card">
                        <div className="card__side card__side--front-y">
                            <div className="card card__header"> Top 10 Entities </div>
                            <div className="row-one row-one__current"> 39% </div>
                            <div className="row-one row-one__previous-month">vs {previousMonth}</div>
                            <div className="row-one row-one__alert--no-alert">&#916; 12.4pp </div>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--3">
                            <div className="card">
                        <div className="card__side card__side--front-y">
                            <div className="card card__header"> Credit RWA </div>
                            <div className="row-one row-one__current"> 1.6bn </div>
                            <div className="row-one row-one__previous-month">vs {previousMonth}</div>
                            <div className="row-one row-one__alert--green">&#916; +162m (9.8%)</div>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--4">
                            <div className="card">
                        <div className="card__side card__side--front-y">
                        <div className="card card__header"> CLA </div>
                            <div className="row-one row-one__current"> 12.4bn </div>
                            <div className="row-one row-one__previous-month">vs {previousMonth}</div>
                            <div className="row-one row-one__alert--no-alert">&#916; +16m (-28%)</div>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--5">
                            <div className="card">
                        <div className="card__side card__side--front-y">
                        <div className="card card__header"> Expected Loss </div>
                            <div className="row-one row-one__current"> 43.4m </div>
                            <div className="row-one row-one__previous-month">vs {previousMonth}</div>
                            <div className="row-one row-one__alert--red">&#916; -19.3m (18%)</div>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--6">      
                            <div className="card">
                        <div className="card__side card__side--front-y">
                        <div className="card card__header"> CLA Coverage</div>
                            <div className="row-one row-one__current"> N/A</div>
                            <div className="row-one row-one__previous-month">vs {previousMonth}</div>
                            <div className="row-one row-one__alert--amber">&#916; n/a </div>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--7">
                            <div className="card">
                        <div className="card__side card__side--front-y">
                        <div className="card card__header"> Up / Downgrade</div>
                            <div className="row-one row-one__up-downgrade">
                                <div className="row-one row-one__up-downgrade__item">
                                <div className="row-one row-one__current"> 2.3x </div>
                                <div className="row-one row-one__previous-month">Net Limit</div>
                                </div>
                                <div className="row-one row-one__up-downgrade__item">
                                <div className="row-one row-one__current"> 1.2x</div>
                                <div className="row-one row-one__previous-month">Entities</div>
                                </div>    
                            </div>
                            <div className="row-one row-one__alert--green">&#916; n/a </div>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--8">
                            <div className="card">
                        <div className="card__side card__side--front-y">
                            <div className="card card__header"> WL Share </div>
                                <div className="row-one row-one__current"> 12% </div>
                                <div className="row-one row-one__previous-month">vs {previousMonth}</div>
                                <div className="row-one row-one__alert--red">&#916; +3.6pp</div>
                            </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}

export default RowOneHeader;