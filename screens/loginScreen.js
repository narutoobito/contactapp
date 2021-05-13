import React from 'react'
import {View,Text,Button,TextInput} from 'react-native'

export default class LoginScreen extends React.Component
{
state={
username: '',
password: ''
}

_handleNavigatiion= async ()=>{
resp=
fetch('http://localhost:2018/',
{
method:'POST' ,
headers:
{'Content-Type' : 'application/json'},
body: JSON.stringify({username: this.state.username, password: this.state.password })
})
.then(res=>{resp=res; console.log(res)});
if(resp.ok)
this.props.navigation.navigate('Main')
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
/>
<TextInput
placeholder="password"
value={this.state.password}
onChangeText={this.handlePasswordChange}
/>
<Button title="Press Me" onPress={this._handleNavigatiion}></Button>
</View>
)

}
}