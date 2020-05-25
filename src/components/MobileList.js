import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMobiles, search } from '../actions/index';
import Mobile from './Mobile'
import {filterByPrice, filterByName} from '../utility/filter'
import PriceFilter from './filters/PriceFilter'

class MobileList extends Component {

    componentDidMount() {
        this.props.fetchMobiles();
    }

    filterByPrice = (arr, type ) => {
        
        if(!type) return arr;
        if(type === 'asc') {
            return arr.slice().sort((el1, el2) => el1.price - el2.price);
        } else {
            return arr.slice().sort((el1, el2) => el2.price - el1.price);
        }
    };

    handleChange = (e) => {
        this.props.searchMobile(e.target.value);
    }

    render() {

        if (this.props.mobiles != null) {
            const mobiles = this.props.mobiles.map((mobile) => {
                return (<div key={mobile.id} className="col-lg-4 mb-4" style={{display:"inline-block"}}>
                    <Mobile key={mobile.id} mobile={mobile} />
                </div>
                )
            });

            return (
                <div className="row" style={{paddingTop: "5rem"}}>
                    <div className="col-md-3">
                    <input className="form-control mr-sm-2" style={{marginBottom : "5rem"}} placeholder="Search Mobile" onChange={(e) => this.handleChange(e)}/>
                    <PriceFilter/>
                    </div>
                    <div className="col-md-9">
                        {mobiles}
                    </div>
                </div>
            )
        } else {
            return (<h3>Fetching mobiles</h3>)
        }
    }
}

const mapStateToProps = (state) => {
    const searchField = state.search.searchField;
    const searchFilter = filterByName(state.mobiles.mobiles, searchField);
    const filteredMobiles = filterByPrice(searchFilter, state.price)
    return {
        mobiles: filteredMobiles
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMobiles: () => dispatch(fetchMobiles()),
        searchMobile: (name) => dispatch(search(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileList);