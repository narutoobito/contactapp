import React from 'react';
import {View,Text,Button,StyleSheet } from 'react-native';

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

<View style={styles.box}>
<Text style={styles.number}>
{this.props.navigation.getParam('phone')}</Text>

<Button onPress={this.randomContact} title="To random Contact" style={styles.button}></Button>
</View>

)

}

}



styles=StyleSheet.create({
    number:{
        margin: 100,
        padding:10,
        alignSelf: "center",
        color: "blue",
    },

    button:{
        margin:10,
        padding:10,


    },
    box:{
        backgroundColor:"#aac",
    }
})