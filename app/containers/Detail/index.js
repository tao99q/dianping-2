import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Header from '../../components/Header';
import Info from './subpage/Info';
import Buy from './subpage/Buy';
import Comment from './subpage/Comment';


class Detail extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        const id = this.props.match.params.id;
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comment id={id}/>
            </div>

        )
    }
}

export default Detail;