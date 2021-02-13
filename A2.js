import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Riddle extends React.Component {
gotoAnswer=(buzzercolor)=>{
     this.props.navigation.navigate('A3')
   }
  render() {
    return (
     <View>
     
      <Text> 
      1. Open the door
      </Text><Text>
      2.Put the elephant in
      </Text><Text>
      3. Close the door
      </Text>
       <TouchableOpacity
        style={[{backgroundColor:'yellow'}]}
          onPress={()=>this.gotoAnswer()}>
        <Text>
    Put the giraffe in the fridge in 4 steps   
</Text>
      </TouchableOpacity>
  
    
     </View>
    );
  }
}

