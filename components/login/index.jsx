import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform, ActivityIndicator } from "react-native"
import { COLORS, SIZES } from "../../theme"
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
import { API } from "../../api";
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';  

const initState = { loading: false, error: null };

const initFormData = {
    regNumber: '',
    password: ''
};

const LoginContainer = () => {
    const [formData, setFormData] = useState(initFormData);
    const [state, setState] = useState(initState);
    const [normalAuthError, setNormalAuthError] = useState(null)
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();
  
    const handleChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    const handleLogin = async (e) => {
        e.preventDefault();
        setState(initState);
        if(normalAuthError) {
            setNormalAuthError("")
        }
        try {
            setState((prev) => ({ ...prev, loading: true }));
        
            await API.post(`/student/login`, formData);
        
            Toast.show({
              type: 'success',
              text1: 'Logged In Successfully!',
              position: 'top',
            });
        
            navigation.navigate('home');
            setFormData(initFormData);
          } catch (error) {
            setState((prev) => ({
              ...prev,
              error:
                error?.response?.data?.message ||
                error?.message ||
                'Unknown error occurred, please try again.',
            }));
        
            if (error?.response?.data?.message) {
              setNormalAuthError(error?.response?.data?.message);
            }
        
            Toast.show({
              type: 'error',
              text1: 'Login was unsuccessful!',
              position: 'top',
            });
          } finally {
            setState((prev) => ({ ...prev, loading: false }));
          }
    };

  return (
        <LinearGradient
            colors={[COLORS.tertiary, COLORS.lightSecondary]}
            start={[0.5, 0]}
            end={[0.5, 1]}
            style={{ width, height, marginTop: 40 }}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.logoContainer}>
                    <Image 
                        source={require("../../assets/logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.login}>Sign In</Text>
                <Text style={styles.subLogin}>Enter your credentials to continue</Text>
                <View style={styles.formContainer}>
                    <View>
                        <Text style={styles.inputLabel}>Registration Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your reg number..."
                            keyboardType="numeric"
                            onChangeText={(value) => handleChange('regNumber', value)}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputLabel}>Password</Text>
                        <View style={styles.passwordInputContainer}>
                            <TextInput
                            style={styles.input}
                            placeholder="Enter your password..."
                            secureTextEntry={!showPassword}
                            keyboardType="numeric"
                            onChangeText={(value) => handleChange('password', value)}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeContainer}>
                                {showPassword ? (
                                    <Entypo name="eye-with-line" size={24} color={COLORS.primary} />
                                ) : (
                                    <Entypo name="eye" size={24} color={COLORS.primary} />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {normalAuthError && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{normalAuthError}</Text>
                    </View>
                )}
                <View style={{ alignItems: "flex-end" }}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                        {
                            state.loading ?
                            <ActivityIndicator size="large" color={COLORS.white} />
                                :
                            <AntDesign name="login" size={24} color={COLORS.white} />
                        }
                        
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
  )
}

const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo : { 
        width: 80, 
        height: 80,
    },
    login: {
        color: COLORS.white,
        fontSize: SIZES.xxLarge,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10
    },
    subLogin: {
        color: COLORS.white,
        fontSize: SIZES.medium,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 20
    },
    formContainer: {
        padding: 25,
        rowGap: 20,
        borderWidth: 1,
        margin: 10,
        borderRadius: 20,
        borderColor: COLORS.secondary
    },
    input : {
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        paddingLeft: 15,
        paddingRight: 60,
        borderRadius: 10,
        alignItems: "flex-start"
    },
    inputLabel : {
        color: COLORS.white,
        fontSize: 15,
        paddingBottom: 5,
        fontWeight: "semibold"
    },
    buttonContainer: {
        backgroundColor: COLORS.secondary,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 15,
        gap: 20,
        marginTop: 30
    },
    buttonText: {
        color: COLORS.white,
        fontSize: SIZES.medium
    },
    errorContainer: {
        marginVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 30
      },
      errorText: {
        color: '#F45050',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
      }, 
      eyeContainer: {
        position: 'absolute',
        right: 15,
      },       
})

export default LoginContainer