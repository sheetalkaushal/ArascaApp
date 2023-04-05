import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Colors from "../Screens/Colors/Colors";
export const Styles= StyleSheet.create({
  container1: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",   
  },
  container2: {
    flex: 0.6,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: moderateScale(45),
  
  },
 

});
