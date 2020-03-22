import React from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

export const Spiral: React.FC = () => {
  const style = StyleSheet.create({
    spiral: {
      width: 150,
      height: 150,
    },
  });
  const rotate = new Animated.Value(0);
  const rotateClockwise = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const rotateAnimation = Animated.timing(rotate, {
    toValue: 1,
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
        source={require('./assets/spiral.png')}
        style={[
          style.spiral,
          {
            transform: [{ rotate: rotateClockwise }],
          },
        ]}
      />
    </>
  );
};
