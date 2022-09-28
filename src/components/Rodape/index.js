import { StyleSheet, Text, View } from "react-native";

export default function Rodape(){
    return (
        <View style={estilos.container}>
            <Text style={estilos.contato}>Informações para contato</Text>
            <Text style={estilos.fone}>FONE: (43)98587-5858</Text>
            <Text style={estilos.email}>EMAIL: entregas.app@trabalho.com.br</Text>
        </View>
    )
}
const estilos=StyleSheet.create({
    container:{
        paddingBottom:30,
        paddingLeft: 30,
        paddingTop: 5,
        backgroundColor:"yellow",       
    },
    contato:{
        textAlign:"center",
        fontStyle:"italic",
        fontSize:22
    },
    fone:{
        fontWeight:"bold",
        fontSize:15
    },
    email:{
        fontWeight:"bold",
        fontSize:15,
    }
})
