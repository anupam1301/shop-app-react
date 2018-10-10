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
            products:[],
            images:[]

        }
    }

    render() {
        const that= this;

        Moltin.Products.With('main_image').All().then((products) => {
            debugger;
            console.log(products);
            that.setState({ products: products.data, images:products.included.main_images});
        });

        var dispData = this.state.products.map((dat, i) => {
            debugger;
            return <DisplayItems name={dat.name} images={this.state.images} imid={dat.relationships.main_image.data.id} price={dat.price[0].amount} desc={dat.description} uid={dat.id} key={i} ki={i}/> ;

        });

        return (
            <div id="datalist">
                {dispData}
            </div>
    );
    }
}

export default Main;