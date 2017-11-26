import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import LocalStore from '../util/localStore';
import {CITYNAME} from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../redux/actions/userinfo';

class App extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

    componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName === null) {
            cityName = '北京';
        }
        this.props.userInfoActions.update({
            cityName: cityName
        });
        // 更改状态
        this.setState({
            initDone: true
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone ? this.props.children : <div>正在加载...</div>
                }
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));