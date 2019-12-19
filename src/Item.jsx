import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import data from './data.js' ;
import copy from 'copy-to-clipboard';

class Item extends Component {  
  
  handleClick = () => {
    console.log(window.location.pathname);
    console.log(window.location.href);
    copy(window.location.href);
  }
  
  render() {     
    const results = data.filter(item => {       
      return (item.id === this.props.id)
    })
    return (<div > 
      <div>
          <Link to={"/"}>Homepage</Link>
      </div>
      <img height="100px" src={results[0].image} />       
      <div>{"Description: "}</div> 
      <button type="button" onClick={this.handleClick}>Copy link</button>
    </div>) 
  } 
} 
// the results return is an array, so should access the first item of the array
//export default connect(mapStateToProps)(Item); 
export default Item;