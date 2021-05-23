import React from 'react'
import {View, Text ,Button, TextInput,StyleSheet} from 'react-native'

export default class LoginScreen extends React.Component
{
state={
username: '',
password: '',
warnings: 'type username and password',
}
//http://192.168.43.208:2018/
_handleNavigatiion= async ()=>{
        let result=null;
        this.setState({warnings: 'LOADING.....please wait it will take little longer for first time'})
        let response = await fetch('https://narutoobito-loginreact.herokuapp.com/login',{
                                    method:'POST' ,
                                    headers:
                                            {'Content-Type' : 'application/json'},
                                            body: JSON.stringify({username: this.state.username, password: this.state.password })
                                            })
        result = await response.json()
        if(result){
        if(result.ok=== true)
            this.props.navigation.navigate('Main')
        else this.setState({warnings:result.message})
        }
}

//const options={
//    method: 'POST',
//    headers: {
//    'Content-Type': 'application/json'
//    },
//    body: JSON.stringify({username:"username",password:"password"})
//    };

handleNameChange=username=>{
this.setState({username})
}

handlePasswordChange=password=>{
this.setState({password});
}

render(){
return(
        <View style={{flex:1,justifyContent: 'center',alignItems:'center', background: 'red'}}>
        <TextInput
        placeholder="username"
        value={this.state.username}
        onChangeText={this.handleNameChange}
        style={styles.inputs}
        autoFocus={true}
        blurOnSubmit={true}
        autoCapitalize={'none'}
        />
        <TextInput
        placeholder="password"
        value={this.state.password}
        onChangeText={this.handlePasswordChange}
        blurOnSubmit={true}
        autoCapitalize={'none'}
        keyboardType={'visible-password'}
        style={styles.inputs}
        />
        <Button title="LogIN" onPress={this._handleNavigatiion} disabled={this.state.username!=''?false:true}></Button>
        <Text style={styles.warnings}>{this.state.warnings}</Text>
        </View>
    )
}
}


styles=StyleSheet.create({
 inputs:{
    padding: 10,
    backgroundColor:"orange",
    margin:10,
    width: "90%",
 },

 warnings:{
     margin:50,
    color: "red",

 }
})