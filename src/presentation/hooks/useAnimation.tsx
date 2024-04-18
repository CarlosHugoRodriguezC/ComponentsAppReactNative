import {useRef} from 'react';
import {Animated, Easing, type EasingFunction} from 'react-native';

export interface FadeOptions {
  duration?: number;
  toValue?: number;
  callback?: () => void;
}

export interface MovingOptions {
  duration?: number;
  initialPosition?: number;
  toValue?: number;
  easing?: EasingFunction;
  callback?: () => void;
}

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = (options?: FadeOptions) => {
    const {duration = 300, toValue = 1, callback} = options || {};

    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = (options?: FadeOptions) => {
    const {duration = 300, toValue = 0, callback} = options || {};
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const startMovingTopPosition = (options: MovingOptions) => {
    const {
      duration = 300,
      initialPosition = 0,
      toValue = 0,
      easing,
      callback,
    } = options;

    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue,
      duration,
      easing,
      useNativeDriver: true,
    }).start(callback);
  };

  return {
    animatedOpacity,
    animatedTop,

    // Functions
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
