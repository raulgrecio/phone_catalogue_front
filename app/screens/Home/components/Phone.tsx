import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {PhoneResponse} from 'app/models/api/phone';
import {navigateToDetails} from 'app/store/actions/navigationActions';
import {COLORS, FONTS, SIZES} from 'app/config/styles';
import locale from 'app/constants/es';

interface PhoneProps {
  index: number;
  item: PhoneResponse;
}

const {width, height} = Dimensions.get('window');
const T = locale.home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding,
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray,
    marginBottom: SIZES.padding,
    width: '100%',
  },
  image: {
    height: '100%',
  },
  imageContainer: {
    height: height / 4,
    width: width - SIZES.padding * 2,
    marginVertical: 8,
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
  },
  text: {
    ...FONTS.body1,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.padding / 2,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceLabel: {
    ...FONTS.h1,
    color: COLORS.primary,
  },
  brand: {
    borderColor: COLORS.black,
    borderRadius: 30,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  brandLabel: {
    fontSize: 10,
    fontWeight: '500',
  },
});

const Phone = ({item}: PhoneProps) => {
  const {model, images, brand, price} = item;

  return (
    <TouchableWithoutFeedback
      onPress={() => navigateToDetails({phone: item})}
      style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{uri: images[0]}}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.brand}>
            <Text style={styles.brandLabel}>{brand.toUpperCase()}</Text>
          </View>
          <View style={styles.price}>
            <Text>
              {T.price} <Text style={styles.priceLabel}>{`${price}`}€</Text>
            </Text>
          </View>
        </View>

        <Text style={styles.title}>{model}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Phone;
