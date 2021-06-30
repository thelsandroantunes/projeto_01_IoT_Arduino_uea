import React, { Component } from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDodMu0NiFk3Z79oF070PdPP7F5lvPV3Pk",
  authDomain: "projeto-01-iot-arduino-android.firebaseapp.com",
  databaseURL: "https://projeto-01-iot-arduino-android-default-rtdb.firebaseio.com/",
  projectId: "projeto-01-iot-arduino-android",
  storageBucket: "projeto-01-iot-arduino-android.appspot.com",
  messagingSenderId: "184617731967",
  appId: "1:184617731967:web:cce0e38ad59dcb9d2cfc4a",
  measurementId: "G-TGKLGT79TH"

};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  class App extends Component {
  
    state ={
      status: []
    }
  
    componentDidMount () {
      firebase
      .database()
      .ref('Lampada/')
      .child('Status')
      .on('value', (snapshot) => {
       const status = (snapshot.val());
       this.setState({status});
    });
    }
  
    ligarDesligarLampada =() =>{
      var led = firebase.database().ref('Lampada');
      if(this.state.status == 0){
        led.child('Status').set(1);
      }else if (this.state.status == 1){
        led.child('Status').set(0);
      }
      
    }
   render() {
      return (
        <View>
          <View style={estilos.principal}>
          <Image source={require('./images/logo.png')}
        />
          </View>
  
          <View style={estilos.principal}>
           <Text style={estilos.texto}>Projeto Lampada</Text>
          </View>
  
          <View style={estilos.principal}>
          <View style={estilos.espacamentoIcone}>
           </View>        
           <Button icon="lightbulb" 
           mode="contained" 
           color="orange"
           onPress={this.ligarDesligarLampada}
           color ={this.state.status ? 'gray' : 'orange'}
           >
  
           Ligar / Desligar Lampada
          </Button>
  
        
          </View>
        </View>
      );
    }
  }
  const estilos = StyleSheet.create ({
  
    principal: {
      alignItems: 'center',
      padding: 30
    },
    texto:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    botao:{
      height: 12
     },
     espacamentoIcone:{
       padding: 15
     }
  })
  export default App;
  