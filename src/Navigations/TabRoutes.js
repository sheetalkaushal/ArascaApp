import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../Screens/Colors/Colors";
import { Home } from "../Screens/Home/Home";
import imagePath from "../constants/imagePath";
import Chat from "../Screens/Chat/Chat";
import Wallet from "../Screens/Wallet/Wallet";

import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import { Order } from "../Screens/Order/Order";
import { Profile } from "../Screens/Profile/Profile";
const Tab = createBottomTabNavigator();
export const TabRoutes = () => {
  return (
    <Tab.Navigator
      initRouteName="Home"
      screenOptions={{
        tabBarStyle:{
          backgroundColor:Colors.Green,
         height:moderateVerticalScale(60),

        },
        tabBarLabelStyle:{
          fontSize:12,
          marginBottom:7,
  },
        tabBarActiveTintColor: Colors.LightWhite,
        tabBarInactiveTintColor:Colors.dark_gery,
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop:10,
                  tintColor: focused ? Colors.LightWhite : Colors.dark_gery}}
                source={imagePath.icHome}
              />
            );
          },
          
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarStyle:{display:"none"},
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop:10,
                  tintColor: focused ? Colors.LightWhite : Colors.dark_gery,
                }}
                source={imagePath.icShopping}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop:10,
                  tintColor: focused ?Colors.LightWhite : Colors.dark_gery
                }}
                source={imagePath.icchat}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30, 
                   marginTop:10,
                  tintColor: focused ?Colors.LightWhite : Colors.dark_gery
                }}
                source={imagePath.icwallet}
              />
            );
          },
        }}
      />
         <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginTop:10,
                  tintColor: focused ? Colors.LightWhite : Colors.dark_gery
                }}
                source={imagePath.icperson}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};


