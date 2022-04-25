import React, { Component } from "react";

class Layout extends Component {

    state = {
        count: 0,
        product: ["usb", "laptop", "mobile"]
    };
  
    render(){

        return (
            <div>
                <h1>Hello Guys!!! 
                    <span className="badge bg-warning text-dark">{this.state.count}</span>
                </h1>
                <ul className="list-group">
                    {this.state.product.map((e)=> {
                        return(
                        <li className="list-group-item">
                            <button onClick={() => {
                                this.setState({count: this.state.count + 1});
                            }} className="btn btn-success m-1">+</button>
                            <button onClick={() => {
                                this.state.count > 0 ? this.setState({count: this.state.count - 1}): this.setState({count: this.state.count  = 0});
                            }} className="btn btn-primary m-1">-</button>
                            <span className="m-1 fs-1">{e}</span>                    
                        </li>
                        );
                    })}
                </ul>
                
            </div>
        );
    }
}
export default Layout;