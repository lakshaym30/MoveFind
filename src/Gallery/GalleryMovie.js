import { Link } from 'react-router-dom'
import { array } from 'prop-types';
import { object } from 'prop-types';
import { number } from 'prop-types';
const GalleryMovie = ({movie, props, index}) => {
    const poster = "https://image.tmdb.org/t/p/original" + movie.poster_path;
    return (
        <div id="card">
            <Link to={`/mp2/movie/${movie.id}`} state={{list: props, index: index}}>
                <img src={poster} alt="poster"></img>
            </Link>
        </div>
        
    );
}

GalleryMovie.propTypes = {
    movie: object, 
    props: array,
    index: number
};
export default GalleryMovie