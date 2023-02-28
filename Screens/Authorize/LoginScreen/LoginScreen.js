import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  const keyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
    navigation.navigate("Home");
  };

  const touchableKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimensions(width);
    };
    const subscription = Dimensions.addEventListener("change", onChange);
    return () => subscription?.remove();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={touchableKeyboard}>
      <ImageBackground
        style={styles.imageBg}
        source={require("../../assets/images/bg-image.png")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "heigth"}
        >
          <View
            style={{
              ...styles.container,
              paddingBottom: isKeyboardShown ? 32 : 144,
            }}
          >
            <View style={{ ...styles.form, width: dimensions }}>
              <Text style={styles.title}>Login</Text>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="E-mail address"
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  onFocus={() => setIsKeyboardShown(true)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Password"
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  onFocus={() => setIsKeyboardShown(true)}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={keyboardHide}
              >
                <Text style={styles.textButton}>Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.containerLink}
                onPress={() => navigation.navigate("Registration")}
                activeOpacity={0.8}
              >
                <Text style={styles.link}>
                  You don't have an account? Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  title: {
    textAlign: "center",
    marginBottom: 33,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
  form: {
    justifyContent: "flex-start",
    paddingTop: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    heigth: 50,
    marginBottom: 16,
    paddingLeft: 16,
  },
  button: {
    marginTop: 43,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    height: 51,
  },
  textButton: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  containerLink: {
    alignItems: "center",
  },
  link: {
    color: "#1B4371",
  },
});
