import {StyleSheet} from 'react-native';

export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  cardBackground: string;
  buttonTextColor: string;
  separator: string;
}

export const lightColors: ThemeColors = {
  primary: '#5856D6',
  text: 'black',

  background: '#F3F2F7',
  cardBackground: 'white',
  buttonTextColor: 'white',
  separator: '#5856D6',
};

export const darkColors: ThemeColors = {
  primary: '#5856D6',
  text: 'white',

  background: 'black',
  cardBackground: '#333333',
  buttonTextColor: 'white',
  separator: '#5856D6',
};

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    // color: lightColors.text,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: lightColors.text,
  },

  mainContainer: {
    flex: 1,
    // backgroundColor: lightColors.background,
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },

  btnPrimary: {
    // backgroundColor: lightColors.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  btnPrimaryText: {
    // color: lightColors.text,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 10,
    // color: lightColors.text,
  },
});
