import { connect } from 'react-redux' 
import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import data from './data.js' 
class UnconnectedSearchResults extends Component { 
    render = () => { 
        const itags = this.props.tags.split(" ");
        
        let results = data.filter(item => {
            const inStock_check = (this.props.inStock) ? item.inStock : true; 
            return ( item.name.includes(this.props.query)   && 
            item.price >= this.props.minPrice && 
            item.price <= this.props.maxPrice && inStock_check && itags.every(tg => item.tags.indexOf(tg) > -1)
            )
        }) 
        return (<div> 
            {results.map(r => { 
                return (<div><Link to={"/item/"+r.id}>{r.name}</Link></div>) 
            })} 
        </div>) 
    } 
} 
let mapStateToProps = st => { 
    return { 
        query: st.searchQuery, 
        minPrice: st.min,
        maxPrice: st.max,
        inStock: st.inStock,
        tags: st.tags
    } 
} 
let SearchResults = connect(mapStateToProps)(UnconnectedSearchResults) 
export default SearchResults  