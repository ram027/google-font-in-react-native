import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as font from "expo-font";
import fonts from "./fonts";

export default function App() {
  const [fontLoading, setFontLoading] = useState(true);
  useEffect(async () => {
    await font.loadAsync(fonts);
    setFontLoading(false);
  }, []);
  const data = fontLoading ? (
    <View>
      <ActivityIndicator color="black"></ActivityIndicator>
    </View>
  ) : (
    <View>
      <Text style={{ fontFamily: "interLight" }}>
        Hi i am just some text and using one of the google fonts
      </Text>
    </View>
  );
  return <View style={styles.container}>{data}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
