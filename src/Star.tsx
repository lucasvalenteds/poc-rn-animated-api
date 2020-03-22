import React from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

export const Star: React.FC = () => {
  const style = StyleSheet.create({
    star: {
      width: 150,
      height: 150,
    },
  });
  const rotate = new Animated.Value(0);
  const rotateCounterClockwise = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });
  const rotateAnimation = Animated.timing(rotate, {
    toValue: 1,
    duration: 2800,
    easing: Easing.linear,
  });

  const animation = Animated.loop(rotateAnimation);

  React.useEffect(() => {
    animation.start();

    return () => animation.stop();
  }, []);

  return (
    <>
      <Animated.Image
        source={require('./assets/star.png')}
        style={[
          style.star,
          {
            transform: [{ rotate: rotateCounterClockwise }],
          },
        ]}
      />
    </>
  );
};
