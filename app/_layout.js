import React, { forwardRef } from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

const Layout = forwardRef((props, ref) => {
  return (
    <GestureHandlerRootView>
      <Stack />
      <Toast ref={ref} />
    </GestureHandlerRootView>
  );
});

export default Layout;
