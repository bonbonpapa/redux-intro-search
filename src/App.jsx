import React, { Component } from 'react' 
import { Route, BrowserRouter } from 'react-router-dom' 
import Search from './Search.jsx' 
import SearchResults from './SearchResults.jsx' 
import Item from './Item.jsx'
class App extends Component { 
    render = () => { 
        return (
        <BrowserRouter>
        <div> 
            <Route exact={true} path="/" render= { () =>{
                return (<div>
                    <Search />
                    <SearchResults />
                </div>)
                }                
             }/>            
            <Route exact={true} path="/item/:itemId" render={rd => <Item id={rd.match.params.itemId}/>}/>
        </div>
        </BrowserRouter>
        ) 
    } 
} 
export default App 