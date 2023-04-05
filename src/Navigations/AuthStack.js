import { View, Text } from "react-native";
import React from "react";
import { Signup } from "../Screens/Signup/Signup";
export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={"Signup"}
        component={Signup}
        options={{ headerShown: false }}
      />
    </>
  );
}
