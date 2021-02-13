import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Riddle extends React.Component {
 gotoAnswer=(buzzercolor)=>{
     this.props.navigation.navigate('A1')
   }
  render() {
    return (
     <View>
    
      <Text> 
      Hello
       <TouchableOpacity
        style={[{backgroundColor:'red'}]}
          onPress={()=>this.gotoAnswer()}>
        <Text>
     There are 500 bricks on a wall. 1 fell down. How many are left?   
</Text>
      </TouchableOpacity>
     </Text>
    
     </View>
    );
  }
}

