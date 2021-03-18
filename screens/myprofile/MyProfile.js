import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class MyProfile extends Component {
  state = {};

  static navigationOptions = {
    title: "MyProfile",
  };
  render() {
    return;
    <View style={styles.container}>
      <Text>MyProfile</Text>
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
