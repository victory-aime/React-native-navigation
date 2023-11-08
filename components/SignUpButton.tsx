import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";

const styles = StyleSheet.create({
  buttonInnerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});

function SignUpButton({
  children,
  iconColor,
  marginLeft,
  position,
  onPress,
}: {
  children: React.ReactNode;
  iconColor: string;
  marginLeft?: number | undefined;
  position?: "absolute" | "relative" | undefined;
  onPress: () => void;
}) {
  return (
    <View>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#FE8368" }}
      >
        <Text style={styles.buttonText}>
          {children}
          <Icon
            name="arrow-right"
            size={20}
            style={{
              color: iconColor,
              marginLeft: marginLeft,
              position: position,
            }}
          />
        </Text>
      </Pressable>
    </View>
  );
}

export default SignUpButton;
