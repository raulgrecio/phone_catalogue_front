import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef<NavigationContainerRef>();

export const screenNames = {
  home: 'Home',
  phoneDetail: 'PhoneDetail',
  settings: 'Settings',
};

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack,
};
