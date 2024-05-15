import React, { useRef, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../theme";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import UserProfile from "./UserProfile";

const BottomSheetProvider = ({ isBottomSheetVisible, onClose }) => {
  const bottomSheetModalRef = useRef(null);

  useEffect(() => {
    if (isBottomSheetVisible) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [isBottomSheetVisible]);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={["90%"]}
        backgroundStyle={{
          borderRadius: 20,
          backgroundColor: COLORS.primary,
        }}
        onDismiss={onClose}
      >
        <UserProfile onClose={onClose} />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  // Styles for your component
});

export default BottomSheetProvider;
