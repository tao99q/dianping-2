import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getSearchData} from "../../../fetch/search/list";

import ListComonent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
};

class List extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],//存储数据
            hasMore: false,//是否有更多数据
            isLoadingMore: false,//当前状态下是"加载中..."还是"加载更多"
            page: 1//下页的页码
        }
    }

    componentDidMount() {
        this.loadFirstPageData();
    }

    componentDidUpdate(prevProps, prevState) {
        const category = this.props.category;
        const keyword = this.props.keyword;
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }
        this.setState(initialState);
        this.loadMoreData();
    }

    loadFirstPageData() {
        const city = this.props.userinfo.cityName;
        const category = this.props.category;
        const keyword = this.props.keyword;
        const page = this.state.page;
        const result = getSearchData(page, city, category, keyword);
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
        const city = this.props.userinfo.cityName;
        const category = this.props.category;
        const keyword = this.props.keyword;
        const page = this.state.page;
        const result = getSearchData(page, city, category, keyword);
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
            <div>
                {this.state.data.length ? <ListComonent data={this.state.data}/> : <div>加载中...</div>}
                {this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore}
                                                hasMore={this.state.hasMore}
                                                loadMoreFn={this.loadMoreData.bind(this)}/> : ''}
            </div>
        )
    }
}
// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(List));