import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class Login extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            phone: ''
        }
    }

    handleLogin(e) {
        const username = this.state.phone;
        this.props.handleLogin(username);
    }

    handleChange(e) {
        this.setState({
            phone: e.target.value
        })
    }

    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input type="text" placeholder="请输入手机号"
                           value={this.state.phone}
                           onChange={this.handleChange.bind(this)}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="请输入验证码"/>
                </div>
                <button className="btn-login" onClick={this.handleLogin.bind(this)}>登陆</button>
            </div>
        )
    }
}

export default Login;