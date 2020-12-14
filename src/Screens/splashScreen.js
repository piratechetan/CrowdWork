import React, { useState } from 'react';
import logo from '../assets/splash.png';
// import all the components we are going to use
import { View, Text, Image, StyleSheet } from 'react-native';

const Splash = () => {
  const [align, setAlign] = useState('center');
  const [alignsecond, setAlignsecond] = useState(false);

  setTimeout(() => {
    setAlign('flex-start'), setAlignsecond(true);
  }, 1000);

  return (
    <View style={[styles.container, { justifyContent: align }]}>
      <Image
        source={logo}
        style={{ width: 100, height: 100 }}
      />
      {!alignsecond ? null : (
        <View style={{ margin: 10 }}>
          <Text style={{ color: '#114998', fontSize: 30, fontWeight: 'bold' }}>
            CrowdWork
          </Text>
        </View>
      )}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 40,
  },
});
