import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import { gateway as MoltinGateway } from '@moltin/sdk';

const Moltin = MoltinGateway({
    client_id: 'SCJp18sLGv7Ia3I6igslkmGxyRIGzlYaLXXRQoTVd6'
});

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            cart:'0'
            }
    }

    render() {
        const dis=this;

        const cart =Moltin.Cart()
            .Items()
            .then(cart => {
              var cartVal= "$"+(cart.meta.display_price.with_tax.amount)/100;
              dis.setState({cart:cartVal});
            });

        return (
            <div className="App">
            <header className="App-header">
                <div id="main-content">
                    <p id="heading1"> Shopping App</p>
                    <img src={logo} className="App-logo" alt="logo" />

                    <Main thisPtr={dis} />

                </div>
                <div id="sidebar"><br />
                    <header>Cart(<span id="cartValue">{this.state.cart}</span>)</header><br />
                </div>
            </header>



            </div>
    );
    }
}

export default App;