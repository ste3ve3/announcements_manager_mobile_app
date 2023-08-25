import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { MaterialCommunityIcons, Ionicons, AntDesign, Feather } from '@expo/vector-icons'; 
import { SIZES, COLORS } from '../../../theme';

const HeaderIcon = ({ iconType, onPress }) => {
  return (
    <>
        {
            iconType == "leftIcon" ? 
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name="view-dashboard-outline" size={27} color= { COLORS.lightWhite } />
            </TouchableOpacity>
                :
            <View style={[styles.iconContainer(105), { alignItems: "center" }]}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require("../../../assets/logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.searchIcon}>
                    <TouchableOpacity>
                        <Ionicons name="search-outline" size={27} color= { COLORS.lightWhite } />
                    </TouchableOpacity>
                </View>
            </View>
            
        }
    </>
    
  )
}

const styles = StyleSheet.create({
    iconContainer : (gap) => ({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap : gap
    }),
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center', 
    },
    logo : { 
        width: 65, 
        height: 65,
    },
    searchIcon: {
        marginRight: 10
    }
})

export default HeaderIcon