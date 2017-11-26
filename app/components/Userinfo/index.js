import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class Userinfo extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
           <div className="userinfo-container">
               <p>
                   <i className="icon-user"></i>
                   &nbsp;
                   <span>{this.props.username}</span>
               </p>
               <p>
                   <i className="icon-map-marker"></i>
                   &nbsp;
                   <span>{this.props.cityName}</span>
               </p>
           </div>
        )
    }
}

export default Userinfo;