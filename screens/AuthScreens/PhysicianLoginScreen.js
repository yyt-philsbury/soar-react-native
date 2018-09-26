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
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class PhysicianLoginScreen extends Component {
  
  static navigationOptions = {
    tabBarLabel: "Physician Login",
  };
  
  render() {
    
    const { navigate } = this.props.navigation;
    
    return (
      <Container>
        <Content>
          <Form>
            <FormItem floatingLabel>
              <Label>Physician Username</Label>
              <Input />
            </FormItem>
            <FormItem floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </FormItem>
            <Grid>
              <Col/>
              <Col>
                <Button info rounded style={{ marginTop: 10 }} onPress={() => navigate('PhysicianAppNavigatorKey')}>
                  <Text>        Login        </Text>
                </Button>
              </Col>
              <Col/>
            </Grid>
          </Form>
        </Content>
      </Container>
    );
  }
}