import React, { Component } from "react";
import { View, Text } from "react-native";
import Welcome from "../screens/welcome/Welcome";
import HomeComponent from "../screens/home/HomeComponent";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab";

export default class MainComponent extends Component {
  render() {
    return (
      <View>
        <Text>
          <Welcome />
        </Text>
      </View>
    );
  }
}
