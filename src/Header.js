import React, { Component } from 'react';


class  Header extends Component {

    state = { 
        global_count: this.props.glb
     } 

    render() { 
        return (
            
            <div>
                <h4 className='m-2' >
                    {this.props.glb !== 0 ? 'You have ' + this.props.glb  + ' items in your cart' : 'No items in the cart'}
                </h4>
            </div>
        );
    }
}
export default Header;