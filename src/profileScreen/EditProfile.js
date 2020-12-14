import React from 'react';
import {View,Text,Image,StyleSheet,ImageBackground,ScrollView} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../assets/profile.jpg';
import {Icon } from 'react-native-elements';


const EditProfile = () => {
    return (
        <ScrollView style={styles.container}>
        <View style={{alignItems: 'center',marginTop:10}}>
        <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
        <ImageBackground
                source={logo}
                style={{height: 90, width: 90}}
                imageStyle={{borderRadius: 50}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                </View>
              </ImageBackground>
            </View>
          
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            Chetan Sharma
          </Text>
        </View>

        <View style={styles.action}>
        <Icon type='antdesign' name="user"  size={25} style={{marginTop:7,marginRight:5,marginLeft:5}}/>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            
          />
        </View>
        
        <View style={styles.action}>
        <Icon type='feather' name="phone"  size={25} style={{marginTop:7,marginRight:5,marginLeft:5}}/>
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            
            
          />
        </View>
        <View style={styles.action}>
        <Icon type='fontisto' name="email"  size={25}  style={{marginTop:7,marginRight:5,marginLeft:5}}/>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            
            
          />
        </View>
        
        <View style={styles.action}>
        <Icon type='material' name="my-location"  size={25} style={{marginTop:9,marginRight:5,marginLeft:5}}/>
          <TextInput
            placeholder="Location"
            placeholderTextColor="#666666"
            
            
            
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
     
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFF',
    
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#309ABB',
    alignItems: 'center',
    marginTop: 0,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
