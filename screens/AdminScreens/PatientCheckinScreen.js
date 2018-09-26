import React, { Component } from 'react';
import {Constants} from 'expo'
import {
  Container,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
  Icon,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Right,
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

function getListItemComponent(text, navigate) {
  
  var listArg = {id: text};
  
  return  <ListItem>
            <Left>
              <Text>{text}</Text>
            </Left>
            <Right>
              <Button transparent>
                <Icon name="add" />
              </Button>
            </Right>
          </ListItem>;
}

export default class PatientCheckinScreen extends Component {
  
  static navigationOptions = {
    title: 'Patient Check-in',
    headerStyle: {
      backgroundColor: '#6698FF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  
  constructor(props) {
    super(props);
    this.state = {checkedIn: false};
  }
  
  _patientCheckin() {
    this.setState(state => ({checkedIn: !state.checkedIn}));
  }
  
  _renderList(items, navigate) {
    if (this.state.checkedIn) {
      return  <List dataArray={items}
                renderRow={(item) => getListItemComponent(item, navigate)}>
              </List>
    }
    else
      return null;
  }
  
  render() {
    
    const { navigate } = this.props.navigation;
    
    var items = [
      'Dr. Bob Hope',
      'Dr. Cheryl Godel',
      'Dr. Jon Neumann',
    ];
    
    return (
      <Container>
        <Content>
          <Form>
            <FormItem floatingLabel>
              <Label>Healthcard Number</Label>
              <Input />
            </FormItem>
            <Grid>
              <Col size={1}/>
              <Col size={1}>
                <Button info rounded style={{ marginTop: 10 }} onPress={this._patientCheckin.bind(this, 0)}>
                  <Text>Check in patient</Text>
                </Button>
              </Col>
              <Col size={1}/>
            </Grid>
          </Form>
          {this._renderList(items, navigate)}
        </Content>
      </Container>
    );
  }
}