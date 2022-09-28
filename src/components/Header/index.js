import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Feather} from '@expo/vector-icons';

export default function Header({nome, endereco}){
    return(
        <View style={estilos.container}>
            <View style = {estilos.botaoUser}>
                <TouchableOpacity >
                    <Feather  name="user" size={27}/>
                </TouchableOpacity>
            </View>
            <View style={estilos.textosDirecao}>
                 <Text style={estilos.textoNome}>{nome}</Text>
                <Text style={estilos.textoEndereco}>{endereco}</Text>
             </View>
        </View>
    )
}
const estilos = StyleSheet.create({
    container:{
        backgroundColor: 'yellow',
        paddingTop: 30,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    textosDirecao:{
        flexDirection: "column",
    },
    textoNome:{
        fontWeight: "bold",
        fontSize: 35,
        marginTop: 20
    },
    textoEndereco:{
        fontSize: 20,
    },
    botaoUser:{
        marginTop: 20,
        width: 65,
        height: 65,
        backgroundColor: "#rgba(255, 255, 255, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
})
