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

  const [speed, balance] = [800, 400];

  const suspend = Animated.timing(position.y, {
    toValue: -100,
    duration: speed,
    delay: balance,
    easing: Easing.linear,
  });

  const drop = Animated.timing(position.y, {
    toValue: 0,
    duration: speed,
    delay: balance,
    easing: Easing.bounce,
  });

  const movement = Animated.sequence([suspend, drop]);

  const animation = Animated.loop(movement);

  React.useEffect(() => {
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
