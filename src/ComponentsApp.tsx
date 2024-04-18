import 'react-native-gesture-handler';

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

import {StackNavigator} from './presentation/navigator/';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeContext, ThemeProvider} from './presentation/context/ThemeContext';
import {PropsWithChildren, useContext} from 'react';

const AppNavigation = ({children}: PropsWithChildren) => {
  const {currentTheme} = useContext(ThemeContext);
  return (
    <NavigationContainer
      theme={currentTheme === 'dark' ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationContainer>
  );
};

const AppTheme = ({children}: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>{children}</AppNavigation>
    </ThemeProvider>
  );
};

export const App = () => {
  return (
    <AppTheme>
      <StatusBar
        animated={true}
        showHideTransition={'fade'}
        backgroundColor="transparent"
        translucent={true}
        barStyle={'dark-content'}
      />
      <StackNavigator />
    </AppTheme>
  );
};
