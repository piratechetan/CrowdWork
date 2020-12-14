import React from 'react';

import {View,Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  Explore from '../InternshipScreen/Explore'
import  Pending from '../InternshipScreen/Pending'
import  Completed from '../InternshipScreen/Completed'
const Tab = createMaterialTopTabNavigator();

const IntershipsScreen = () => {
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
        options={{ tabBarLabel: 'Applied' }}
      />
      
    </Tab.Navigator>
    )
}

export default IntershipsScreen;