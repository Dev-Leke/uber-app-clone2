import { View, Text } from "react-native";

export default function RideDetailsScreen({ route }: any) {
  const service = route?.params?.service ?? "Unknown";
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Ride Details</Text>
      <Text>Service: {service}</Text>
    </View>
  );
}