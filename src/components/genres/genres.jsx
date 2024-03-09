// genres.js
import React from 'react';
import './genres.css';
import Genre from './genre/genre';

const Genres = () => {
    return ( 
        <div className="genres">
            <div className="genres-itemlist">
            <h1>Genres</h1>
            <div className="gernes-list">
                <Genre genre="HITS" />
                <Genre genre="EDM" />
                <Genre genre="CHILL" />
                <Genre genre="TECHNO" />
                <Genre genre="DE-RAP" />
                <Genre genre="HARDSTYLE" />
            </div>
            </div>
        </div>
    );
}
 
export default Genres;
