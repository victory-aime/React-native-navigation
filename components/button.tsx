import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 12,
    marginTop: 12,
 
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#FE8368',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});

function PrimaryButton({children}: {children: React.ReactNode}) {
  function pressHandler() {
    console.log('Pressed!');
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{color: '#000'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
