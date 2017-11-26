import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Star from '../../Star';
import './style.less';
class Item extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        const comment = this.props.comment;
        return (
            <div className='comment-item'>
                <h3>
                    <i className='icon-user'></i>
                    &nbsp;
                   {comment.username}
                </h3>
                <Star star={comment.star}/>
                <p>{comment.comment}</p>
            </div>

        )
    }
}

export default Item;