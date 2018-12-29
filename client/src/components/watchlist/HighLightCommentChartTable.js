import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBOdata } from '../../actions'
import '../../styles/layout/_grids.scss';
import '../../styles/components/_cards.scss';
import '../../styles/layout/_layout.scss';
import '../../styles/components/HighLightCommentChartTable.scss'



class HighlightCommentChartTable extends React.Component {
    componentDidMount() {
        const response = this.props.fetchBOdata();
        console.log(response)
    }

    render() {
        return (
            <div className="highlight-comment-table-wrapper">
                <div className="highlight-comment-table-wrapper__header highlight-comment-table-wrapper__header_a"></div>
                <div className="highlight-comment-table-wrapper__header highlight-comment-table-wrapper__header_b">Gross Limit</div>
                <div className="highlight-comment-table-wrapper__header highlight-comment-table-wrapper__header_c">Net Limit</div>
                <div className="highlight-comment-table-wrapper__header highlight-comment-table-wrapper__header_d">Net Utilisation</div>
                <div className="highlight-comment-table-wrapper__box highlight-comment-table-wrapper__box__a">Sov</div>
                <div className="highlight-comment-table-wrapper__box highlight-comment-table-wrapper__box__b">2.6 (7%)</div>
                <div className="highlight-comment-table-wrapper__box highlight-comment-table-wrapper__box__c">0.7 (3%)</div>
                <div className="highlight-comment-table-wrapper__box highlight-comment-table-wrapper__box__d">0.3 (2%)</div>
                <div className="highlight-comment-table-wrapper__box highlight-comment-table-wrapper__box__e">Sub-Sov</div>
                <div className="highlight-comment-table-wrapper__box highlight-comment-table-wrapper__box__f">0.0 (0%)</div>
                <div className="highlight-comment-table-wrapper__box highlight-comment-table-wrapper__box__g">0.0 (0%)</div>
                <div className="highlight-comment-table-wrapper__box highlight-comment-table-wrapper__box__h">0.0 (0%)</div>
            </div>
        )
    }
}

export default connect(null, { fetchBOdata })(HighlightCommentChartTable)