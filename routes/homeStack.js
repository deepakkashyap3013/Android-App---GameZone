import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({ navigation }) => {
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
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => {
            return <Header title="GameZone" navigation={navigation} />;
          },
          headerBackground: () => (
            <Image
              source={require("../assets/game_bg.png")}
              style={{ height: "100%" }}
            />
          ),
        }}
      />
      <Screen
        name="Details"
        component={ReviewDetails}
        options={{
          // headerTitle: () => {
          //   return <Header title="Details" navigation={navigation} />;
          // },
          title: "Details",
        }}
      />
    </Navigator>
  );
};

export default HomeStack;
