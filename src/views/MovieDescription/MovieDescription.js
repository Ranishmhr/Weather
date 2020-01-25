import React, {Component} from 'react';
import axios from 'axios';


class MovieDescription extends Component {
    state={
        movie:{}
    };
    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('https://yts.lt/api/v2/movie_details.json?movie_id='+this.props.match.params.id).then(
            res=>{
                this.setState({
                    movie:res.data.data.movie
                });
            }
        ).catch(err=>console.log(err));
    }
    render() {
        return (
                    <div className='movie-detail'>
                        <div className={"movie-cover"}>
                            <img src={this.state.movie.medium_cover_image} alt=""/>>
                        </div>
                        <div className="movie-title">{this.state.movie.title}</div>
                        <div className="movie-genre">{this.state.movie.genres}</div>
                        <div className="movie-description">{this.state.movie.description_full}</div>
                        <div className={"movie-download"}


                        >{this.state.movie.downlaod}</div>
                    </div>

        );
    }
}

export default MovieDescription;