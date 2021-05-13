import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class screen extends React.Component{
render(){
return(
<View style={{flex:1, background: 'red'}}>
<Text>hello</Text>
</View>
)}
}



AppNavigator=createSwitchNavigator({
routeOne: screen,
})

const Appcontainer=createAppContainer(AppNavigator);

export default class App extends React.Component
{
render(){
return <Appcontainer/>
}

}









//class HomeScreen extends React.Component {
//  render() {
//    return (
//      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Text>Home Screen</Text>
//      </View>
//    );
//  }
//}
//
//const AppNavigator = createSwitchNavigator({
//  Home: {
//    screen: HomeScreen,
//  },
//});
//
//export default createAppContainer(AppNavigator);
