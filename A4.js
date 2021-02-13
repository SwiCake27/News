import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class Riddle extends React.Component {
gotoAnswer=(buzzercolor)=>{
     this.props.navigation.navigate('A5')
   }
  render() {
    return (
     <View>
     
      <Text>
       giraffe
          </Text>
       <TouchableOpacity
        style={[{backgroundColor:'cyan'}]}
          onPress={()=>this.gotoAnswer()}>
        <Text>
The giraffe escapes and heads to the party. He comes across a river normally filled with hungry allagators but makes it across safely. How?</Text>
      </TouchableOpacity>
        
     </View>
    );
  }
}
