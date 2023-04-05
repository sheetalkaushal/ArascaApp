import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Colors from "../Colors/Colors";

export const Styles = StyleSheet.create({
  main: {
    marginTop: moderateScale(96),
    paddingHorizontal: moderateScale(24),
  },
  setting: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  leo: {
    marginTop: moderateScale(16),
  },

  leoHarmon: {
    color: Colors.BLACK,
    fontWeight: "bold",
    fontSize: 22,
  },
  number: {
    marginTop: moderateScale(5),
  },
  leonumber: {
    fontSize: 14,
    fontWeight: "500",
  },
  accounttype: {
    marginTop: moderateScale(12),
  },
  type: {
    fontSize: 14,
    fontWeight: "bold",
  },
  individual: {
    fontWeight: "400",
  },
  AccountSettings: {
    borderTopColor: Colors.grey,
    marginTop: moderateVerticalScale(33),
  },
  Accsettings: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Addressperon: {
    marginTop: moderateScale(23),
  },
  Address: {
    fontSize: 14,
    color: Colors.grey,
    fontWeight: "600",
  },
  Edit: {
    fontSize: 16,
    fontWeight: "600",
  },
  Other: {
    marginTop: moderateVerticalScale(44),
  },
  Othernumber: {
    fontSize: 20,
    color: Colors.blacK,
    fontWeight: "bold",
  },
  Contact: {
    marginTop: moderateVerticalScale(16),
  },
  us: {
    fontSize: 14,
    color: Colors.grey,
    fontWeight: "600",
  },
  soicalicon: {
    flexDirection: "row",
    gap: 12,
    marginTop: moderateScale(16),
  },
});
