import {Modal, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {useContext, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const ModalScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView margin>
      <Title text="Modal Screen" safe />
      <Button
        text="Open Modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />

      <Modal visible={isVisible} animationType="slide">
        <View
          style={{flex: 1, backgroundColor: colors.background, padding: 10}}>
          <Title text="Modal" />

          <View style={{flex: 1}} />
          <Button
            text="Close Modal"
            onPress={() => {
              setIsVisible(false);
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
