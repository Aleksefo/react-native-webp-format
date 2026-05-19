const { createRunOncePlugin, withAppBuildGradle } = require('@expo/config-plugins');

const WEBP_SUPPORT = "    implementation 'com.facebook.fresco:webpsupport:3.6.0'";
const ANIMATED_WEBP = "    implementation 'com.facebook.fresco:animated-webp:3.6.0'";

const withWebPAndroid = (config) =>
  withAppBuildGradle(config, (gradleConfig) => {
    let contents = gradleConfig.modResults.contents;

    if (!contents.includes('fresco:webpsupport')) {
      contents = contents.replace(
        /(\s*dependencies\s*\{)/,
        `$1\n${WEBP_SUPPORT}\n${ANIMATED_WEBP}`
      );
      gradleConfig.modResults.contents = contents;
    }

    return gradleConfig;
  });

module.exports = createRunOncePlugin(withWebPAndroid, 'react-native-webp-format', '1.0.0');
