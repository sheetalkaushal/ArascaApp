import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import imagePath from "../../constants/imagePath";
import { Styles } from "./HomeStyle";
import strings from "../../constants/strings";
import Sreach from "../../Components/Sreach";
import { sendcarddata } from "../../redux/actions/actions";
import firebase from "../../Config/Config";
export const Home = ({ navigation }) => {
  const [users, Setusers] = useState([]);
  const [userProduct, SetUserProduct] = useState([]);
  const [Popularbrands, SetPopularbrands] = useState([]);
  const TodoRef = firebase.firestore().collection("TestData");
  const Ref = firebase.firestore().collection("Test");
  const Brands = firebase.firestore().collection("BrandTest");
  useEffect(() => {
    const useFetch = () => {
      TodoRef.onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          const { Img, firstAd, Subscribe, Adds,Quantity } = doc.data();
          users.push({
            id: doc.id,
            Img,
            firstAd,
            Subscribe,
            Adds,
            Quantity,
          });
        });
        Setusers(users);
      });
    };
    useFetch();
    const fetchproduct = () => {
      Ref.onSnapshot((querySnapshot) => {
        const userProduct = [];
        querySnapshot.forEach((doc) => {
          const { Image, first } = doc.data();
          userProduct.push({
            id: doc.id,
            Image,
            first,
          });
        });
        SetUserProduct(userProduct);
      });
    };
    fetchproduct();

    const fetchbrands = () => {
      Brands.onSnapshot((querySnapshot) => {
        const Popularbrands = [];
        querySnapshot.forEach((doc) => {
          const { Images } = doc.data();
          Popularbrands.push({
            id: doc.id,
            Images,
          });
        });
        SetPopularbrands(Popularbrands);
      });
    };
    fetchbrands();
  }, []);
  const [Search, SetSearch] = useState("");
  slider = [
    { id: "1", img: imagePath.icMedical },
    { id: "2", img: imagePath.iccheckup },
    { id: "3", img: imagePath.icMedical },
  ];
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Header />
        <Sreach
          placeholder={strings.looking}
          Sreach={imagePath.icSreach}
          value={Search}
          onChangeText={(value) => SetSearch(value)}
          maxLength={15}
        />

        <FlatList
          style={Styles.wrap}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={slider}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image
              source={item.img}
              style={{ width: 356, height: 200, resizeMode: "contain" }}
            />
          )}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={userProduct}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={Styles.firstaid}>
              <Image style={Styles.user} source={{ uri: item.Image }}></Image>
              <View style={Styles.txtcontent}>
                <Text>{item.first}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <View style={Styles.SellingProduct}>
          <Text style={Styles.Selling}>{strings.Selling_Product}</Text>
          <Text style={Styles.VIEW}>{strings.View_all}</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={Styles.firstaid}
              onPress={() => {
                sendcarddata(item);
                navigation.navigate("Order");
            
              }}
            >
              <Image
                style={Styles.sellingimg}
                source={{ uri: item.Img }}
              ></Image>
              <View style={Styles.txtcontent}>
                <Text style={Styles.aid}>{item.firstAd}</Text>
                <Text>{item.Subscribe}</Text>
                <Text>{item.Adds}</Text>
                <Text>{item.Quantity}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <View style={Styles.SellingProduct}>
          <Text style={Styles.Selling}>{strings.Popular_Brands}</Text>
          <Text style={Styles.VIEW}>{strings.View_all}</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Popularbrands}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={Styles.healthcare}>
              <Image
                style={Styles.careimg}
                source={{ uri: item.Images }}
              ></Image>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};
