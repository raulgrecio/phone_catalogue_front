import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef, screenNames} from './NavigationService';

import Home from 'app/screens/Home';
import PhoneDetail from 'app/screens/PhoneDetail';
import locale from 'app/constants/es';
import {PhoneResponse} from 'app/models/api/phone';
import {COLORS} from 'app/config/styles';

//import ThemeController from '../components/ThemeController';

const Stack = createStackNavigator();

const homeOptions: any = {
  title: locale.home.screenTitle,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  //headerRight: () => <ThemeController />,
  headerTintColor: COLORS.black,
};

const detailOptions: any = {
  title: locale.phoneDetail.screenTitle,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  //headerRight: () => <ThemeController />,
  headerTintColor: COLORS.black,
};

interface IProps {
  theme: Theme;
}

export type RootStackParamList = {
  Home: undefined;
  PhoneDetail: {phone: PhoneResponse};
};

const App: React.FC<IProps> = (props: IProps) => {
  const {theme} = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator initialRouteName={screenNames.home}>
        <Stack.Screen
          name={screenNames.home}
          component={Home}
          options={homeOptions}
        />
        <Stack.Screen
          name={screenNames.phoneDetail}
          component={PhoneDetail}
          options={detailOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
