import React from 'react';

import {View,Text,SafeAreaView} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  Explore from '../InternshipScreen/Explore'
import  Pending from '../InternshipScreen/Pending'
import  Completed from '../InternshipScreen/Completed'



const Tab = createMaterialTopTabNavigator();

const TaskScreen = () => {
    return(
        <Tab.Navigator
      initialRouteName="Explore"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'black',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{ tabBarLabel: 'Explore' }}
      />
      <Tab.Screen
        name="Working"
        component={Pending}
        options={{ tabBarLabel: 'Pending' }}
      />
      <Tab.Screen
        name="Completed"
        component={Completed}
        options={{ tabBarLabel: 'Completed' }}
      />
    </Tab.Navigator>
    )
}

export default TaskScreen;