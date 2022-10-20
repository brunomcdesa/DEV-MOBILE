import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Estilo from '../estilos/Estilo';

const listaJogos = [
    {
        id: 1,
        jogo: "Valorant",
        console: "PC"
    },
    {
        id: 2,
        jogo: "Overwatch",
        console: "PC/PS5/XBS"
    },
    {
        id: 3,
        jogo: "League of Legends",
        console: "PC"
    },
    {
        id: 4,
        jogo: "CS:GO",
        console: "PC"
    },
    {
        id: 5,
        jogo: "Call of Duty",
        console: "PC/PS5/XBS"
    },
    {
        id: 6,
        jogo: "Paladins",
        console: "PC/PS5/XBS"
    },
    {
        id: 7,
        jogo: "Red Dead: Redemption 2",
        console: "PC/PS5/XBS"
    },
    {
        id: 8,
        jogo: "God Of War",
        console: "PC/PS5"
    },
    {
        id: 9,
        jogo: "GTA V",
        console: "PC/PS5/XBS"
    },
    {
        id: 10,
        jogo: "Fall Guys",
        console: "PC/PS5/XBS"
    },
    {
        id: 11,
        jogo: "Battlefield",
        console: "PC/PS5/XBS"
    },
    {
        id: 12,
        jogo: "TFT",
        console: "PC"
    },
    {
        id: 13,
        jogo: "Assassins Creed",
        console: "PC/PS5/XBS"
    },
    {
        id: 14,
        jogo: "Gears of War",
        console: "PC/PS5/XBS"
    },
    {
        id: 15,
        jogo: "Far Cry",
        console: "PC/PS5/XBS"
    },
    {
        id: 16,
        jogo: "Cyberpunk 2077",
        console: "PC/PS5/XBS"
    },
    {
        id: 17,
        jogo: "Saints Rows",
        console: "PC/PS5/XBS"
    },
    {
        id: 18,
        jogo: "Candy Crush",
        console: "Mobile"
    },
    {
        id: 19,
        jogo: "Plants vs Zombies",
        console: "Mobile/PC/PS5/XBS"
    },
    {
        id: 20,
        jogo: "Fortnite",
        console: "Mobile/PC/PS5/XBS"
    },
    {
        id: 21,
        jogo: "Free Fire",
        console: "Mobile"
    },
    {
        id: 22,
        jogo: "Dota 2",
        console: "PC"
    },
    {
        id: 23,
        jogo: "Wild Rift",
        console: "Mobile"
    },
    {
        id: 24,
        jogo: "Clash Of Clans",
        console: "Mobile"
    },
    {
        id: 25,
        jogo: "Clash Royale",
        console: "Mobile"
    },
    {
        id: 26,
        jogo: "Brawl Stars",
        console: "Mobile"
    },
    {
        id: 27,
        jogo: "Red Dead: Redemption",
        console: "PC/PS5/XBS"
    },
    {
        id: 28,
        jogo: "Dragon Age: Inquisition",
        console: "PC/PS5/XBS"
    },
    {
        id: 29,
        jogo: "The Elder Scrolls: Skyrim",
        console: "PC/PS5/XBS"
    },
    {
        id: 30,
        jogo: "Brawlhalla",
        console: "PC/PS5/XBS/Mobile"
    },
    {
        id: 31,
        jogo: "Street Fighter",
        console: "PC/PS5/XBS"
    },
    {
        id: 32,
        jogo: "Mortal Kombat",
        console: "PC/PS5/XBS"
    },
    {
        id: 33,
        jogo: "Injustice",
        console: "PC/PS5/XBS"
    },
    {
        id: 34,
        jogo: "Tekken",
        console: "PC/PS5/XBS"
    },
    {
        id: 35,
        jogo: "COD: WARZONE",
        console: "PC/PS5/XBS"
    },
    {
        id: 36,
        jogo: "FIFA",
        console: "PC/PS5/XBS"
    },
    {
        id: 37,
        jogo: "Elden Ring",
        console: "PC/PS5/XBS"
    },
    {
        id: 38,
        jogo: "Minecraft",
        console: "Mobile/PC/XBS/PS5"
    },
    {
        id: 39,
        jogo: "Apex Legends",
        console: "Mobile/PC/PS5/XBS"
    },
    {
        id: 40,
        jogo: "The Witcher 3",
        console: "PC/PS5/XBS"
    },
    
    

]

export default function App() {
    return (
        <View style={Estilo.container}>
            <Text style ={Estilo.itemTitle}>Lista de Jogos</Text>
            <FlatList
                data={listaJogos}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return (
                        <Text style={Estilo.itemDesc}>{item.id} -- {item.jogo} -- {item.console}</Text>
                    )
                }
                }
            >
            </FlatList>
            <StatusBar style="auto" />
        </View>
    )
}
