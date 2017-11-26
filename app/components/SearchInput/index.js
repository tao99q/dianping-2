import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'

class SearchInput extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleEnter(e) {
        if (e.keyCode !== 13) {
            return;
        }
        this.props.handleEnter(this.state.value);
    }

    render() {
        return (
            <input type="text" className="search-input"
                   placeholder="请输入关键字"
                   onChange={this.handleChange.bind(this)}
                   onKeyUp={this.handleEnter.bind(this)}
                   value={this.state.value}/>
        )
    }
}

export default SearchInput;