import { View, Text } from "react-native";
import React from "react";
import { TabRoutes } from "./TabRoutes";
import { OrderSuccessfull } from "../Screens/OrderSuccessfull/OrderSuccessfull";
export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={"TabRoutes"}
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"OrderSuccessfull"}
        component={OrderSuccessfull}
        options={{ headerShown: false }}
      />
    </>
  );
}
