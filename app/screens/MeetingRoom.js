import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState, Alert } from "react";
import { io } from "socket.io-client";
import { Camera, CameraType } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

import MenuButton from "../components/MenuButton";
import colors from "../config/colors";
import Screen from "../components/Screen";

let socket;

const MeetingRoom = () => {
  const [userName, setUserName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [camera, setCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.front);
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    let mounted = true;
    socket = io("http://192.168.1.101:5001/");

    socket.on("active-users", (users) => {
      console.log("Active users");
      console.log(users);
      mounted && setActiveUsers(users);
    });

    return () => (mounted = false);
  }, []);

  const startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") setCamera(true);
    else {
      Alert.alert("Access denied");
    }
  };

  const onClickStartMeeting = () => {
    startCamera();
    socket.emit("join-room", { userName, roomId });
  };

  return !camera ? (
    <View style={styles.container}>
      <View style={styles.textInputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter name"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          placeholderTextColor={"#767476"}
        />
      </View>
      <View style={styles.textInputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Room Id"
          value={roomId}
          onChangeText={(text) => setRoomId(text)}
          placeholderTextColor={"#767476"}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onClickStartMeeting}>
        <Text style={{ color: colors.greyishWhite, fontWeight: "500" }}>
          Start Meeting
        </Text>
      </TouchableOpacity>
    </View>
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: colors.primary,
        }}
      >
        <View style={styles.cameraContainer}>
          <Camera
            style={{
              width: activeUsers.length <= 1 ? "100%" : 180,
              height: activeUsers.length <= 1 ? 600 : 180,
            }}
            type={type}
          ></Camera>
          {activeUsers.map((user, index) => {
            return (
              user.userName !== userName && (
                <View key={index} style={styles.user}>
                  <Text style={{ color: "white" }}>{user.userName}</Text>
                </View>
              )
            );
          })}
        </View>
      </View>
      <View style={styles.camControls}>
        {controls.map((c, index) => {
          return (
            <TouchableOpacity key={index} style={styles.camButton}>
              <View style={styles.icon}>{c.icon}</View>
              <Text style={styles.text}>{c.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const controls = [
  {
    icon: (
      <FontAwesome name="microphone" size={23} color={colors.greyishWhite} />
    ),
    title: "Mute",
  },
  {
    icon: (
      <FontAwesome name="video-camera" size={23} color={colors.greyishWhite} />
    ),
    title: "Stop Video",
  },
  {
    icon: <FontAwesome name="upload" size={23} color={colors.greyishWhite} />,
    title: "Share Content",
  },
  {
    icon: <FontAwesome name="group" size={23} color={colors.greyishWhite} />,
    title: "Participants",
  },
];
export default MeetingRoom;

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    backgroundColor: "dodgerblue",
    padding: 15,
    borderRadius: 15,
    width: "75%",
    alignItems: "center",
  },
  camButton: {
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 5,
    margin: 10,
  },
  cameraContainer: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    // flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  camControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    marginTop: 5,
    color: "#efefef",
    fontSize: 13,
  },
  textInput: {
    color: "white",
    fontSize: 16,
  },
  textInputBox: {
    height: 50,
    backgroundColor: "#373538",
    padding: 10,
    borderColor: "#484648",
    width: "100%",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    // marginVertical: 1,
  },
  userContainer: {
    flex: 1,
    // flexWrap: "wrap",
  },
  user: {
    borderWidth: 0.5,
    borderColor: "#efefef",
    height: 180,
    width: 180,
    alignItems: "center",
    justifyContent: "center",
  },
});
