import { connect } from 'react-redux' 
import React, { Component } from 'react' 
class UnconnectedSearch extends Component { 
    handleQuery = evt => { 
        this.props.dispatch({ type: 'query', q: evt.target.value }) 
    } 
    handleMinimumPrice = evt => { 
        const ivalue = evt.target.value;
        const price = (ivalue==='') ? 0 : parseInt(evt.target.value) 
        this.props.dispatch({ type: 'minimum-price', price: price }) 
    } 
    handleMaximumPrice = evt => { 
        let price = parseInt(evt.target.value) 
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
                    Search query 
                    <input type="text" onChange={this.handleQuery} value={this.props.query} /> 
                    <button type="button" onClick = {this.handleMore} >More...</button>
                </div> 
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
        query: st.searchQuery, 
        minPrice: st.min, 
        maxPrice: st.max,
        inStock: st.inStock
    } 
} 
let Search = connect(mapStateToProps)(UnconnectedSearch) 
export default Search 