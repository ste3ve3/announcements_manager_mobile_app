import { Text, TouchableOpacity, StyleSheet, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from "../../../theme";
import { LinearGradient } from 'expo-linear-gradient';

const NewTask = () => {
  return (
    <LinearGradient
        colors={[COLORS.tertiary, COLORS.lightSecondary]}
        start={[0.5, 0]}
        end={[0.5, 1]}
        style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Add new task</Text>
                <Ionicons name="add" size={25} color={COLORS.white} />
            </TouchableOpacity>
    </LinearGradient> 
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