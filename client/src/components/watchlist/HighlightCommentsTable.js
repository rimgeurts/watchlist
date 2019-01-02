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
        const reportTabId = '36'
        const reportElement = '45';
        console.log('Component Updated: is signed in: ' + this.props.isSignedIn)
        if (this.props.isSignedIn === true) {
            this.getBOdata(reportElement, widgetCode, reportTabId)
        }
    }


    getBOdata = (reportElement, widgetCode, reportTabId) => {
        this.props.fetchData(reportElement, widgetCode, reportTabId)
    }

    renderList() {



        const data = this.props.items.wl09_36_45
        const error = this.props.items.error;
        
        if (data) {
            return data.map(data => {      
                return ( <li key={data.value} className="comments-table-wrapper comments-table-wrapper__item">{data.value}</li>)
            })
        }
        if(!data && !error) {
            return (
                <div>Loading...</div>
            )
        }
        if(!data && error) {
            return (
                <div className="error-box">
                    <div className="error">
                        <div className="error error__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1.03c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM10 13H8v-2h2v2zm0-3H8V5h2v5z"/></svg>
                        </div>
                        <div className="error error__title">
                            Unable to retrieve data 
                        </div>
                        <div className="error error__text">Error: {error.error_code} - {error.message}</div>
                    </div>
                </div>
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
        items: state.items,
        isSignedIn: state.auth.isSignedIn
    }
}


export default connect(mapStateToProps, { fetchData })(HighlightCommentTable);