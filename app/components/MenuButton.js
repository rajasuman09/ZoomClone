import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import colors from "../config/colors";

const MenuButton = ({ btnColor, btnIcon, title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={[styles.icon, { backgroundColor: btnColor }]}>
        {btnIcon}
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    width: 80,
  },
  text: {
    color: "#858585",
    fontSize: 12,
    fontWeight: "500",
  },
});
