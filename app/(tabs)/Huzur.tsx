import React, { useState } from 'react';
import { View, Animated, TouchableOpacity, StyleSheet } from 'react-native';

const Huzur = () => {
  const [eyeAnimation] = useState(new Animated.Value(1));
  const [pupilAnimation] = useState(new Animated.Value(1));

  const animateEyes = () => {
    Animated.sequence([
      Animated.timing(eyeAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(eyeAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatePupils = () => {
    Animated.sequence([
      Animated.timing(pupilAnimation, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(pupilAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const eyeStyle = {
    height: eyeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 50],
    }),
    width: 50,
    backgroundColor: 'orange',
    borderRadius: 25,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const pupilStyle = {
    height: pupilAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 30],
    }),
    width: pupilAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 30],
    }),
    backgroundColor: 'black',
    borderRadius: 15,
  };

  return (
    <TouchableOpacity onPress={() => {
      animateEyes();
      animatePupils();
    }}>
      <View style={styles.container}>
        {/* Cat Ears */}
        <View style={styles.earLeft} />
        <View style={styles.earRight} />
        <View style={styles.eyeContainer}>
          <Animated.View style={[eyeStyle, styles.eye]}>
            <Animated.View style={pupilStyle} />
          </Animated.View>
          <Animated.View style={[eyeStyle, styles.eye]}>
            <Animated.View style={pupilStyle} />
          </Animated.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    height: 150,
    width: 200,
    position: 'relative',
  },
  eyeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eye: {
    backgroundColor: 'yellow',
  },
  earLeft: {
    position: 'absolute',
    top: -30,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: 'orange',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    transform: [{ rotate: '-45deg' }],
  },
  earRight: {
    position: 'absolute',
    top: -30,
    right: 20,
    width: 40,
    height: 40,
    backgroundColor: 'orange',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    transform: [{ rotate: '45deg' }],
  },
});

export default Huzur;
