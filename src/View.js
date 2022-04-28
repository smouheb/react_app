import React, { Component } from 'react';
import Layout from './Layout';
import Header from './Header';
import Form from './Form';

class View extends Component {

    state = {
        product: [
            {id: 1, name: "usb" , count_item: 0},
            {id: 2, name: "laptop" , count_item: 0},
            {id: 3, name: "mobile" , count_item: 0}
        ],
        glb: 0,
        
    }

    handleData = payload => {   
       console.log(payload.name, payload.lastname);

    }


    handleRequest = counterType => {
        counterType === '+' ? this.setState({glb: this.state.glb + 1 }): this.setState({glb: this.state.glb - 1});
    }
   
    handleClick = indicator =>{
       indicator === '+' ? this.setState({glb: this.state.glb +1}): this.setState({glb: this.state.glb  - 1});
    }

    render(){

        return (
            <div>
                <Header glb={this.state.glb }/>
                {this.state.product.map(prod => <Layout onCalculate={this.handleRequest} key={prod.id} id={prod.id} count={prod.count_item} name={prod.name} />)}
                <Form onSubmit={this.handleData}/>
            </div>
        );
    };
}
export default View;