import React,{ Component } from 'react';
import {View,Text,Image,TextInput,StyleSheet} from 'react-native';
// import TabNavigator from 'react-native-tab-navigator';
import HomeComponent from './home';
import NewsComponent from './news';
import ShopComponent from './shopcart';
import MeComponent from './me';
export default class BarComponent extends Component {
    constructor(){
        super();        
    }
    render(){
        return <View>
            <HomeComponent></HomeComponent>
        </View>
    }
} 
// const Tabs = TabNavigator({
//     Home:{
//         screen:HomeComponent,
//         navigationOptions:{
//             tabBar:{
//                 label:"首页",
//                 icon:({tintColor})=>
//                     (<Image source = {require('./../img/bar1.png')} 
//                     style={[{tintColor:tintColor},styles.icon]}/>
//                 )
//             }
//         }
//     },
//     News:{
//         screen:NewsComponent,
//         navigationOptions:{
//             tabBar:{
//                 label:"品牌资讯",
//                 icon:({tintColor})=>
//                     (<Image source = {require('./../img/bar2.png')} 
//                     style={[{tintColor:tintColor},styles.icon]}/>
//                 )
//             }
//         }
//     },
//     ShopCart:{
//         screen:ShopComponent,
//         navigationOptions:{
//             tabBar:{
//                 label:"购物车",
//                 icon:({tintColor})=>
//                     (<Image source = {require('./../img/bar3.png')} 
//                     style={[{tintColor:tintColor},styles.icon]}/>
//                 )
//             }
//         } 
//     },
//     Me:{
//         screen:MeComponent,
//         navigationOptions:{
//             tabBar:{
//                 label:"个人中心",
//                 icon:({tintColor})=>
//                     (<Image source = {require('./../img/bar4.png')} 
//                     style={[{tintColor:tintColor},styles.icon]}/>
//                 )
//             }
//         }  
//     }
// });