import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class Star extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        let star = this.props.star;
        if (star > 6) {
            star = star % 5;
        }
        return (
            <div className='star-container'>
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        const lightClass = star >= item ? 'light' : '';
                        return <i key={index} className={'icon-star ' + lightClass}></i>
                    })
                }
            </div>

        )
    }
}

export default Star;