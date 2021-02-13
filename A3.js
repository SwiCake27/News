import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Riddle extends React.Component {
gotoAnswer=(buzzercolor)=>{
     this.props.navigation.navigate('A4')
   }
  render() {
    return (
     <View>
     
      <Text> 
     1. Open the door
     </Text><Text>
     2.Take out the elephant
     </Text><Text>
      2.Put the giraffe in
      </Text><Text>
      3. Close the door
         </Text>
       <TouchableOpacity
        style={[{backgroundColor:'lime'}]}
          onPress={()=>this.gotoAnswer()}>
        <Text>
The animals are going to a party. Who could not make it?</Text>
      </TouchableOpacity>
   
    
     </View>
    );
  }
}
