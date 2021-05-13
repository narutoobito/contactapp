//import trial from './trial'
//export default trial;

import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import contacts ,{compareNames} from './contacts';
import Row from './Row';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddContactScreen from './screens/addContactScreen';
import ContactListScreen from './screens/contactListScreen';
import {createStackNavigator} from 'react-navigation-stack';
import contactDetailScreen from './screens/contactdetailsscreen';
import loginScreen from './screens/loginScreen';
import SettingScreen from './screens/settingscreen';
import {fetchUser} from './getContacts'

const MainNavigator=createStackNavigator({
AddContact: AddContactScreen,
ContactList: ContactListScreen,
ContactDetail: contactDetailScreen,
},
{
initialRouteName: 'ContactList'
}
)
//const ContactContainer=createAppContainer(ContactTab);
//
//const MainNavigator=createBottomTabNavigator({
//Contacts: ContactContainer,
//Settings: SettingScreen,
//})


const MainContainer=createAppContainer(MainNavigator);

const AppNavigator=createSwitchNavigator(
{
Main: MainContainer,
Login: loginScreen,
}
,{initialRouteName: 'Login'}
);

const AppContainer=createAppContainer(AppNavigator);


export default class App extends React.Component {
 state={
 contacts: null,
 }

componentDidMount(){
fetchUser().then(results=> this.setState({contacts: results}));
}


 addContacts=newContact=>{
 this.setState(prevState=>({showForm: false,contacts: [...prevState.contacts,newContact]}))
 }

 render(){
 return(

 <AppContainer screenProps={{contacts: this.state.contacts, AddContacts:this.addContacts}}/>


 );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 buttons: {
 flex : 1,
 }
});
