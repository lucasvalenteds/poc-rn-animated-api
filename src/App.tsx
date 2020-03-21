import React, { useLayoutEffect } from 'react';
import { StyleSheet, Animated, Easing, View } from 'react-native';

const App: React.FC = (): React.ReactElement => {
  const style = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loader: {
      width: 150,
      height: 150,
    },
  });

  const rotate = new Animated.Value(0);
  const rotateInterpolation = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const rotateAnimation = Animated.timing(rotate, {
    toValue: 1,
    easing: Easing.linear,
  });

  const animation = Animated.loop(rotateAnimation);

  useLayoutEffect(() => {
    animation.start();

    return () => animation.stop();
  }, []);

  return (
    <>
      <View style={style.container}>
        <Animated.Image
          source={require('./loader.png')}
          style={[
            style.loader,
            {
              transform: [{ rotate: rotateInterpolation }],
            },
          ]}
        />
      </View>
    </>
  );
};

export default App;
