import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchData } from '../actions'
import '../styles/layout/_grids.scss';
import '../styles/components/_cards.scss';
import '../styles/layout/_layout.scss';
import '../styles/components/TopBar.scss'


class HighlightCommentTable extends React.Component {
    
    componentDidMount() {
        
    }



    render() {
        return ( 
            <div className="topbar">
                <div className="db-logo-grey">
                </div>
                
                <div className="logon">
                    Item                                1
                </div>

                <div className="logon">
                    Item 2
                </div>
                <div className="logon">
                    <i class="login-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0z"/><path 
                            d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/></svg>
                    </i>
                    Logon
                </div>
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