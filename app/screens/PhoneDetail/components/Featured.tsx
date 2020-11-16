import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {FeaturedResponse} from 'app/models/api/phone';

import FeaturedItem from './FeaturedItem';

const styles = StyleSheet.create({
  overlay: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

interface FeaturedProps {
  featured: FeaturedResponse[];
}

export default ({featured}: FeaturedProps) => (
  <View style={styles.overlay}>
    {featured.map((item, index) => (
      <FeaturedItem key={index} {...{item}} />
    ))}
  </View>
);
