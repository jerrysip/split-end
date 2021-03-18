import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Sell extends Component {
  state = {};

  static navigationOptions = {
    title: "Sell",
  };
  render() {
    return;
    <View style={styles.container}>
      <Text>Sell</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
