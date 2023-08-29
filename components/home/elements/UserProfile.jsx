import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../../theme';
import { SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native'; 

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const navigation = useNavigation();

  useEffect(() => {
    const getUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('loggedInUser');
        const currentUser = JSON.parse(storedUser)
        if (currentUser !== null) { 
          setUser(currentUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        Toast.show({
            type: 'error',
            text1: error || 'There was an error retrieving the logged in user!',
            position: 'top',
          });
      }
    };
        getUser();
    }, []);

    const handleLogout = async() => {
        await AsyncStorage.removeItem('loggedInUser');
        navigation.navigate('login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Your Profile</Text>
            </View>
            <View style={styles.formContainer}>
                <TouchableOpacity style={styles.plusIconContainer} >
                    <Text style={{ color: COLORS.white, fontSize: 30 }}>{user?.firstName?.charAt(0)}</Text>
                </TouchableOpacity> 
                <View style={styles.userInfoContainer}>
                    <Text style={styles.name}>{user?.firstName +" "+ user?.lastName}</Text>
                    <Text style={styles.role}>Student</Text>
                </View>
                <View style={styles.userRegNumberContainer}>
                    <Text style={styles.regNumberTitle}>Registration Number:</Text>
                    <Text style={styles.regNumber}>{user?.regNumber}</Text>
                </View>
                <View style={styles.submitButtonsContainer}>
                    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                        <SimpleLineIcons name="logout" size={24} color="white" />
                        <Text style={styles.buttonText}>Logout</Text>
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
    formContainer: {
        padding: 15,
        rowGap: 20,
        marginTop: 20
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.secondary,
        gap: 10,
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 30, 
    },
    submitButtonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginVertical: 20
    },
    buttonText : {
        color: COLORS.white,
        fontSize: SIZES.medium
    },
    plusIconContainer: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.white,
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: 10
    },
    userInfoContainer: {
        alignItems: "center",
        marginTop: -10
    },
    userRegNumberContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        padding: 15,
        marginHorizontal: 5,
        justifyContent: "center",
        borderRadius: 10
    },
    regNumberTitle: {
        color: COLORS.secondary,
        fontWeight: "bold",
        fontSize: 16
    },
    regNumber: {
        color: COLORS.secondary
    },
    name: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: "bold"
    },
    role: {
        color: COLORS.tertiary,
        fontSize: 15
    },
});

export default UserProfile;
