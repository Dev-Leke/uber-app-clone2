import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import {
  CarKeyIcon,
  CarryIcon,
  TeensIcon,
  CoupleIcon,
  FoodIcon,
  BeerIcon,
  MouseIcon,
  ShoppingBasket,
  CarIcon,
  ReserveIcon,
} from "../../assets/icons";
import SuggestionCard from "./SuggestionCard";
import { Ionicons } from "@expo/vector-icons";

type SuggestionItem = {
  icon: React.ComponentType<any>;
  title: string;
};

const items: SuggestionItem[] = [
  { icon: CarIcon, title: "Ride" },
  { icon: FoodIcon, title: "Food" },
  { icon: ReserveIcon, title: "Reserve" },
  { icon: CarKeyIcon, title: "Rental Cars" },
  { icon: CarryIcon, title: "Send Items" },
  { icon: ShoppingBasket, title: "Grocery" },
  { icon: CoupleIcon, title: "Seniors" },
  { icon: TeensIcon, title: "Teens" },
];
const Suggestions = () => {
  return (
    <View>
      <View style={styles.suggestionHeader}>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>Suggestions</Text>
        <View style={styles.forwardArrow}>
          <Ionicons name="arrow-forward" size={18} color="black" />
        </View>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <SuggestionCard
            icon={<item.icon />} // 👈 Important fix
            title={item.title}
          />
        )}
      />
    </View>
  );
};

export default Suggestions;

const styles = StyleSheet.create({
  suggestionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    paddingBottom: 15,
  },

  forwardArrow: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
});
