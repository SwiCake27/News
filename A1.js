import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Riddle extends React.Component {
gotoAnswer=(buzzercolor)=>{
     this.props.navigation.navigate('A2')
   }
  render() {
    return (
     <View>
     
      <Text> 
      499
         </Text>
       <TouchableOpacity
        style={[{backgroundColor:'orange'}]}
          onPress={()=>this.gotoAnswer()}>
        <Text>
       Put the elepphat in the fridge in 3 steps.
</Text>
      </TouchableOpacity>

    
     </View>
    );
  }
}

