import React from 'react';
import { Animated, StyleSheet } from 'react-native';

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

  const movement = Animated.sequence([
    Animated.timing(position.x, {
      toValue: 100,
      duration: 650,
    }),
    Animated.timing(position.y, {
      toValue: -100,
      duration: 650,
    }),
    Animated.timing(position.x, {
      toValue: 0,
      duration: 650,
    }),
    Animated.timing(position.y, {
      toValue: 0,
      duration: 650,
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
