import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
const [carregando, setCarregando] = useState(true)
const [dados, setDados] = useState([])
const [atualiza, setAtualiza] = useState(false)


useEffect(()=>{
    fetch('https://reactnative.dev/movies.json')
    .then((resp) => resp.json())
    .then((json)=>setDados(json.movies))
    .then(()=>{console.log("Dados: " + dados)})
    .catch(()=>(alert('Erro no carregamento dos dados')))
    .finally(()=>setCarregando(false))
  },[]
)


  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Lista de filmes</Text>
      {
        carregando ? <ActivityIndicator/> : ( 
          <FlatList
          data={dados}
          keyExtractor={({id}, index) => id}
          renderItem={
            ({item}) =>(
              <Text style={styles.lstFilmes}>Nome: {item.title} | Ano: {item.releaseYear}</Text>
            )
          }
          />
        )
      }

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
  lstFilmes: {
    fontSize: 20,
    marginTop: 10,
  },
  tituloPrincipal:{
    fontSize: 25,
    marginTop: 20,
    fontWeight: 'bold'
  }
});
