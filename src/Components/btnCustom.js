import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Colors from "../Screens/Colors/Colors";

export default ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={style.btntouch}>
        <Text style={style.btntext}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  btntouch: {
    backgroundColor:Colors.Green,
    borderRadius: 8,
    alignItems: "center",
    marginTop:moderateVerticalScale(44),
    paddingVertical: moderateVerticalScale(14),
  },
  btntext: {
    fontSize: moderateVerticalScale(16),
    fontWeight: "bold",
    textAlign: "center",
    color:Colors.LightWhite,
  },
});
