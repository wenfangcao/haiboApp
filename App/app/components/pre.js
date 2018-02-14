import React,{ Component } from 'react';
import {View,Text,Image,StyleSheet,Navigation} from 'react-native';
export default class PreComponent extends Component {
    constructor(){
        super();
        this.state = {
            islogin:false,
            uname:''
        }
    }
    render(){
        return <View>
            
            <Image style={preStyles.prebg} source={require('./../img/preBg1.jpg')}></Image>
            <Text style={preStyles.wel}>HIBOY</Text>
            <Text style={preStyles.wel2}>祝您新春快乐!</Text>
        </View>
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate("bar");
        },2000);
    }
} 
const preStyles = StyleSheet.create({
    prebg:{
        width:1000,
        height:700,
        left:-400
    },
    wel:{
        position:"absolute",
        top:150,
        left:150,
        fontSize:30,
        // fontFamily:"FangSong",
        color:"#C90000"

    },
    wel2:{
        position:"absolute",
        top:190,
        left:100,
        fontSize:30,
        // fontFamily:"microsoft-yahei",
        color:"#C90000"
    }
});