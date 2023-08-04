import React, { useRef } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from "../../../theme";
import { LinearGradient } from 'expo-linear-gradient';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import AddTaskForm from './AddTaskForm';

const NewTask = () => {
    const bottomSheetModalRef = useRef(null);

    const handlePresentModal = () => {
        bottomSheetModalRef.current?.present();
    }

    const handleCloseModal = () => {
        bottomSheetModalRef.current?.dismiss();
    }

  return (
    <BottomSheetModalProvider>
        <LinearGradient
            colors={[COLORS.tertiary, COLORS.lightSecondary]}
            start={[0.5, 0]}
            end={[0.5, 1]}
            style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer} onPress={handlePresentModal}>
                    <Text style={styles.buttonText}>Add new task</Text>
                    <Ionicons name="add" size={25} color={COLORS.white} />
                </TouchableOpacity>
        </LinearGradient> 
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={["100%"]}
            backgroundStyle={{ borderRadius: 20, backgroundColor: COLORS.primary }}
        >
            <AddTaskForm onClose={handleCloseModal}/>
        </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center", 
    }, 
    buttonContainer: {
        backgroundColor: COLORS.secondary,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginVertical: 20,
        gap: 20
    },
    buttonText: {
        color: COLORS.white,
        fontSize: SIZES.medium
    }
})

export default NewTask