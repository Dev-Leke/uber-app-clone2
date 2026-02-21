import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import ServicesScreen from "./src/screens/ServicesScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ActivityScreen from "./src/screens/ActivityScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RideDetailsScreen({ route, navigation }: any) {
  const service = route?.params?.service ?? "Unknown";

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 60, backgroundColor: "white" }}>
      <Text style={{ fontSize: 30, fontWeight: "800" }}>Ride Details</Text>
      <Text style={{ marginTop: 12, fontSize: 18 }}>Selected service:</Text>
      <Text style={{ marginTop: 6, fontSize: 22, fontWeight: "700" }}>{service}</Text>

      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          marginTop: 24,
          backgroundColor: "black",
          paddingVertical: 12,
          paddingHorizontal: 18,
          borderRadius: 999,
          alignSelf: "flex-start",
        }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>Back</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="RideDetails" component={RideDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}