/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  ImageBackground,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={styles.title}>RN WebP example</Text>
      <Text>WebP Image</Text>
      <Image source={require('./assets/1.sm.webp')} style={styles.image} />
      <Text>Animated WebP Image</Text>
      <Image
        source={require('./assets/animated-webp-supported.webp')}
        style={styles.image}
      />
      <Text>WebP ImageBackground</Text>
      <ImageBackground
        source={require('./assets/3.sm.webp')}
        style={styles.imageBackground}>
        <Text style={styles.description}>Text inside of the image</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  image: {
    height: 150,
    width: '100%',
  },
  imageBackground: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default App;
