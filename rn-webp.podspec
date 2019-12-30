require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name                = 'rn-webp'
  s.version             = package['version']
  s.summary             = 'WebP integration for React Native apps'
  s.license             = package['license']
  s.homepage            = package['homepage']
  s.author             = 'Alex Fomushkin'
  s.source              = { :git => 'https://github.com/Aleksefo/react-native-webp-format.git', :tag => s.version}
  s.source_files        = 'ios/*.{h,m}'
  s.requires_arc        = true
  s.platforms           = { :ios => "9.0" }
  s.dependency            'React'
end
