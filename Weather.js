import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Sunny extends React.Component {
gotoAnswer=(buzzercolor)=>{
     this.props.navigation.navigate('Homescreen')
   }
  render() {
    return (
     <View>
      <Text> 
     Right now it is night and tomorow it is going to rain alot. There is a high of 76 and a low of 61.
     </Text>
    <TouchableOpacity
        style={[{backgroundColor:'pink'}]}
          onPress={()=>this.gotoAnswer()}>
        <Text>
Home
</Text>
      </TouchableOpacity>
     </View>
    );
  }
}
