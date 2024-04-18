import {Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const {currentTheme, setTheme} = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text={`Change Theme Screen - ${currentTheme}`} safe />

      <Button
        text="Light"
        onPress={() => {
          setTheme('light');
        }}
      />
      <View style={{height: 20}} />
      <Button
        text="Dark"
        onPress={() => {
          setTheme('dark');
        }}
      />
    </CustomView>
  );
};
