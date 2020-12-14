import React from 'react';

import {View,Text,StyleSheet,} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from '../Screens/Home';
import { color } from 'react-native-reanimated';
import { Icon } from 'react-native-elements';

const HomeStackScreen = ({navigation}) => {
    return(
        <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        
      }}
     
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTitleAlign:'center',
          headerLeft: () => {
            return (
              <View style={{marginLeft:10}}>
              <Icon name='menu'  type='entypo' size={30} style={{marginLeft:20}} onPress={()=>navigation.openDrawer()}/>
              </View>
            )
          }
                
        }}/>
      
      
    </Stack.Navigator>
    )
}

export default HomeStackScreen;