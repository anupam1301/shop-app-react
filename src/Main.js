import React, { Component } from 'react';
import { gateway as MoltinGateway } from '@moltin/sdk';
import DisplayItems from './DisplayItems';

const Moltin = MoltinGateway({
    client_id: 'SCJp18sLGv7Ia3I6igslkmGxyRIGzlYaLXXRQoTVd6'
});


class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            products:[]

        }
    }

    render() {
        const that= this;
        var arr=[];
        const products = Moltin.Products.All().then((products) => {
            debugger;
            console.log(products);
            that.setState({ products: products.data});
        });

        var dispData = this.state.products.map((dat, i) => {
            debugger;
            return <DisplayItems name={dat.name} price={dat.price[0].amount} desc={dat.description} uid={dat.id} key={i} ki={i}/> ;

        });

        return (
            <div id="datalist">
                {dispData}
            </div>
    );
    }
}

export default Main;