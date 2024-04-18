import {useContext, useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {Separator} from '../../components/ui/Separator';

export const SwitchScreen = () => {
  const {top} = useSafeAreaInsets();
  const [state, setState] = useState({
    isActive: false,
    isHungry: true,
    isHappy: false,
  });

  return (
    <CustomView style={{paddingTop: top + 100}}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          text="Active"
          onChange={value => setState({...state, isActive: value})}
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHungry}
          text="Hungry"
          onChange={value => setState({...state, isHungry: value})}
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHappy}
          text="Happy"
          onChange={value => setState({...state, isHappy: value})}
        />
      </Card>
    </CustomView>
  );
};
