import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {COLORS} from 'app/config/styles';
import locale from 'app/constants/es';
import {Button} from 'react-native-paper';

interface LoadButtonProps {
  onPress: () => void;
  isFetching: boolean;
}

const T = locale.home;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.black,
  },
  footerText: {
    fontWeight: '600',
    textAlign: 'center',
  },
});

const LoadButton = ({onPress, isFetching}: LoadButtonProps) => {
  if (isFetching) {
    return <Text style={styles.footerText}>{T.loading}</Text>;
  }

  return (
    <Button onPress={onPress} color={COLORS.white} style={styles.button}>
      {T.loadMore}
    </Button>
  );
};

export default LoadButton;
