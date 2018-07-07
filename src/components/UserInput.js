import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  change = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {username: this.state.username, hometown: this.state.hometown}
    })
    this.setState({username: '', hometown: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submit}>
          <label>UserName</label>
          <input type="text" name="username" value={this.state.username} onChange={this.change}/>
          <label>HomeTown</label>
          <input type="text" name="hometown" value={this.state.hometown} onChange={this.change}/>
          <input type="submit" value="SUBMIT"/>
        </form>
      </div>
    );
  }
};

export default UserInput;

