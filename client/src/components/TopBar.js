import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchData, authenticate } from '../actions'
import Authenticate from './Authenticate';
import '../styles/layout/_grids.scss';
import '../styles/components/_cards.scss';
import '../styles/layout/_layout.scss';
import '../styles/components/TopBar.scss'


class HighlightCommentTable extends React.Component {
    
    componentDidMount() {
        
    }

    handleLogin() {
        console.log("login")
    }

    render() {
        return ( 
            <div className="topbar">
            <div className="topbar-menu">
                <div className="topbar-menu db-logo-grey">
                </div>
                
                <div className="logon">
                    
                </div>

                <div className="logon">
                    
                </div>
                    <Authenticate />
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