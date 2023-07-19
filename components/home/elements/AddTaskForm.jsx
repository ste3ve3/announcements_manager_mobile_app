import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../theme';
import Checkbox from 'expo-checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const AddTaskForm = () => {
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
                
                    <View style={styles.checkboxMainContainer}>
                        <View style={styles.checkboxContainer}>
                            <Text style={styles.checkboxText}>Not Important</Text>
                            <Checkbox
                                style={styles.checkbox}
                                color={COLORS.white}
                                value={false}
                            />
                        </View>
                        <View style={styles.checkboxContainer}>
                            <Text style={styles.checkboxText}>Important</Text>
                            <Checkbox
                                style={styles.checkbox}
                                color={COLORS.white}
                                value={false}
                            />
                        </View>
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
    checkboxMainContainer : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    checkboxContainer : {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    checkbox: {
        width: 30,
        height: 30,
    },
    checkboxText: {
        color: COLORS.white,
        fontSize: 16
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
    }
});

export default AddTaskForm;
