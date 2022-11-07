import {object} from 'prop-types';

const HeaderItem = ({genre}) => {   
    //const poster = "https://image.tmdb.org/t/p/original" + genre.poster_path;
    return (
            <div>
                <p>{genre.name}</p>
            </div>
        
    );
}
HeaderItem.propTypes = {
    genre: object
};
export default HeaderItem