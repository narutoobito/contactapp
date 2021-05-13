import React from 'react';
import { StyleSheet, Text ,SectionList, FlatList, View ,Button} from 'react-native';
//import contacts ,{compareNames} from '../contacts';
//import Row from '../Row'
import ContactList from '../contactslist';

export default class ContactListApp extends React.Component {
 state={
 showContacts: true,
 //contacts,
 }

 static navigationOptions=({navigation})=>({
headerTitle: 'CONTACTS',
headerTintColor: '#FFFFFF',
headerRight:()=> <Button title="Add" onPress={()=>(navigation.navigate('AddContact'))} />,

headerStyle: {
backgroundColor: '#FF0011',
}
})

 toggleContacts=() => {
 this.setState(prevState=>({showContacts : !prevState.showContacts}));
 }

 toggleForm=() => {
     this.props.navigation.navigate('AddContact')
}

 render(){
 return(
 <View>
{
 this.state.showContacts && ( <ContactList
 contacts={this.props.screenProps.contacts}
 onSelectContact={(contacts)=>{ this.props.navigation.navigate('ContactDetail',{
 name: contacts.name,
 phone: contacts.phone,
 }) }}/>
 )
 }
 </View>

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
