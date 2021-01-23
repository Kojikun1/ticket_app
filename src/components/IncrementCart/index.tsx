import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
    num: number;
}

const IncrementCart: React.FC<Props> = ({ num }) => {
    return (
        <View style={styles.circle} >
            <Text style={styles.number} >{num}</Text>
        </View>
    )
}

export default IncrementCart;

const styles = StyleSheet.create({
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        right: 0
    },
    number: {
        color: "#fff",
    }
});
