import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useCart } from '../../context/cartContext';

import CartItem from '../../components/CartItem';
import BuyButtom from '../../components/AddCartButton'

export default function CartPage() {
    const navigation = useNavigation();
    const { ticketData, getTotalAmount } = useCart();
  return (
    <View style={styles.container}>
            {ticketData.length !== 0 ?
            <View style={styles.container}>
            <FlatList
             data={ticketData}
             renderItem={({item})=> {
               return (
                 <CartItem item={item} />
               )
             }}
             keyExtractor={(item) => item.id} 
            />
            <View style={styles.subContainer}>
                 <Text style={styles.total}>TOTAL: R${getTotalAmount()}</Text>
                 <BuyButtom title="Finalizar Compra" onPress={() => navigation.navigate("BuyPage") } />
            </View>
           </View>
            :
          <Text style={styles.text}>Carrinho Vazio</Text> }
              
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    marginBottom: 10,
    alignItems: "center"
  },
  text: {
      fontSize: 18
  },
  total: {
    fontSize: 20
  }
});
