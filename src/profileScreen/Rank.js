import React from 'react';

import {View,Text,StyleSheet,SafeAreaView,Image, Dimensions,PixelRatio} from 'react-native';

const RankScreen = () => {
    return(
      <View style={{backgroundColor:'white',height:Dimensions.get('window').height}}>
        <View style={{pading:20,margin:40,paddingTop:5,paddingBottom:15}}>
          <Text style={{alignSelf:'center',fontSize:15,fontWeight:'bold'}}>Crown Profile Score : 45%</Text>

        </View>
       {/* <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
          <View style={[Styles.wallet,{paddingRight:10}]}>
            <Text style={{fontWeight:'bold',fontSize:20,alignSelf:'center',color:'#309ABB'}}>Earned</Text>
            <Text style={{fontWeight:'600',fontSize:16,alignSelf:'center',marginTop:10}}>Rs.400</Text>
          </View>
          <View style={Styles.wallet}>
          <Text style={{fontWeight:'bold',fontSize:20,alignSelf:'center',color:'#309ABB'}}>Projects</Text>
          <Text style={{fontWeight:'600',fontSize:16,alignSelf:'center',marginTop:10}}>20</Text>
          </View>
       </View> */}
        </View>

    )
}

const Styles = StyleSheet.create({
  container:{
    
  
    
  },
  
  maincontainer:{
    borderTopLeftRadius:12,
    borderTopRightRadius:12,

    
    
    
  },
  wallet:{
   
    borderWidth: 1,
      borderRadius: 15,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: 'white',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 20,
      borderWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
      elevation: 2,
      marginLeft:13,
      marginRight:13,
      
      
      width: 160,
      height: 90
  }
})
export default RankScreen;