import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
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
          style={styles.imageBackground}>
          <Text style={styles.description}>Text inside of the image</Text>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: Colors.white,
  },
});

export default App;
