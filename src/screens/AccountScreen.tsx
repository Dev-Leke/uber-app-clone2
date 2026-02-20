import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AccountScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.firstName}>JOHN</Text>
          <Text style={styles.lastName}>PHILIP</Text>

          <View style={styles.ratingBadge}>
            <Ionicons name="star" size={14} color="black" />
            <Text style={styles.ratingText}>4.9</Text>
          </View>
        </View>

        <Image
          source={require("../../assets/profile.jpg")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.grid}>
        {[
          { label: "Help", icon: "help-circle-outline" },
          { label: "Wallet", icon: "wallet-outline" },
          { label: "Safety", icon: "shield-outline" },
          { label: "Inbox", icon: "mail-outline" },
        ].map((item) => (
          <TouchableOpacity key={item.label} style={styles.gridItem}>
            <Ionicons name={item.icon as any} size={24} color="black" />
            <Text style={styles.gridText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.cardRow}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>Try Uber One free</Text>
          <Text style={styles.cardSub}>
            3 months free of 5% Uber One credits on rides
          </Text>
        </View>

        <Image
          source={require("../../assets/uberone.png")}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.cardRow}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>Safety checkup</Text>
          <Text style={styles.cardSub}>
            Learn ways to make rides safer
          </Text>
        </View>

        <Image
          source={require("../../assets/safety.png")}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.simpleCard}>
        <Text style={styles.cardTitle}>Estimated CO₂ saved</Text>
        <Text style={styles.co2}>0 g</Text>
      </View>
      <View style={styles.cardRow}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>Invite friends to Uber</Text>
          <Text style={styles.cardSub}>
            You will get 40% off 2 Uber rides
          </Text>
        </View>

        <Image
          source={require("../../assets/invite.png")}
          style={styles.cardImage}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30,
  },

  firstName: {
    fontSize: 36,
    fontWeight: "900",
  },

  lastName: {
    fontSize: 36,
    fontWeight: "900",
    marginTop: -5,
  },

  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eaeaea",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "flex-start",
  },

  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "600",
  },

  profileImage: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  gridItem: {
    width: "48%",
    backgroundColor: "#eaeaea",
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 18,
    marginBottom: 15,
  },

  gridText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "500",
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eaeaea",
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
  },

  cardTextContainer: {
    flex: 1,
    paddingRight: 10,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "600",
  },

  cardSub: {
    marginTop: 6,
    color: "#555",
  },

  cardImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },

  simpleCard: {
    backgroundColor: "#eaeaea",
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
  },

  co2: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: "bold",
  },
});