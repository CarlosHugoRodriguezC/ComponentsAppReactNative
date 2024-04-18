import {useContext, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {FlatList} from 'react-native-gesture-handler';
import {
  generateColorFromNumber,
  randomColor,
} from '../../../config/helpers/randomColors';
import {globalStyles} from '../../../config/theme/theme';
import {FadeInImage} from '../../components/ui/FadeInImage';
import {ThemeContext} from '../../context/ThemeContext';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);
  const {colors} = useContext(ThemeContext);

  const handleLoadMore = () => {
    if (numbers.length >= 100) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const lastNumber = numbers[numbers.length - 1];
      const newNumbers = Array.from({length: 10}, (_, i) => lastNumber + i + 1);
      setNumbers([...numbers, ...newNumbers]);
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <View style={{backgroundColor: colors.background, paddingHorizontal: 20}}>
        <Title text="Infinite Scroll" safe />
      </View>
      <CustomView>
        <FlatList
          data={numbers}
          keyExtractor={item => item.toString()}
          // ItemSeparatorComponent={() => <View style={{height: 20}} />}
          renderItem={({item}) => (
            // <Image
            //   source={{uri: `https://picsum.photos/id/${item}/500/400`}}
            //   style={{width: '100%', height: 400}}

            // />
            <FadeInImage
              uri={`https://picsum.photos/id/${item}/500/400`}
              style={{width: '100%', height: 400}}
            />
            //   <View
            //     style={{
            //       height: 50,
            //       backgroundColor: randomColor(),
            //       justifyContent: 'center',
            //       borderRadius: 10,
            //       alignItems: 'center',
            //     }}>
            //     <Text
            //       style={{
            //         fontSize: 90,
            //         position: 'absolute',
            //         top: 'auto',
            //         right: 0,
            //         fontFamily: 'Lato-Black',
            //         fontWeight: 'bold',
            //         fontStyle: 'italic',
            //         fontVariant: ['small-caps'],
            //         color: 'rgba(255,255,255,0.5)',
            //       }}>
            //       {item}
            //     </Text>
            //   </View>
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => (
            <View style={{height: 150, justifyContent: 'center'}}>
              {loading && <ActivityIndicator size={50} color={randomColor()} />}
            </View>
          )}
        />
      </CustomView>
    </>
  );
};
