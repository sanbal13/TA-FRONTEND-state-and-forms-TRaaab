import React from 'react';
import Cards from './Cards';
import data from '../data.json';

class Tags extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'All',
    };
  }
  render() {
    return (
        <>
      <center className="tags">
        {['All', 'Breakfast', 'Lunch', 'Shakes'].map((item) => {
          return (
            <span
              className= {this.state.active === item ? 'tag active' : 'tag'}
              key={item}
              onClick={() =>
                this.setState({
                  active: item 
                })
              }
            >
              {item}
            </span>
          );
        })}
      </center>
      {data.map((item) => {
          console.log(item.category, this.state.active);
          return item.category === this.state.active
        })
      }
        <Cards data = {this.state.active === 'All' ? data :data.filter((item) => item.category === this.state.active.toLowerCase())} />
      </>
    );
  }
}

export default Tags;
