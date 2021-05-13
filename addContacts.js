
import React from 'react'
import {View, StyleSheet ,KeyboardAvoidingView, Button, TextInput} from 'react-native'
import propTypes from 'prop-types'
import {createSwitchNavigator} from 'react-navigation'

styles=StyleSheet.create({
container: {
flex: 1,
backgroundColor:'#FFAA00',
paddingTop: 50,
justifyContent: 'center',
},

inputs: {
padding: 5,
borderColor: 'black',
borderWidth: 1,
},
}
)

export default class AddContactForm extends React.Component{
static propTypes={
addContacts: propTypes.func,
}

state={
name: "",
phone: "",
isFormValid: false,
}

handleSubmit=()=>{
this.props.onSubmit(this.state)
}

componentDidUpdate(prevProps,prevState){
if(this.state.name!==prevState.name || this.state.phone!==prevState.phone){
this.validateForm();
}
}

//getHandler=key=>val=>(
//this.setState({[key]: val})
//)

handleNameChange=name=>{
this.setState({name})
}
handlePhoneChange=phone=>{
if(+phone>0 && phone.length<=10)
this.setState({phone})
}

validateForm = ()=>{
if(+this.state.phone>0 && this.state.phone.length===10 && this.state.name.length>2)
this.setState({isFormValid: true})
else{
this.setState({isFormValid: false})
}
}


render()
{
return(
<KeyboardAvoidingView behavior='padding' style={styles.container}>
<TextInput
onChangeText={this.handleNameChange}
value={this.state.name}
style={styles.inputs}
placeholder="Name"
/>
<TextInput
onChangeText={this.handlePhoneChange}
value={this.state.phone}
keyboardType="numeric"
placeholder="Phone"

/>
<Button title="add form" onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>

</KeyboardAvoidingView>
);
}

}