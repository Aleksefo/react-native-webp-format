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
    <img src="https://img.shields.io/npm/v/react-native-webp-format" alt="Current npm package version." />
  </a>
  <a href="https://github.com/Aleksefo/react-native-webp-format/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=aleksefo">
    <img src="https://img.shields.io/twitter/follow/aleksefo.svg?label=Follow%20@aleksefo" alt="Follow @aleksefo" />
  </a>
</p>
WebP image integration for React Native apps. 

By utilizing WebP instead of png you can reduce the size of your app by several times while the image quality remains the same.

iOS uses [SDWebImage](https://github.com/SDWebImage/SDWebImage) implementation and Android utilizes [Fresco](https://github.com/facebook/fresco) to boost the gained performance even more.

## Prerequisites:
- React Native version `0.61` or higher. Older versions might work too, but that's not guaranteed.

## Installation
```
yarn add react-native-webp-format
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
  implementation 'com.facebook.fresco:webpsupport:2.0.0'
  // Optionally, to display animated WebP images, you have to add:
  implementation 'com.facebook.fresco:animated-webp:2.0.0'
  ...
}
```
## Usage
Simply replace .png with .webp after you've converted your files
<Image source={'../../assets/close.webp'} />


PRs are welcomed ❤️
