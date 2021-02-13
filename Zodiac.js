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
    Aries: March 21-April 20: Ram(type of goat)
</Text><Text>
Taurus: April 21-May 21: Bull
</Text><Text>
    Gemini: May 22-June 21: Twins
</Text><Text>
    Cancer: June 22-July 22: Crab
</Text><Text>
    Leo: July 23-August 22: Lion
</Text><Text>
    Virgo: August 23-September 22: Virgin
</Text><Text>
    Libra: September 23-October 22: Scales
</Text><Text>
    Scorpio: October 23-November 21: Scorpion
</Text><Text>
    Sagittarius: November 22-Deceber 21: Archer
</Text><Text>
    Capricorn: Deceber 22-January 20: Goat
</Text><Text>
    Aquarius: January 21- Febuary 19: Water Bearer
</Text><Text>
    Pisces: Febuary 20-March 20: Fish
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
