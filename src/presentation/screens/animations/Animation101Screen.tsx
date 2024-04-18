import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {lightColors} from '../../../config/theme/theme';
import {useAnimation} from '../../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  const startFadeIn = () => {
    startMovingTopPosition({
      initialPosition: -100,
      toValue: 0,
      easing: Easing.bounce,
    });
    fadeIn();
  };

  const startFadeOut = () => {
    fadeOut();
    startMovingTopPosition({initialPosition: 0, toValue: -100});
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      startFadeIn();
    }, 1000);
    
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: animatedOpacity,
          transform: [{translateY: animatedTop}],
        }}></Animated.View>
      <Pressable onPress={startFadeIn} style={{marginTop: 10}}>
        <Text style={styles.text}>Fade In</Text>
      </Pressable>
      <Pressable onPress={startFadeOut} style={{marginTop: 10}}>
        <Text style={styles.text}>Fade Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: lightColors.primary,
    width: 150,
    height: 150,
  },
  text: {
    color: lightColors.text,
  },
});
