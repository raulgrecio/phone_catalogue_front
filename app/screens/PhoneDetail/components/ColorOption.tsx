import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {ColorsResponse} from 'app/models/api/phone';

const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 8,
  },
  indicator: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 6,
  },
  text: {
    fontSize: 14,
    //fontFamily: 'UberMoveRegular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

interface ColorOptionProps {
  color: ColorsResponse;
  onPress?: () => void;
}

export default ({color, onPress}: ColorOptionProps) => {
  const {color: backgroundColor, name} = color;

  return (
    <TouchableWithoutFeedback {...{onPress}}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.indicator, {...{backgroundColor}}]} />
          <Text style={[styles.text]}>{name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
