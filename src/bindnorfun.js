import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component {
    constructor(props){
        super(props);
        this.shoot = this.shoot.bind(this)
    }

    shoot(){
        alert(this)
        /* thanks to the binding in the constructor function,
        the this keyword now refers to the component object */
    }

    render() {
        return (
            <button onClick={this.shoot}>take a shot!</button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById('bindnorfun'))