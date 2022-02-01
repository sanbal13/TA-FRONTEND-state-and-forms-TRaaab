import React from 'react';
import Counter from './Counter'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
            <h1>Welcome to Counter App</h1>
            <Counter />
            
            </>
        );
    }
}

export default App;