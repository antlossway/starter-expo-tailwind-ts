import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import "../global.css";

const data = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
];

const RootLayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Login",
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="register"
        options={{
          headerTitle: "Create Account",
          headerShown: true,
          headerRight: () => (
            <Button
              title="Open"
              onPress={() => router.push("modal")}
              color={"green"}
            />
          ),
        }}
      />

      <Stack.Screen
        name="modal"
        options={{
          headerTitle: "Modal",
          headerShown: true,
          presentation: "modal",
          headerLeft: () => (
            <Button
              title="Close"
              onPress={() => router.back()}
              color={"green"}
            />
          ),
        }}
      />

      <Stack.Screen name="[...404]" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default RootLayout;
