import React from 'react';

import {View,Text,StyleSheet,SafeAreaView,Image, ImageBackground,} from 'react-native';
import wallet from '../assets/wallet.png';
const Wallet = () => {
    return(
      <View style={Styles.container}>
        
        <View style={Styles.income}>
         <View >
         
         </View>
         <View style={{marginRight:20,marginVertical:20}}>
             <Text style={{color:"#FFF",fontSize:15}}>Crowdwork Balance</Text>
             <Text style={{color:"#FFF",alignSelf:'center',fontSize:20}}>{'\u20A8'}.400</Text>
         </View>
        </View>
        <Image source={wallet} style={{height:130,width:130,position:'absolute',marginVertical:6,marginHorizontal:25}}/>
        </View>

    )
}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  income:{
      backgroundColor:'#309ABB',
      height:80,
      margin:30,
      marginVertical:50,
      borderRadius:20,
      flexDirection:'row',
      justifyContent:'space-between'
  }
  
  
})
export default Wallet;