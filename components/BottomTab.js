import React, { Component } from "react";
import { View, Text, StyleSheet, Dimension, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeComponent from "../screens/home/HomeComponent";
import Messages from "../screens/messages/Messages";
import { Icon } from "react-native-elements";

function HomeScreen() {
  return (
    <View
      style={{
        alignItems: "center",
        position: "relative",
        right: 90,
      }}
    >
      <Text>
        <HomeComponent />
      </Text>
    </View>
  );
}

function MessagesScreen() {
  return (
    <View
      style={{
        alignItems: "center",
        position: "relative",
        right: 90,
      }}
    >
      <Text>
        <Messages />
      </Text>
    </View>
  );
}

function SellScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Sell</Text>
    </View>
  );
}

function MyProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function BagScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bag!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Messages") {
            iconName = focused ? "envelope" : "envelope";
          } else if (route.name === "Sell") {
            iconName = focused ? "plus" : "plus";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Bag") {
            iconName = focused ? "shopping-bag" : "shopping-bag";
          }

          // You can return any component that you like here!
          return (
            <Icon
              type="font-awesome"
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "pink",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Sell" component={SellScreen} />
      <Tab.Screen name="Profile" component={MyProfileScreen} />
      <Tab.Screen name="Bag" component={BagScreen} />
    </Tab.Navigator>
  );
}

export default class BottomTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Text style={styles.bottomtext}></Text>

          <MyTabs />
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  bottomtext: {
    color: "black",
    position: "relative",
    top: 835,
    zIndex: 100,
    justifyContent: "space-between",
    width: 500,
  },
});
