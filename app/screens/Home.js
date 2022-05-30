import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import { Header } from "../components/Header";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import Menu from "../components/Menu";
import Contacts from "../components/Contacts";

const Home = ({ navigation }) => {
  return (
    <Screen customStyles={styles.container}>
      <Header />
      <SearchBar />
      <Menu />
      <Contacts />
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    padding: 15,
  },
});
