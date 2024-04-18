import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {lightColors, globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigate = useNavigation();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    if (currentIndex < 0 || currentIndex >= items.length) {
      return;
    }

    setCurrentSlideIndex(currentIndex);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: lightColors.background}}>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        onScroll={onScroll}
      />

      {currentSlideIndex === items.length - 1 && (
        <Button
          text="Finish"
          onPress={() => {
            navigate.goBack();
          }}
          styles={{position: 'absolute', bottom: 60, right: 40, width: 120}}
        />
      )}

      {currentSlideIndex < items.length - 1 && (
        <Button
          text="Next"
          onPress={() => {
            scrollToSlide(currentSlideIndex + 1);
          }}
          styles={{position: 'absolute', bottom: 60, right: 40, width: 120}}
        />
      )}
    </View>
  );
};

interface SlideItemProps {
  item: Slide;
}
const SlideItem = ({item: {title, desc, img}}: SlideItemProps) => {
  const {width} = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
        width: width,
      }}>
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />
      <Text style={{...globalStyles.title, color: lightColors.primary}}>
        {title}
      </Text>
      <Text style={{color: lightColors.text, marginTop: 20}}>{desc}</Text>
    </View>
  );
};
