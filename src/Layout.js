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
                    <li style={{listStyleType:'none'}} className="" > 
                        <button onClick={() => {
                            this.setState({value: this.state.value +1});
                            this.props.onCalculate('+');
                        }} className="btn btn-primary m-1">+</button>
                        <button onClick={ () => {
                            this.state.value > 0 ? this.setState({value: this.state.value -1}) : this.setState({value: this.state.value});
                            this.state.value!== 0 && this.props.onCalculate('-');
                        }} className="btn btn-danger m-1">-</button>
                        <span className="badge bg-warning text-dark m-1 ">{this.state.value}</span>
                        {this.state.name}
                    </li>
                </ul>
            </div>
        );
    };
}
export default Layout;