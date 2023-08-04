import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../../theme';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const AddTaskForm = ({ onClose }) => {
    const [mode, setMode] = useState("date")
    const [show, setShow] = useState(false)

    const handleShowDateTimePicker = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>New Task</Text>
            </View>
            <View style={styles.formContainer}>
                <View>
                    <Text style={styles.inputLabel}>Task title</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Add Task Name..."
                        inputMode="text"
                    />
                </View>
                <View>
                    <Text style={styles.inputLabel}>Description</Text>
                    <TextInput
                        style={styles.input}
                        multiline
                        numberOfLines={5}
                        placeholder="Add description..."
                        inputMode="text"
                        textAlignVertical="top"
                    />
                </View>
                <View style={styles.pickerButtonContainer}> 
                    <View>
                        <Text style={styles.inputLabel}>Date</Text>
                        <TouchableOpacity onPress={() => handleShowDateTimePicker("date")} style={styles.pickerButton}>
                            <AntDesign name="calendar" size={24} color="black" />
                            <Text>dd/mm/yy</Text>
                        </TouchableOpacity>
                    </View>  
                    <View>
                        <Text style={styles.inputLabel}>Time</Text>
                        <TouchableOpacity onPress={() => handleShowDateTimePicker("time")} style={styles.pickerButton}>
                            <Ionicons name="md-time-outline" size={24} color="black" />
                            <Text>hh : mm</Text>
                        </TouchableOpacity>
                    </View>  
                </View>
                {
                    show &&
                    <DateTimePicker 
                        testID='dateTimePicker'
                        value={new Date()}
                        mode={mode}
                        is24Hour={true}
                        display='default'
                    />
                }
                <View>
                    <Text style={styles.inputLabel}>Assign Task</Text>
                    <View style={styles.assignButtonContainer}> 
                        <View>
                            <TouchableOpacity onPress={() => {}} style={styles.assignButton}>
                                <Ionicons name="person" size={24} color="black" />
                                <Text>Member</Text>
                            </TouchableOpacity>
                        </View>  
                        <View>
                            <TouchableOpacity onPress={() => {}} style={styles.assignButton}>
                                <FontAwesome5 name="users" size={24} color="black" style={styles.current}/>
                                <Text style={styles.current}>All team</Text>
                            </TouchableOpacity>
                        </View>  
                    </View>
                </View>
                <View style={styles.submitButtonsContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.createButton}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                </View>   
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title : {
        paddingVertical: 10,
        marginHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.white,
    },
    titleText : {
        textAlign: "center",
        color: COLORS.white,
        fontSize: 23,
        fontWeight: "bold"
    },
    input : {
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: "flex-start"
    },
    formContainer: {
        padding: 15,
        rowGap: 20
    },
    inputLabel : {
        color: COLORS.white,
        fontSize: 15,
        paddingBottom: 5,
        fontWeight: "semibold"
    },
    pickerButtonContainer : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",  
    },
    pickerButton : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        gap: 5,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    assignButtonContainer : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.white,  
        borderRadius: 10,
    },
    assignButton : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        gap: 7,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 30,
    },
    createButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.secondary,
        gap: 5,
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 50, 
    },
    current: {
        color: COLORS.secondary,
        fontWeight: "bold"
    },
    cancelButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 2,
        borderColor: COLORS.secondary,
        gap: 5,
        borderRadius: 10,
        paddingVertical: 11,
        paddingHorizontal: 50,  
    },
    submitButtonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20
    },
    buttonText : {
        color: COLORS.white,
        fontSize: SIZES.medium
    }
});

export default AddTaskForm;
