import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {ColorsResponse} from 'app/models/api/phone';

import ColorOption from './ColorOption';

const styles = StyleSheet.create({
  overlay: {
    //...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
});

interface ColorOptionsProps {
  colors: ColorsResponse[];
  onPress?: (index: number) => void;
}

export default ({colors, onPress}: ColorOptionsProps) => (
  <View style={styles.overlay}>
    {colors.map((color, index) => (
      <ColorOption
        key={index}
        {...{color}}
        onPress={onPress ? onPress.bind(null, index) : undefined}
      />
    ))}
  </View>
);
