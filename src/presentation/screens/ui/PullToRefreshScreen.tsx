import {RefreshControl, Text, View} from 'react-native';
import {Title} from '../../components/ui/Title';
import {CustomView} from '../../components/ui/CustomView';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useState} from 'react';
import {lightColors, globalStyles} from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          progressViewOffset={top}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[lightColors.primary, 'red', 'orange']}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}>
      <Title text="Pull To Refresh" safe />
    </ScrollView>
  );
};
