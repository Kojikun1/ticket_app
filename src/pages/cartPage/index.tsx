import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useCart } from '../../context/cartContext';

import CartItem from '../../components/CartItem';

export default function CartPage() {
    const navigation = useNavigation();
    const { ticketData } = useCart();
  return (
    <View style={styles.container}>
            {ticketData.length !== 0 ?
            <FlatList
             data={ticketData}
             renderItem={({item})=> {
               return (
                 <CartItem item={item} />
               )
             }}
             keyExtractor={(item) => item.id} 
            />
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
  text: {
      fontSize: 18
  }
});
