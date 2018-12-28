import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'
import '../../styles/layout/_grids.scss';
import '../../styles/components/_cards.scss';
import '../../styles/layout/_layout.scss';
import '../../styles/components/TenorProfileChartTable.scss'


class TenorProfileChartTable extends React.Component {

    render() {
        return (
            <div className="tenor-profile-table-wrapper">
                <div className="tenor-profile-table-wrapper__box tenor-profile-table-wrapper__box__a">Prev.</div>
                <div className="tenor-profile-table-wrapper__box tenor-profile-table-wrapper__box__b">2.6bn</div>
                <div className="tenor-profile-table-wrapper__box tenor-profile-table-wrapper__box__c">0.7bn</div>
                <div className="tenor-profile-table-wrapper__box tenor-profile-table-wrapper__box__d">0.3bn</div>
                <div className="tenor-profile-table-wrapper__box tenor-profile-table-wrapper__box__e">0.3bn</div>
            </div>
        )
    }
}

export default TenorProfileChartTable;