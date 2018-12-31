import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchData } from '../actions'
import '../styles/layout/_grids.scss';
import '../styles/components/_cards.scss';
import '../styles/layout/_layout.scss';
import '../styles/components/SideBar.scss'


class HighlightCommentTable extends React.Component {
    
    componentDidMount() {
        
    }

    handlePrint(){
        window.print();
    }


    render() {
        return ( 
            <div className="navbar">
                <input type="checkbox" className="checkbox" id="click" hidden></input>
                <div className="sidebar">
                    <label htmlFor="click">
                        <div className="menu-icon">
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                        </div>
                    </label>
                </div>

                <nav className="navigation">
                    <div className="navigation-header">
                        <h1 className="navigation-heading">Watchlist Report</h1>
                    </div>
                    <ul className="navigation-list">
                            <li className="navigation-item">
                                <a href="#" className="navigation-link"  onClick={this.handlePrint}>Print Report</a>
                            </li>
                            <li className="navigation-item">
                                <a href="#" className="navigation-link">Ratings Migration</a>
                            </li>
                            <li className="navigation-item">
                                <a href="#" className="navigation-link">dbRiB</a>
                            </li>
                    </ul>
                </nav>
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