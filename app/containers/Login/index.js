import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as userInfoActionsFromOtherFile from '../../redux/actions/userinfo';

import Header from '../../components/Header';
import LoginComponent from '../../components/Login';

class Login extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }

    componentDidMount() {
        this.doCheck();
    }

    handleLogin(username) {
        const actions = this.props.userinfoActions;
        let userinfo = this.props.userinfo;
        userinfo.username = username;
        actions.update(userinfo);
        //跳转
        const params = this.props.match.params;
        const backRouter = params.router;
        if (backRouter) {
            this.props.history.push(backRouter);
        } else {
            this.goUserPage();
        }
    }

    goUserPage() {
        this.props.history.replace("/user");
    }

    doCheck() {
        const userinfo = this.props.userinfo;
        if (userinfo.username) {
            this.goUserPage();
        } else {
            this.setState({
                checking: false
            });
        }
    }


    render() {
        return (
            <div>
                <Header title="用户登陆"/>
                <LoginComponent handleLogin={this.handleLogin.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
};
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login));