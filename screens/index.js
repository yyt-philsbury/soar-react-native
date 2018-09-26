import React from "react";
import { Root, Icon } from "native-base";
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import AdminLoginScreen from "./AuthScreens/AdminLoginScreen";
import PhysicianLoginScreen from "./AuthScreens/PhysicianLoginScreen";
import PatientLoginScreen from "./AuthScreens/PatientLoginScreen";
import AdminHomeScreen from "./AdminScreens/AdminHomeScreen";
import ManagePhysicianScreen from "./AdminScreens/ManagePhysicianScreen";
import PhysicianProfileScreen from "./AdminScreens/PhysicianProfileScreen";
import PatientCheckinScreen from "./AdminScreens/PatientCheckinScreen";
import PatientHomeScreen from "./PatientScreens/PatientHomeScreen";
import QuestionnaireScreen from "./PatientScreens/QuestionnaireScreen";
import PhysicianHomeScreen from "./PhysicianScreens/PhysicianHomeScreen";
import PatientDetailsScreen from "./PhysicianScreens/PatientDetailsScreen";

const LoginBottomTabNavigator = createBottomTabNavigator(
  {
    AdminLoginScreenKey: {screen: AdminLoginScreen},
    PhysicianLoginScreenKey: {screen: PhysicianLoginScreen},
    PatientLoginScreenKey: {screen: PatientLoginScreen},
  },
  {
    initialRouteName: "AdminLoginScreenKey",
    tabBarOptions: {
      activeBackgroundColor: '#6698FF',
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
    },
  }
);

const AuthNavigator = createStackNavigator(
  {
    //TBD: user token reading and auto login
    //AuthLoadingScreenKey: {screen: AuthLoadingScreen},
    LoginBottomTabNavigatorKey: {screen: LoginBottomTabNavigator}
  },
  {
    initialRouteName: "LoginBottomTabNavigatorKey",
    headerMode: "float",
    headerBackTitleVisible : false,
    navigationOptions: () => ({
      title: "Soar Healthcare",
      headerStyle: {
        backgroundColor: '#6698FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  }
);

const AdminAppNavigator = createStackNavigator(
  {
    AdminHomeScreenKey: {screen: AdminHomeScreen},
    ManagePhysicianScreenKey: {screen: ManagePhysicianScreen},
    PhysicianProfileScreenKey: {screen: PhysicianProfileScreen},
    PatientCheckinScreenKey: {screen: PatientCheckinScreen}
  },
  {
    initialRouteName: "AdminHomeScreenKey",
    headerMode: "float"
  }
);

const PatientAppNavigator = createStackNavigator(
  {
    PatientHomeScreenKey: {screen: PatientHomeScreen},
    QuestionnaireScreenKey: {screen: QuestionnaireScreen},
  },
  {
    initialRouteName: "PatientHomeScreenKey",
    headerMode: "float"
  }
);

const PhysicianAppNavigator = createStackNavigator(
  {
    PhysicianHomeScreenKey: {screen: PhysicianHomeScreen},
    PatientDetailsScreenKey: {screen: PatientDetailsScreen},
  },
  {
    initialRouteName: "PhysicianHomeScreenKey",
    headerMode: "float"
  }
);

const AppContainerNavigator = createSwitchNavigator(
  {
    AuthNavigatorKey: {screen: AuthNavigator},
    AdminAppNavigatorKey: {screen: AdminAppNavigator},
    PatientAppNavigatorKey: {screen: PatientAppNavigator},
    PhysicianAppNavigatorKey: {screen: PhysicianAppNavigator},
  },
  {
    initialRouteName: "AuthNavigatorKey",
    headerMode: "float"
  }
);

export default () => (
  <Root>
    <AppContainerNavigator/>
  </Root>
)
