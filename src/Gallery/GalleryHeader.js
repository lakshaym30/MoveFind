import axios from 'axios';
import { useEffect , useState} from 'react';
import HeaderItem from './HeaderItem';
import GalleryMovie from './GalleryMovie';
import './GalleryHeader.css';
import { array } from 'prop-types';
import { string } from 'prop-types';
const API_KEY = '43f7b7cce2ae5cabfc5e2f76a4248ec7';

const GalleryHeader = ({genreList, setGenreList, contentList, setContent, filter}) => {
    const [isGenreLoading, setGenreLoading] = useState(true);
    const [isContentLoading, setContentLoading] = useState(true);
    var genre_content = [];
    var content = [];
    useEffect(() => {
        if (genreList.length === 0) {
            var genre_request = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY + "&language=en-US";
            axios.get(genre_request)
            .then ((response) => {
                console.log(response);
                setGenreList(genreList => [...genreList, response.data.genres]);
                setGenreLoading(false);
            })
            .catch(function(error) {
                console.log(error);
            });
        }

        if (filter === "") {
            var content_request = "https://api.themoviedb.org/3/trending/movie/week?api_key=" + API_KEY;
            axios.get(content_request)
                .then ((response) => {
                    console.log(response);
                    setContent(contentList => []);
                    setContent(contentList => [...contentList, response.data.results]);
                    setContentLoading(false);
                })
                .catch(function(error) {
                    console.log(error);
            });
        }
    }, [genreList.length, filter, setContent, setGenreList]);

    function handleClick(genre) {
        setContentLoading(true);
        var content_request = "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&language=en-US&page=1&with_genres=" + genre
        axios.get(content_request)
            .then ((response) => {
                console.log(response);
                setContent(contentList => []);
                setContent(contentList => [...contentList, response.data.results]);
                setContentLoading(false);
            })
            .catch(function(error) {
                console.log(error);
        })
    }
    console.log(contentList);

    //console.log(filter);
    if (!isGenreLoading && !isContentLoading) {
        genre_content = genreList[0].map(genre => 
            <button key={genre.id} onClick = {() => handleClick(genre.id)}>
                <HeaderItem genre = {genre}/>
            </button>
        );
        content = contentList[0].map((movie, index) => <GalleryMovie key={movie.id} movie = {movie} props={contentList} index={index}/>);
        //console.log(genre_content);
        //console.log(content);
        return (
            <div id="gallery_header">
                <div id="genres">
                    {genre_content}
                </div>
                <div id="trending">
                    {content}
                </div>
            </div>
            
        );
    }
    
} 
GalleryHeader.propTypes = {
    genreList: array, 
    contentList: array,
    filter: string
};
export default GalleryHeader