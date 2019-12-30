#import "WebPImageDataDecoder.h"
#import <SDWebImageWebPCoder/SDWebImageWebPCoder.h>
@implementation WebPImageDataDecoder

RCT_EXPORT_MODULE()
- (BOOL)canDecodeImageData:(NSData *)imageData
{
    return [[SDImageWebPCoder sharedCoder] canDecodeFromData:imageData];
}
- (RCTImageLoaderCancellationBlock)decodeImageData:(NSData *)imageData
                                              size:(CGSize)size
                                             scale:(CGFloat)scale
                                        resizeMode:(RCTResizeMode)resizeMode
                                 completionHandler:(RCTImageLoaderCompletionBlock)completionHandler
{
    UIImage *image = [[SDImageWebPCoder sharedCoder] decodedImageWithData:imageData options:nil];
    if (!image) {
      completionHandler(nil, nil);
      return ^{};
    }
    completionHandler(nil, image);
    return ^{};
}
@end
