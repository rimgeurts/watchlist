import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'
import '../../styles/layout/_grids.scss';
import '../../styles/components/_cards.scss';
import '../../styles/layout/_layout.scss';
import '../../styles/components/PortfolioDevelopmentChartTable.scss'



class PortfolioDevelopmentChartTable extends React.Component {

    render() {
        return (
            <div className="portfolio-development-table-wrapper">
                <div className="portfolio-development-table-wrapper__box portfolio-development-table-wrapper__box__a">Gross</div>
                <div className="portfolio-development-table-wrapper__box portfolio-development-table-wrapper__box__b">2.6bn</div>
                <div className="portfolio-development-table-wrapper__box portfolio-development-table-wrapper__box__c">0.7bn</div>
                <div className="portfolio-development-table-wrapper__box portfolio-development-table-wrapper__box__d">0.3bn</div>
                <div className="portfolio-development-table-wrapper__box portfolio-development-table-wrapper__box__e">0.3bn</div>
            </div>
        )
    }
}

export default PortfolioDevelopmentChartTable;