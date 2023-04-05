import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Header from "../../Components/Header";
import imagePath from "../../constants/imagePath";
import { Styles } from "./HomeStyle";
import strings from "../../constants/strings";
import Sreach from "../../Components/Sreach";
import { sendcarddata } from "../../redux/actions/actions";
export const Home = ({ navigation }) => {
  // WIDTH = Dimensions.get("window").width;
  const [Search, SetSearch] = useState("");
  slider = [
    { id: "1", img: imagePath.icMedical },
    { id: "2", img: imagePath.iccheckup },
    { id: "3", img: imagePath.icMedical },

  ];
  datafile = [
    {
      id: "1",
      userimg: imagePath.icredcross,
      textcontent: strings.First_aid,
    },
    {
      id: "2",
      userimg: imagePath.icmedicalteam,
      textcontent: strings.child,
    },
    {
      id: "3",
      userimg: imagePath.icchld,
      textcontent: strings.Aid_Access,
    },
    {
      id: "4",
      userimg: imagePath.icdoctorNurse,
      textcontent: strings.First_aid,
    },
    {
      id: "5",
      userimg: imagePath.icambulance,
      textcontent: strings.Ambulance_Box,
    },
  
  ],
    data = [
      {
        id: "1",
        userimg: imagePath.icmedium,
        textcontent: strings.First_box,
        content: strings.Dependaplas,
        adds: strings.AEd_box,
      },
      {
        id: "2",
        userimg: imagePath.icbandage,
        textcontent: strings.Aid,
        content: strings.plasters,
        adds: strings.AEd_box,
      },
      {
        id: "3",
        userimg: imagePath.icbandage,
        textcontent: strings.bandage,
        content: strings.Fabric,
        adds: strings.AEd_box,
      },
    ],
    datacode = [
      {
        id: "1",
        userimg: imagePath.ichealthcare,
      },
      {
        id: "2",
        userimg: imagePath.ichealthcare,
      },
      {
        id: "3",
        userimg: imagePath.ichealthcare,
      },
      {
        id: "4",
        userimg: imagePath.icstjohn,
      },
      {
        id: "5",
        userimg: imagePath.ichealthcare,
      },
    ]

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
          renderItem={({item}) => (
            <Image
              source={item.img}
              style={{ width:372, height: 200, resizeMode: "contain" }}
            />
          )}
        />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={datafile}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={Styles.firstaid}>
              <Image style={Styles.user} source={item.userimg}></Image>
              <View style={Styles.txtcontent}>
                <Text>{item.textcontent}</Text>
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
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={Styles.firstaid}
              onPress={() => {
                sendcarddata(item);
                navigation.navigate("Order");
              }}
            >
              <Image style={Styles.userimg} source={item.userimg}></Image>
              <View style={Styles.txtcontent}>
                <Text style={Styles.aid}>{item.textcontent}</Text>
                <Text>{item.content}</Text>
                <Text>{item.adds}</Text>
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
          data={datacode}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={Styles.healthcare}>
              <Image style={Styles.careimg} source={item.userimg}></Image>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};
