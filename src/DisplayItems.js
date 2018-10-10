import React, { Component } from 'react';

class DisplayItems extends Component {



    render() {
    var name=this.props.name;
    var desc=this.props.desc;
    var price=(this.props.price)/100;

        return (
            <div>
                {name}<br />
                {desc}<br />
                $ {price}<br />
            </div>
        );
    }
}

export default DisplayItems;