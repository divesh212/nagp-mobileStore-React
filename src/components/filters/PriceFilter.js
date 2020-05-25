import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ORDER_BY_DESC, ORDER_BY_ASC, clearFilter, orderByAsc, orderByDesc } from '../../actions'
import '../../style/PriceFilter.css'
const PriceFilter = (props) => {

    let removeSelected;
    const [selected, setSelected] = useState('');

    const handleRadioChange = (e) => {
        const value = e.target.value;
        setSelected(value);
        if(value === ORDER_BY_ASC) {
            props.orderByAsc();
        } else {
            props.orderByDesc();
        }
    };

    const removeFilter = () => {

        const buttons = document.getElementsByName('priceFilter');

        buttons.forEach(el => {
            el.checked = false;
        });

        props.clearFiler();
        setSelected('');
    };

    if (selected) {
        removeSelected = <span onClick={removeFilter} className="text-remove-selected text-right">Remove filter</span>
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3>Price</h3>
                <span>{removeSelected}</span>
            </div>
            <ul className="list-group" >
                <li className="list-group-item">
                    <label className="custom-radio-btn"> Low to high
                            <input
                            value={ORDER_BY_ASC}
                            type="radio"
                            onChange={handleRadioChange}
                            name="priceFilter" className="custom-radio-btn__input" />
                        <span className="custom-radio-btn__span"></span>
                    </label>
                </li>
                <li className="list-group-item">
                    <label className="custom-radio-btn"> High to low
                            <input
                            value={ORDER_BY_DESC}
                            onChange={handleRadioChange}
                            type="radio" name="priceFilter" className="custom-radio-btn__input" />
                        <span className="custom-radio-btn__span"></span>
                    </label>
                </li>
            </ul>
        </div>
    )
}

const matchDispatchToProps = dispatch => {

    return {
        clearFiler: () => dispatch(clearFilter()),
        orderByAsc: () => dispatch(orderByAsc()),
        orderByDesc: () => dispatch(orderByDesc())
    }

}

export default connect(null, matchDispatchToProps)(PriceFilter);