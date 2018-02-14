import React,{ Component } from 'react';
import {View,Text,Image,TextInput,StyleSheet,TabNavigator} from 'react-native';
import newsComponent from './news';
export default class HomeComponent extends Component {
    constructor(){
        super();
        
    }
    render(){
        return <View>
            {/* <Image source={require('')}></Image> */}
            <Text>this is home</Text>
        </View>
    }
} 
const preStyles = StyleSheet.create({
    
});

