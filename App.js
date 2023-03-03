import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text } from "react-native";
import Item from "./components/Item";

export default function App() {
  return (
    <SafeAreaView style={{ margin: 30, marginTop: 80 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}> TODO: </Text>
      <ScrollView style={{ margin: 20 }}>
        <Item />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
