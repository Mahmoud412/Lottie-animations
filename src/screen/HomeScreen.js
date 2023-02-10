import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Lottie Animations </Text>
      </View>
      <LottieView
        source={require('../assets/Lottie/133564-typing.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lottie: {
    width: '80%',
    height: 300,
    marginVertical: 30,
    alignSelf: 'center',
  },
});
export default HomeScreen;
