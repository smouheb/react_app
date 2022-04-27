import React, { Component } from 'react';
import Layout from './Layout';
import Header from './Header';

class View extends Component {

    state = {
        product: [
            {id: 1, name: "USB" , count_item: 0},
            {id: 2, name: "LAPTOP" , count_item: 0},
            {id: 3, name: "MOBILE" , count_item: 0}
        ],
        glb: 0
    }
   
    handleClick = indicator =>{
       indicator === '+' ? this.setState({glb: this.state.glb +1}): this.setState({glb: this.state.glb  - 1});
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