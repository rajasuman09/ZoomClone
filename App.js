import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./app/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MeetingRoom from "./app/screens/MeetingRoom";
import colors from "./app/config/colors";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Meeting Room"
          component={MeetingRoom}
          options={{
            title: "Start a Meeting",
            headerTintColor: colors.white,
            headerStyle: {
              backgroundColor: "#1c1c1c",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
