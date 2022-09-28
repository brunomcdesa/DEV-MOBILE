import { StyleSheet, Text, TextComponent, TouchableOpacity, View } from "react-native";
import {Feather} from '@expo/vector-icons';

export default function Pedidos({produto, statusEntrega, iconeEntrega, previsaoDeChegada, numpedido}){
    return (
        <View style={estilos.container}>
            <View style={estilos.iconeEstrega}>
                <TouchableOpacity >
                    <Feather name={iconeEntrega} size={15}/>
                </TouchableOpacity>
            </View>
            <View >
                <View style={estilos.textnum}>
                    <Text style={estilos.numpedido}>Nº {numpedido}</Text>
                </View>
                <View style={estilos.textos}>
                    <View>
                        <Text style={estilos.textoPedido}>{produto}</Text>
                    </View>
                    <View style={estilos.alinhaEntrega}>
                        <Text style={estilos.textoSituacao}> {statusEntrega}</Text>
                    </View>
                    <View style={estilos.alinhaChegada}>
                        <Text style={estilos.textPrevisao}>{previsaoDeChegada}</Text>
                    </View>
                </View>
            </View>           
        </View>
    )
}
const estilos = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
    },
    iconeEstrega:{
        marginTop: 33,
        marginBottom:20,
        width: 30,
        height: 30,
        marginLeft: 10,
        backgroundColor: "#rgba(255, 255, 255, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    textnum:{
        marginTop:15,
        justifyContent:"center",       
    },
    numpedido:{
        flexDirection:"column",
        fontWeight: "bold",
        fontSize:15,
    },
    textos:{
        flex:1,
        flexDirection: 'row',
        alignItems: "center",     
        justifyContent:"space-between"   
    },
    textoPedido:{
        borderRightWidth: 0
    },
    alinhaEntrega:{
        marginLeft:"20%",
        alignItems:"center",
        justifyContent:"center",
        
    },
    textoSituacao:{
        alignItems: "center",
        justifyContent:"center",
        flexDirection:"row",
        textAlign:"center",
    },
    alinhaChegada:{
        marginLeft: "20%"
    },
    textPrevisao:{
        width:"60%",
        textAlign:"right",
    }
})
