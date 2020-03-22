import React from 'react';
import { Animated, StyleSheet, Easing } from 'react-native';

export const Polygon: React.FC = () => {
  const style = StyleSheet.create({
    polygon: {
      width: 150,
      height: 150,
    },
  });

  const position = new Animated.ValueXY({
    x: 0,
    y: 0,
  });

  const [speed, debounce] = [800, 400];

  const movement = Animated.sequence([
    Animated.timing(position.x, {
      toValue: 100,
      duration: speed,
      delay: debounce,
      easing: Easing.linear,
    }),
    Animated.timing(position.y, {
      toValue: -100,
      duration: speed,
      delay: debounce,
      easing: Easing.linear,
    }),
    Animated.timing(position.x, {
      toValue: 0,
      duration: speed,
      delay: debounce,
      easing: Easing.linear,
    }),
    Animated.timing(position.y, {
      toValue: 0,
      duration: speed,
      delay: debounce,
      easing: Easing.bounce,
    }),
    Animated.timing(position.x, {
      toValue: -100,
      duration: speed,
      delay: debounce,
      easing: Easing.linear,
    }),
    Animated.timing(position.y, {
      toValue: -100,
      duration: speed,
      delay: debounce,
      easing: Easing.linear,
    }),
    Animated.timing(position.x, {
      toValue: 0,
      duration: speed,
      delay: debounce,
      easing: Easing.linear,
    }),
    Animated.timing(position.y, {
      toValue: 0,
      duration: speed,
      delay: debounce,
      easing: Easing.bounce,
    }),
  ]);

  const animation = Animated.loop(movement);

  React.useLayoutEffect(() => {
    animation.start();

    return () => animation.stop();
  }, []);

  return (
    <>
      <Animated.Image
        source={require('./assets/polygon.png')}
        style={[
          style.polygon,
          {
            transform: position.getTranslateTransform(),
          },
        ]}
      />
    </>
  );
};
