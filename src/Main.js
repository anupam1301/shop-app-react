import React, { Component } from 'react';
import { gateway as MoltinGateway } from '@moltin/sdk';

const Moltin = MoltinGateway({
    client_id: 'Ow3jZEuoZ8oLeb2wdLJxBLh3d1aVEFDNvOboeB3p4U'
});


class Main extends Component {
    render() {
        const products = Moltin.Products.All().then((products) => {
            debugger;
            console.log(products);
        });
        return (
            <div>
            ashdkjajskd
            </div>
    );
    }
}

export default Main;