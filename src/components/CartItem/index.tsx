import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import { TicketData } from '../../types/interfaces';

interface Props {
    item: TicketData;
}

import { useCart  } from '../../context/cartContext';

const CartItem: React.FC<Props> = ({ item }) =>{
    const { handleRemove, removeById } = useCart();
    return (
        <View style={styles.cartItem}>
            <Text>{item.name}</Text>
             <View style={styles.subContainer}>
                <Text style={styles.subText}>R${Number(item.value.substring(0,3)) * item.amount}</Text> 
                <Text style={styles.subText} >{item.amount}</Text>
                <TouchableOpacity onPress={() => { handleRemove(item.id) }}>
                    <MaterialIcons name="remove-circle" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { removeById(item.id) }}>
                    <FontAwesome5 name="trash" size={22} color="black" />
                </TouchableOpacity>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        width: '100%',
        minWidth: '100%',
        padding: 10,
        borderBottomColor: "gray",
        borderBottomWidth: 2
      },
      subContainer: {
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10
      },
      subText: {
          fontSize: 20,
      }
})

export default CartItem;