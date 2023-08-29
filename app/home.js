import { useState } from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COLORS } from '../theme';
import HeaderIcon from '../components/home/elements/HeaderIcon';
import HomeContainer from '../components/home/HomeContainer';
import PopupModal from '../components/global/PopupModal';
import BottomSheetProvider from '../components/home/elements/BottomSheetProvider';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const openBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  return (
      <SafeAreaView style={styles.container}>
        <Stack.Screen 
          options={{
              headerStyle : {
                backgroundColor: COLORS.tertiary
              },
              headerShadowVisible: false,
              headerLeft: () => (
                  <HeaderIcon iconType="leftIcon" onNavPress={openBottomSheet}/>
              ),
              headerRight: () => (
                  <HeaderIcon onPress={() => setModalVisible(!modalVisible)}/>
              ),
              headerTitle: ""
          }}
        />
        <HomeContainer/>
        <BottomSheetProvider isBottomSheetVisible={isBottomSheetVisible} onClose={closeBottomSheet} />
        <PopupModal 
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        /> 
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary
  },
});