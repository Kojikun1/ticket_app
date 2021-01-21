import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

//@ts-ignore
import defaultIMG from '../../assets/default-image.jpg';
import { StackNavProps } from '../../types/StackParamList';
import stripString from '../../utils/stripHTMLTags';

export default function Description({ route }: StackNavProps<'Description'>){
    const { item } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
            <Image  style={styles.image}  source={item.image ? {uri: item.image } : defaultIMG} />
            <Text style={styles.title} >{item.name}</Text>
            <Text style={styles.value}>R$ {item.value.substring(0,3)}</Text>
            <Text style={styles.memo}>{stripString(item.memo)}</Text>
            <Text style={styles.description}>{stripString(item.htmlMemo)}</Text>  
        </ScrollView>
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
    padding: 5
  },
  image: {
    width:  "90%",
    height: 300,
    alignSelf: "center"
  },
  memo: {
    fontSize: 18,
    marginTop: 40
  },
  description: {
    fontSize: 18,
    backgroundColor: "lightgray",
    marginTop: 40
  },
  title: {
    fontSize: 20,
    alignSelf: 'center'
  },
  value: {
    fontSize: 20,
    alignSelf: 'center'
  }
});
