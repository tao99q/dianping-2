import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import * as userInfoActionsFromOtherFile from '../../redux/actions/userinfo';
import LocalStore from '../../util/localStore';
import {CITYNAME} from '../../config/localStoreKey'

import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

const cityList = [
    {name: '北京'},
    {name: '上海'},
    {name: '杭州'},
    {name: '广州'},
    {name: '苏州'},
    {name: '深圳'},
    {name: '南京'},
    {name: '天津'},
    {name: '重庆'},
    {name: '厦门'},
    {name: '武汉'},
    {name: '西安'}
];

class City extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    changeCity(newCity) {
        if (newCity === null) {
            return;
        }
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);
        //修改localStorage
        LocalStore.setItem(CITYNAME, newCity);

        this.props.history.replace("/");
    }

    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList cityList={cityList} changeCity={this.changeCity.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
};
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(City));