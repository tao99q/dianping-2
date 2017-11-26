import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as storeActionsFromFile from '../../../redux/actions/store';

import BuyAndStore from '../../../components/BuyAndStore';

class Buy extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }

    componentWillMount() {
        this.checkStoreState();
    }

    checkStoreState() {
        const id = this.props.id;
        const store = this.props.store;
        store.some(item => {
            if (item === id) {
                this.setState({
                    isStore: true
                });
                return true;
            }
        });
    }

    handleStore() {
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return;
        }
        const id = this.props.id;
        const storeActions = this.props.storeActions;

        if (this.state.isStore) {
            storeActions.rm({id: id});
        } else {
            storeActions.add({id: id});
        }

        this.setState({
            isStore: !this.state.isStore
        });

    }

    handleBuy() {
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return;
        }
        this.props.history.replace('/user');
    }

    loginCheck() {
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if (userinfo.username) {
            return true;
        } else {
            this.props.history.replace('/login/' + encodeURIComponent('/detail/' + id));
            return false;
        }
    }

    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore}
                             handleStore={this.handleStore.bind(this)}
                             handleBuy={this.handleBuy.bind(this)}/>
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
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy));