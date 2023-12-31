import { Stack } from 'expo-router';
import { StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { COLORS } from '../../theme';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import AnnouncementDetailsContainer from '../../components/details';

export default function App() {
  const navigate =  useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
            headerStyle : {
              backgroundColor: COLORS.tertiary
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigate.goBack()}>
                <Entypo name="arrow-long-left" size={24} color={COLORS.lightWhite} />
              </TouchableOpacity>
            ),
            headerTitle: ""
        }}
      />
      <AnnouncementDetailsContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary
  },
});