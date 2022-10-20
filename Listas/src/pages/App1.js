import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Estilo from '../estilos/Estilo';


const listaFrutas =[
  {
    id: 1,
    codigo: '1',
    descricao:'abacaxi',
    valores: ['5','25'],
  },
  {
    id: 2,
    codigo: '2',
    descricao:'manga',
    valores: ['2','5'],
  },
  {
    id: 3,
    codigo: '3',
    descricao:'uva',
    valores: ['4','40'],
  },
  {
    id: 4,
    codigo: '4',
    descricao:'melancia',
    valores: ['8','85'],
  },
]



export default function App() {
  return (
    <View style={Estilo.container}>
      <Text style={Estilo.itemTitle}>Simples</Text>
      <FlatList
        data={listaFrutas}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Text style={Estilo.itemDesc}>{item.codigo} - Fruta: {item.descricao} | Valores: {item.valores[0]}</Text>
          )
        }
        }
      >
      </FlatList>
      <Text style={Estilo.itemTitle}>Gourmet</Text>
      <FlatList
        data={listaFrutas}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Text style={Estilo.itemDesc}>{item.codigo} - Fruta: {item.descricao} | Valores: {item.valores[1]}</Text>
          )
        }
        }
      >
      </FlatList>
      <StatusBar style="auto" />
    </View>
  );
}


