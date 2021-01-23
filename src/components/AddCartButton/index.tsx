import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'; 

interface Props {
    title: string;
    onPress(): void;
}


const AddCartButton: React.FC<Props> = ({title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
                 <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
       title: {
          fontSize: 20,
          color: '#fff',
          marginLeft: 10
       },
       button: {
          marginTop: 20,
          width: 320,
          height: 60,
          backgroundColor: '#00CED1',
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: "center",
          flexDirection: 'row'
       }
})

export default AddCartButton;