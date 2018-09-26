import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Container, Text, Header, Left, Subtitle } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Expo from "expo";

var sampleBiometricData = [
  
]

function getDisplayComponent(title, text) {
  return (
    <Grid>
      <Row><Text>{title}</Text></Row>
      <Row><Text>{text}</Text></Row>
    </Grid>
  );
}

export default class PatientDetailsScreen extends Component {
  
  static navigationOptions = {
    title: 'Soar Healthcare',
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
    const id = this.props.navigation.getParam('id', 'default')
    
    return (
      <Container>
        <Grid>
          <Col size={3}>
            <FlatList
              data={[{key: 'a', title:'name', text:id}, {key: 'b',title:'sample title', text:'sample text'}]}
              renderItem={({item}) => getDisplayComponent(item.title, item.text)}
            />
          </Col>
          <Col size={5} style={{backgroundColor: "#00bfff"}}>
            <FlatList
              data={[{key: 'c'}, {key: 'd'}]}
              renderItem={({item}) => <Text>{item.key}</Text>}
            />
          </Col>
        </Grid>
      </Container>
    );
  }
}