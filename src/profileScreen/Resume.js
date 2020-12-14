import React from 'react';
import {Icon,Overlay} from 'react-native-elements';
import {View,Text,StyleSheet,SafeAreaView,Image,TouchableOpacity,Dimensions} from 'react-native';

const ResumeScreen = () => {
    return(
      <View style={Styles.maincontainer}>
      
{/* 
       <View style={Styles.personalInfoView}>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View>
           <Text style={Styles.personalInfo_heading}>Personal Details</Text>
           <Text style={Styles.name}>Chetan Sharma</Text>
            <Text style={Styles.email}>cs10022000@gmail.com</Text>
           <Text style={Styles.mobile}>+91 9416369745</Text>
           <Text style={Styles.location}>chennai,Tamil Nadu</Text>
          </View>
          <View style={Styles.icon}>
          <TouchableOpacity style={{flexDirection:'row'}}>
            <Icon name='edit-2' type='feather' size={20} style={{marginRight:7}} color={'#309ABB'}/>
          <Text style={{color:'#309ABB'}}>Edit</Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>
        <View style={Styles.EducationView}>
         <View>
          <Text style={Styles.personalInfo_heading}>Education</Text>
          <Text style={Styles.name}>Bachelor of Technology(B.Tech)</Text>

          <Text style={Styles.college}>SRM Institute of Science And Technology,</Text>
          <Text style={Styles.mobile}>Chennai,9.10/10</Text>
         </View>
         <View style={[Styles.icon,{flexDirection:'row',}]}>
         <TouchableOpacity style={{flexDirection:'row'}}>
            <Icon name='edit-2' type='feather' size={20} style={{marginRight:7}} color={'#309ABB'}/>
          <Text style={{color:'#309ABB'}}>Edit</Text>
          </TouchableOpacity>
         </View>
       
        </View>
        <View style={Styles.EducationView}>
         <View>
          <Text style={Styles.personalInfo_heading}>Jobs</Text>
          
         </View>
         
       
        </View>
        <View style={Styles.EducationView}>
         <View>
          <Text style={Styles.personalInfo_heading}>InternShips</Text>
         </View>
        </View>
        <View style={Styles.EducationView}>
         <View>
          <Text style={Styles.personalInfo_heading}>Skills</Text> 
         </View>
        </View>
        <View style={Styles.EducationView}>
         <View>
          <Text style={Styles.personalInfo_heading}>Projects/Work Samples</Text> 
         </View>
        </View>
        </View> */}
        </View>
    )
}

const Styles = StyleSheet.create({
  
  
    maincontainer:{
    marginTop:10,
    backgroundColor:'white'
    
  },
  personalInfoView:{
    justifyContent:'space-between',
    borderWidth: 1,
    
   
    borderColor: '#ddd',
    shadowOffset: { width: 0, height: 1 },
    
  },
  icon:{
    alignSelf:'center',
    marginRight:15,
    
    
    
  },
  personalInfo_heading:{
    color:'grey',
    marginTop:5,

    fontSize:17,
    marginLeft:10,
    
  },
  name:{
    fontSize:17,
    marginTop:10,
    marginLeft:10,
    
    
      
  },
  email:{
    fontSize:15,
    marginTop:5,
    marginLeft:10,
    
      
  },
  mobile:{
    fontSize:15,
    marginTop:5,
    color:'grey',
    marginLeft:10,
    
      
  },
  location:{
    fontSize:15,
    marginTop:5,
    color:'grey',
    marginLeft:10,
    
      
  },
  EducationView:{
    justifyContent:'space-between',
    borderWidth: 1,
    
   flexWrap:'wrap',
    borderColor: '#ddd',
    shadowOffset: { width: 0, height: 1 },
    flexDirection:'row',
    
    
    
    
  },
  college:{
    marginLeft:10,
    
    fontSize:15,
    marginTop:5,
    color:'grey'
    
      
  },
 
  
})
export default ResumeScreen;