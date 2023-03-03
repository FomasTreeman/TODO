import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

export default function Item() {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{ width: 10 }}>
        <Text> + </Text>
      </TouchableOpacity>
      <TextInput
        style={{ borderBottomColor: "black", maxWidth: 200 }}
        placeholder="Type here..."
      />
    </View>
  );
}
