<h1 align="center">
  React Native WebP Format
</h1>
<h3 align="center">
  Save tens of megabytes with this simple trick...
</h3>
<p align="center">
  <a href="https://github.com/Aleksefo/react-native-webp-format/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/Aleksefo/react-native-webp-format" alt="The library is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/react-native-webp-format">
    <img src="https://img.shields.io/npm/dm/react-native-webp-format" alt="NPM monthly downloads">
  </a>
  <a href="https://www.npmjs.com/package/react-native-webp-format">
    <img src="https://img.shields.io/npm/v/react-native-webp-format" alt="Current npm package version." />
  </a>
  <a href="https://github.com/Aleksefo/react-native-webp-format/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>
WebP image integration for React Native apps. 

By utilizing WebP instead of png/jpg you can significantly reduce the size of your app without quality loss.

Works with both Image and ImageBackground React Native components.

iOS uses [SDWebImage](https://github.com/SDWebImage/SDWebImage) implementation and Android utilizes [Fresco](https://github.com/facebook/fresco) to boost the gained performance even more.


[Here's a detailed article](https://medium.com/@aleksefo/reduce-react-native-application-size-with-webp-image-format-41bdd767a7ac) with extra information on what is the best way to convert your regular images to WebP.

## Prerequisites:
- React Native version `0.61` or higher (last tested on `0.78.0`). Older versions might work too, but that's not guaranteed.

## Installation
```
yarn add react-native-webp-format
npm i react-native-webp-format
```
#### iOS
```
cd ios && pod install
```
#### Android
Add the following dependencies to `android/app/build.gradle`:
```
dependencies {
  ...
  implementation 'com.facebook.fresco:webpsupport:3.2.0'    
  // Optionally, to display animated WebP images, you have to add:
  implementation 'com.facebook.fresco:animated-webp:3.2.0'
  ...
}
```

Check the example app if you have any issues.
Remember to restart your packager to see the changes. If you still have any issues, try resetting the cache.

## Usage
Simply replace .png or .jpg with .webp after you've converted your files
<Image source={require('../../assets/close.webp')} />

## Known issues
1. [If you use Expo try this](https://github.com/Aleksefo/react-native-webp-format/issues/18)


2. .getSize() doesn't work on WebP images. Use instead:
```
const {width, height} = Image.resolveAssetSource(require('./assets/1.sm.webp'));
```

3. Multiple animated images of too large size (~5MB) may crash iOS app due to running out of memory. [Possible solution](https://github.com/Aleksefo/react-native-webp-format/issues/28)


PRs are welcomed ❤️
