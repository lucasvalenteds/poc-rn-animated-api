import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spiral } from './Spiral';

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
        <Spiral />
      </View>
    </>
  );
};

export default App;
