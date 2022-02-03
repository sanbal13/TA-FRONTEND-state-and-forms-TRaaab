import data from '../data';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }
  render() {
    return (
      <div className="container">
        <ul>
          {data.map((question, i) => {
            return (
              <li key={i}>
                <div
                  className={this.state.active === i ? 'flex question question-active' : 'flex question'}
                  onClick={() =>
                    this.state.active === i
                      ? this.setState({ active: '' })
                      : this.setState({ active: i })
                  }
                >
                  <h3>{question.Q}</h3>
                  {this.state.active === i ? (
                    <i className="far fa-hand-point-up"></i>
                  ) : (
                    <i className="far fa-hand-point-down"></i>
                  )}
                </div>
                <p
                  className={this.state.active === i ? 'show answer' : 'answer'}
                >
                  {question.A}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
