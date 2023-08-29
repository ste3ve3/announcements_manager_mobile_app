import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { withLayoutContext } from "expo-router"

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const { Navigator } = createDrawerNavigator();
const Drawer = withLayoutContext(Navigator);

export default function SideBar() {
  return (
      <Drawer>
        <Drawer.Screen
          name="home" 
          options={{
            drawerLabel: "home",
            title: "overview",
          }}
        />
        <Drawer.Screen
          name="user/[id]" 
          options={{
            drawerLabel: "User",
            title: "overview",
          }}
        />
      </Drawer>
  );
}