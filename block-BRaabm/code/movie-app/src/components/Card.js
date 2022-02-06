import React from 'react';
import Modal from './Modal';
import data from '../data.json';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {          
            activeMovie: ''
        };
    }
    showModal = (title) => {
        let movie = data.find((movie) => movie.Title === title);
        console.log(movie);
        this.setState((prevState) => {
            return {               
                activeMovie: movie
            }
        });
    }


    render() {
        const movie = this.props.movie;
        return (<>                  
                <div className="card">
                    <div className='image'>
                    <img className='poster' src={movie.Images[0]} alt="{this.props.movie.Title}" />
                    </div>
                    <h3 className="title">{movie.Title}</h3>
                    <div className='releaseDate'>Release Date: {movie.Released}</div>
                    <button className='more-info' onClick={() => this.showModal(movie.Title)}>More Info</button>
                </div>      
                <Modal movie={this.state.activeMovie} />          
                </>          
        );
    }
}

export default Card;