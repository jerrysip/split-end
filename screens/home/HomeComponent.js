import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  SafeAreaView,
} from "react-native";
import { Helvetica } from "@expo-google-fonts/dev";
import { Searchbar } from "react-native-paper";
import "../../images/clips.jpg";
import "../../images/clippers.jpg";
import "../../images/herodryer.jpeg";
import "../../images/shears.jpeg";

export default class HomeComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView>
          <ScrollView style={styles.scroll}>
            <View>
              <Text style={styles.logo}>SPLIT-END</Text>
            </View>
            <View style={styles.search}>
              <Searchbar placeholder="Search" />
            </View>
            <View style={styles.hero}>
              <View style={styles.line} />

              <Image
                style={{
                  height: "150%",
                  resizeMode: "contain",
                  position: "relative",
                }}
                source={require("../../images/herodryer.jpeg")}
              />
              <View style={styles.black}>
                <Text style={styles.herotext}>BLOWN AWAY</Text>
                <Text style={styles.stafftext}>By our staff picks</Text>
                <Text style={styles.stafftexts}>
                  Check out our all time favorite tools.
                </Text>
                <View style={styles.shopbutton}>
                  <Button
                    title="Shop Now"
                    color="white"
                    onPress={() => Alert.alert("Simple Button pressed")}
                  />
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.staff}>Staff Picks</Text>
              <Text style={styles.shopnow}>Shop Now</Text>
              <Text style={styles.dots}>...</Text>
              <View style={styles.lineStyle} />
              <Text style={styles.categorytext}>SHOP BY CATEGORY</Text>

              <Image
                style={{
                  height: "20%",
                  resizeMode: "contain",
                  position: "relative",
                  top: 255,
                  right: 62,
                }}
                source={require("../../images/clips.jpg")}
              />
              <Image
                style={{
                  height: "20%",
                  resizeMode: "contain",
                  position: "relative",
                  top: 145,
                  right: 100,
                }}
                source={require("../../images/clippers.jpg")}
              />
              <Image
                style={{
                  height: "20%",
                  resizeMode: "contain",
                  position: "relative",
                  top: 40,
                  left: 6,
                }}
                source={require("../../images/shears.jpeg")}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    width: "300%",
    height: "800%",
    backgroundColor: "white",
    position: "relative",
    bottom: 80,
  },
  logo: {
    fontSize: 40,
    color: "pink",
    fontWeight: "bold",
    position: "relative",
    left: 198,
    top: 110,
    width: "300%",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    position: "relative",
    right: 322,
    top: 120,
    marginHorizontal: 430,
  },
  hero: {
    position: "relative",
    top: 120,
    height: 200,
    right: 100,
  },
  staff: {
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    position: "relative",
    top: 260,
    left: 230,
    fontWeight: "bold",
  },
  shopnow: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "pink",
    position: "relative",
    top: 265,
    left: 248,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 10,
    position: "relative",
    top: 205,
  },
  line: {
    borderWidth: 0.5,
    borderColor: "black",
    position: "relative",
    top: 0,
    marginTop: 10,
    marginBottom: 5,
  },
  black: {
    height: 200,
    backgroundColor: "black",
    position: "relative",
    bottom: 300,
    width: 300,
    height: 300,
    left: 88,
  },
  herotext: {
    color: "white",
    fontFamily: "Helvetica",
    fontSize: 48,
    position: "relative",
    left: 48,
    top: 40,
    textAlign: "center",

    fontWeight: "bold",
    letterSpacing: 2,
    marginHorizontal: 50,
  },
  stafftext: {
    color: "white",
    fontSize: 11,
    textAlign: "center",
    position: "relative",
    top: 53,
    left: 50,
  },
  stafftexts: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
    position: "relative",
    top: 55,
    left: 92,
    width: 220,
  },
  shopbutton: {
    position: "relative",
    top: 70,
    left: 49,
    borderStyle: "solid",
    borderColor: "white",
  },
  categorytext: {
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
    position: "relative",
    top: 220,
    left: 179,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    fontSize: 100,
    color: "black",
    position: "relative",
    left: 262,
    top: 220,
  },
});
