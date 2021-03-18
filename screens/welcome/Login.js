import React, { Component } from "react";
import { Alert, Button, TextInput, View, StyleSheet, Text } from "react-native";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onLogin() {
    const { email, password } = this.state;

    Alert.alert("Credentials", `${email} + ${password}`);
  }
  render() {
    return (
      <View style={styles.loginwrap}>
        <View style={styles.logincontainer}>
          <TextInput
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            placeholder={"email"}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={"password"}
            secureTextEntry={true}
            style={styles.input}
          />
          <Text style={styles.forgot}>Forgot password?</Text>
        </View>
        <View style={styles.btncontainer}>
          <Button
            style={styles.btnsign}
            title={"SIGNIN"}
            color="white"
            onPress={this.onLogin.bind(this)}
          />
          <Button style={styles.btnsign} title={"SIGNUP"} color="white" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginwrap: {
    position: "relative",
  },
  logincontainer: {
    justifyContent: "flex-end",
    backgroundColor: "black",
    width: "100%",
    height: "40%",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 34,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 45,
    marginHorizontal: 100,
    backgroundColor: "white",
  },
  btncontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "27%",
    backgroundColor: "black",
    paddingTop: 30,
    paddingBottom: 30,
    color: "white",
    position: "relative",
    bottom: "5%",
  },
  forgot: {
    width: "100%",
    color: "white",
    textAlign: "center",
    position: "relative",
    bottom: 30,
  },
  btnsign: {
    fontWeight: "bold",
  },
});

export default Login;
