import React, { Component } from "react";

class Layout extends Component {

    state = {

        value: this.props.count,
        name: this.props.name
    };

    render(){
        return (
            <div>
                <ul>                 
                    <li className="" > 
                    {this.state.name}
                        <button onClick={() => {
                            this.setState({value: this.state.value +1})
                        }} className="btn btn-primary m-1">+</button>
                        <button onClick={ () => {
                            this.setState({value: this.state.value -1})
                        }} className="btn btn-danger m-1">-</button>
                        <span className="badge bg-warning text-dark m-1 ">{this.state.value}</span>
                    </li>
                </ul>
            </div>
        );
    };
}
export default Layout;