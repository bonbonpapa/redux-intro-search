import { connect } from 'react-redux' 
import React, { Component } from 'react' 
class UnconnectedMoreSearch extends Component { 

    handleMinimumPrice = evt => { 
        const ivalue = evt.target.value;
        const price = parseInt(evt.target.value) || 0;
        this.props.dispatch({ type: 'minimum-price', price: price }) 
    } 
    handleMaximumPrice = evt => { 
        let price = parseInt(evt.target.value) || 0;
        this.props.dispatch({ type: 'maximum-price', price: price }) 
    } 
    handleCheckStock = evt => {
        console.log(evt.target.checked);
        const stock_check = evt.target.checked;
        
        this.props.dispatch({ type: 'instock-check', stock: stock_check})
    }
    handleClear = evt => {
        this.props.dispatch({ type: 'clear'})

    }

    render = () => { 
        return ( 
            <div> 
                <div> 
                    Minimum price 
                    <input type="text" onChange={this.handleMinimumPrice} value={this.props.minPrice} /> 
                </div> 
                <div> 
                    Maximum price 
                    <input type="text" onChange={this.handleMaximumPrice} value={this.props.maxPrice} /> 
                </div> 
                <div>
                    <label>In Stock Check</label><input type="checkbox" onClick={this.handleCheckStock} checked={this.props.inStock}/>
                </div>
                <div>
                    <button type="button" onClick={this.handleClear} >Clear</button>
                </div>
            </div>) 
    } 
} 
let mapStateToProps = st => { 
    return { 
        minPrice: st.min, 
        maxPrice: st.max,
        inStock: st.inStock
    } 
} 
let MoreSearch = connect(mapStateToProps)(UnconnectedMoreSearch) 
export default MoreSearch 