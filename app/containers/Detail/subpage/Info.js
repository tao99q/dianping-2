import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {getInfoData} from "../../../fetch/detail/detail";

import DetailInfo from '../../../components/DetailInfo';


class Info extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        }

    }

    componentWillMount() {
        const id = this.props.id;
        const result = getInfoData(id);

        result.then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({
                info: json
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.info ? <DetailInfo data={this.state.info}/> : '没有数据'}
            </div>

        )
    }
}

export default Info;