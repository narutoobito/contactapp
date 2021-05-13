import React from 'react';
import {View,Text,Button } from 'react-native';

export default class ContactDetails extends React.Component {
static navigationOptions=({navigation})=>({
headerTitle: navigation.getParam('name'),
headerTintColor: 'red',
})

randomContact=()=>{
let phone=this.props.navigation.getParam('phone');
let contact=this.props.screenProps.contacts;
let randomOne;
while(!randomOne)
{
let randomIndex=Math.floor(Math.random()*this.props.screenProps.contacts.length);
if(this.props.screenProps.contacts[randomIndex]!=phone)
randomOne=this.props.screenProps.contacts[randomIndex];
}
this.props.navigation.push('ContactDetail',{name: randomOne.name,phone: randomOne.phone})
}

render(){
return (

<View>
<Text>
{this.props.navigation.getParam('phone')}</Text>

<Button onPress={this.randomContact} title="random"></Button>
</View>


)

}

}