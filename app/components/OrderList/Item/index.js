import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class Item extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: 2//0-未评价 1-评价中 2-已评价
        }
    }
    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        })
    }

    showComment() {
        this.setState({
            commentState: 1
        });
    }

    hideComment() {
        this.setState({
            commentState: 0
        });
    }

    submitCommentHandle() {
        const submitComment = this.props.submitComment;
        const id = this.props.data.id;
        const value = this.commentText.value.trim();
        if (!value) {
            return
        }
        submitComment(id, value, this.commentOK.bind(this));
    }
    commentOK() {
        this.setState({
            commentState: 2
        })
    }
    render() {
        const data = this.props.data;
        return (
            <div className="order-item-container clear-fix">
                <div className="order-item-img float-left">
                    <img src={data.img} alt={data.title}/>
                </div>
                <div className="order-item-comment float-right">
                    {
                        this.state.commentState === 0 ?
                            <button className="btn" onClick={this.showComment.bind(this)}>评价</button> :
                            this.state.commentState === 1 ? '' : <button className="btn">已评价</button>
                    }

                </div>

                <div className="order-item-content">
                    <span>商户:{data.title}</span>
                    <span>数量:{data.count}</span>
                    <span>价格:￥{data.price}</span>
                </div>
                {
                    this.state.commentState === 1 ?
                        <div className="comment-text-container">
                            <textarea style={{width: '100%', height: '80px'}}
                                      className="comment-text"
                                      ref={commentText => this.commentText = commentText}></textarea>
                            <button className="btn" onClick={this.submitCommentHandle.bind(this)}>提交</button>
                            &nbsp;
                            <button className="btn unselected-btn" onClick={this.hideComment.bind(this)}>取消</button>
                        </div>:''
                    }
            </div>
        )
    }
}

export default Item;