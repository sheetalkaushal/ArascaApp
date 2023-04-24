import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import imagePath from "../../constants/imagePath";
import { Styles } from "./SignupStyle";
import strings from "../../constants/strings";
import SignupCustom from "../../Components/SignupCustom";
import BtnCustom from "../../Components/btnCustom";
import { datasend, userLogin } from "../../redux/actions/actions";
import { AsyncSendData } from "../utilis/utilis";
export const Signup = ({ navigation }) => {
  const [fullName, SetfullName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Mobile, SetMobile] = useState("");
  const [Password, SetPassword] = useState("");
  const [enterpass, SetEnterPass] = useState(true);
  const [HideIcon, SetHideIcon] = useState(imagePath.icVisbility);
  const users = { FullName: fullName, mobile: Mobile };
  function goLogin() {
    if (!fullName.trim()) {
      alert("Enter your fullname");
    } else if (!Email.trim()) {
      alert("Enter your Email");
    } else if (!Mobile.trim()) {
      alert("Enter your Mobile numberl");
    } else if (!Password.trim()) {
      alert("Enter your  Password");
    } else {
      userLogin(users);
      AsyncSendData("Suggestions", {
        FullName: fullName,
        Email: Email,
        Mobile: Mobile,
        Password: Password,
      });
      datasend(true);
    }
  }

  function Hidepassword() {
    if (enterpass == true) {
      SetEnterPass(false);
      SetHideIcon(imagePath.icVisbilityoff);
    } else if (enterpass == false) {
      SetEnterPass(true);
      SetHideIcon(imagePath.icVisbility);
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.arasca}>
        <Image source={imagePath.icArasca} />
      </View>
      <View style={Styles.signinput}>
        <Text style={Styles.signup}>{strings.Signup}</Text>
        <View>
          <SignupCustom
            placeholder={strings.Full_NAME}
            Socialicon={imagePath.icProfile}
            value={fullName}
            onChangeText={(val) => SetfullName(val)}
            maxLength={15}
          />
        </View>
        <View>
          <SignupCustom
            Socialicon={imagePath.icsms}
            placeholder={strings.Email_ID}
            value={Email}
            onChangeText={(val) => SetEmail(val)}
          />
        </View>
        <View>
          <SignupCustom
            Socialicon={imagePath.icPhone}
            placeholder={strings.Mobile_Number}
            value={Mobile}
            onChangeText={(val) => SetMobile(val)}
            maxLength={10}
            keyboard="numeric"
          />
        </View>
        <View>
          <SignupCustom
            Socialicon={imagePath.iclock}
            onPress={Hidepassword}
            placeholder={strings.Password}
            SHOW={HideIcon}
            hide={enterpass}
            onChangeText={(val) => SetPassword(val)}
            maxLength={8}
          />
        </View>
        <BtnCustom onPress={goLogin} title={strings.signup} />
        <View style={Styles.Businessaccount}>
          <Text style={Styles.account}>{strings.Business_Account}</Text>
        </View>
        <View style={Styles.alreadyaccount}>
          <Text style={Styles.already}>{strings.Already_have_an_account}</Text>
          <Text style={Styles.login}>{strings.Login}</Text>
        </View>
        <View style={Styles.privacypolice}>
          <Text style={Styles.policies}>
            {strings.Privacy_policies}
            <Text style={Styles.privacy}>{strings.privacy}</Text>
            <Text style={Styles.and}>{strings.and}</Text>
          </Text>
          <Text style={Styles.terms}>{strings.Terms}</Text>
        </View>
      </View>
    </View>
  );
};
