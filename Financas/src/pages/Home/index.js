import React from 'react';
import {StyleSheet, View, Text, FlatList } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Moviments';


const list = [
{
    id: 1,
    label: 'Boleto de teclado novo',
    value: '289,9',
    date: '31/08/2022',
    type: 1,
},
{
    id: 2,
    label:'Steam',
    value: '79,9',
    date: '30/08/2022',
    type: 1,

},
{
    id: 3,
    label: 'Pagamento Bolsa Atleta',
    value: '925,0',
    date: '15/08/2022',
    type: 0, 
},
{
    id: 4,
    label: 'Pagamento Geração Olimpica',
    value: '1000,0',
    date: '15/08/2022',
    type: 0,
},
{
    id: 5,
    label: 'Compra de vit para Desengaiolados',
    value: '90,0',
    date: '31/08/2022',
    type: 1,
}

]

export default function Home(){
    return (
        
       <View style = {styles.container} >
          <Header name = "Bruno Cardoso"/>
          <Balance balance ={'15.429,32'} expenses={'480,00'} />
          <Text style={styles.textUltimaMovimentacao}>Últimas Movimentações</Text>
          <FlatList style = {styles.list} 
            data={list}
            keyExtractor={(item) => String(item.id)}
            showVerticalScrollIndicator={false}
            renderItem={({item}) => <Movements data={item} />}
            
          
          
          />
       </View>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'silver',

    },
    textUltimaMovimentacao: {
        marginStart: 14,
        marginEnd: 14,
        marginTop: 20,
        fontSize: 16,

    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    },
    textList:{
        marginStart: 14,
        marginEnd:14
    }
  })
