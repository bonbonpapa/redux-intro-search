import React, { Component } from 'react'; 
import data from './data.js' 

class Item extends Component {  
  render() { 
    
    const results = data.filter(item => {       
      return (item.id === this.props.id)
    })
    return (<div > 
      <img height="100px" src={results[0].image} />       
      <div>{"Description: "}</div> 
    </div>) 
  } 
} 
// the results return is an array, so should access the first item of the array
//export default connect(mapStateToProps)(Item); 
export default Item;