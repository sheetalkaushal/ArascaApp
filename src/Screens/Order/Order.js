import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Styles } from "./OrderStyle";
import imagePath from "../../constants/imagePath";
import { useSelector } from "react-redux";
import { dataremove, decrease, increase } from "../../redux/actions/actions";
import { AsyncSendData, GetAsync, GetAsyncData } from "../utilis/utilis";
import { decrement } from "../../redux/reducers/Loginreducer";
import strings from "../../constants/strings";
export const Order = ({ navigation }) => {
  // const items=route?.params?.item
  // console.log(items,"bdygdy")
  const val = useSelector((state) => state.status.value);
  const carddata = useSelector((state) => state.status.carddata);
  useEffect(() => {
    AsyncSendData("Dataofcart", carddata).then((res) => {
      GetAsyncData("Dataofcart")
        .then((res) => console.log(res))
        .catch(() => {});
    });
  }, [carddata]);
  return (
    <View style={{ flex: 1 }}>
      <View style={Styles.main}>
        <View style={Styles.cart}>
          <Text style={Styles.contain}>{strings.cart}</Text>
        </View>

        <TouchableOpacity
          style={Styles.imgstyle}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 40, height: 34, resizeMode: "contain" }}
            source={imagePath.icclear}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ flex: 0.8 }}
        data={carddata}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <>
            <View style={Styles.card}>
              <View style={Styles.imagescontent}>
                <View style={Styles.imgcard}>
                  <Image
                    style={{ width: 44, height: 44 }}
                    source={item.userimg}
                  />
                </View>
                <View style={Styles.contentitem}>
                  <Text style={Styles.notbookcontent}>
                    {item.textcontent}
                  </Text>
                  <Text style={Styles.content}>{item.content}</Text>
                </View>
              </View>
              {/*increment/decrement data */}
              <View style={Styles.datacount}>
                <View>
                  <View style={Styles.quantity}>
                    <Text style={Styles.itemquant}>{strings.quantity}</Text>
                  </View>
                </View>
                <View style={Styles.incrementdata}>
                  <TouchableOpacity
                    onPress={() => decrease(val)}
                    style={Styles.decrement}
                  >
                    <Text style={Styles.decrmentcontent}>-</Text>
                  </TouchableOpacity>
                  <Text>{val}</Text>
                  <TouchableOpacity
                    onPress={() => increase(val)}
                    style={Styles.increment}
                  >
                    <Text style={Styles.contentincrement}>+</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.remove}>
                  <TouchableOpacity onPress={() => dataremove(index)}>
                    <Text style={Styles.removedata}>{strings.Remove}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={Styles.border}></View>
              <View style={Styles.Delivery}>
                <Text style={Styles.Aed}>{strings.Aed_50}</Text>
                <View style={Styles.charges}>
                  <Text style={Styles.chargesdelivery}>
                    {strings.Including_delivery}
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
      />
      <TouchableOpacity style={Styles.Checkout}>
        <Text  onPress ={()=>navigation.navigate("OrderSuccessfull")}style={Styles.Proceed}>{strings.Proceed_to_Checkout}</Text>
      </TouchableOpacity>
    </View>
  );
};
