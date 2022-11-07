import React, {useState} from 'react';
import GalleyHeader from './GalleryHeader';
import './Gallery.css';
const Gallery = () => {
    const [genreList, setGenreList] = useState([]);
    const [contentList, setContent] = useState([]);
    const [filter, setFilter] = useState("");
    return (
        <div id="gallery">
            <GalleyHeader genreList={genreList} setGenreList={setGenreList} contentList={contentList} setContent={setContent} filter={filter} setFilter={setFilter}/>
        </div>
    )
}
export default Gallery

