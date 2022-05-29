import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import colors from "../config/colors";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Entypo name="notification" size={30} color={colors.greyishWhite} />
      <Text style={styles.text}>Meet & Chat</Text>
      <Entypo name="new-message" size={30} color={colors.greyishWhite} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    color: colors.greyishWhite,
    fontSize: 20,
    fontWeight: "700",
  },
});
