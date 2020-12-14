import React from 'react';

import {View,Text,StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import InternshipsScreen from '../Screens/Interships';
import { color } from 'react-native-reanimated';
import { Icon } from 'react-native-elements';
const InternshipsStackScreen = ({navigation}) => {
    return(
        <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        
      }}
     
    >
      <Stack.Screen
        name="Home"
        component={InternshipsScreen}
        options={{
          title: 'Internships',
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

export default InternshipsStackScreen;