import React, { Component } from 'react';


class  Header extends Component {

    state = { 
        global_count: this.props.glb
     } 
     
    render() { 
        return (
            <div>
                <h1>You have {this.props.glb} items in your cart</h1>
            </div>
        );
    }
}
 

export default Header;