import { createStore } from "redux" 
let reducer = (state, action) => { 
    if (action.type === "query") { 
        return { ...state, searchQuery: action.q } 
    } 
    if (action.type === "minimum-price") { 
        return { ...state, min: action.price } 
    } 
    if (action.type === "maximum-price") { 
        return { ...state, max: action.price } 
    } 
    if (action.type === "instock-check") {
        return { ...state, inStock: action.stock}
    }
    if (action.type === "clear") {
        return { searchQuery: "", min: 0, max: 100000, inStock: false, moreQuery: false, tags: '' }
    }
    if (action.type === "more-query") {
        return {... state, moreQuery: action.moreQuery}
    }
    if (action.type === "search-tags") {
        return {... state, tags: action.tags}
    }
    return state  
} 
const store = createStore( 
    reducer, 
    { searchQuery: "", min: 0, max: 100000, inStock: false, moreQuery: false, tags: '' }, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
) 
export default store 