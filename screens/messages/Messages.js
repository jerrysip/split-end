import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default class Messages extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View>
          <Text style={styles.logo}>SPLIT-END</Text>
        </View>

        <View style={styles.hero}>
          <Text>heyfadafasdfsdfdsfsdfsfadfasfafadfs</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    width: "300%",
    backgroundColor: "white",
  },
  logo: {
    fontSize: 32,
    color: "pink",
    position: "relative",
    left: 130,
    top: 60,
    width: "300%",
    alignItems: "center",
    justifyContent: "center",
  },

  hero: {
    position: "relative",
    top: 80,
  },
});
