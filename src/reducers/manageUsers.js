
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(event) => this.handleChange(event)}
              placeholder="username" />
          </p>
          <p>
            <input
              type="text"
              name="hometown"
              value={this.state.hometown}
              onChange={(event) => this.handleChange(event)}
              placeholder="hometown" />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }


export default function manageUsers(state, action){
}
