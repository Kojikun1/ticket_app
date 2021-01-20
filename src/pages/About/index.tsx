import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function About() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
                  <TouchableOpacity style={styles.menu} onPress={() => {
                          navigation.dispatch(DrawerActions.openDrawer());
                  }}>
                      <MaterialIcons name="menu" size={40} color="black" />
                </TouchableOpacity>
            <Text>About</Text>
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
   menu: {
     position: "absolute",
     top: 40,
     left: 40
   }
});
