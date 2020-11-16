import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from 'app/config/styles';

const styles = StyleSheet.create({
  divider: {
    height: 2,
    backgroundColor: COLORS.lightGray,
  },
});

const LineDivider: React.FC = () => {
  return <View style={styles.divider} />;
};

export default LineDivider;
