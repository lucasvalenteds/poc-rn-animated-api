import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spiral } from './Spiral';
import { Star } from './Star';
import { Polygon } from './Polygon';

const App: React.FC = (): React.ReactElement => {
  const style = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <>
      <View style={style.container}>
        <Polygon />
        <Spiral />
        <Star />
      </View>
    </>
  );
};

export default App;
