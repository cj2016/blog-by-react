import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import Message from '../components/Message';


export default class BaseRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/message' component={Message} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
