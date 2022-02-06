import React from 'react';
import data from '../data.json';
import Card from './Card';
class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="flex flex-wrap container">
            {data.map(movie => {
                return <Card key={movie.Title} movie={movie}/>                    
            })}
            </div>
        );
    }
}

export default Movies;