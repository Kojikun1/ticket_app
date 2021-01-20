import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

interface Props {
    title: string;
    onPress(): void;
}


const CustomButtom: React.FC<Props> = ({title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
                <AntDesign name="calendar" size={28} color="#fff" />
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

export default CustomButtom