import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';
import HTML from 'react-native-render-html';

import {COLORS, FONTS, SIZES} from 'app/config/styles';
import {LineDivider} from 'app/components';
import locale from 'app/constants/es';
import {PhoneResponse} from 'app/models/api/phone';

import ColorOptions from './ColorOptions';
import Featured from './Featured';
import {MIN_HEADER_HEIGHT} from './Header';
import {
  APP_BAR_HEIGHT,
  HEADER_IMAGE_HEIGHT,
  PADDING_IMAGE,
} from './HeaderImage';
import {TabModel} from './Tabs';

const {height, width} = Dimensions.get('window');
const T = locale.phoneDetail;

const styles = StyleSheet.create({
  section: {
    padding: SIZES.padding,
  },
  placeholder: {
    height: HEADER_IMAGE_HEIGHT - APP_BAR_HEIGHT + PADDING_IMAGE,
    marginBottom: MIN_HEADER_HEIGHT,
  },
  text: {
    ...FONTS.body1,
  },
  title1: {
    ...FONTS.h2,
  },
  title2: {
    ...FONTS.h3,
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.padding / 2,
  },
  price: {
    color: COLORS.primary,
  },
  featured: {
    marginTop: SIZES.padding / 2,
  },
  payment: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  monthlyPayment: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  icon: {
    marginRight: SIZES.padding / 2,
  },
  link: {
    color: COLORS.primary,
  },
  item: {
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
    marginTop: SIZES.padding,
  },
  feature: {
    ...FONTS.h4,
    marginBottom: 8,
    fontWeight: '300',
  },
  value: {
    marginBottom: SIZES.padding / 2,
  },
});

interface ContentProps {
  y: Animated.Node<number>;
  onMeasurement: (index: number, tab: TabModel) => void;
  content: Omit<
    PhoneResponse,
    keyof Pick<PhoneResponse, '_id' | 'images' | 'model'>
  >;
}

export default ({content, y, onMeasurement}: ContentProps) => {
  const opacity = interpolate(y, {
    inputRange: [
      HEADER_IMAGE_HEIGHT - MIN_HEADER_HEIGHT - 200,
      HEADER_IMAGE_HEIGHT - MIN_HEADER_HEIGHT - 185,
      HEADER_IMAGE_HEIGHT - MIN_HEADER_HEIGHT,
    ],
    outputRange: [1, 0.1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const menu = content.sections;

  return (
    <>
      <View style={styles.placeholder} />
      <Animated.View style={[styles.section, {opacity}]}>
        <Text style={styles.text}>
          {T.by.toLowerCase()} <Text style={styles.link}>{content.brand}</Text>
        </Text>
      </Animated.View>

      <LineDivider />
      <View style={[styles.section]}>
        <View style={styles.info}>
          <View style={styles.payment}>
            <Text style={styles.text}>{T.price}: </Text>
            <Text style={[styles.title1, styles.price]}>{content.price}€</Text>
          </View>
          <View style={styles.monthlyPayment}>
            <Text style={styles.text}>{T.monthlyPayment}:</Text>
            <Text style={{...FONTS.body2}}>
              {Math.round((content.price / 12) * 100) / 100}€
            </Text>
          </View>
        </View>
      </View>

      <LineDivider />
      <View style={styles.section}>
        <Text style={styles.text}>{T.colors}:</Text>
        <View style={styles.info}>
          <ColorOptions colors={content.colors} />
        </View>
      </View>

      <LineDivider />
      <View style={[styles.section]}>
        <Text style={styles.title1}>{T.description}:</Text>
        <View style={styles.info}>
          {/* <Text style={styles.text}>{content.description} </Text> */}
          <HTML html={content.description} />
        </View>
      </View>

      <LineDivider />
      <View style={styles.section}>
        <Text style={styles.title1}>{T.featured}</Text>
        <View style={styles.featured}>
          <Featured featured={content.featured} />
        </View>
      </View>

      <LineDivider />
      {menu.map(({name, features: menuItems}, index) => (
        <View
          style={styles.section}
          key={index}
          onLayout={({
            nativeEvent: {
              layout: {y: anchor},
            },
          }) => onMeasurement(index, {name, anchor: anchor - 142})}>
          <Text style={styles.title1}>{name}</Text>
          {menuItems.map(({name: feature, value}, j) => (
            <View style={styles.item} key={j}>
              <Text style={styles.feature}>{feature}</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          ))}
        </View>
      ))}
      <View style={{height, width}} />
    </>
  );
};
