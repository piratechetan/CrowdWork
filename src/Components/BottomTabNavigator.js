import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements'

import HomeStackScreen from '../Stack/HomeStack';
import TaskStackScreen from '../Stack/TaskStack';
import IntershipsStackScreen from '../Stack/internshipstack';

import ProfileStackScreen from '../Stack/profileStack';

const Tab = createBottomTabNavigator();

function getTabBarVisible(route) {
  if (route.Name === 'Details') {
    return false;
  }
  return true;
}


const BottomTabNavigator = () => {
    return (
<Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#309ABB',
        inactiveTintColor:'black',

        style:{
            
            
            height: 50,
            
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        
        options={{
          tabBarLabel: 'Home',
          
          
          tabBarIcon: ({ color}) => (
            <Icon name="home" 
               type='foundation' size={25} color={color} />
          ),
          
          
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskStackScreen}
        options={{
          tabBarLabel: 'Tasks',
          
          tabBarIcon: ({ color }) => (
            <Icon type='font-awesome' name="tasks"  size={25} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Internship"
        component={IntershipsStackScreen}
        options={{
          tabBarLabel: 'Interns',
          
          tabBarIcon: ({ color }) => (
            <Icon type='material' name="work"  size={25} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          
          tabBarIcon: ({ color }) => (
            <Icon type='fontisto' name="ampproject"  size={25} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>

);
}


export default BottomTabNavigator;