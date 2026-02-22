import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { ServiceItem } from "../data/servicesData";

type Props = {
  item: ServiceItem;
  onPress: () => void;
};

export default function ServiceCard({ item, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      {item.badge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.badge}</Text>
        </View>
      ) : null}

      <View style={styles.iconWrap}>
        <Ionicons name={item.icon} size={34} />
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    borderRadius: 16,
    padding: 14,
    minHeight: 110,
    margin: 8,
  },
  pressed: { opacity: 0.85 },
  iconWrap: {
    height: 44,
    width: 44,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: { fontSize: 14, fontWeight: "600" },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#E11900",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    zIndex: 2,
  },
  badgeText: { color: "white", fontSize: 12, fontWeight: "700" },
});