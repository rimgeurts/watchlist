import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import RowOneHeader from '../components/watchlist/RowOneHeader';
import Header from './Header';
import history from '../history';
import '../styles/layout.scss'

const App = () => {
    return (
        <div class="page-size-a4">
            <div class="main-layout-container">
            <RowOneHeader />     

            </div>
            
        </div>
    )
}

export default App;