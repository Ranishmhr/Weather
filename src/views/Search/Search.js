import React, {Component} from 'react';
import MovieCard from "../welcome/component/MovieCard";
import axios from 'axios';

class Search extends Component {
    state = {
        movies: {}
    }

    componentDidMount() {
        this.getMovies();
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            this.getMovies()
        }
    }



    getMovies=()=>{

    }
    render() {


        return (

                <div className="movies-list">
                    {this.state.movies.map((movie,key)=>(
                        <MovieCard movie={movie} key={key}/>))};
                </div>

    }
}


export default Search;