import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class LoadMore extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    handleLoadMore() {
        this.props.loadMoreFn();
    }

    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.wrapper;
        let timeoutId;

        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if (top && top < windowHeight) {
                loadMoreFn();
            }
        }

        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) {
                return;
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50);
        }.bind(this));

    }

    render() {
        return (
            <div className="load-more" ref={(wrapper) => this.wrapper = wrapper}>
                {
                    this.props.isLoadingMore ? <span>加载中...</span> :
                        <span onClick={this.handleLoadMore.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
}

export default LoadMore;