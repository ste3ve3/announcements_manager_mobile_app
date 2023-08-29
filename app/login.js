import { useEffect } from "react"
import { StyleSheet, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import { COLORS } from '../theme';
import LoginContainer from '../components/login';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default function App() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const loggedInUser = await AsyncStorage.getItem('loggedInUser');
        if (loggedInUser) {
          navigation.navigate('home');
        } else {
          navigation.navigate('login');
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: error || 'There was an error retrieving the logged in user!',
          position: 'top',
        });
      }
    };

    checkLoggedInUser();
  }, []);

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