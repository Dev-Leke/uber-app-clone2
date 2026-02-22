import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function RideDetailsScreen({ route, navigation }: any) {
  const service = route?.params?.service ?? "Unknown";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ride Details</Text>

      <Text style={styles.label}>Selected service:</Text>
      <Text style={styles.value}>{service}</Text>

      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: "#fff" },
  title: { fontSize: 34, fontWeight: "800", marginBottom: 14 },
  label: { fontSize: 18, color: "#444" },
  value: { fontSize: 26, fontWeight: "800", marginTop: 6, marginBottom: 30 },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 22,
    alignSelf: "flex-start",
  },
  buttonText: { color: "#fff", fontWeight: "700" },
});