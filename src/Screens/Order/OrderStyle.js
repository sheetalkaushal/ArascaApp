import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Colors from "../Colors/Colors";
export const Styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: moderateScale(45),
    paddingHorizontal: moderateScale(20),
    flex: 0.1,
  },
  contain: {
    fontSize: 22,
  },
  card: {
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 4,
    marginTop: moderateScale(22),
    alignSelf: "center",
  },
  imagescontent: {
    flexDirection: "row",
  },

  imgcard: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.GREY,
    height: moderateScale(72),
    width: moderateScale(72),
    borderRadius: 4,
    margin: moderateScale(8),
  },
  contentitem: {
    margin: moderateScale(8),
    width: moderateScale(224),
  },
  notbookcontent: {
    height: moderateScale(40),
    fontWeight: "400",
    fontSize: 14,
    color: Colors.blacK,
  },
  content: {
    fontWeight: "400",
    fontSize: 13,
    color: Colors.grey,
  },
  quantity: {
    marginLeft: moderateScale(16),
  },
  itemquant: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors.greybob,
  },
  incrementdata: {
    flexDirection: "row",
    marginLeft: moderateScale(16),
    gap: 20,
  },
  datacount: {
    flexDirection: "row",
    marginVertical: moderateScale(18),
  },
  decrement: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(18),
    width: moderateScale(18),
    borderWidth: 1,
    borderColor: Colors.Green,
  },
  increment: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(18),
    width: moderateScale(18),
    borderWidth: 1,
    borderColor: Colors.Green,
  },
  remove: {
    marginLeft: "auto",
    marginRight: moderateScale(8),
  },
  removedata: {
    color: Colors.red,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY,
    marginLeft: moderateScale(12),
    marginRight: moderateScale(12),
  },
  Delivery: {
    paddingRight: moderateScale(8),
    marginVertical: moderateScale(13),
    alignSelf: "flex-end",
  },
  Aed: {
    alignSelf: "flex-end",
    fontSize: 16,
    fontWeight: "300",
  },
  chargesdelivery: {
    color: Colors.greybob,
    fontSize: 12,
  },
  charges: {
    marginTop: moderateScale(5),
  },
  Checkout: {
    backgroundColor: Colors.Green,
    width: moderateScale(375),
    height: moderateScale(75),
    flex: 0.1,
    justifyContent: "center",
  },
  Proceed: {
    color: Colors.LightWhite,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
});
