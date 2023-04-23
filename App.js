import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  BackHandler,
} from "react-native";
import { WebView } from "react-native-webview";

//import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  useEffect(() => {
    const backAction = () => {
      return (
        <WebView
          setBuiltInZoomControls={false}
          style={styles.webview}
          javaScriptEnabled={true}
          source={{ uri: "https://endirbir.az/" }}
        />
      );
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction()
    );
  });

  return (
    <WebView
      setBuiltInZoomControls={false}
      style={styles.webview}
      javaScriptEnabled={true}
      source={{ uri: "https://endirbir.az/" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
