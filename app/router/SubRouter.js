import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../containers/Home';
import City from '../containers/City';
import Search from '../containers/Search';
import Login from '../containers/Login';
import User from '../containers/User';

class SubRouter extends Component {
    constructor(pops) {
        super(pops);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/city" component={City}/>
                <Route path="/search/:category/:keyword?" component={Search}/>
                <Route path="/login/:router?" component={Login}/>
                <Route path="/user" component={User}/>
            </Switch>
        )
    }
}

export default SubRouter;