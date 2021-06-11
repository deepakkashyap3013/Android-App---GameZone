import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/about";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = ({ navigation }) => {
  return (
    <Navigator
      headerMode="float"
      // default navigation
      screenOptions={{
        headerTintColor: "black",
        headerStyle: {
          // backgroundColor: "coral",
          height: 80,
        },
        headerTitleAlign: "center",
        headerBackground: () => (
          <Image
            source={require("../assets/game_bg.png")}
            style={{ height: "100%" }}
          />
        ),
      }}
    >
      <Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => {
            return <Header title="About Gamezone" navigation={navigation} />;
          },
        }}
      />
    </Navigator>
  );
};

export default AboutStack;
