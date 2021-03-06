import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import RowOneHeader from '../components/watchlist/RowOneHeader';
import RowZeroHeader from '../components/watchlist/RowZeroHeader';
import RowThree from '../components/watchlist/RowThree';
import RowTwo from '../components/watchlist/RowTwo';
import Waterfall from '../components/watchlist/Waterfall';
import history from '../history';
import '../styles/layout/_layout.scss'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'

const App = () => {
    return (
        <div className="page-size-a4">
            <div className="main-layout-container">
                <TopBar />   
                <SideBar />
                <RowZeroHeader />
                <RowOneHeader />       
                <RowTwo />       
                <RowThree />       
            </div>
            
        </div>
    )
}

export default App;