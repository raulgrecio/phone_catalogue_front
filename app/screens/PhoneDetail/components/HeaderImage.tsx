import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';

import IMAGES from 'app/config/images';
import {COLORS} from 'app/config/styles';

const {Extrapolate, interpolate} = Animated;
const {height: wHeight, width: wWidth} = Dimensions.get('window');
export const APP_BAR_HEIGHT = 60;
export const PADDING_IMAGE = 20;
export const HEADER_IMAGE_HEIGHT = wHeight / 3 + APP_BAR_HEIGHT + PADDING_IMAGE;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: wWidth,
    backgroundColor: COLORS.lightGray,
  },
  image: {
    position: 'absolute',
    top: PADDING_IMAGE / 2,
    left: PADDING_IMAGE / 2,
    width: wWidth - PADDING_IMAGE,
    resizeMode: 'contain',
  },
});

interface HeaderImageProps {
  image?: string;
  y: Animated.Value<number>;
}

export default ({image, y}: HeaderImageProps) => {
  const heightContainer = interpolate(y, {
    inputRange: [-100, 0],
    outputRange: [
      HEADER_IMAGE_HEIGHT + 100 - APP_BAR_HEIGHT + PADDING_IMAGE,
      HEADER_IMAGE_HEIGHT - 60 + PADDING_IMAGE,
    ],
    extrapolateRight: Extrapolate.CLAMP,
  });

  const height = interpolate(y, {
    inputRange: [-100, 0],
    outputRange: [
      HEADER_IMAGE_HEIGHT + 100 - APP_BAR_HEIGHT,
      HEADER_IMAGE_HEIGHT - 60,
    ],
    extrapolateRight: Extrapolate.CLAMP,
  });
  const top = interpolate(y, {
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolateLeft: Extrapolate.CLAMP,
  });

  return (
    <Animated.View style={[styles.container, {top, height: heightContainer}]}>
      <Animated.Image
        source={image ? {uri: image} : IMAGES.images.placeholderProductMobile}
        style={[styles.image, {height}]}
      />
    </Animated.View>
  );
};
