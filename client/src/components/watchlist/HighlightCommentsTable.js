import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'
import '../../styles/layout/_grids.scss';
import '../../styles/components/_cards.scss';
import '../../styles/layout/_layout.scss';
import '../../styles/components/TopEntitiesTable.scss'



class HighlightCommentTable extends React.Component {

    render() {
        return (
            <div className="top-entities-table-wrapper">
                <div className="top-entities-table-wrapper__header">Top Entities</div>
                <div className="top-entities-table-wrapper__header">Net Limit</div>
                <div className="top-entities-table-wrapper__header">Net Util</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__heading">Company A</div>
                <div className="top-entities-table-wrapper__box">202bn</div>
                <div className="top-entities-table-wrapper__box">103m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__heading">Company B</div>
                <div className="top-entities-table-wrapper__box">25m</div>
                <div className="top-entities-table-wrapper__box">55m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__heading">Company C</div>
                <div className="top-entities-table-wrapper__box">64m</div>
                <div className="top-entities-table-wrapper__box">10m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__heading">Company C</div>
                <div className="top-entities-table-wrapper__box">64m</div>
                <div className="top-entities-table-wrapper__box">10m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__heading">Company D</div>
                <div className="top-entities-table-wrapper__box">43m</div>
                <div className="top-entities-table-wrapper__box">12m</div>
                <div className="top-entities-table-wrapper__total--no-border"></div>
                <div className="top-entities-table-wrapper__total">43%</div>
                <div className="top-entities-table-wrapper__total">12%</div>
            </div>
        )
    }
}

export default HighlightCommentTable;