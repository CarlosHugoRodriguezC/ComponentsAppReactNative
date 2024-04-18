import React, {useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {lightColors} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export const Card = ({style, children}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
