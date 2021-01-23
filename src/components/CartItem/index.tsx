import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { TicketData } from '../../types/interfaces';

interface Props {
    item: TicketData;
}

const CartItem: React.FC<Props> = ({ item }) =>{
    return (
        <View style={styles.cartItem}>
            <Text>{item.name}</Text>
             <View style={styles.subContainer}>
                <Text style={styles.subText}>R${item.value.substring(0,3)}</Text> 
                <Text style={styles.subText} >{item.amount}</Text>      
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
      },
      subContainer: {
          flexDirection: "row",
          justifyContent: "space-around"
      },
      subText: {
          fontSize: 20,
      }
})

export default CartItem;