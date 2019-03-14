import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './layout/App';
import * as serviceWorker from './serviceWorker';
import part3Detail from '@/components/part3/part3Detail/part3Detail';
import part1Detail from '@/components/part1/part1Detail/part1Detail';
import part0Detail from '@/components/part0/part0Detail/part0Detail';
import videoDetail from '@/pages/videoDetail/videoDetail';
import './main.scss';
import Search from '@/pages/Search';
import Video from '@/pages/Video';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/register" component = { Register } />
            <Route path="/login" component = { Login } />
            <Route path="/search" component = { Search } />
            <Route path="/video/:id" component = { Video }/>
            <Route path="/videoDetail/:id" component = { videoDetail } />
            <Route path="/part0Detail/:id" component = { part0Detail } />
            <Route path="/part1Detail/:id" component = { part1Detail } />
            <Route path="/part3Detail/:id" component = { part3Detail } />
            <Route path="/" component = { App } />

        </Switch>
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();
