import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchInput from '../SearchInput';
import './style.less';

class SearchHeader extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    handleClick() {
        window.history.back();
    }

    handleEnter(value) {
        const category = this.props.category;
        if (category) {
            this.props.history.push('/search/' + encodeURIComponent(category) + '/' + encodeURIComponent(value));
        } else {
            this.props.history.push('/search/all/' + encodeURIComponent(value));
        }

    }

    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.handleClick.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput handleEnter={this.handleEnter.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default SearchHeader;