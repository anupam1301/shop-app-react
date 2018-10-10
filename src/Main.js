import React, { Component } from 'react';
import { gateway as MoltinGateway } from '@moltin/sdk';

const Moltin = MoltinGateway({
    client_id: 'SCJp18sLGv7Ia3I6igslkmGxyRIGzlYaLXXRQoTVd6'
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