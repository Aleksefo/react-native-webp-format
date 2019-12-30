require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name                = 'ReactNativeWebPFormat'
  s.version             = package['version']
  s.summary             = package['description']
  s.license             = package['license']
  s.homepage            = package['homepage']
  s.author              = package['author']['name']
  s.source              = { :git => package["repository"]["url"], :tag => s.version}
  s.source_files        = 'ios/*.{h,m}'
  s.requires_arc        = true
  s.platforms           = { :ios => "9.0" }
  s.dependency            'React'
  s.dependency            'SDWebImageWebPCoder'
end
