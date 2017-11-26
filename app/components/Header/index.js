import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class Header extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    handleClick(){
        const backRouter = this.props.backRouter;
        if (backRouter){
            this.props.history.push(backRouter);
        }else{
            window.history.back();
        }
    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.handleClick.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Header;