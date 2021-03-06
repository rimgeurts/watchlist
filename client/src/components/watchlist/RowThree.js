import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'
import '../../styles/layout/_grids.scss';
import '../../styles/components/_cards.scss';
import '../../styles/layout/_layout.scss';
import PortfolioDevelopmentChart from './PortfolioDevelopmentChart';
import PortfolioDevelopmentChartTable from './PortfolioDevelopmentChartTable';
import '../../styles/components/PortfolioDevelopmentChartTable.scss';
import TenorProfileChart from './TenorProfileChart';
import TenorProfileChartTable from './TenorProfileChartTable';
import TopEntitiesTable from './TopEntitiesTable';


class RowThree extends React.Component {

    render() {
        return (
                <div className="container-3-columns">
                    <div className="item item--1">
                        <div className="card">
                            <div className="card__side card__side--size-large card__side--front-x">
                                 <p className="card card__header">Portfolio Development (Net Limits)</p>                                   
                                 <PortfolioDevelopmentChart /> 
                                 <PortfolioDevelopmentChartTable />
                            </div>
                            <div className="card__side card__side--size-large card__side--back card__side--back-x">
                                Back
                            </div>
                        </div>
                    </div>
                    <div className="item item--1">
                        <div className="card">
                            <div className="card__side card__side--size-large card__side--front-x">
                                    <p className="card card__header">Tenor Profile (Gross Limits)</p>                                   
                                    <TenorProfileChart /> 
                                    <TenorProfileChartTable />

                            </div>
                            <div className="card__side card__side--size-large card__side--back card__side--back-x">
                                Back
                            </div>
                        </div>
                    </div>
                    <div className="item item--1">
                        <div className="card">
                            <div className="card__side card__side--size-large card__side--front-x">
                                <div className="header">
                                    <p className="card card__header"> Top Entities </p>
                                    <TopEntitiesTable />
                                </div>
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

export default RowThree;