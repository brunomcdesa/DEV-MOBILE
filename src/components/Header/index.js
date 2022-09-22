import { StyleSheet, Text, View } from "react-native";

export default function Header({nome, endereco}){
    return(
        <View style={estilos.container}>
             <Text>{nome}</Text>
             <Text>{endereco}</Text>
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
    }
})
