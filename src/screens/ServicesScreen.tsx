import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";
import ServiceCard from "../components/ServiceCard";
import { deliveries, goAnywhere, ServiceItem } from "../data/servicesData";

export default function ServicesScreen({ navigation }: any) {
  const openDetails = (item: ServiceItem) => {
    navigation.navigate("RideDetails", { service: item.title }); // params ✅
  };

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={goAnywhere}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <ServiceCard item={item} onPress={() => openDetails(item)} />}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.h1}>Services</Text>
            <Text style={styles.h2}>Go anywhere</Text>

            <View style={styles.banner}>
              <View style={styles.bannerLeft}>
                <Text style={styles.bannerTitle}>Group Rides: ride together, up to 5 stops</Text>
                <Pressable style={styles.bannerBtn}>
                  <Text style={styles.bannerBtnText}>Try group rides</Text>
                </Pressable>
              </View>
              <View style={styles.bannerRight} />
            </View>
          </View>
        }
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.h2}>Get anything delivered</Text>
            <FlatList
              data={deliveries}
              keyExtractor={(item) => item.id}
              numColumns={2}
              scrollEnabled={false}
              renderItem={({ item }) => <ServiceCard item={item} onPress={() => openDetails(item)} />}
            />
            <View style={{ height: 20 }} />
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "white" },
  list: { paddingHorizontal: 10, paddingBottom: 20 },
  header: { paddingHorizontal: 16, paddingTop: 10, paddingBottom: 8 },
  h1: { fontSize: 44, fontWeight: "800", letterSpacing: -1 },
  h2: { fontSize: 22, fontWeight: "800", marginTop: 6, marginBottom: 10 },
  banner: {
    flexDirection: "row",
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#C88A00",
    marginTop: 6,
    marginBottom: 10,
    minHeight: 140,
  },
  bannerLeft: { flex: 1, padding: 16, justifyContent: "space-between" },
  bannerTitle: { color: "white", fontSize: 20, fontWeight: "800" },
  bannerBtn: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    marginTop: 10,
  },
  bannerBtnText: { fontWeight: "700" },
  bannerRight: { width: 140, backgroundColor: "rgba(255,255,255,0.25)" },
  footer: { paddingHorizontal: 16, paddingTop: 12 },
});