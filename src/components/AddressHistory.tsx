import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface AddressProps {
  street: string;
  city: string;
}

const AddressHistory: FC<AddressProps> = ({ street, city }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <MaterialCommunityIcons name="clock-outline" size={24} color="black" />
      </View>
      <View style={styles.address}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{street}</Text>
        <Text style={{ color: "#403f3f" }}>{city}</Text>
      </View>
    </View>
  );
};

export default AddressHistory;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  iconBox: {
    backgroundColor: "#f2f2f2",
    padding: 8,
    borderRadius: 5,
  },
  address: {
    paddingStart: 15,
    gap: 2,
  },
});
