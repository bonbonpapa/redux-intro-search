import { connect } from 'react-redux' 
import React, { Component } from 'react' 
import MoreSearch from './MoreSearch.jsx'
class UnconnectedSearch extends Component { 
    handleQuery = evt => { 
        this.props.dispatch({ type: 'query', q: evt.target.value }) 
    } 

    handleMore = () => {
        if (this.props.moreQuery)
                this.props.dispatch({type:'more-query', moreQuery: !this.props.moreQuery})
        else
                this.props.dispatch({type:'more-query', moreQuery: !this.props.moreQuery})
                
}

    render = () => { 
        const moreQueryItem =  this.props.moreQuery ? <MoreSearch /> : <div></div> ;
        return ( 
            <div> 
                <div> 
                    Search query 
                    <input type="text" onChange={this.handleQuery} value={this.props.query} /> 
                    <button type="button" onClick = {this.handleMore} >More...</button>
                </div> 
                <div>
                {moreQueryItem}
                </div>
            </div>) 
    } 
} 
let mapStateToProps = st => { 
    return { 
        query: st.searchQuery, 
        moreQuery: st.moreQuery
    } 
} 
let Search = connect(mapStateToProps)(UnconnectedSearch) 
export default Search 