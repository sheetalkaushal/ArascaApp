import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Colors from "../Colors/Colors";

export const Styles = StyleSheet.create({
  container: {
    marginTop: moderateVerticalScale(105),
    flex: 1,
  },
  orders: {
    flex: 0.7,
    paddingHorizontal: moderateScale(15),
  },
  orderSucces: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.BLACK,
  },
  shopping: {},
  orderdate: {
    flex: 0.2,
  },
  post: {
    paddingHorizontal: moderateVerticalScale(44),
    marginTop: moderateVerticalScale(6),
  },
  gotorder: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    color: Colors.BLACK,
  },
  continueShopping: {
    flex: 0.4,
    paddingHorizontal: moderateScale(24),
  },
  completeorder: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    color: Colors.greey,
  },
  shoppingcomplete: {
    marginTop: moderateVerticalScale(23),
  },
});
