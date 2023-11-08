import React from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PrimaryButton from "../components/button";
import SignUpButton from "../components/SignUpButton";

// styles for loginScreen
const styles = StyleSheet.create({
  containerPrincipal: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D9D9D9",
    padding: 25,
    display: "flex",
    gap: 5,
  },
  logoDisplay: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  textLoginStyle: {
    color: "#FE8368",
    marginBottom: 20,
    marginTop: 20,
    fontSize: 32,
    alignSelf: "center",
  },
  textForgotStyle: {
    color: "#FE8368",
    marginBottom: 20,
    marginTop: 20,
    fontSize: 14,
    alignSelf: "center",
    textDecorationLine: "underline",
  },
  textInputContainer: {
    borderRadius: 12,
    marginBottom: 8,
    marginTop: 8,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
  },
  innerTextInput: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 5,
    backgroundColor: "#FE8368",
  },
  iconStyle: {
    position: "absolute",
    marginLeft: 15,
    color: "#fff",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
    marginLeft: 10,
    marginRight: 10,
  },
  dividerText: {
    color: "black",
  },
});

function LoginScreen({ navigation }) {
  return (
    <View style={styles.containerPrincipal}>
      <Image
        style={styles.logoDisplay}
        source={require("../assets/logo.png")}
      />
      <Text style={styles.textLoginStyle}>Login</Text>

      <View style={styles.textInputContainer}>
        <View style={styles.innerTextInput} />
        <Icon name="envelope" size={20} style={styles.iconStyle} />
        <TextInput style={styles.textInput} placeholder="Email address" />
      </View>
      <View style={styles.textInputContainer}>
        <View style={styles.innerTextInput} />
        <Icon name="lock" size={20} style={styles.iconStyle} />
        <TextInput style={styles.textInput} placeholder="Password" />
      </View>

      <PrimaryButton>
        Sign In <Icon name="arrow-right" size={20} style={styles.iconStyle} />
      </PrimaryButton>

      <Text style={styles.textForgotStyle}>Forgot Password?</Text>
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>
      <SignUpButton
        iconColor="#FE8368"
        position="absolute"
        marginLeft={20}
        onPress={() => navigation.navigate("Sign up")}
      >
        Sign Up
      </SignUpButton>
    </View>
  );
}

export default LoginScreen;
