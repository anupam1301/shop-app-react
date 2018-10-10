import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';

class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <div id="main-content">
                    <p id="heading1"> Shopping App</p>
                    <img src={logo} className="App-logo" alt="logo" />

                    <Main />

                </div>
                <div id="sidebar">

                </div>
            </header>



            </div>
    );
    }
}

export default App;