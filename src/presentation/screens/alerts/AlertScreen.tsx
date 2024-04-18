import {Alert, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {globalStyles} from '../../../config/theme/theme';

export const AlertScreen = () => {
  const {top} = useSafeAreaInsets();

  const createTwoButtonAlert = () => {
    return Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const createThreeButtonAlert = () => {
    return Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const createPrompt = () => {

    
    // return Alert.prompt(
    //   'Enter password',
    //   'Enter your password to claim your $1.5B in lottery winnings',
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //     {
    //       text: 'OK',
    //       onPress: password => console.log('OK Pressed, password: ' + password),
    //     },
    //   ],
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="Alertas" safe />
      <Button text="Alerta - 2 botones" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Alerta - 3 botones" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Prompt" onPress={createPrompt} />
    </CustomView>
  );
};
