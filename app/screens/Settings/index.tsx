import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import styles from './styles';

const Setting: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Settings!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Setting;
