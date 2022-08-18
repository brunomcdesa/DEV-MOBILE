import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

constructor(props){
  super(props)
  this.state = {altura:0, massa:0, resultado:0}
  this.calcular = this.calcular.bind(this)

}
calcular(){
  let imc = (this.massa / (this.altura * this.altura))
  
  let s = this.state
  s.resultado = imc
  this.setState(s)
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
        <TextInput onChangeText={{massa}} placeholder='Massa(Kg)' style={styles.cinputs} keyboardType='numerico'/>
        <TextInput onChangeText={{altura}} placeholder='Altura(m)' style={styles.cinputs} keyboardType='numerico'/>
        
        <TouchableOpacity style = {styles.btnPrincipal} onPress={()=>{this.calcular}}><Text style={style.txtBotao}>Calcular</Text></TouchableOpacity>
        <Text style={styles.txtResultado}> {this.state.resultado} </Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cinputs:{
    height: 120,
    width: '50%',
    fontSize: 40,
    marginTop: 24,
  },
  btnPrincipal:{
    backgroundColor: 'lightblue',
    height: 60,
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  txtBotao:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtResultado:{
    fontSize: 25,
    color: 'gray',
    marginTop: 50,

  }
  


 
});
