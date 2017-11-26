import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';
import Item from './Item';

class CommentList extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        const data = this.props.data;
        return (
            <div className="comment-list">
                {
                    data.map((item, index) => {
                        return <Item key={index} comment={item}/>
                    })
                }
            </div>

        )
    }
}

export default CommentList;