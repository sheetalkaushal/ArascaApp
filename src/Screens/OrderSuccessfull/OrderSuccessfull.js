import { View, Text, Image } from "react-native";
import React from "react";

import { Styles } from "./OrderSuccessStyle";
import imagePath from "../../constants/imagePath";
import BtnCustom from "../../Components/btnCustom";
import strings from "../../constants/strings";
import Colors from "../Colors/Colors";
export const OrderSuccessfull = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.orders}>
        <Image
          style={{ backgroundColor: Colors.Normal_white}}
          source={imagePath.icorder}
        />
      </View>
      <View style={Styles.orderdate}>
        <View style={Styles.receive}>
          <Text style={Styles.orderSucces}>{strings.Order_Successful}</Text>
        </View>
        <View style={Styles.post}>
          <Text style={Styles.gotorder}>{strings.Thanks_for_your_order}</Text>
        </View>
      </View>
      <View style={Styles.continueShopping}>
        <View style={Styles.shopping}>
          <BtnCustom title={strings.Continue_shopping} />
        </View>
        <View style={Styles.shoppingcomplete}>
          <Text style={Styles.completeorder}>{strings.View_complete}</Text>
        </View>
      </View>
    </View>
  );
};
