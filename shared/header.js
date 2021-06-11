import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";

import { images } from "../styles/global";

const Header = (props) => {
  const { title, navigation } = props;

  const openMenu = () => {
    // navigation.dispatch(DrawerActions.openDrawer());
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.header}>
      {/* icon */}
      <Feather
        name="menu"
        size={28}
        color="black"
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerLogo}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    height: "100%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    right: 16,
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerLogo: {
    width: 23,
    height: 23,
    marginHorizontal: 10,
  },
});

export default Header;
