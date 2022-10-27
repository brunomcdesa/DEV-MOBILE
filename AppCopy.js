import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

//->HOOKS
//useState
//useEffect


const[valor, setValor] = useState(0);
const[msg, setMsg] = useState('')

useEffect( () =>{
    setMsg("O valor inicial é: "+ valor)
    console.log("Passou pelo useEffect")
  },[valor]
)

  return (
    <View style={styles.container}>
      <Button
      title='Incrementar'
      onPress={()=>{setValor(valor + 1)}}
      />

      <Text style={styles.txt}>Valor: {valor}</Text>


    

      <Button
      title='Decrementar'
      onPress={()=>{setValor(valor - 1)}}
      />

      <Button
      title='Reiniciar'
      onPress={()=>{setValor(0)}}
      />

      <Text style={styles.txt}> {msg} </Text>
      <StatusBar style="auto" />


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    fontSize: 25,
  }
});
