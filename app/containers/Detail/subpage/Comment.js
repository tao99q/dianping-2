import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';
import {getCommentData} from "../../../fetch/detail/detail";

import LoadMore from '../../../components/LoadMore';
import CommentList from '../../../components/CommentList';

class Comment extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }

    componentDidMount() {
        this.loadFirstPageData();
    }

    loadFirstPageData() {
        const id = this.props.id;
        const page = this.state.page;
        const result = getCommentData(page, id);
        this.resultHandle(result);
    }

    loadMoreData() {
        if (!this.state.hasMore) {
            return
        }
        //记录状态
        this.setState({
            isLoadingMore: true
        });
        const id = this.props.id;
        const page = this.state.page;
        const result = getCommentData(page, id);
        this.resultHandle(result);
        this.setState({
            isLoadingMore: false,
            page: page + 1
        })
    }

    resultHandle(result) {
        result.then((res) => {
            return res.json();
        }).then((json) => {
            const hasMore = json.hasMore;
            const newData = json.data;
            const data = this.state.data;
            this.setState({
                hasMore: hasMore,
                data: [...data, ...newData]
            });
        })
    }

    render() {
        return (
            <div className='detail-comment-container'>
                <h1>用户点评</h1>
                <CommentList data={this.state.data}/>
                {
                    this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore}
                                                   hasMore={this.state.hasMore}
                                                   loadMoreFn={this.loadMoreData.bind(this)}/> : ''
                }
            </div>

        )
    }
}

export default Comment;