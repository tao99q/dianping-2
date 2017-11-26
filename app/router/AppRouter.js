import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from '../containers';
import SubRouter from './SubRouter';

const history = createHistory();

class AppRouter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router history={history}>
                <App>
                    <Route path="/" component={SubRouter}/>
                </App>
            </Router>
        )
    }
}
export default AppRouter;