import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import { gateway as MoltinGateway } from '@moltin/sdk';
import DisplayCart from "./DisplayCart";
import $ from 'jquery';

const Moltin = MoltinGateway({
    client_id: 'SCJp18sLGv7Ia3I6igslkmGxyRIGzlYaLXXRQoTVd6'
});

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            cart:'0',
            cartData:[]
            }
    }
    checkOut(a){
        alert("Products of total amount "+a+" checked Out. Thanks for Shopping.");
        Moltin.Cart().Delete();
        $("#chkOut").hide();
    }

    render() {

        const dis=this;

        const cart =Moltin.Cart()
            .Items()
            .then(cart => {debugger;


            dis.setState({cartData:cart.data});

              var cartVal= "$"+(cart.meta.display_price.with_tax.amount)/100;
              dis.setState({cart:cartVal});
            });

        var dispCart=this.state.cartData.map((dat, i) => {


            return <DisplayCart thisPtr={dis} name={dat.name} quantity={dat.quantity} tid={dat.id} uid={dat.product_id} key={i} ki={i} /> ;

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
                    {dispCart}<br />
                    <button id="chkOut" onClick={()=>this.checkOut(this.state.cart)}>Proceed to Checkout</button>

                </div>
            </header>



            </div>
    );
    }
}

export default App;