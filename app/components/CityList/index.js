import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class CityList extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    handleClick(newCity) {
        this.props.changeCity(newCity);
    }

    render() {
        const cityList = this.props.cityList;
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    {cityList.map((city, index) => {
                        return <li key={index} onClick={this.handleClick.bind(this, city.name)}>
                            <span>{city.name}</span>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default CityList;