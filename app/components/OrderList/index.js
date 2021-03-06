import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';
import Item from './Item';

class OrderList extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const data = this.props.data;
        const submitComment = this.props.submitComment;
        return (
            <div>
                {data.map((item, index) => {
                    return <Item key={index} data={item} submitComment={submitComment}/>
                })}
            </div>
        )
    }
}

export default OrderList;