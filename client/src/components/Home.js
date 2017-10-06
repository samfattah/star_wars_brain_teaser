import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Planets from './Planets';

class Home extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>Home Component</Header>
    );
  }
}

export default Home;
