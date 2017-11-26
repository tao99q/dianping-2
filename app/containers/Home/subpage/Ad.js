import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {getAdData} from "../../../fetch/home/home";
import HomeAd from '../../../components/HomeAd';

class Ad extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const result = getAdData();
        result.then((res) => {
            return res.json();
        }).then((json) => {
            const data = json;
            if (data.length) {
                this.setState({
                    data: data
                });
            }
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length ? <HomeAd data={this.state.data}/> : <div>加载中...</div>
                }
            </div>

        )
    }
}

export default Ad;