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
    id<SDAnimatedImageCoder> animatedCoder = [[SDImageWebPCoder alloc] initWithAnimatedImageData:imageData options:nil];
    NSUInteger frameCount = animatedCoder.animatedImageFrameCount;
    UIImage *image = nil;

    if (frameCount > 1) {
        NSMutableArray<UIImage *> *frames = [NSMutableArray arrayWithCapacity:frameCount];
        NSTimeInterval totalDuration = 0;
        for (NSUInteger i = 0; i < frameCount; i++) {
            UIImage *frame = [animatedCoder animatedImageFrameAtIndex:i];
            if (frame) {
                [frames addObject:frame];
            }
            totalDuration += [animatedCoder animatedImageDurationAtIndex:i];
        }
        if (frames.count > 0) {
            image = [UIImage animatedImageWithImages:frames duration:totalDuration];
        }
    }

    if (!image) {
        image = [[SDImageWebPCoder sharedCoder] decodedImageWithData:imageData options:nil];
    }
    if (!image) {
        completionHandler(nil, nil);
        return ^{};
    }
    completionHandler(nil, image);
    return ^{};
}
@end
