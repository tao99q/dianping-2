import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {getOrderList} from "../../../fetch/user/orderlist";
import OrderListComment from '../../../components/OrderList';

import './style.less';

class OrderList extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    componentDidMount() {

        const userinfo = this.props.userinfo;
        if (userinfo.username) {
            this.loadOrderList(userinfo.username);
        } else {
            this.props.history.replace('/login');
        }
    }

    loadOrderList(username) {
        const result = getOrderList(username);
        result.then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({
                data: json
            });
        }).catch(ex => {
            if (__DEV__) {
                console.error('订单获取报错', ex.message);
            }
        })
    }

    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                <OrderListComment data={this.state.data}/>
            </div>
        )
    }
}

export default OrderList;