import { StatusBar } from "expo-status-bar";
import Scanner from "./Scanner";
import Home from "./Home";
import React from "react";
import { createAppContainer } from "react-navigation";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { createStackNavigator, HeaderTitle, HeaderBackground } from "react-navigation-stack";

const AppNavigator = createStackNavigator(
  {
    Home:{
      
      screen:Home,
      navigationOptions: {
        headerTitle: 'Newmar Code Scanner',
        headerTintColor:'white',
        headerStyle:{
          backgroundColor:'#4169e1',
        }
      },
      
    },
    Scanner:{
      screen:Scanner,
      navigationOptions: {
        headerTitle: 'QRCode Scanner',
        headerTintColor:'white',
        headerStyle:{
          backgroundColor:'#4169e1'
        }
      },
    }
    
  },
  {
    initialRouteName: "Home",
  },
 
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
