import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class screen extends React.Component {
gotoAnswer=(buzzercolor)=>{
     this.props.navigation.navigate('Homescreen')
   }
  render() {
    return (
     <View>
      <Text> 
      Hello people around the world. Corona is still going on and this is the worst place to get your news. Bye. 
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


