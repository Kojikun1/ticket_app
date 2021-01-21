import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

//@ts-ignore
import defaultIMG from '../../assets/default-image.jpg';

import { TicketData } from '../../types/interfaces';

interface Props {
    item: TicketData;
    onPress(): void; 
}

const Card: React.FC<Props> = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
                    <Image 
                        source={item.image ? {uri: item.image } : defaultIMG}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardText} >{item.name}</Text>
                    <Text style={styles.valueText} >R$ {item.value.substring(0,3)}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardImage: {
        width: "100%",
        height: 300
      },
      card: {
        width: "96%",
        height: 440,
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
        marginTop: 10
    }
})

export default Card


