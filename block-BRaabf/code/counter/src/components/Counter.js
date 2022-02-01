import React from 'react';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,
      max: Math.pow(10, 1000)
    };
  }
  handleIncrement = () => {
    console.log('Increment called');
    const newCounter = this.state.counter +this.state.step;
    this.setState({
      counter: newCounter < this.state.max ? newCounter : this.state.max,
    });
  };
  handleDecrement = () => {
    console.log('Decrement called');
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };
  handleReset = () => {
    console.log('Reset called');
    this.setState({
      counter: 0,
    });
  };
  setStep = (stepSize) => {
    console.log('setStep called');
    this.setState({
      step: stepSize,
      counter: 0
    });
  };
  setMax = (max) => {
      this.setState ({
          max: max
      });
  }

  render() {
    let step_button = [5, 10, 15];
    let max_value = [15, 100, 200];
    return (
      <>
        <h2>{this.state.counter}</h2>
        <div className="flex justify-center">
        <div className="step_button">
        <h3> Steps </h3>
          {step_button.map((step) => {
            return (
              <button
                className={this.state.step === step ? 'active' : ''}
                key={step}
                onClick={() => this.setStep(step)}
              >
                {step}
              </button>
            );
          })}
        </div>
        <div className="max_button">
        <h3> Max Value </h3>
          {max_value.map((max) => {
            return (
              <button
                className={this.state.max === max ? 'active' : ''}
                key={max}
                onClick={() => this.setMax(max)}
              >
                {max}
              </button>
            );
          })}
        </div>
        </div>
        <div className="function_button">
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </>
    );
  }
}

export default Counter;
