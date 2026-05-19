import React from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>RN WebP example</Text>
        <Text>WebP Image</Text>
        <Image source={require('./assets/1.sm.webp')} style={styles.image} />
        <Text>Animated WebP Image</Text>
        <Image
          source={require('./assets/animated-webp-supported.webp')}
          style={styles.image}
        />
        <Text>WebP Image from a website</Text>
        <Image
          source={{
            uri: 'https://www.gstatic.com/webp/gallery/2.jpg',
          }}
          style={styles.image}
        />
        <Text>WebP ImageBackground</Text>
        <ImageBackground
          source={require('./assets/3.sm.webp')}
          style={styles.imageBackground}
        >
          <Text style={styles.description}>Text inside of the image</Text>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
  },
  image: {
    height: '20%',
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
    color: '#ffffff',
  },
});

export default App;
