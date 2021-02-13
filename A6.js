import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Riddle extends React.Component {
gotoAnswer=(buzzercolor)=>{
     this.props.navigation.navigate('Homescreen')
   }
  render() {
    return (
     <View>
     
      <Text>
       The brick from the wall falls on him.
          </Text>
       <TouchableOpacity
        style={[{backgroundColor:'pink'}]}
          onPress={()=>this.gotoAnswer()}>
        <Text>
Home</Text>
      </TouchableOpacity>
        
     </View>
    );
  }
}
