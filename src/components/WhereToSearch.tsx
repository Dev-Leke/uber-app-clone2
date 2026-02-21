import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  onPress?: () => void;
};

export default function WhereToInput({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="search" size={20} color="#000" />
      <TextInput
        style={{ flex: 1, paddingStart: 15 }}
        editable
        placeholder="Where to?"
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          backgroundColor: "#f2f2f2",
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 25,
        }}
      >
        <MaterialCommunityIcons name="calendar-blank" size={24} color="black" />
        <Text>Later</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    borderWidth: 1,
    borderColor: "#666464",
  },
});
