import React, {useContext} from 'react';
import {type ColorValue, type DimensionValue, View} from 'react-native';
import {lightColors} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  isVertical?: boolean;
  size?: DimensionValue;
  color?: ColorValue;
  marginVertical?: DimensionValue;
  marginHorizontal?: DimensionValue;
}

export const Separator = (props: Props) => {
  const {colors} = useContext(ThemeContext);
  const {
    isVertical = false,
    size = '100%',
    color = colors.separator,
    marginVertical = 0,
    marginHorizontal = 0,
  } = props;
  return (
    <View
      style={{
        alignSelf: 'center',
        backgroundColor: color,
        marginVertical,
        marginHorizontal,
        width: isVertical ? 1 : size,
        height: isVertical ? size : 1,
      }}
    />
  );
};
