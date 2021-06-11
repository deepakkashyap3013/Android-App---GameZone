import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";

const { Navigator, Screen } = createDrawerNavigator();

const Drawer = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeStack} />
      <Screen name="About" component={AboutStack} />
    </Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default AppContainer;
