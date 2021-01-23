import 'react-native-gesture-handler';
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './src/routes/home.stack.routes';
import About from './src/pages/About';
import CartProvider from './src/context/cartContext';

const Drawer = createDrawerNavigator();

function App() {
  return (

    <CartProvider>
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="HomeBoard" component={HomeStack}/>
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}

export default App;
