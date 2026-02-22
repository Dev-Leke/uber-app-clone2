import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactNode, FC } from "react";

interface SuggestionCardProps {
  icon: ReactNode;
  title: string;
}

const SuggestionCard: FC<SuggestionCardProps> = ({ icon, title }) => {
  return (
    <Pressable style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {icon}
      </View>
      <Text style={{ textAlign: "center" }}>{title}</Text>
    </Pressable>
  );
};

export default SuggestionCard;

const styles = StyleSheet.create({
  container: {
    width: 80,
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    marginBottom: 12,
    gap: 8,
  },

  title: {
    marginTop: 6,
    fontSize: 12,
    textAlign: "center",
  },
});
