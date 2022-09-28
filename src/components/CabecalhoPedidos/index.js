import { StyleSheet, Text, View } from "react-native";

export default function CabecalhoPedidos(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.numDescriocao}>Nº/Descrição</Text>
            <Text style={estilos.status}>Status</Text>
            <Text style={estilos.entrega}>Entrega</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        paddingTop:25,
        paddingBottom:25,
        flexDirection:"row",
        backgroundColor:"olive"
    },
    numDescriocao:{
        marginLeft: 20,
        fontStyle:"italic",
        fontSize:20,
        fontWeight:"bold"
    },
    status:{
        marginLeft:50,
        fontStyle:"italic",
        fontSize:20,
        fontWeight:"bold",
    },
    entrega:{
        marginLeft:70,
        fontStyle:"italic",
        fontSize:20,
        fontWeight:"bold",
    }
})
