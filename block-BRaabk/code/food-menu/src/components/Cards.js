import React from 'react';
import Card from './Card';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        return (<div className="flex flex-wrap">
            {this.props.data.map((item) => <Card key = {item.id} data={item}/>)}
            </div>
        );
    }
}

export default Cards;