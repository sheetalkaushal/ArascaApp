import { StyleSheet } from "react-native";
import Colors from "../Colors/Colors";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
export const Styles = StyleSheet.create({
  wrap: {
    backgroundColor: Colors.white,
    marginTop: moderateScale(14),
  },

  container: {
    borderBottomWidth: 1,
    paddingBottom: 9,
    borderBottomColor: "#ebebe0",
    paddingBottom: 19,
    paddingHorizontal: moderateScale(16),
  },

  user: {
    marginTop: moderateScale(12),
    width: 70,
    height: 70,
    marginHorizontal: moderateScale(7),
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: "rgba(199, 222, 235, 1)",
    borderRadius: moderateScale(27),
    justifyContent: "center",
    alignSelf: "center",
  },
  txtcontent: {
    marginLeft: moderateScale(20),
    marginBottom: moderateScale(16),
    alignItems: "center",
  },
  Selling: {
    color: Colors.BLACK,
    fontSize: 20,
  },
  sellingimg: {
    width: 100,
    height: 100,
    marginLeft: 23,
    borderRadius: 5,
    alignSelf: "center",
  },
  VIEW: {
    color: Colors.Green,
    fontSize: 14,
  },
  SellingProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateVerticalScale(10),
  },
  firstaid: {
    marginTop: moderateVerticalScale(17),
  },
  aid: {
    color: Colors.Green,
  },
  healthcare: {
    marginTop: moderateVerticalScale(17),
    marginRight: moderateScale(20),
  },
  careimg: {
    height: 100,
    width: 100,
    // backgroundColor:Colors.LightWhite
  },
});
