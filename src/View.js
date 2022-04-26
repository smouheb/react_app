import React, { Component } from 'react';
import Layout from './Layout';

class View extends Component {

    state = {
        product: [
            {id: 1, name: "usb" , count_item: 0},
            {id: 2, name: "laptop" , count_item: 0},
            {id: 3, name: "mobile" , count_item: 0}
        ]
    }
   
    render(){
        return (
            <div>
                {this.state.product.map(prod => <Layout key={prod.id} id={prod.id} count={prod.count_item} name={prod.name}/>)}
            </div>
        );
    };
}
export default View;