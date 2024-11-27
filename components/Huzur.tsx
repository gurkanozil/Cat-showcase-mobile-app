import React, { useState } from 'react';
import { View, Animated, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * A component that renders a cute cat face with eyes that blink and pupils that move.
 * When the user presses the component, the eyes blink and the pupils move.
 */
const Huzur = () => {
  const [eyeAnimation] = useState(new Animated.Value(1));
  const [pupilAnimation] = useState(new Animated.Value(1));

  /**
   * Animate the eyes closing and opening.
   */
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
    ]).start(() => {
    });
  };

  /**
   * Animate the pupils moving.
   */
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

  /**
   * Generate the style for the eyes.
   * The height of the eye is animated with the value of `eyeAnimation`
   * The width of the eye is fixed at 50.
   * The background color of the eye is orange.
   * The border radius of the eye is 25.
   * The margin of the eye is 5.
   * The justifyContent and alignItems of the eye is 'center'
   */
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

  /**
   * Generate the style for the pupils.
   * The height of the pupil is animated with the value of `pupilAnimation`
   * The width of the pupil is animated with the value of `pupilAnimation`
   * The background color of the pupil is black.
   * The border radius of the pupil is 15.
   */
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

  /**
   * Render the component.
   */
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
