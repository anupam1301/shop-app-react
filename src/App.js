import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';

class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <p id="heading1"> Shopping App</p>
            <img src={logo} className="App-logo" alt="logo" />

                <div id="sidebar">

                </div>

                <Main />

            </header>



            </div>
    );
    }
}

export default App;