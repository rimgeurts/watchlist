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
                    <ul className="social-icons-list">
                        <li>
                            <a href="#" className="social-link">
                                    <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                                <a href="#" className="social-link">
                                        <i className="fab fa-twitter"></i>
                                </a>
                        </li>
                        <li>
                                <a href="#" className="social-link">
                                        <i className="fab fa-google-plus-g"></i>
                                </a>
                        </li>
                        <li>
                                <a href="#" className="social-link">
                                        <i className="fab fa-instagram"></i>
                                </a>
                        </li>
                    </ul>
                    <div className="year">
                        <p>2018</p>
                    </div>
                </div>

                <nav className="navigation">
                    <div className="navigation-header">
                        <h1 className="navigation-heading">Watchlist Report</h1>
                    </div>
                    <ul className="navigation-list">
                            <li className="navigation-item">
                                <a href="#" className="navigation-link">home</a>
                            </li>
                            <li className="navigation-item">
                                <a href="#" className="navigation-link">about us</a>
                            </li>
                            <li className="navigation-item">
                                <a href="#" className="navigation-link">rooms</a>
                            </li>
                            <li className="navigation-item">
                                <a href="#" className="navigation-link">events</a>
                            </li>
                            <li className="navigation-item">
                                <a href="#" className="navigation-link">customers</a>
                            </li>
                            <li className="navigation-item">
                                <a href="#" className="navigation-link">contact</a>
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