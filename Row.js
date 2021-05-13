import React from 'react';
import {  Text, View ,TouchableOpacity, StyleSheet} from 'react-native';

const styles=StyleSheet.create({
row: {
padding:20,
}
})
const Row = props => (
<TouchableOpacity style={styles.row}
onPress={()=>props.onSelect(props)}
>
 <Text>{props.name}</Text>
 <Text>{props.phone}</Text>
</TouchableOpacity>
)

export default Row;