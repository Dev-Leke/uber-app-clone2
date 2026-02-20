import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ActivityScreen() {
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.title}>Activity</Text>
      <Text style={styles.sectionTitle}>Upcoming</Text>
      <View style={styles.card}>
        <View style={styles.upcomingRow}>
          <View>
            <Text style={styles.cardTitle}>You have no upcoming trips</Text>
            <Text style={styles.reserve}>Reserve your ride →</Text>
          </View>
          <Ionicons name="calendar-outline" size={28} color="#888" />
        </View>
      </View>
      <View style={styles.pastHeader}>
        <Text style={styles.sectionTitle}>Past</Text>
        <Ionicons name="options-outline" size={20} color="black" />
      </View>
      <View style={styles.card}>
        <Text style={styles.location}>10158 Sacramento Drive SW</Text>
        <Text style={styles.details}>Jan 18 • 8:31 p.m.</Text>
        <Text style={styles.price}>$20.33</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Rebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.location}>Canadian Brewhouse</Text>
        <Text style={styles.details}>Jan 18 • 6:42 p.m.</Text>
        <Text style={styles.price}>$19.98</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Rebook</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  pastHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 18,
    borderRadius: 16,
    marginBottom: 20,
  },
  upcomingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  reserve: {
    marginTop: 8,
    fontWeight: "500",
  },
  location: {
    fontSize: 17,
    fontWeight: "600",
  },
  details: {
    marginTop: 5,
    color: "#555",
  },
  price: {
    marginTop: 5,
    fontWeight: "600",
  },
  button: {
    marginTop: 15,
    backgroundColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  buttonText: {
    fontWeight: "600",
  },
});