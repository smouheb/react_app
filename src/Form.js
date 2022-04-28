import React, { Component } from 'react';

class Form extends Component {
    state = { 
        name: '',
        lastname: '',
        form:''
     } 

     handleInsert = data => {
        data.target.name === 'name' ? 
        this.setState({name: data.target.value}) : this.setState({lastname: data.target.value});
     };

     handleSubmit = data => {
        this.props.onSubmit({
            name: data.target.name.value, 
            lastname: data.target.lastname.value
        });
        data.preventDefault();
     }


    render() { 
        return (
            <form onSubmit={this.handleSubmit} >
                <div>
                    <label>Name</label>
                </div>
                <div>
                    <input  name='name' className='m-1' onChange={this.handleInsert} value={this.state.name}/>
                </div>
                <div>
                    <label>Lastname</label>
                </div>
                <div>
                    <input name='lastname' className='m-1' onChange={this.handleInsert} value={this.state.lastname}/> 
                </div>  
                <div>
                    <br/>
                    <input type="submit" className='btn btn-success'/>
                </div>             
            </form>
        );
    }
}
 
export default Form;