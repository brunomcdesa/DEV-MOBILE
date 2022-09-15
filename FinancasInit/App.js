import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Inicio from './src/components/Inicio';

export default function App() {
  return (
    <View style={styles.container}>
  
       <Inicio nome="Bruno" data={"14/09/2022"} />
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
});
