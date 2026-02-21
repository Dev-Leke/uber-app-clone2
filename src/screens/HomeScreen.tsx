import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Suggestion = {
  id: string;
  title: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
};

const categories = ["Uber", "Eats", "Courier", "Shop"];

const suggestions: Suggestion[] = [
  { id: "ride", title: "Ride", icon: "car-outline" },
  { id: "food", title: "Food", icon: "fast-food-outline" },
  { id: "reserve", title: "Reserve", icon: "calendar-outline" },
  { id: "rental", title: "Rental\nCars", icon: "key-outline" },
  { id: "send", title: "Send\nItems", icon: "cube-outline" },
  { id: "grocery", title: "Grocery", icon: "cart-outline" },
  { id: "seniors", title: "Seniors", icon: "accessibility-outline" },
  { id: "teens", title: "Teens", icon: "people-outline" },
];

export default function HomeScreen({ navigation }: any) {
  const goToRideDetails = (title: string) => {
    navigation.navigate("RideDetails", { service: title.replace("\n", " ") });
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Top category row */}
      <View style={styles.topTabs}>
        {categories.map((c, idx) => (
          <View key={c} style={styles.topTabItem}>
            <Text style={[styles.topTabText, idx === 0 && styles.topTabActive]}>
              {c}
            </Text>
          </View>
        ))}
      </View>

      {/* Search bar */}
      <Pressable style={styles.searchBar} onPress={() => goToRideDetails("Ride")}>
        <Ionicons name="search" size={18} />
        <Text style={styles.searchText}>Where to?</Text>
        <View style={{ flex: 1 }} />
        <View style={styles.laterPill}>
          <Ionicons name="calendar-outline" size={16} />
          <Text style={styles.laterText}>Later</Text>
        </View>
      </Pressable>

      {/* Recent places (simple placeholders like screenshot) */}
      <View style={styles.recentCard}>
        <View style={styles.clockIcon}>
          <Ionicons name="time-outline" size={16} />
        </View>
        <View>
          <Text style={styles.recentTitle}>508 Evanston Link NW</Text>
          <Text style={styles.recentSub}>Calgary, AB T3P</Text>
        </View>
      </View>

      <View style={styles.recentCard}>
        <View style={styles.clockIcon}>
          <Ionicons name="time-outline" size={16} />
        </View>
        <View>
          <Text style={styles.recentTitle}>3961 52 Ave NE</Text>
          <Text style={styles.recentSub}>Calgary, AB T3J 3X4</Text>
        </View>
      </View>

      {/* Suggestions grid */}
      <Text style={styles.sectionTitle}>Suggestions</Text>

      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.id}
        numColumns={4}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Pressable
            style={styles.suggestionCard}
            onPress={() => goToRideDetails(item.title)}
          >
            <View style={styles.suggestionIconWrap}>
              <Ionicons name={item.icon} size={26} />
            </View>
            <Text style={styles.suggestionText} numberOfLines={2}>
              {item.title}
            </Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "white" },

  topTabs: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 6,
    gap: 18,
  },
  topTabItem: { paddingVertical: 6 },
  topTabText: { fontSize: 20, fontWeight: "700", color: "#222" },
  topTabActive: { textDecorationLine: "underline" },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 14,
    marginTop: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 10,
  },
  searchText: { fontSize: 18, fontWeight: "700", color: "#666" },
  laterPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  laterText: { fontWeight: "700" },

  recentCard: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 14,
    marginTop: 10,
    backgroundColor: "#F7F7F7",
    borderRadius: 16,
    padding: 14,
    gap: 12,
  },
  clockIcon: {
    height: 34,
    width: 34,
    borderRadius: 12,
    backgroundColor: "#EDEDED",
    alignItems: "center",
    justifyContent: "center",
  },
  recentTitle: { fontSize: 16, fontWeight: "800" },
  recentSub: { marginTop: 2, color: "#666" },

  sectionTitle: {
    marginTop: 16,
    marginBottom: 10,
    marginHorizontal: 14,
    fontSize: 22,
    fontWeight: "900",
  },

  suggestionCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    margin: 6,
    borderRadius: 16,
    backgroundColor: "#F2F2F2",
    minWidth: 78,
  },
  suggestionIconWrap: {
    height: 44,
    width: 44,
    borderRadius: 14,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  suggestionText: { fontSize: 12, fontWeight: "700", textAlign: "center" },
});