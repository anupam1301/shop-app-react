import React, { Component } from 'react';
import { gateway as MoltinGateway } from '@moltin/sdk';

const Moltin = MoltinGateway({
    client_id: 'SCJp18sLGv7Ia3I6igslkmGxyRIGzlYaLXXRQoTVd6'
});

var x=Moltin.Cart();
debugger;


class DisplayCart extends Component {

    onAdd(u,n,t){
        debugger;
        Moltin.Cart().AddProduct(u, 1).then((item) => {

            alert(`Added ${n} to your cart`);
        }).catch((e)=>{alert(e.errors[0].detail)});

        const cart =Moltin.Cart()
            .Items()
            .then(cart => {
                var cartVal= "$"+(cart.meta.display_price.with_tax.amount)/100;
                t.setState({cart:cartVal});

            });

    }

    onSub(u,n,t){
        debugger;
        Moltin.Cart().RemoveItem(u, 1).then((item) => {

            alert(`Removed ${n} from your cart`);
        }).catch((e)=>{debugger;
            alert(e.errors[0].detail)});

        const cart =Moltin.Cart()
            .Items()
            .then(cart => {
                var cartVal= "$"+(cart.meta.display_price.with_tax.amount)/100;
                t.setState({cart:cartVal});

            });
    }

    render() {
        var name=this.props.name;
        var quant= this.props.quantity;
        var uid=this.props.uid;
        var dis=this.props.thisPtr;
        var tid=this.props.tid;


        return (
            <div>
             -----------------------------<br />
                {name}<br />
                <button onClick={()=>this.onSub(uid,name,dis)}>-</button>{quant}<button onClick={()=>this.onAdd(uid,name,dis)}>+</button><br />
             -----------------------------

            </div>
        );
    }
}

export default DisplayCart;