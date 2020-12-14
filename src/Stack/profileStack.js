import React from 'react';
import {Icon,Overlay} from 'react-native-elements';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import ProfileScreen from '../Screens/Profile';
import { color } from 'react-native-reanimated';
import ResumeScreen from '../profileScreen/Resume';
import EditProfile from '../profileScreen/EditProfile'

const ProfileStackScreen = ({navigation}) => {
    return(
        <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        
      }}
     
    >
      <Stack.Screen
        name="Home"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerTitleAlign:'center',
          headerLeft: () => {
            return (
              <View style={{marginLeft:10}}>
              <Icon name='menu'  type='entypo' size={30} style={{marginLeft:20}} onPress={()=>navigation.openDrawer()} />
              </View>
            )
          } ,
          headerRight: () => {
            return (
              <View style={{marginLeft:10}}>
              <Icon name='notifications-outline'  type='ionicon' size={27} style={{marginRight:15}} />
              </View>
            )
          }   

        }}/>
        <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{
        headerTitleAlign:'center',
        
        
        }}
        
        />
      
      
    </Stack.Navigator>
    )
}

export default ProfileStackScreen;