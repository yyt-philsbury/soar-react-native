import React, { Component } from 'react';
import { Container, Header, Content, Text, Button} from 'native-base';
export default class PhysicianProfileScreen extends Component {
  
  static navigationOptions = {
    title: 'Physician List',
    headerStyle: {
      backgroundColor: '#6698FF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  
  render() {
    
    const name = this.props.navigation.getParam('id', 'no ID');
    
    return (
      <Container>
        <Content>
          <Text>{name}</Text>
          <Button full error><Text>Delete profile</Text></Button>
        </Content>
      </Container>
    );
  }
}