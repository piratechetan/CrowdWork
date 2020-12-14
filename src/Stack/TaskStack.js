import React from 'react';

import {View,Text,StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { Icon } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import TaskScreen from '../Screens/Tasks';

const TaskStackScreen = ({navigation}) => {
    return(
        <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        
      }}
     
    >
      <Stack.Screen
        name="Home"
        component={TaskScreen}
        options={{
          title: 'Tasks',
          headerTitleAlign:'center',
          headerLeft: () => {
            return (
              <View style={{marginLeft:10}}>
              <Icon name='menu'  type='entypo' size={30} style={{marginLeft:20}} onPress={()=>navigation.openDrawer()}/>
              </View>
            )
          },
          headerRight: () => {
            return (
              <View style={{marginRight:10,flexDirection:'row'}}>
              <Icon name='profile'  type='antdesign' size={25}  />
              <Icon name='filter'  type='antdesign' size={25} style={{marginLeft:10}} />
              </View>
            )
          }
                
        }}/>
      
      
    </Stack.Navigator>
    )
}

export default TaskStackScreen;