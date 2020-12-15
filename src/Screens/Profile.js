import React,{Component} from 'react';
import {Icon} from 'react-native-elements';


import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  
} from 'react-native';
import logo from '../assets/profile.jpg';
import {TouchableOpacity, TouchableWithoutFeedback,} from 'react-native-gesture-handler';







const EditProfile = () => {
  return (
      <View>
          <Text>Hello</Text>
      </View>
  )
};


const ProfileScreen = ({ navigation }) => {
  return (

    <ScrollView style={{backgroundColor: 'white',showsVerticalScrollIndicator:false}}>
      <View style={{flexDirection:'row',}}>
        <View>
       <View style={Styles.tab}></View>
       <View style={Styles.tab1}></View>
       </View>
       <View>
       <View style={Styles.left}></View>
       <View style={Styles.left1}>
         <Text style={{fontSize:20,marginTop:30,fontWeight:'400',marginHorizontal:55}}>Chetan Sharma</Text>
         <View style={{
           flexDirection:'row',
           paddingVertical:12,
         }}>
           <Icon name='email' type='material-communtiy' size={20} color={'#309ABB'} style={{marginLeft:60,}}/>
           <Text style={{marginLeft:10}}>cs10022000@gmail.com</Text>
         </View>
         <View style={{
           flexDirection:'row',
           paddingVertical:12,
         }}>
           <Icon name='phone' type='font-awesome' size={20} color={'#309ABB'} style={{marginLeft:60,}}/>
           <Text style={{marginLeft:10}}>+91-9416369745</Text>
         </View>
         <View style={{
           flexDirection:'row',
           paddingVertical:12,
         }}>
           <Icon name='location-sharp' type='ionicon' size={20} color={'#309ABB'} style={{marginLeft:60,}}/>
           <Text style={{marginLeft:10}}>Rewari,Haryana</Text>
         </View>
         <TouchableOpacity onPress={() => navigation.navigate('Edit Profile')} >
         <View style={{alignItems:'center',marginTop:2,borderWidth:2,marginLeft:60,marginRight:60,paddingTop:5,paddingBottom:5,borderRadius
        :12}}>
           <Text >Edit Profile</Text>
         </View>
         </TouchableOpacity>
         
       </View>
       </View>

      </View>
      
      <View style={{position:'absolute',marginVertical:70,marginHorizontal:45}}>
        <Image source={logo} size={20} style={{borderColor:'white',borderWidth:2,borderRadius:50,height:85,width:85}}/>
      </View>
    
     <View style={Styles.wrapper}>
       <TouchableOpacity style={Styles.wallet} onPress={() => navigation.navigate('Wallet')}>
       <View  >
         <Icon name='wallet' type='fontisto' size={30} color={'#309ABB'}/>
         <Text style={[Styles.wallettext,{fontSize:15,marginTop:5}]}>Wallet</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity style={Styles.project}>
       <View>
       <Icon name='project' type='octicon' size={30} color={'#309ABB'}/>
         <Text style={[Styles.wallettext,{fontSize:15,marginTop:5}]}>Projects</Text>
       </View>
       </TouchableOpacity>
     </View>

     <View >
       
       <View style={Styles.Item} >
         <View style={{flexDirection:'row'}}>
         <Icon type='ionicon' name="file-tray"  size={25} onPress={() =>{}}/>
         <Text style={{marginLeft:10}}>Resume</Text>
         </View>
         <View>
         <Icon type='material' name="keyboard-arrow-right"  size={25} />
         </View>
       </View>
       
       <TouchableOpacity>
       <View style={Styles.Item}>
         <View style={{flexDirection:'row'}}>
         <Icon type='material' name="work"  size={25} />
         <Text style={{marginLeft:10}}>My Internships</Text>
         </View>
         <View>
         <Icon type='material' name="keyboard-arrow-right"  size={25} />
         </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity>
       <View style={Styles.Item}>
         <View style={{flexDirection:'row'}}>
         <Icon type='antdesign' name="sharealt"  size={25} />
         <Text style={{marginLeft:10}}>Invite & Earn</Text>
         </View>
         <View>
         <Icon type='material' name="keyboard-arrow-right"  size={25} />
         </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity>
       <View style={Styles.Item}>
         <View style={{flexDirection:'row'}}>
         <Icon type='antdesign' name="exclamationcircle"  size={25} />
         <Text style={{marginLeft:10}}>About Us</Text>
         </View>
         <View>
         <Icon type='material' name="keyboard-arrow-right"  size={25} />
         </View>
       </View>
       </TouchableOpacity>
     </View>

      
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  tab:{
    
    width: 90,
    height: 250,
    
    backgroundColor:'white',
    position:'absolute'
    
    
  },
  tab1:{
    
    borderBottomRightRadius:50,
    width: 90,
    height: 250,
    backgroundColor:'#309ABB',
    
  },
  left:{
    
    width: 280,
    height: 250,
    backgroundColor:'#309ABB',
    position:'absolute'
  },
  left1:{
   
    borderTopLeftRadius:50,
    width: 280,
    height: 250,
    backgroundColor:'white',
    
  },
  container: {
    marginTop: 5,
    padding: 10
  },
  header: {
    fontSize: 20,
    alignSelf:'center',
    marginTop:10
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  },
  wrapper:{
   flexDirection:'row',
   height:110,
   justifyContent:'space-between'
    
  }, 
wallet:{
  elevation:4,
  backgroundColor:'#fff',
  marginLeft:25,
  height:90,
  width:150,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:10,
  marginTop:10
  
  },
  project:{
    elevation:4,
  backgroundColor:'#fff',
  marginRight:25,
  height:90,
  width:150,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:10,
  marginTop:10
    
  
  },
  wallettext:{
    fontSize:15,
    fontWeight:'bold',
    
    alignSelf:'center'
  },
  Item:{
   
    borderWidth: 1,
    borderColor: '#dddddd',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent:'space-between',
    marginTop:5,
    elevation:1,
  },
 
});

export default ProfileScreen;
