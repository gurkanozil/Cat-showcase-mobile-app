import React, { useState } from 'react';
import { View, Animated, TouchableOpacity, StyleSheet, Vibration } from 'react-native';

const Huzur = () => {
  const [eyeAnimation] = useState(new Animated.Value(1));
  const [pupilAnimation] = useState(new Animated.Value(1));

  // Vibration duration variables (in milliseconds)
  const vibrationPause = 5; // Pause duration between vibrations
  const vibrationDuration = 1000; // Total duration for the vibration effect

  const animateEyes = () => {
    // Start vibration with a pattern
    Vibration.vibrate([vibrationPause, vibrationDuration], true);

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
    ]).start(() => {
      // Stop vibration after animation completes
      Vibration.cancel();
    });
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
    width: 200,
    height: 200,
    backgroundColor: 'transparent',
    borderLeftWidth: 100,
    borderRightWidth: 100,
    borderTopWidth: 200,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'orange',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  eyeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    paddingBottom: 100,
  },
  eye: {
    backgroundColor: 'yellow',
  },
  earLeft: {
    position: 'absolute',
    top: -230,
    left: 50,
    width: 40,
    height: 40,
    backgroundColor: 'orange',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    transform: [{ rotate: '-45deg' }],
  },
  earRight: {
    position: 'absolute',
    top: -230,
    right: 50,
    width: 40,
    height: 40,
    backgroundColor: 'orange',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    transform: [{ rotate: '45deg' }],
  },
});

export default Huzur;
