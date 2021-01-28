import React,{ useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

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
    const [count,setCount] = useState(0);
    const [amount,setAmount] = useState(0);

    useEffect(() => {
        calcIAmount();
    },[count])

    function calcIAmount(){
         const result = count * Number(item.value.substring(0,3));

         setAmount(result);
    }

    const  { handleTicketData } = useCart();
    return (
        <View style={styles.card} >
            <TouchableOpacity  style={{
                        width: "96%",
                        height: 400,
                        alignItems: "center",
            }}  onPress={onPress}>
                        <Image
                            source={item.image ? {uri: item.image } : defaultIMG}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText} >{item.name}</Text>
                        <Text style={styles.valueText} >R$ {item.value.substring(0,3)}</Text>
                        
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
                <View style={styles.subContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count > 0 ? count - 1 : 0)}>
                            <FontAwesome5 name="minus" size={24} color="gray" />
                    </TouchableOpacity>
                    <TextInput 
                        onChangeText={ (text) =>  setCount(Number(text)) } 
                        value={String(count)}
                        style={styles.count}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                            <FontAwesome5 name="plus" size={28} color="gray" />
                    </TouchableOpacity>
                    </View>
                <Text style={styles.amount}>R${amount}</Text>
            </View>
            <AddCartButton title="Adicionar no Carrinho" onPress={() => handleTicketData(item,count)} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardImage: {
        width: 320,
        height: 280
      },
      card: {
        width: 360,
        height: 560,
        marginBottom: 20,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 5,
        paddingVertical: 5,
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
    },
    buttonsContainer: {
        flexDirection: "row",
        width: "100%",
        marginTop: 20,
        justifyContent: "space-around"
    },
    subContainer: {
        flexDirection: "row",
    },
    button: {
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    count: {
        fontSize: 18,
        marginLeft: 20
    },
    amount: {
        marginLeft: 60,
        fontSize: 20
    }
})

export default Card


