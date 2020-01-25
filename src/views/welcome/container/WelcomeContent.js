import React, {Component} from 'react';
import movies from "../../../shared/movies";
import MovieCard from "../component/MovieCard";
import axios from 'axios';
import Loader from "../../../component/Loader/Loader";
class WelcomeContent extends Component {
    state={
        movies:[],
        isLoading:true,
    };
    componentDidMount() {
        axios.get('https://yts.lt/api/v2/list_movies.json')
            .then(res=>
        this.setState({
            movies:res.data.data.movies,
            isLoading:false
        }))
    }

    render() {
        let content=(
            <div className='movie-list'>
                {this.state.movies.map(movie => (<MovieCard movie={movie}/>))}
            </div>
        )
        return (<div className="welcome-content">
                <h1>list of movies</h1>
                {this.state.isLoading?<Loader/>:content}

            </div>
        );
    }
}

export default WelcomeContent;