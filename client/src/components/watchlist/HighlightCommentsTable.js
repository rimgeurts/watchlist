import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchData } from '../../actions'
import '../../styles/layout/_grids.scss';
import '../../styles/components/_cards.scss';
import '../../styles/layout/_layout.scss';
import '../../styles/components/HighlightCommentsTable.scss'


class HighlightCommentTable extends React.Component {
    
    componentDidMount() {
        const widgetCode = 'wl09';
        const reportElement = '45';
        const reportTabId = '36'

        this.getBOdata(reportElement, widgetCode, reportTabId)
    }

    getBOdata = (reportElement, widgetCode) => {
        this.props.fetchData(reportElement, widgetCode)
    }

    renderList() {
        const data = this.props.items.wl09_45
        if (data) {
            return data.map(data => {      
                return ( <li key={data.value} className="comments-table-wrapper comments-table-wrapper__item">{data.value}</li>)
            })
        }
        if(!data) {
            return (
                <div>Loading...</div>
            )
        }
    }

    render() {
        {this.renderList()}
        return ( 
                <div className="comments-table-header">
                    <ul className="comments-table-wrapper">
                            {this.renderList()}
                    </ul>
                </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        //filters: state.filters, posts: state.posts
        items: state.items
    }
}


export default connect(mapStateToProps, { fetchData })(HighlightCommentTable);