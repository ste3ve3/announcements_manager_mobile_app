import { Stack } from 'expo-router';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COLORS } from '../theme';
import HeaderIcon from '../components/home/elements/HeaderIcon';
import HomeContainer from '../components/home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
            headerStyle : {
              backgroundColor: COLORS.tertiary
            },
            headerShadowVisible: false,
            headerLeft: () => (
                <HeaderIcon iconType="leftIcon" />
            ),
            headerRight: () => (
                <HeaderIcon />
            ),
            headerTitle: ""
        }}
      />
      <HomeContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary
  },
});