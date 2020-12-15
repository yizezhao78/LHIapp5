// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View, Image } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import HomeScreen from "./screens/HomeScreen";
// import PrayScreen from "./screens/PrayScreen";
// import GiveScreen from "./screens/GiveScreen";
// import MeScreen from "./screens/MeScreen";

// function LogoTitle() {
//   return (
//     <Image
//       style={{
//         width: 180,
//         height: 60,
//         resizeMode: "contain",
//         alignSelf: "center",
//       }}
//       source={require("./pics/lhgm-logo.jpg")}
//     />
//   );
// }

// // const Stack = createStackNavigator();
// const Tabs = createBottomTabNavigator();
// const HomeStack = createStackNavigator();
// const PrayStack = createStackNavigator();
// const GiveStack = createStackNavigator();
// const MeStack = createStackNavigator();

// const HomeStackScreen = () => (
//   <HomeStack.Navigator>
//     <HomeStack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
//     />
//   </HomeStack.Navigator>
// );
// const GiveStackScreen = () => (
//   <GiveStack.Navigator>
//     <GiveStack.Screen
//       name="Give"
//       component={GiveScreen}
//       options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
//     />
//   </GiveStack.Navigator>
// );
// const PrayStackScreen = () => (
//   <PrayStack.Navigator>
//     <PrayStack.Screen
//       name="Pray"
//       component={PrayScreen}
//       options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
//     />
//   </PrayStack.Navigator>
// );
// const MeStackScreen = () => (
//   <MeStack.Navigator>
//     <MeStack.Screen name="Me" component={MeScreen} />
//   </MeStack.Navigator>
// );

// function App() {
//   return (
//     <NavigationContainer>
//       <Tabs.navigator>
//         <Tabs.Screen name="Home" component={<View><Text>123</Text></View>} />
//         {/* <Tabs.Screen name="Give" component={GiveStackScreen} />
//         <Tabs.Screen name="Pray" component={PrayStackScreen} />
//         <Tabs.Screen name="Me" component={MeStackScreen} /> */}
//       </Tabs.navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default App;

import * as React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import PrayScreen from "./screens/PrayScreen";
import GiveScreen from "./screens/GiveScreen";
import MeScreen from "./screens/MeScreen";

const Tabs = createBottomTabNavigator();

const Stack = createStackNavigator();
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
}

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
    />
  </HomeStack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Give" component={GiveScreen} />
        {/* <Tabs.Screen name="Pray" component={PrayStackScreen} />
        <Tabs.Screen name="Me" component={MeStackScreen} /> */}
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;