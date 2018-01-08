import React, { Component } from 'react';
import './TestItem.css';

class TestItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      username: '',
      email: ''
    }
  }
  componentDidMount(){
    this.setState({
      id: this.props.id,
      username: this.props.username,
      email: this.props.email
    });

    this.onRemoveUser = this.onRemoveUser.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }

  onChangeUserName(event) {
    const value = event.target.value;
    this.setState({
      username: value
    });

    this.props.editUserName(this.state.id, value);
  }

  onChangeEmail(event) {
    const value = event.target.value;
    this.setState({
      email: value
    });

    this.props.editEmail(this.state.id, value);
  }

  onRemoveUser() {
    console.log(this.props.username);
    this.props.removeUser(this.state.id);
  }
  render() {

    return (
      <div className="test-item">
        <div className="username">
          <input type="text" placeholder="username" value={this.state.username} onChange={event => this.onChangeUserName(event)} />
        </div>
        <div className="email">
          <input type="email" placeholder="email" value={this.state.email} onChange={event => this.onChangeEmail(event)} />
        </div>
        <div className="remove">
          <button onClick={this.onRemoveUser}>Remove</button>
        </div>
      </div>
    );
  }
}

export default TestItem;