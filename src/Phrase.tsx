import React from 'react';
import { Animated, StyleSheet, Easing } from 'react-native';

export const Phrase: React.FC = () => {
  const style = StyleSheet.create({
    phrase: {
      fontSize: 36,
    },
  });

  const position = new Animated.ValueXY();
  const opacity = new Animated.Value(1);

  const movement = Animated.stagger(100, [
    Animated.timing(position.x, {
      toValue: 100,
      duration: 2000,
    }),
    Animated.timing(position.y, {
      toValue: 100,
      duration: 1050,
    }),
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1500,
      easing: Easing.linear,
    }),
  ]);

  const animation = Animated.loop(movement);

  React.useLayoutEffect(() => {
    animation.start();

    return () => animation.stop();
  }, []);

  return (
    <>
      <Animated.Text
        style={[
          style.phrase,
          {
            transform: position.getTranslateTransform(),
            opacity: opacity,
          },
        ]}>
        Hello World
      </Animated.Text>
    </>
  );
};
