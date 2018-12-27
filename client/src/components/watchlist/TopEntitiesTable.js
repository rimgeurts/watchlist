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
                <div className="top-entities-table-wrapper__header top-entities-table-wrapper__header_a">Top Entities</div>
                <div className="top-entities-table-wrapper__header top-entities-table-wrapper__header_b">Gross Limit</div>
                <div className="top-entities-table-wrapper__header top-entities-table-wrapper__header_c">Net Limit</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__a">Company A</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__b">202m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__c">103m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__e">Company B</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__f">25m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__g">55m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__e">Company C</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__f">64m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__g">10m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__e">Company C</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__f">64m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__g">10m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__e">Company D</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__f">43m</div>
                <div className="top-entities-table-wrapper__box top-entities-table-wrapper__box__g">12m</div>
            </div>
        )
    }
}

export default HighlightCommentTable;