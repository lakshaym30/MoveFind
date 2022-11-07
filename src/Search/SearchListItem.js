import './SearchListItem.css';
import { Link } from 'react-router-dom'
import { array, string } from 'prop-types';

const ListItem = ({movie, props, index}) => {
    const poster = "https://image.tmdb.org/t/p/original" + movie.poster_path;
    return (
       <Link to={`/mp2/movie/${movie.id}`} state={{list: props, index: index}}>
            <div class="card">
                    <div class="card-photo">
                        <img src={poster} id="moviePoster" alt="poster"></img>
                    </div>
                    <div class="card-text">
                        <h2>{movie.title}</h2>
                        <h3>Popularity: {movie.popularity}</h3>
                        <h4>{movie.release_date}</h4>
                    </div>

            </div>
        </Link> 
    )
}
ListItem.propTypes = {
    list: array, 
    order: string,
    direction: string
};
export default ListItem