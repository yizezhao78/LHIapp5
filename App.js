import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HomeScreen from "./screens/HomeScreen";
import PrayScreen from "./screens/PrayScreen";
import GiveScreen from "./screens/GiveScreen";
import MeScreen from "./screens/MeScreen";
import ProgramScreen from "./screens/ProgramScreen";
import NewsLetterScreen from "./screens/NewsLetterScreen";
import EventScreen from "./screens/EventScreen";

const Tabs = createBottomTabNavigator();
const HomeTopTab = createMaterialTopTabNavigator();

const HomeStack = createStackNavigator();
const PrayStack = createStackNavigator();
const GiveStack = createStackNavigator();
const MeStack = createStackNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{
        width: 180,
        height: 60,
        resizeMode: "contain",
        alignSelf: "center",
      }}
      source={require("./pics/lhgm-logo.jpg")}
    />
  );
};


const HomeTopTabScreen = () => (
  <HomeTopTab.Navigator>
    <HomeTopTab.Screen name="Program" component={ProgramScreen} />
    <HomeTopTab.Screen name="NewsLetter" component={NewsLetterScreen} />
    <HomeTopTab.Screen name="Event" component={EventScreen} />
  </HomeTopTab.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeTopTabScreen}
      options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
    />
  </HomeStack.Navigator>
);

const PrayStackScreen = () => (
  <PrayStack.Navigator>
    <PrayStack.Screen
      name="Pray"
      component={PrayScreen}
      options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
    />
  </PrayStack.Navigator>
);

const GiveStackScreen = () => (
  <GiveStack.Navigator>
    <GiveStack.Screen
      name="Give"
      component={GiveScreen}
      options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
    />
  </GiveStack.Navigator>
);

const MeStackScreen = () => (
  <MeStack.Navigator>
    <MeStack.Screen name="Me" component={MeScreen} />
  </MeStack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "ios-home";
              // return <Ionicons name={iconName} size={size} color={color} />;
              // We want to add badges to home tab icon
              // IconComponent = HomeIconWithBadge;
            } else if (route.name === "Give") {
              iconName = "ios-heart";
              // return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Me") {
              iconName = "ios-person";
              // return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Pray") {
              iconName = "md-bug";
              // return <FontAwesomeIcon icon="coffee" />
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Give" component={GiveStackScreen} />
        <Tabs.Screen name="Pray" component={PrayStackScreen} />
        <Tabs.Screen name="Me" component={MeStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
