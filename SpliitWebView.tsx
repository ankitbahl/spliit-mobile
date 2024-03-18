import React, {Component, useEffect} from 'react';
import {
  BackHandler,
  Platform
} from "react-native";

import {WebView} from 'react-native-webview';


const SpliitWebView = () => {
  const webView = {
    canGoBack: false,
    ref: null
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress');
      }
    }
  }, []);

  const onAndroidBackPress = () => {
    if (webView.canGoBack && webView.ref) {
      webView.ref.goBack();
      return true;
    }
    return false;
  }

  const onIOSBackPress = () => {
    if (webView.canGoBack && webView.ref) {
      webView.ref.goBack();
      return true;
    }
    return false;
  }

  return <WebView
    source={{ uri: "https://split.ankitbahl.com/groups/mV9UrER7TP3yTQJa1tNAA/expenses" }}
    ref={(webViewRef) => { webView.ref = webViewRef; }}
    onNavigationStateChange={(navState) => { webView.canGoBack = navState.canGoBack; }}
  />
}

export default SpliitWebView;
