import React, { Component } from 'react';
import Layout from './Layout';
import Header from './Header';

class View extends Component {

    state = {
        product: [
            {id: 1, name: "usb" , count_item: 0},
            {id: 2, name: "laptop" , count_item: 0},
            {id: 3, name: "mobile" , count_item: 0}
        ],
        glb: 0
    }
   
    handleClick = id =>{
        console.log(id);
    }

    render(){
               
        return (
            <div>
                <Header  glb={this.state.glb}/>
                {
                this.state.product.map(
                    prod => <Layout onMyClick={this.handleClick} key={prod.id} id={prod.id} count={prod.count_item} name={prod.name} />         
                )}
            </div>
        );
    };
}
export default View;