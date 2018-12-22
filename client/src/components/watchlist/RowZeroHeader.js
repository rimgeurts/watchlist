import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'
import '../../styles/layout/_grids.scss';
import '../../styles/components/_cards.scss';
import '../../styles/layout/_layout.scss'


class RowZeroHeader extends React.Component {

    render() {
        return (
                <div className="container-1-columns">
                    <div className="item item--1">
                        <div className="card">
                            <div className="card__side card__side--front-x">
                                <div className="header">
                                    <div className="header-logo">        
                                    </div>
                                    <h1 className="header-title"> Watchlist </h1>
                                </div>
                                
                            </div>
                            <div className="card__side card__side--back card__side--back-x">
                                Back
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default RowZeroHeader;