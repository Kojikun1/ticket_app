import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

//@ts-ignore
import defaultIMG from '../../assets/default-image.jpg';

import { TicketData } from '../../types/interfaces';
import AddCartButton from '../AddCartButton';

interface Props {
    item: TicketData;
    onPress(): void; 
}
import { useCart } from '../../context/cartContext';

const Card: React.FC<Props> = ({ item, onPress }) => {

    const  { handleTicketData }  = useCart();
    return (
        <View style={styles.card} >
            <TouchableOpacity  style={{
                        width: "96%",
                        height: 400,
            }}  onPress={onPress}>
                        <Image 
                            source={item.image ? {uri: item.image } : defaultIMG}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText} >{item.name}</Text>
                        <Text style={styles.valueText} >R$ {item.value.substring(0,3)}</Text>
                        
            </TouchableOpacity>
            <AddCartButton title="Adicionar no Carrinho" onPress={() => handleTicketData(item)} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardImage: {
        width: "100%",
        height: 300
      },
      card: {
        width: "96%",
        height: 500,
        marginBottom: 20,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        borderRadius: 5,
        paddingTop: 5,
        paddingHorizontal: 10,
        marginHorizontal: 4
      },
      cardText: {
          fontSize: 18
      },
      valueText: {
        fontSize: 20,
        marginTop: 10,
        alignSelf: 'center'
    }
})

export default Card


