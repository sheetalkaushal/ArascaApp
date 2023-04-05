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
import { Styles } from "../Screens/Signup/SignupStyle";
export default ({
  placeholder,
  icon,
  keyboard,
  hide,
  onPress,
  SHOW,
  Socialicon,
  ...props
}) => {
  return (
    <View style={style.inputstyle}>
      <Image source={Socialicon}/>
      <TextInput
        style={style.settext}
        placeholder={placeholder}
        placeholderTextColor={Colors.BLACK}
        keyboardType={keyboard}
        secureTextEntry={hide}
        {...props}
      ></TextInput>
      {SHOW ? (
        <TouchableOpacity onPress={onPress}>
         <Image style={Styles.show}source={SHOW}/>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
const style = StyleSheet.create({
  inputstyle: {
    padding: moderateScale(3),
    marginTop: moderateScale(23),
    backgroundColor:Colors.LightWhite,
    borderBottomColor:Colors.LightGrey,
    borderBottomWidth:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap:12,
  },
  show: {
    color: Colors.Black,
  },
  settext: {
    flex: 1,
    fontSize:14,
    color:Colors.BLACK,
    fontWeight:"500",
  },

});
