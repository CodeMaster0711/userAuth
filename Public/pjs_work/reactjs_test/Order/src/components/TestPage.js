import React, { Component } from 'react';
import axios from 'axios';
import TestItem from './TestItem';

class TestPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }

    this.removeUser = this.removeUser.bind(this);
    this.editUserName = this.editUserName.bind(this);
    this.editEmail = this.editEmail.bind(this);
  }
  componentDidMount(){
    var root = 'https://jsonplaceholder.typicode.com/users';    
    axios.get(root)
    .then(res => {
      this.setState({
        users: res.data
      });
    });
  }

  removeUser(id) {
    var tmpAry = Object.keys(this.state.users).map(key => this.state.users[key]);
    var index;
    for (index in tmpAry) {
      if (tmpAry[index].id === id)
        break;
    }

    tmpAry.splice(index, 1);
    
    this.setState({
      users: tmpAry
    });
  }

  editUserName(id, username) {
    var tmpAry = Object.keys(this.state.users).map(key => this.state.users[key]);
    var index;
    for (index in tmpAry) {
      if (tmpAry[index].id === id)
        break;
    }
    tmpAry[index].username = username;

    this.setState({
      users: tmpAry
    });
    console.log(this.state.users);
  }

  editEmail(id, email) {
    var tmpAry = Object.keys(this.state.users).map(key => this.state.users[key]);
    var index;
    for (index in tmpAry) {
      if (tmpAry[index].id === id)
        break;
    }
    tmpAry[index].email = email;

    this.setState({
      users: tmpAry
    });
  }

  render() {
    return (
      Object.keys(this.state.users).map(key => <TestItem key={this.state.users[key].id} id={this.state.users[key].id} 
        username={this.state.users[key].username} 
        email={this.state.users[key].email} 
        editUserName={this.editUserName} 
        editEmail={this.editEmail}
        removeUser={this.removeUser}
      />)
    );
  }
}

export default TestPage;