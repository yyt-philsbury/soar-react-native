import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Button, Icon, Left, Right } from 'native-base';

function getListItemComponent(text, navigate) {
  
  var listArg = {id: text};
  
  return  <ListItem>
            <Left>
              <Text>{text}</Text>
            </Left>
            <Right>
              <Button transparent onPress={() => navigate("PhysicianProfileScreenKey", listArg)}>
                <Icon name="arrow-forward" />
              </Button>
            </Right>
          </ListItem>;
}

export default class ManagePhysicianScreen extends Component {
  
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
    
    const { navigate } = this.props.navigation;
    
    var items = [
      'Simon Mignolet',
      'Nathaniel Clyne',
      'Dejan Lovren',
      'Mama Sakho',
      'Emre Can'
    ];
    return (
      <Container>
        <Content>
          <List dataArray={items}
            renderRow={(item) => getListItemComponent(item, navigate)}>
          </List>
        </Content>
      </Container>
    );
  }
}