import React from 'react';
import Header from './Header';
import Heading from './Heading';
import Form from './Form';
import Image from './Image';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }
  render() {
    let index = this.state.index;
    return (
      <div className="container">
        <Image index={index} />
        <div className="form">
          <Header index={index} />
          <Heading index={index} />
          <form>
            <Form index={this.state.index}/>            
            <div className="buttons">
              <input type="button" value="Back" className={this.state.index === 0 ? "no-display":"" } onClick={() => this.setState({index: this.state.index-1})}/>
              <input type="button" value="Next Step" className={this.state.index=== 2 ? "no-display":"" } onClick={() => this.setState({index: this.state.index +1})}/>
              <input type="submit" value="Submit" className={this.state.index !== 2 ? "no-display":"" }/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
