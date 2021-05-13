import React from 'react';
import {View,Button} from 'react-native';
import AddContactForm from '../addContacts.js';

export default class AddContactScreen extends React.Component
{
static navigationOptions=({navigation})=>({
headerTitle: 'ADD CONTACT',
headerTintColor: '#FFFFFF',
headerStyle: {
backgroundColor: '#0033FF',
}
})

handleSubmit=fromState=>{
this.props.screenProps.AddContacts(fromState)
this.props.navigation.navigate('ContactList')
}

render(){
return(
<AddContactForm onSubmit={this.handleSubmit}/>
)
}
}