import React, { Component } from 'react';


class  Header extends Component {

    state = { 
        global_count: this.props.glb
     } 

    render() { 
        return (
            <div>
                <h4 >
                    {this.state.global_count !== 0 ? 'You have ' + this.state.global_count  +' items in your cart' : 'No items in the cart'}
                </h4>
            </div>
        );
    }
}
export default Header;