import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Riddle extends React.Component {
gotoAnswer=(buzzercolor)=>{
     this.props.navigation.navigate('A6')
   }
  render() {
    return (
     <View>
     
      <Text>
       The allagators are at the party.
          </Text>
       <TouchableOpacity
        style={[{backgroundColor:'lavender'}]}
          onPress={()=>this.gotoAnswer()}>
        <Text>
The giraffe still dies. How?</Text>
      </TouchableOpacity>
        
     </View>
    );
  }
}
