import React, {RefObject} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {useValue} from 'react-native-reanimated';

import {COLORS, SIZES} from 'app/config/styles';
import {withTransition} from 'app/lib/reanimatedHelper';

import {HEADER_IMAGE_HEIGHT, PADDING_IMAGE} from './HeaderImage';
import TabHeader from './TabHeader';
import {TabModel} from './Tabs';

const PADDING = SIZES.padding || 12;
export const MIN_HEADER_HEIGHT = 50;
const {interpolate, Extrapolate, useCode, greaterThan, set, block} = Animated;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    height: MIN_HEADER_HEIGHT,
    alignItems: 'center',
    paddingHorizontal: PADDING,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
  },
});

interface HeaderProps {
  model: string;
  y: Animated.Value<number>;
  tabs: TabModel[];
  scrollView: RefObject<Animated.ScrollView>;
}

export default ({y, tabs, scrollView, model}: HeaderProps) => {
  //const {goBack} = useNavigation();
  const toggle = useValue<0 | 1>(0);
  const transition = withTransition(toggle, {duration: 100});
  const translateY = interpolate(y, {
    inputRange: [-100, 0, HEADER_IMAGE_HEIGHT + PADDING_IMAGE],
    outputRange: [
      HEADER_IMAGE_HEIGHT - MIN_HEADER_HEIGHT + PADDING_IMAGE + 100,
      HEADER_IMAGE_HEIGHT - MIN_HEADER_HEIGHT + PADDING_IMAGE,
      0,
    ],
    extrapolateRight: Extrapolate.CLAMP,
  });
  const opacity = transition;
  useCode(
    () =>
      block([set(toggle, greaterThan(y, HEADER_IMAGE_HEIGHT + PADDING_IMAGE))]),
    [toggle, y],
  );

  return (
    <Animated.View style={[styles.container]}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
          backgroundColor: COLORS.white,
        }}
      />
      <View style={styles.header}>
        <Animated.Text
          style={[styles.title, {transform: [{translateY}]}]}
          numberOfLines={2}>
          {model}
        </Animated.Text>
      </View>
      <TabHeader {...{y, transition, tabs, scrollView}} />
    </Animated.View>
  );
};
