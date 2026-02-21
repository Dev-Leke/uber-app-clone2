import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// const TABS = ["Uber", "Eats", "Courier", "Shops"];

const tabs = [
  {
    title: "Uber",
    icon: FontAwesome6,
    iconName: "car-side",
  },
  {
    title: "Eats",
    icon: MaterialCommunityIcons,
    iconName: "food",
  },
  {
    title: "Courier",
    icon: AntDesign,
    iconName: "code-sandbox",
  },
  {
    title: "Shops",
    icon: MaterialCommunityIcons,
    iconName: "cart-variant",
  },
];

const TAB_WIDTH = width / 3.5; // visible area width per tab (adjust if needed)

export default function TopTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const handlePress = (index: number) => {
    setActiveIndex(index);

    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {tabs.map((tab, index) => {
          const IconComponent = tab.icon;

          return (
            <TouchableOpacity
              key={tab.title}
              style={[styles.tab, { width: TAB_WIDTH }]}
              onPress={() => handlePress(index)}
            >
              <IconComponent
                name={tab.iconName}
                size={20}
                color={activeIndex === index ? "#000" : "#777"}
              />

              <Text
                style={{
                  color: activeIndex === index ? "#000" : "#777",
                  fontWeight: activeIndex === index ? "600" : "400",
                  marginLeft: 6,
                }}
              >
                {tab.title}
              </Text>
            </TouchableOpacity>
          );
        })}

        {/* Animated Indicator */}
        <Animated.View
          style={[
            styles.indicator,
            {
              width: TAB_WIDTH,
              transform: [{ translateX }],
            },
          ]}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "relative",
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingStart: 8,
  },
  tab: {
    paddingVertical: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    height: 3,
    backgroundColor: "black",
  },
});
