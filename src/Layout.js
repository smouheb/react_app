import React, { Component } from "react";

class Layout extends Component {

    state = {
        count_global: 0,
        value: this.props.count,
        name: this.props.name
    };

    render(){
        return (
            <div>
                <ul style={{listStyleType:'none', fontWeight: "bold"}} value={this.state.value}>                 
                    <li className="" > 
                        <button onClick={ () => {
                            this.state.value > 0 ? this.setState({value: this.state.value - 1}) : this.setState({value: 0});
                            this.props.onMyClick('-');   
                        }} 
                        className="btn btn-danger">-</button>
                        <button onClick={() => {                            
                            this.setState({ value: this.state.value +1 });
                            this.props.onMyClick('+');
                                                       
                        }} className="btn btn-primary m-1">+</button>
                        {this.state.name}
                        <span className="badge bg-warning text-dark m-1 ">{this.state.value}</span>
                    </li>
                </ul>
            </div>
        );
    };
}
export default Layout;