import {ColorValue, Text, View} from 'react-native';
import {lightColors, globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor?: ColorValue;
}

export const SubTitle = (props: Props) => {
  const {colors} = useContext(ThemeContext);
  const {text, safe = false, backgroundColor = colors.background} = props;
  const {top} = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        color: colors.text,
        backgroundColor,
        marginTop: safe ? top : 0,
        marginBottom: 10,
      }}>
      {text}
    </Text>
  );
};
