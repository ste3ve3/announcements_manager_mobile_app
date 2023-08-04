import { Text, View, TouchableOpacity, StyleSheet } from "react-native"  
import { Picker } from '@react-native-picker/picker';
import { SIZES, COLORS } from "../../../theme";

const Filter = () => {
    const isActive = true;
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <View style={styles.types}>
                <TouchableOpacity>
                    <Text style={styles.typesText(isActive)}>All</Text>
                </TouchableOpacity>
                <Text style={styles.typesText()}>|</Text>
                <TouchableOpacity>
                    <Text style={styles.typesText()}>Mine</Text>
                </TouchableOpacity>
            </View>
            <Picker
                style={styles.picker}
                // mode="dropdown"
                dropdownIconColor={COLORS.lightWhite}
                // selectedValue={selectedItem}
                // onValueChange={handleItemChange}
            >
                <Picker.Item label="Ernest Ruzindana" value="Ernest Ruzindana" />
                <Picker.Item label="Aime Ndayambaje" value="Aime Ndayambaje" />
                <Picker.Item label="Steve Ndicunguye" value="Steve Ndicunguye" />
                <Picker.Item label="Benilde Rosalié Kabanyana" value="Benilde Rosalié Kabanyana" />
            </Picker>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    }, 
    subContainer : {
        paddingHorizontal: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    types : {
        flexDirection: "row",
        alignItems: "center",
        gap: SIZES.small,
    },
    typesText: (isActive) => ({
        color: isActive ? COLORS.secondary : COLORS.lightWhite,
        fontWeight: isActive && "bold"
    }),
    picker: {
        width: 150,
        height: 40,
        color: COLORS.lightWhite
    },
})

export default Filter