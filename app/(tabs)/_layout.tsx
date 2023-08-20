import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarLabel: "My Profile",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="inventory"
        options={{
          headerTitle: "Inventory",
          tabBarLabel: "My Inventory",
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
