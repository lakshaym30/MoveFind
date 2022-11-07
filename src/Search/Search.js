import React, {useState} from 'react';
import SearchBar from './SearchBar';
import List from './SearchList'
import './Search.css';
const Search = () => {
    const [list, setList] = useState([]);
    const [order, setOrder] = useState("");
    const [direction, setDirection] = useState("");
    return (
        <div id="searchPage">
            <SearchBar list = {list} setList = {setList} order={order} setOrder = {setOrder} direction = {direction} setDirection={setDirection}/>
            <List list = {list} order = {order} direction={direction} id="list"></List>
        </div>
    );
  
}
export default Search;