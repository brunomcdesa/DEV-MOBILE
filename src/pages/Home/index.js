import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";




export default function Home(){
    return(
    <View style={styles.container}>
        <Header nome="Bruno" endereco="Rua Caingas, 224"/>
        <Text>Teste de importação da pagina HOME</Text>
        
    </View>
    )
}

const styles =StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'gold',
    
    }
})
