import React, { useState } from 'react';
import { View, Animated, TouchableOpacity, StyleSheet } from 'react-native';

const Zeytin = () => {
  // State for eye animation
  const [eyeAnimation] = useState(new Animated.Value(1));
  // State for pupil animation
  const [pupilAnimation] = useState(new Animated.Value(1));

  /**
   * Triggers the eye animation
   */
  const animateEyes = () => {

    // Animate eyes closing and opening
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
    ]).start(() => {});
  };

  /**
   * Triggers the pupil animation.
   */
  const animatePupils = () => {
    // Animate pupils moving
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

  // Styles for the eyes
  const eyeStyle = {
    height: eyeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 50],
    }),
    width: 50,
    backgroundColor: 'yellow',
    borderRadius: 25,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  };

  // Styles for the pupils
  const pupilStyle = {
    height: pupilAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 25],
    }),
    width: pupilAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 25],
    }),
    backgroundColor: 'black',
    borderRadius: 12.5,
  };

  // Render the animated cat eyes with ears
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
    backgroundColor: '#000',
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
    backgroundColor: 'black',
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
    backgroundColor: 'black',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    transform: [{ rotate: '45deg' }],
  },
});

export default Zeytin;
