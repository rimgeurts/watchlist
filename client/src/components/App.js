import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import RowOneHeader from '../components/watchlist/RowOneHeader';
import RowZeroHeader from '../components/watchlist/RowZeroHeader';
import RowThree from '../components/watchlist/RowThree';
import Waterfall from '../components/watchlist/Waterfall';
import history from '../history';
import '../styles/layout/_layout.scss'

const App = () => {
    return (
        <div className="page-size-a4">
            <div className="main-layout-container">
                <RowZeroHeader />
                <RowOneHeader />       
                <RowThree />       
            </div>
            
        </div>
    )
}

export default App;