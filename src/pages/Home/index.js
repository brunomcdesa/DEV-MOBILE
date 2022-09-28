import { ScrollView, StyleSheet, Text, View } from "react-native";
import CabecalhoPedidos from "../../components/CabecalhoPedidos";
import Header from "../../components/Header";
import Pedidos from "../../components/Pedidos";
import Rodape from "../../components/Rodape";





export default function Home(){
    return(
    <View style={styles.container}>
        <Header nome={"Bruno Cardoso"} endereco={"Rua Caingas, 224"}/>
        <CabecalhoPedidos/>
        <ScrollView>
            <Pedidos numpedido={2564} iconeEntrega={"truck"} produto={"GPU"} statusEntrega={"Em transporte"} previsaoDeChegada={"30/09/2022"}/>
            <Pedidos numpedido={6846} iconeEntrega={"truck"} produto={"CPU"} statusEntrega={"Em transporte"} previsaoDeChegada={"01/10/2022"}/>
            <Pedidos numpedido={3548} iconeEntrega={"check"} produto={"Meias"} statusEntrega={"Entregue"} previsaoDeChegada={"22/09/2022"}/>
            <Pedidos numpedido={98645} iconeEntrega={"truck"} produto={"RAM"} statusEntrega={"Em transporte"} previsaoDeChegada={"03/10/2022"}/>
            <Pedidos numpedido={98787} iconeEntrega={"check"} produto={"SSD NVME"} statusEntrega={"Entregue"} previsaoDeChegada={"20/09/2022"}/>
            <Pedidos numpedido={2231} iconeEntrega={"check"} produto={"COOLER"} statusEntrega={"Entregue"} previsaoDeChegada={"25/09/2022"}/>
            <Pedidos numpedido={56721} iconeEntrega={"box"} produto={"Garrafa"} statusEntrega={"Em separação"} previsaoDeChegada={"06/10/2022"}/>
            <Pedidos numpedido={78844} iconeEntrega={"box"} produto={"Luva"} statusEntrega={"Em separação"} previsaoDeChegada={"15/10/2022"}/>
            <Pedidos numpedido={6688} iconeEntrega={"box"} produto={"Mouse"} statusEntrega={"Em separação"} previsaoDeChegada={"10/10/2022"}/>
            <Pedidos numpedido={31543} iconeEntrega={"check"} produto={"Teclado"} statusEntrega={"Entregue"} previsaoDeChegada={"20/09/2022"}/>
            <Pedidos numpedido={468867} iconeEntrega={"truck"} produto={"Monitor"} statusEntrega={"Em transporte"} previsaoDeChegada={"30/09/2022"}/>
            <Pedidos numpedido={16584} iconeEntrega={"check"} produto={"Fone"} statusEntrega={"entregue"} previsaoDeChegada={"23/09/2022"}/>
            <Pedidos numpedido={89678} iconeEntrega={"box"} produto={"Microfone"} statusEntrega={"Em separação"} previsaoDeChegada={"15/10/2022"}/>
            <Pedidos numpedido={36584} iconeEntrega={"truck"} produto={"Chave"} statusEntrega={"Em transporte"} previsaoDeChegada={"28/09/2022"}/>
            <Pedidos numpedido={68447} iconeEntrega={"truck"} produto={"Toca"} statusEntrega={"Em transporte"} previsaoDeChegada={"28/09/2022"}/>
        </ScrollView>
        <Rodape/>
    </View>
    )
}

const styles =StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'gold',  
    }
})
