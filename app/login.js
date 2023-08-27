import { StyleSheet, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import { COLORS } from '../theme';
import LoginContainer from '../components/login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen 
        options={{
            headerStyle : {
              backgroundColor: COLORS.tertiary
            },
            headerShadowVisible: false,
            headerTitle: ""
        }}
      />
      <LoginContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary
  },
});