##React Native WebP Format

WebP image integration for React Native apps. Save tens of megabytes with this simple trick.

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


PRs are welcomed
