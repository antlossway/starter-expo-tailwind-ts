import { View, Text, Pressable } from "react-native";
import React from "react";

import "../global.css";
import { Link, useRouter } from "expo-router";

const LoginPage = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center gap-2 bg-slate-100">
      <Link href={"/register"} asChild>
        <Pressable className="bg-indigo-500 px-4 py-2 font-bold  rounded-md">
          <Text className="text-xl text-white">Create Account</Text>
        </Pressable>
      </Link>

      <Pressable onPress={() => router.replace("profile")}>
        <Text className="text-xl font-bold text-indigo-500">Login</Text>
      </Pressable>
    </View>
  );
};

export default LoginPage;
