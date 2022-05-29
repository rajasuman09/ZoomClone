import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuButton from "./MenuButton";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";

const Menu = () => {
  return (
    <View style={styles.menu}>
      <MenuButton
        btnColor="orange"
        btnIcon={
          <FontAwesome
            name="video-camera"
            size={23}
            color={colors.greyishWhite}
          />
        }
        title="New Meeting"
      />
      <MenuButton
        btnColor="dodgerblue"
        btnIcon={
          <Entypo name="squared-plus" size={23} color={colors.greyishWhite} />
        }
        title="Join"
      />
      <MenuButton
        btnColor="dodgerblue"
        btnIcon={
          <FontAwesome name="calendar" size={23} color={colors.greyishWhite} />
        }
        title="Schedule"
      />
      <MenuButton
        btnColor="dodgerblue"
        btnIcon={
          <FontAwesome name="upload" size={23} color={colors.greyishWhite} />
        }
        title="Share Screen"
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: "space-between",
  },
});
