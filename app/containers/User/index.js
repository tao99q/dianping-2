import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Header from '../../components/Header';
import Userinfo from '../../components/Userinfo';
import OrderList from './subpage/OrderList';

class User extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <Header title="用户中心" backRouter="/" history={this.props.history}/>
                <Userinfo username={this.props.userinfo.username} cityName={this.props.userinfo.cityName}/>
                <OrderList userinfo={this.props.userinfo}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
};
const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(User));