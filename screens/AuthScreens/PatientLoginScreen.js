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
    tabBarLabel: "Patient Login",
  };
  
  render() {
    
    const { navigate } = this.props.navigation;
    
    return (
      <Container>
        <Content>
          <Form>
            <FormItem floatingLabel>
              <Label>Healthcard Number</Label>
              <Input />
            </FormItem>
            <Grid>
              <Col/>
              <Col>
                <Button info rounded style={{ marginTop: 10 }} onPress={() => navigate('QuestionnaireScreenKey')}>
                  <Text>        Sign In        </Text>
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