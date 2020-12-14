import React from 'react';


import {View,Text,StyleSheet,SafeAreaView,Image, Dimensions,PixelRatio} from 'react-native';
import logo from '../assets/profile.jpg';
const HomeScreen = () => {
    return(
      <SafeAreaView style={Styles.container}>
        
        

        
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
  container:{
    
    flex:1,
    
  },
  text:{
    color:'black'
  },
  image:{
    borderRadius:65,
      marginHorizontal:20,
      marginVertical:20,
      width:90,
      height:90,
      borderWidth:2,
      borderColor:'white'
  },
  maincontainer:{
    borderTopLeftRadius:12,
    borderTopRightRadius:12,

    backgroundColor:'white',
    
    
  },
  search:{
    marginTop:10,
    borderWidth: 1,
      borderRadius: 20,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: 'white',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 20,
      borderWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
      elevation: 3,
      justifyContent: 'center',
      
      width:Dimensions.get('window').width,
      height: 50
  }
})
export default HomeScreen;
