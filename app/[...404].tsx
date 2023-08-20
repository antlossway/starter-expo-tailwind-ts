// to catch all routes that are not defined

import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";

const notFound = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-slate-500">
      <Link href={"/"}>
        <Text className="text-xl  underline font-bold text-red-500">
          Go Back
        </Text>
        {/* <Text style={styles.link}>Go Back</Text> */}
      </Link>
      <Text className="text-xl font-medium">
        Sorry, the page you requested does not exist
      </Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   link: {
//     color: "blue",
//     textDecorationLine: "underline",
//   },
// });

export default notFound;
