import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom'
import './DetailCard.css';
const DetailCard = () =>{
    const location = useLocation();
    const{list, index} = location.state
    console.log(list);
    console.log(index);
    var movie = list[0][index];
    var poster = "https://image.tmdb.org/t/p/original" + movie.poster_path;
    var nextIndex = index + 1;
    if (index === 19) {
        nextIndex = 0;
    }
    var nextMovie = list[0][nextIndex];

    var prevIndex = index - 1;
    if (index === 0) {
        prevIndex = 19;
    }
    var prevMovie = list[0][nextIndex];
    return (
        <div class="full-card">
            <Link to={`/mp2/movie/${prevMovie.id}`} state={{list: list, index: prevIndex}}><h2>Prev</h2></Link>
            <div class="detail-card">
                <div class="card-photo">
                    <img src={poster} id="moviePoster" alt="poster"></img>
                </div>
                <div class="card-text">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <h3>Popularity: {movie.popularity}</h3>
                    <h4>{movie.release_date}</h4>
                </div>
            </div>
            <Link to={`/mp2/movie/${nextMovie.id}`} state={{list: list, index: nextIndex}}><h2>Next</h2></Link>
        </div>

    )
} 
export default DetailCard