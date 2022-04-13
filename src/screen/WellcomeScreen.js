import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";
import LoginScreen from "./LoginScreen";
import MainScreen from "../Components/MainScreen";

const WellcomeScreen = (props) => {
  const { navigation } = props;
  const [isflast, setFlast] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFlast(false);
    }, 3000);
  }, []);
  return (
    <>
      {isflast ? (
        <SafeAreaView style={styles.container}>
          <Text style={styles.textWC}>Welcome To IT Shop</Text>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logo_1.png")}
          />
        </SafeAreaView>
      ) : (
        <LoginScreen navigation={navigation} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#40BFFF",
  },
  logo: {
    marginTop: 50,
    width: 75,
    height: 75,
    alignSelf: "center",
  },
  textWC: {
    fontSize: 30,
    height: 35,
    color: "#FFF",
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 270,
  },
});
export default WellcomeScreen;
