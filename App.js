import React, { Component } from 'react';
import { View, Image, TouchableOpacity,Text, Easing, Animated } from 'react-native';
import { createAppContainer,createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from './src/screens/HomeScreen';
import Settings from './src/screens/Settings';
import ContactUs from './src/screens/ContactUs';
import AccountScreen from './src/screens/AccountScreen';
import AudienceSettingScreen from './src/screens/AudienceSettingScreen';
import NotificationSettingScreen from './src/screens/NotificationSettingScreen';
import BlockScreen from './src/screens/BlockScreen';
import FAQScreen from './src/screens/FAQScreen';
import EditProfileScreen from "./src/screens/EditProfileScreen";
import IntroScreen from "./src/screens/IntroScreen";
import TermConditionScreen from "./src/screens/TermConditionScreen";
import FilterScreen from "./src/screens/FilterScreen";
import AuthNavigator from './src/screens/AuthNavigator';
import LoginScreen from "./src/screens/LoginScreen"
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

console.disableYellowBox = true;

export class App extends Component {
 render(){
   return(
    <View style={{height:100,width:100,backgroundColor:"red"}}>
      <Text>InOneGram App</Text>
    </View>
   )
 }
}

export const AppNavigator = createStackNavigator({

  HomeScreen: {
    navigationOptions:{
      header:null
    },
     screen:HomeScreen
  },
  Settings: {
    navigationOptions:{
      header:null
    },
     screen:Settings
  },
  ContactUs: {
    navigationOptions:{
      header:null
    },
     screen:ContactUs
  },
  AccountScreen: {
    navigationOptions:{
      header:null
    },
     screen:AccountScreen
  },
  AudienceSettingScreen: {
    navigationOptions:{
      header:null
    },
     screen:AudienceSettingScreen
  },
  NotificationSettingScreen: {
    navigationOptions:{
      header:null
    },
     screen:NotificationSettingScreen
  },
  BlockScreen: {
    navigationOptions:{
      header:null
    },
     screen:BlockScreen
  },
  FAQScreen: {
    navigationOptions:{
      header:null
    },
     screen:FAQScreen
  },
  EditProfileScreen: {
    navigationOptions:{
      header:null
    },
     screen:EditProfileScreen
  },
  IntroScreen:{
    navigationOptions:{
      header:null
    },
    screen:IntroScreen
  },
  TermConditionScreen:{
    navigationOptions:{
      header:null
    },
    screen:TermConditionScreen
  },
  FilterScreen:{
    navigationOptions:{
      header:null
    },
    screen:FilterScreen
  },  
  SplashScreen:{
    navigationOptions:{
      header:null
    },
    screen:SplashScreen
  },
  AuthNavigator: {
    navigationOptions:{
      header:null
    },
     screen:AuthNavigator
  },
  LoginScreen: {
    navigationOptions:{
      header:null
    },
     screen:LoginScreen
  },
  ForgotPasswordScreen:{
    navigationOptions:{
      header:null
    },
    screen:ForgotPasswordScreen
  },
  SignUpScreen:{
    navigationOptions:{
      header:null
    },
    screen:SignUpScreen
  }
},{
  initialRouteName: 'SplashScreen',
  defaultNavigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  }),
  navigationOptions: {
    gestureResponseDistance: {
      horizontal: 25,
      vertical: 200,
    },
  }
}
);

export default createAppContainer(AppNavigator);

