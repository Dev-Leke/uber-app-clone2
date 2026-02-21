import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopTabs from "../components/HomeTopTabs";
import WhereToInput from "../components/WhereToSearch";
import AddressHistory from "../components/AddressHistory";
import Suggestions from "../components/Suggestions";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "white",
      }}
    >
      <TopTabs />
      <WhereToInput />
      <AddressHistory street={"14th Street, NW"} city={"Calgary, AB TZ5 M4P"} />
      <AddressHistory
        street={"144 Chinook Street, SW"}
        city={"Edmonton, AB TCP CR7"}
      />
      <Suggestions />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
