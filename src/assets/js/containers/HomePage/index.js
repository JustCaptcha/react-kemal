import React, { Component } from 'react';
import "./index.css";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="homePage">
                <h1>React + Kemal</h1>
            </div>
        );
    }
}

export default HomePage;