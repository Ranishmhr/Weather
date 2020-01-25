import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = props => (

    <div className="movie-card">
        <img src={props.movie.medium_cover_image} className="movie-cover"/>
        <div className="movie-title">
            <Link to={'/'+props.movie.id}>
                {props.movie.title}
            </Link>
        </div>
        <div className="movie-genre">
            <Link to={'/'+props.movie.id}>
                {props.movie.genre}
            </Link>

            </div>
    </div>

);

export default MovieCard;