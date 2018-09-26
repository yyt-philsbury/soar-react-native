import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Text, Footer, FooterTab, Icon, Content } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

function nextRendering(currQuestion, questionTotal, navigate, goBack) {

  let icon;
  let text;
  let func;

  if (currQuestion == questionTotal) {
    func = () => goBack();
    icon = <Icon name="md-checkmark"></Icon>;
    text = <Text>Finish</Text>;
    
  }
  else {
    func = () => navigate('QuestionnaireScreenKey',
                                {currQuestion: currQuestion + 1,
                                  questionTotal: questionTotal});
    icon = <Icon name="arrow-forward"></Icon>;
    text = <Text>Next</Text>
  }
  
  return <Button onPress={func}>
          {icon}
          {text}
         </Button>
}

function prevRendering(currQuestion, questionTotal, navigate, goBack) {

  let text;
  let func;

  if (currQuestion == 1) {
    func = () => goBack();
    text = <Text>Previous</Text>;
  }
  else {
    func = () => navigate('QuestionnaireScreenKey',
                          {currQuestion: currQuestion - 1,
                           questionTotal: questionTotal});
    text = <Text>Previous</Text>
  }
  
  return <Button onPress={func}>
          <Icon name="arrow-back"></Icon>
          {text}
         </Button>
}

export default class QuestionnaireScreen extends Component {
  
  static navigationOptions = {
    title: "Soar Healthcare",
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
    const { goBack } = this.props.navigation;
    const currQuestion = this.props.navigation.getParam('currQuestion', 1);
    const questionTotal = this.props.navigation.getParam('questionTotal', 10);
    
    return (
      <Container>
        <Header>
          <Left>
            <Subtitle>Question {currQuestion} of {questionTotal}</Subtitle>
          </Left>
        </Header>
        <Content />
        <Footer>
          <FooterTab>
          {prevRendering(currQuestion, questionTotal, navigate, goBack)}
          {nextRendering(currQuestion, questionTotal, navigate, goBack)}
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}