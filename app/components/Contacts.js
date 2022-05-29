import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import colors from "../config/colors";
import { FontAwesome } from "@expo/vector-icons";

const data = [
  {
    name: "Starred",
    image: <FontAwesome name="star" size={24} color="white" />,
  },
  {
    name: "Raja Rama Dasa",
    image: require("../assets/me.jpg"),
  },
  {
    name: "Venkata Govinda Dasa",
    image: require("../assets/me.jpg"),
  },
  {
    name: "Sudarshana Dasa",
    image: require("../assets/me.jpg"),
  },
];

const Contacts = () => {
  return (
    <View>
      {data.map((c, index) => (
        <View style={styles.contact} key={index}>
          {index == 0 ? (
            <View style={styles.avatar}>
              <FontAwesome name="star" size={30} color={colors.greyishWhite} />
            </View>
          ) : (
            <Image style={styles.avatar} resizeMode="cover" source={c.image} />
          )}
          <Text style={styles.text}>{c.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#858585",
  },
  text: {
    marginHorizontal: 15,
    color: colors.greyishWhite,
    fontSize: 18,
  },
});
