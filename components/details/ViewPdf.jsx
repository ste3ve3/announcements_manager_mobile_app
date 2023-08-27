import React from 'react';
import { View } from 'react-native';
import WebView from "react-native-webview"  

const ViewPdf = ({ pdfUrl }) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}` }}
      />
    </View>
  );
};

export default ViewPdf;
