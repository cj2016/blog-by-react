import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


export default class Article extends Component {
    render() {
        return (
            <div className='article'>
            123
                {/* <Switch>
                    <Route path='/article/' exact component={Home} />
                    <Route path='/article/:id' exact component={Home} />
                    <Route path='/article/detail/:id' component={Message} />
                </Switch> */}
            </div>
        );
    }
}
