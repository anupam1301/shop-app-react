import React, { Component } from 'react';

class DisplayItems extends Component {



    render() {
    var name=this.props.name;
    var desc=this.props.desc;
    var price=(this.props.price)/100;
    var images=this.props.images;
    var imid=this.props.imid;



        var file = images.find(function (el) {

           return imid === el.id;
        });



        return (
            <div>
                <img src={file.link.href} style={{width: '150px', height: '200px'}} alt="image not found." /><br />
                <h4>{name}</h4><br />
                {desc}<br />
                <h5>$ {price}</h5><br />
                <button>Add To Cart</button>
            </div>
        );
    }
}

export default DisplayItems;