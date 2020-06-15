/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionTitle}>RN WebP example</Text>
        <Text>WebP Image</Text>
        <Image
          source={require('./assets/1.sm.webp')}
          style={{height: 150, width: '100%'}}
        />
        <Text>Jpeg Image</Text>
        <Image
          source={require('./assets/1.sm.jpg')}
          style={{height: 150, width: '100%'}}
        />
        <Text>WebP ImageBackground</Text>
        <ImageBackground
          source={require('./assets/3.sm.webp')}
          style={{
            height: 150,
            width: '100%',
            resizeMode: 'cover',
            justifyContent: 'center',
          }}>
          <Text style={styles.description}>Text inside of the image</Text>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  description: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default App;
