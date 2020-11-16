import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {RouteProp} from '@react-navigation/native';

import {onScrollEvent, useValue} from 'app/lib/reanimatedHelper';
import {RootStackParamList} from 'app/navigation/NavigationStack';

import HeaderImage from './components/HeaderImage';
import Content from './components/Content';
import Header from './components/Header';

type PhoneDetailScreenRouteProp = RouteProp<RootStackParamList, 'PhoneDetail'>;

type PhoneDetailProps = {
  route: PhoneDetailScreenRouteProp;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ({route}: PhoneDetailProps) => {
  const {phone} = route.params;
  const scrollView = useRef<Animated.ScrollView>(null);
  const defaultTabs = phone.sections.map((section) => ({
    name: section.name,
    anchor: 0,
  }));
  const [tabs, setTabs] = useState(defaultTabs);
  const y = useValue(0);
  const onScroll = onScrollEvent({y});

  return (
    <View style={styles.container}>
      <HeaderImage {...{y, image: phone.images[0]}} />
      <Animated.ScrollView
        ref={scrollView}
        style={StyleSheet.absoluteFill}
        scrollEventThrottle={1}
        {...{onScroll}}>
        <Content
          onMeasurement={(index, tab) => {
            tabs[index] = tab;
            setTabs([...tabs]);
          }}
          {...{y}}
          content={{
            brand: phone.brand,
            description: phone.description,
            colors: phone.colors,
            featured: phone.featured,
            sections: phone.sections,
            price: phone.price,
          }}
        />
      </Animated.ScrollView>
      <Header {...{y, tabs, scrollView, model: phone.model}} />
    </View>
  );
};
