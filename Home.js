import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Button } from 'react-native';
import db from "../components/config"
export default class Homescreen extends React.Component {
constructor(){
  super();
  this.state={
like:0,
dislike:0
  }
}

   gotoRiddle=(buzzercolor)=>{
     this.props.navigation.navigate('Riddle')
   }
    gotoNews=(buzzercolor)=>{
     this.props.navigation.navigate('News')
   }
    gotoStars=(buzzercolor)=>{
     this.props.navigation.navigate('Stars')
   }
    gotoSunny=(buzzercolor)=>{
     this.props.navigation.navigate('Sunny')
   }
   likePressed(){
    
     var like=db.ref('Rating/'+'/')
     like.update({
       'likePressed':1
     })
   }
    dislikePressed(){
     var dislike=db.ref('Rating/'+'/')
     dislike.update({
       'dislikePressed':1
     })
   }
   incrementCounter1=()=>{
  this.setState({
    like:this.state.like+1,
     })
   }
    incrementCounter2=()=>{
  this.setState({
   dislike:this.state.dislike+1
     })
   }
  render() {
    return (
      <View>
      
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'green',borderRadius: 100}]}
          onPress={()=>this.gotoRiddle()}>
        <Text
          style={styles.buttonText}>
Riddles        
</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'yellow',borderRadius: 100}]}
          onPress={()=>this.gotoStars('cyan')}>
        <Text
          style={styles.buttonText}>
Zodiac        
</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'blue',borderRadius: 100}]}
          onPress={()=>this.gotoSunny('lavender')}>
        <Text
          style={styles.buttonText}>
Weather        
</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor:'red',borderRadius: 100}]}
          onPress={()=>this.gotoNews('pink')}>
        <Text
          style={styles.buttonText}>
News        
</Text>
      </TouchableOpacity>
     <Text  style={styles.text }>Dislike {this.state.dislike}</Text>
            <Button title="Dislike"   color="cyan" onPress={this.incrementCounter2}/>
             <Text  style={styles.text }>Like {this.state.like}</Text>
            <Button title="Like"   color="pink" onPress={this.incrementCounter1}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    //backgroundColor: 'red',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});