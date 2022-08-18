import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function minhaPrimeiraFuncao(){
return (
    <Text style={styles.textoSecundario}>Esse texto é recorrente.</Text>
);

}

const styles = StyleSheet.create({
    textoSecundario: {
        fontSize: 20,
        marginTop: 15,
        color: 'gray',
        
      }
})