import React, { Component } from "react";
import { StyleProvider } from "native-base";
import getTheme from "../native-base-theme/components";
import variables from "../native-base-theme/variables/commonColor";
import AppEntryPoint from "../screens/";
import Expo from "expo";

export default class Setup extends Component {
  
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }
  
  render() {
        
    if(this.state.loading)
      return <Expo.AppLoading />;
    
    return (
      <StyleProvider style={getTheme(variables)}>
        <AppEntryPoint/>
      </StyleProvider>
    );
  }
}