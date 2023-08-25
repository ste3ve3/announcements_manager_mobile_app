import { useMemo, useState } from "react"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"  
import { Picker } from '@react-native-picker/picker';
import { SIZES, COLORS } from "../../../theme";
import { useFetcher } from "../../../api";
import DataChecker from "../../global/DataChecker";

const Filter = ({ setCreatorId }) => {
    const isActive = true;
    const { data , isLoading, isError } = useFetcher("/auth"); 
    const [creator, setCreator] = useState('All')
    const { staffMembers } = useMemo(() => {
        if (data?.registeredUsers?.length) {
          return { staffMembers: data?.registeredUsers };
        }
        return { staffMembers: [] };
      }, [data?.registeredUsers]);

  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <View style={styles.types}>
                <TouchableOpacity>
                    <Text style={styles.typesText(isActive)}>Announcements</Text>
                </TouchableOpacity>
            </View>
            <DataChecker
                title="Staff"
                isLoading={isLoading}
                isError={isError}
                isEmpty={!isLoading && !isError && !staffMembers?.length}
            >
                <Picker
                    style={styles.picker}
                    mode="dropdown"
                    dropdownIconColor={COLORS.lightWhite}
                    selectedValue={creator}
                    onValueChange={(value) => {
                        setCreator(value);
                        const selectedStaff = staffMembers.find(
                          (staff) => `${staff.firstName} ${staff.lastName}` === value
                        );
                        if (selectedStaff) {
                            setCreatorId(selectedStaff._id);
                        }
                      }}
                >
                    <Picker.Item label="All" value="All" />
                    {
                        staffMembers.map((staff, index) => (
                            <Picker.Item key={index} label={`${staff.firstName} ${staff.lastName}`} value={`${staff.firstName} ${staff.lastName}`} />
                        ))
                    }
                </Picker>
            </DataChecker>
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
        fontWeight: isActive && "bold",
        fontSize: SIZES.medium
    }),
    picker: {
        width: 150,
        height: 40,
        color: COLORS.lightWhite
    },
})

export default Filter