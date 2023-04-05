import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image,
  } from "react-native";
  import React from "react";
  import { moderateScale } from "react-native-size-matters";
  import Colors from "../Screens/Colors/Colors";
  import imagePath from "../constants/imagePath";
  export default ({
    placeholder,
    icon,
    keyboard,
    onPress,
    Sreach,
  
  }) => {
    return (
      <View style={style.sreaching}>
        <Image source={Sreach}/>
        <TextInput
          style={style.lookingsreach}
          placeholder={placeholder}
          placeholderTextColor={Colors.BLACK}
          keyboardType={keyboard}
        ></TextInput>
      </View>
    );
  };
  const style = StyleSheet.create({
    sreaching: {
        backgroundColor: Colors.bulerGreen,
        height: 60,
        paddingLeft: moderateScale(14),
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
      },
      sreach: {
        height: moderateScale(24),
        width: moderateScale(24),
      },
      lookingsreach: {
        color: Colors.Green,
        fontSize: 14,
      },
  });
  