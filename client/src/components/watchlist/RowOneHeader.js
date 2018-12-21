import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'
import '../../styles/layout/_grids.scss';
import '../../styles/components/_cards.scss';


class RowOneHeader extends React.Component {

    render() {
        return (
                <div className="container-8-columns">
                    <div className="item item--1">
                    <div className="card">
                        <div className="card__side card__side--front-y">
                            <p> Net Limit </p>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--2">
                            <div className="card">
                        <div className="card__side card__side--front-y">
                            <p> Top 10 Entities </p>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--3">
                            <div className="card">
                        <div className="card__side card__side--front-y">
                            <p> Credit RWA </p>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--4">
                            <div className="card">
                        <div className="card__side card__side--front-y">
                            <p> CLA </p>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--5">
                            <div className="card">
                        <div className="card__side card__side--front-y">
                            <p> Expected Loss </p>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--6">      
                            <div className="card">
                        <div className="card__side card__side--front-y">
                            <p> CLA Coverage </p>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--7">
                            <div className="card">
                        <div className="card__side card__side--front-y">
                        <p> Up / Downgrade </p>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                    <div className="item item--8">
                            <div className="card">
                        <div className="card__side card__side--front-y">
                            <p> WL Share </p>
                        </div>
                        <div className="card__side card__side--back-y">
                            Back
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}

export default RowOneHeader;