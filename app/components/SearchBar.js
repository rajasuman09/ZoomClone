import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const SearchBar = () => {
  return (
    <View style={styles.search}>
      <EvilIcons name="search" size={24} color="#858585" />
      <TextInput
        style={{ marginLeft: 5 }}
        placeholder="Search"
        placeholderTextColor="#858585"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search: {
    borderColor: "#858585",
    marginVertical: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    backgroundColor: "#333333",
  },
});
