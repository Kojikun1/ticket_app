import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import{ StackParamList } from '../types/StackParamList'; 

const HomeStack = createStackNavigator<StackParamList>();

import HomeScreen from '../pages/Home';
import Description from '../pages/Description';
import CartPage from '../pages/CartPage';
import IncrementCart from '../components/IncrementCart';

import { useCart } from '../context/cartContext';

export default function HomeStackRoutes(){
    const { ticketData } = useCart();
     const navigation = useNavigation();
      return (
          <HomeStack.Navigator>
              <HomeStack.Screen 
                   name="Home" 
                   component={HomeScreen}
                   options={{
                       headerTitleAlign: "center",
                       headerLeft: () => {
                        return (
                            <TouchableOpacity style={styles.menu} onPress={() => {
                                   navigation.dispatch(DrawerActions.openDrawer());
                            }}>
                                <MaterialIcons name="menu" size={40} color="black" />
                            </TouchableOpacity>
                        )
                       },
                       headerRight: () =>  {
                           return (
                               <TouchableOpacity style={styles.cartPosition} 
                                onPress={() => {
                                        navigation.navigate('CartPage');
                             }}>
                                 <MaterialIcons name="shopping-cart" size={42} color="gray" />
                                {ticketData.length !== 0 ? <IncrementCart num={ticketData.length} /> : null}
                               </TouchableOpacity>
                           )
                       }
                   }}
              />
              <HomeStack.Screen name="Description" component={Description} />
              <HomeStack.Screen name="CartPage" component={CartPage} />
          </HomeStack.Navigator>
      )
} 

const styles = StyleSheet.create({
    cartPosition: {
        marginRight: 40
    },
    menu: {
        marginLeft: 40
    }
})