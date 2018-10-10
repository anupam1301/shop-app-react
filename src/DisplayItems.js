import React, { Component } from 'react';
import { gateway as MoltinGateway } from '@moltin/sdk';

const Moltin = MoltinGateway({
    client_id: 'SCJp18sLGv7Ia3I6igslkmGxyRIGzlYaLXXRQoTVd6'
});

class DisplayItems extends Component {

onButtonClick(u,n,t){
    // var cartId=document.getElementById("cartValue").innerHTML;

    Moltin.Cart().AddProduct(u, 1).then((item) => {

        alert(`Added ${n} to your cart`);
    }).catch((e)=>{alert(e.errors[0].detail)});

    const cart =Moltin.Cart()
        .Items()
        .then(cart => {debugger;
          var cartVal= "$"+(cart.meta.display_price.with_tax.amount)/100;
          t.setState({cart:cartVal});

        });


}

    render() {
    var name=this.props.name;
    var desc=this.props.desc;
    var price=(this.props.price)/100;
    var images=this.props.images;
    var imid=this.props.imid;
    var uid= this.props.uid;
    var dis=this.props.thisPtr;




        var file = images.find(function (el) {

           return imid === el.id;
        });



        return (
            <div>
                <img src={file.link.href} style={{width: '150px', height: '200px'}} alt="not found." /><br />
                <h4>{name}</h4><br />
                {desc}<br />
                <h5>$ {price}</h5><br />
                <button onClick={()=>this.onButtonClick(uid,name,dis)}>Add To Cart</button>
            </div>
        );
    }
}

export default DisplayItems;