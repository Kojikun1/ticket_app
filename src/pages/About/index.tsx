import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function About() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
            <Text>About</Text>
            <Button 
             onPress={() => navigation.navigate("Home")}
             title="Home"
            />
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
});
