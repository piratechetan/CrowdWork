import React  from 'react';
import logo from '../assets/profile.jpg'
import {
    SafeAreaView,
    StyleSheet,
    LogBox,
    View,
    Image,Switch,
    Text,
    StatusBar,
    TouchableOpacity,TouchableWithoutFeedback
  } from 'react-native';



  import {Icon} from 'react-native-elements';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer' ; 




const DrawerContent = (props) => {
    const [isDarkTheme,setIsDarkTheme] = React.useState();

const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
};
    return (
     <View style={{flex:1}}>
         <DrawerContentScrollView {... props}>
           <View style={Styles.drawercontent}>
               <View style={Styles.userinfosection}>
                   <View style={{flexDirection:'row',marginTop:15}}>
                <View>
                
        <Image source={logo}  style={{borderRadius:50,height:60,width:60}}/>
      
                </View>
                <View style={{marginLeft:15}}>
                    <Text style={Styles.title}>Chetan Sharma</Text>
                    <Text style={Styles.caption}>@chetan10</Text>
                </View>
                </View>
               </View>

              <View style={{marginTop:10}}>
               <DrawerItem
             icon={()=>{
                 return(
                <Icon name='home' type='antdesign' size={25} />
                 )
             }}
              label='Home'
             />
             <DrawerItem
             icon={()=>{
                 return(
                <Icon name='users' type='entypo' size={25}/>
                 )
             }}
              label='Profile'
             />
             <DrawerItem
             icon={()=>{
                 return(
                <Icon name='document-text' type='ionicon' size={25}/>
                 )
             }}
              label='Resume'
             />
             <DrawerItem
             icon={()=>{
                 return(
                <Icon name='wallet' type='entypo' size={25}/>
                 )
             }}
              label='Wallet'
             />
             
             <DrawerItem
             icon={()=>{
                 return(
                <Icon name='sharealt' type='antdesign' size={25}/>
                 )
             }}
              label='Invite a Friend'
             />
             <DrawerItem
             icon={()=>{
                 return(
                <Icon name='comments' type='foundation' size={25}/>
                 )
             }}
              label='Support'
             />
             <DrawerItem
             icon={()=>{
                 return(
                <Icon name='exclamationcircle' type='antdesign' size={25}/>
                 )
             }}
              label='About Us'
             />
             </View>
             
              
              
                 <TouchableWithoutFeedback onPress={() => {toggleTheme()}}>
                     <View style={Styles.preference}>
                         <Text>Dark Theme</Text>
                         <View pointerEvents='none'>
                         <Switch  value={isDarkTheme}/>
                         </View>
                     </View>
                 </TouchableWithoutFeedback>
            
               
           </View>

         </DrawerContentScrollView>
         
             <DrawerItem
             icon={()=>{
                 return(
                <Icon name='exit-to-app' type='material-community' size={25}/>
                 )
             }}
              label='Sign Out'
             />

         
     </View>
    )
}

export default DrawerContent;


const Styles = StyleSheet.create({
    drawercontent:{
        flex:1,
    },
    userinfosection:{
        paddingLeft:10,
    },
    title:{
        fontSize:15,
        marginTop:6,
        fontWeight:'bold'
    },
    caption:{
        marginTop:5,
        fontSize:15,
        lineHeight:14
    
    },
    row:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',


    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:10,

    },
    paragrapgh:{
        fontWeight:'bold',
        marginTop:10,
    },
    drawersection:{
        marginTop:10
    },
    bottomdrawersection:{
        marginBottom:10,
        borderTopColor:'#f4f4f4',
        borderWidth:1,
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    }
})