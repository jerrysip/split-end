import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Bag extends Component {
  state = {};

  static navigationOptions = {
    title: "Bag",
  };
  render() {
    return;
    <View style={styles.container}>
      <Text>Bag</Text>
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
