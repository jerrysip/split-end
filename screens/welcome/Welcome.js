import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Login from "./Login";
import { Staatliches_400Regular } from "@expo-google-fonts/dev";

export default class Welcome extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        styles={styles.container}
        source={require("/Users/mac/Desktop/split-end/split-end/images/welcome.jpeg")}
      >
        <View style={styles.overlay}>
          <Text style={styles.logo}>SPLIT-END</Text>
          <Text style={styles.sublogo}>BUY & SELL . BEAUTY</Text>
        </View>

        <Login />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, .5)",
    height: "65%",
    width: "100%",
    zIndex: 1,
  },
  logo: {
    fontSize: 42,
    fontFamily: "Staatliches_400Regular",
    color: "white",
    fontWeight: "bold",
    position: "relative",
    top: "40%",
    left: "24%",
  },
  sublogo: {
    fontSize: 20,
    color: "pink",
    fontFamily: "Staatliches_400Regular",
    fontWeight: "bold",
    position: "relative",
    top: "39%",
    left: "24.8%",
  },
});
