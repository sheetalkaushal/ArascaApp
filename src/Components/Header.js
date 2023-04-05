import { Text, View, Image ,TouchableOpacity} from "react-native";
import React from "react";
import {Styles}  from "./HeaderStyle"
import imagePath from "../constants/imagePath";
import strings from "../constants/strings";
import { useNavigation } from "@react-navigation/native";
export default function Header() {
const navigation = useNavigation()
  return (
    <View style={Styles.main}>
      <View style={Styles.container1}>
        <Image
          style={{ width:180, height:55, resizeMode: "contain" }}
          source={require("../assests/images/Logoas.png")}
        />
      </View>
      <View style={Styles.container2}>
      <Image style={{height:30,width:30}} source={imagePath.icfavorite}/> 
      <Image  style={{height:30,width:30}} source={imagePath.icNotification}/>
      <TouchableOpacity onPress={() => navigation.navigate("Order")}>
      <Image  style={{height:30,width:30}}  source={imagePath.iccart}/>  
      </TouchableOpacity> 
      </View>
    </View>
  
    
    
   
  );
}