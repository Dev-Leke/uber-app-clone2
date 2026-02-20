import { View, Text } from "react-native";

export default function AccountScreen() {
  return (
<<<<<<< HEAD
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
=======
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Account Screen (placeholder)</Text>
    </View>
>>>>>>> parent of 0136287 (activity and account screen)
  );
}