import axios from 'axios';
import React from 'react';
import './SearchBar.css';
import { array, string } from 'prop-types';
const API_KEY = '43f7b7cce2ae5cabfc5e2f76a4248ec7';

const SearchBar = (props) => {
    var query = "";
    var request = "";
    //const [order, setOrder] = useState("title");
    const searchQuery = event => {
        if (event.target.value) {
            query = event.target.value;
            request = "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=" + query + "&page=1";
            console.log(request);
            axios.get(request)
            .then ((response) => {
                console.log(response);
                props.setList(list => []);
                props.setList(list => [...list, response.data.results]);
                props.setList(list => list.sort());
            })
            .catch(function(error) {
                console.log(error);
            });
        } else {
            props.setList(list => []);
        }
    }
    const handleMovieSort = (e) => {
        props.setOrder(e.target.value);
    }

    const handleDirectionSort = (e) => {
        props.setDirection(e.target.value);
    }
    return (
        <div id="search">
            <input type="text" placeholder="Search Movies" name="searchBar" id="searchBar" onChange={searchQuery}></input>
            <div id="sortMovieOptions">
                <h5>Sort By: </h5>
                <input type="radio" id="title"  value="title" checked={props.order === "title"} onChange={(e) => handleMovieSort(e)}></input>
                <label for="title">Title  </label>
                <input type="radio" id="popularity" value="popularity" checked={props.order === "popularity"} onChange={(e) => handleMovieSort(e)}></input>
                <label for="popularity">Popularity</label>
            </div>

            <div id="sortOrderOptions">
                <input type="radio" id="ascending"  value="ascending" checked={props.direction === "ascending"} onChange={(e) => handleDirectionSort(e)}></input>
                <label for="ascending">Ascending  </label>
                <input type="radio" id="descending" value="descending" checked={props.direction === "descending"} onChange={(e) => handleDirectionSort(e)}></input>
                <label for="descending">Descending</label>
            </div>

        </div>
    )
}
SearchBar.propTypes = {
    list: array, 
    order: string,
    direction: string
};
export default SearchBar