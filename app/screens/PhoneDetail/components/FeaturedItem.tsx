import * as React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {FeaturedResponse} from 'app/models/api/phone';
import {COLORS, FONTS} from 'app/config/styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 18,
    width: width / 3,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    ...FONTS.h3,
  },
  text: {
    ...FONTS.h5,
    textAlign: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

interface FeaturedItemProps {
  item: FeaturedResponse;
}

export default ({item}: FeaturedItemProps) => {
  const {icon, name, value} = item;

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Icon
          name={icon || 'star'}
          color={COLORS.primary}
          size={40}
          style={styles.icon}
        />
        <Text style={[styles.title]}>{name}</Text>
        <Text style={[styles.text]}>{value}</Text>
      </View>
    </View>
  );
};
