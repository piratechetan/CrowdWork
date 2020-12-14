
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  
  View,
  Text,
  StatusBar,
} from 'react-native';
import DrawerContent from './src/Components/drawercontent'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/Components/BottomTabNavigator';

import { createDrawerNavigator } from '@react-navigation/drawer';




const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar   backgroundColor={'black'}/>
      
        {/* <BottomTabNavigator /> */}
     
      <Drawer.Navigator 
      drawerType='slide'
      screenOptions={{
        
    }}
    drawerContent={props => <DrawerContent {...props}/>}
      >
      <Drawer.Screen name="Article" component={BottomTabNavigator} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
