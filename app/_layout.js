import React, { forwardRef } from 'react';
import { Stack } from 'expo-router';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

const Layout = forwardRef((props, ref) => {
  return (
    <>
      <Stack />
      <Toast ref={ref} />
    </>
  );
});

export default Layout;
