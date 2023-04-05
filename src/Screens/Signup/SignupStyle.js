import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Colors from "../Colors/Colors";

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LightWhite,
    flex: 1,
  },
  arasca: {
    marginTop: moderateVerticalScale(62),
    alignItems: "center",
  },
  signinput: {
    paddingHorizontal: moderateScale(24),
    marginTop: moderateScale(40),
  },
  signup: {
    fontSize: 24,
    color: Colors.Black,
  },
  Businessaccount: {
    marginTop: moderateVerticalScale(24),
    alignItems: "center",
  },
  account: {
    color: Colors.grey,
    fontSize: 13,
  },
  alreadyaccount: {
    marginTop: moderateVerticalScale(17),
    flexDirection: "row",
    justifyContent: "center",
  },
  already: {
    color: Colors.greey,
    fontSize: 16,
  },
  login: {
    color: Colors.Green,
    fontSize: 16,
  },

  privacypolice: {
    marginTop: moderateVerticalScale(16),
    alignItems: "center",
  },
  policies: {
    color: Colors.black_thin,
    fontSize: 14,
  },
  privacy: {
    color: Colors.darkGreen,
    alignItems: "center",
  },
  and: {
    color: Colors.black_thin,
    fontSize: 14,
  },
  terms: {
    color: Colors.darkGreen,
    fontSize: 14,
    alignItems: "center",
  },
});
