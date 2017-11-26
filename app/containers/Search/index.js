import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/List';

class Search extends Component {
    constructor(pops, context) {
        super(pops, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const params = this.props.match.params;
        return (
            <div>
                <SearchHeader keyword={params.keyword} history={this.props.history} category={params.category}/>
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        )
    }
}

export default Search;