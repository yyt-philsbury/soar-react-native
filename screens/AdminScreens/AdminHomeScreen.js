import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Text, } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Expo from "expo";

export default class AdminHomeScreen extends Component {
  
  static navigationOptions = {
    title: 'Admin Homepage',
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

    return (
      <Container>
        <Grid>
          <Col size={1}></Col>
          <Col size={4}>
            <Row size={1}/>
            <Row size={2}>
              <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                          }}>
                  <Button full rounded info onPress={() => navigate('ManagePhysicianScreenKey')}>
                    <Text>Manage Physician Account</Text>
                  </Button>
                  <Button full rounded success onPress={() => navigate('PatientCheckinScreenKey')}>
                    <Text>Patient Check-in</Text>
                  </Button>
                  <Button full rounded warning onPress={() => navigate('LoginBottomTabNavigatorKey')}>
                    <Text>Sign Out</Text>
                  </Button>
              </View>
            </Row>
            <Row size={1}/>
          </Col>
          <Col size={1}></Col>
        </Grid>
      </Container>
    );
  }
}