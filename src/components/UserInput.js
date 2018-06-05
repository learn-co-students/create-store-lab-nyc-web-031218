import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  handleChange(event) {
    if (event.target.name === 'username') {
      this.setState({
        username: event.target.value,
      })
    } else if (event.target.name === 'hometown') {
      this.setState({
        hometown: event.target.value,
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state,
    })
    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Username: </label>
            <input
              type='text'
              name='username'
              value={this.state.username}
              onChange={(event)=>this.handleChange(event)} />
            <label>Hometown: </label>
            <input
              type='text'
              name='hometown'
              value={this.state.hometown}
              onChange={(event)=>this.handleChange(event)} />
            <input type='submit' />
          </p>
        </form>
      </div>
    );
  }
};

export default UserInput;
