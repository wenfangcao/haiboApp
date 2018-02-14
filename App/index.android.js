/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import PreComponent from './app/components/pre';
import BarComponent from './app/components/bar';
const RootNavigator = StackNavigator ({
  pre:{
    screen:PreComponent,
    navigationOptions:()=>{
      return {
        header:null
      }
    }
  },
  bar:{
    screen:BarComponent,
    navigationOptions:()=>{
      return {
        header:null
      }
    }
  }
});
AppRegistry.registerComponent('myapp', () => RootNavigator);
