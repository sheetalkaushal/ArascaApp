import { View, Text, Image } from "react-native";
import React from "react";
import imagePath from "../../constants/imagePath";
import { Styles } from "./ProfileStyle";
import Colors from "../Colors/Colors";
import { moderateScale } from "react-native-size-matters";
import strings from "../../constants/strings";
import { useSelector } from "react-redux";

export const Profile = () => {
  const value = useSelector((state) => state.status.user);
  return (
    <View style={Styles.main}>
      <View style={Styles.setting}>
        <Image source={imagePath.icSetting} />
      </View>
      <View style={Styles.imgProfile}>
        <Image
          style={{ height: 100, width: 100, borderRadius: 50 }}
          source={imagePath.icimgprofile}
        />
      </View>
      <View style={Styles.leo}>
        <Text style={Styles.leoHarmon}>{value.FullName}</Text>
        <View style={Styles.number}>
          <Text style={Styles.leonumber}>{value.mobile}</Text>
        </View>
      </View>
      <View style={Styles.accounttype}>
        <Text style={Styles.type}>{strings.Account_Type}</Text>
        <Text style={Styles.individual}>{strings.individual}</Text>
      </View>
      <View style={Styles.AccountSettings}>
        <Text style={Styles.Accsettings}>{strings.Account_Settings}</Text>
      </View>
      <View style={Styles.Addressperon}>
        <Text style={Styles.Address}>{strings.Address}</Text>
        <Text style={Styles.Edit}>{strings.remove_your_address}</Text>
      </View>
      <View style={Styles.Other}>
        <Text style={Styles.Othernumber}>{strings.Other}</Text>
      </View>
      <View style={Styles.Contact}>
        <Text style={Styles.us}>{strings.Contact}</Text>
        <View style={Styles.soicalicon}>
          <Image source={imagePath.icmsg} />
          <Image source={imagePath.icPhone} />
          <Image source={imagePath.icsms} />
        </View>
      </View>
    </View>
  );
};
