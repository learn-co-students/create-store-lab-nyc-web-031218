import React, { Component } from 'react';

class UserInput extends Component {
  state={
    username: "",
    hometown: ""
  }

  onChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch(
      {
        type: 'ADD_USER',
        user: this.state
      })

  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> username </label>
          <input type="text" value={this.state.username} name="username" onChange={this.onChange}/>
          <label> hometown </label>
          <input type="text" value={this.state.hometown} name="hometown" onChange={this.onChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
