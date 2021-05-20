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
        
        let response = await fetch('https://narutoobito-autherization-1.glitch.me/',{
                                    method:'POST' ,
                                    headers:
                                            {'Content-Type' : 'application/json'},
                                            body: JSON.stringify({username: this.state.username, password: this.state.password })
                                            })//.then(res=>res.json()).then(r=>{if(r.ans==" correct username")this.props.navigation.navigate('Main'); console.log(r)});
        result = await response.json()
        if(result){
        if(result.ans==" correct username")
            this.props.navigation.navigate('Main')
        else this.setState({warnings:result.ans})
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
/>
<TextInput
placeholder="password"
value={this.state.password}
onChangeText={this.handlePasswordChange}
style={styles.inputs}
/>
<Button title="Press Me" onPress={this._handleNavigatiion}></Button>
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