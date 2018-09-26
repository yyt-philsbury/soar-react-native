import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Button, Icon, Left, Right } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

function getListItemComponent(text, navigate) {
  
  var listArg = {id: text};
  
  return  <ListItem>
            <Left>
              <Grid>
                <Row><Text>{text}</Text></Row>
                <Row><Text>Questionnaire complete!</Text></Row>
              </Grid>
            </Left>
            <Right>
              <Button transparent onPress={() => navigate("PatientDetailsScreenKey", listArg)}>
                <Icon name="arrow-forward" />
              </Button>
            </Right>
          </ListItem>;
}

export default class PhysicianHomeScreen extends Component {
  
  static navigationOptions = {
    title: 'Patient List',
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