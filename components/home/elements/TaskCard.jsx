import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native"
import { Link } from 'expo-router';
import { COLORS, SIZES } from "../../../theme";
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';


const TaskCard = ({id, title, role, firstName, creator, time, document, groupMembers, isImportant}) => {
    const renderItem = (item, index) => (
        <Image
          key={index}
          source={item.image}
          style={[styles.renderItem, (groupMembers.length <= 3 && index === groupMembers.length - 1)  ? {marginRight: 0} : {marginRight: -16}]}
        />
      );
      const triggerStyles = {
        triggerTouchable: { underlayColor: 'transparent' },
      };
      
      const optionsStyles = {
        optionsContainer: {
          backgroundColor: COLORS.white, 
          borderRadius: 10,
          width: 180,
        },
        optionText: {
          color: COLORS.primary, 
        },
      };

  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.subContainer}>
            <View style={styles.titleContainer}>
                <TouchableOpacity style={styles.plusIconContainer} >
                    <Text style={{ color: COLORS.white, fontSize: 20 }}>{firstName.charAt(0)}</Text>
                </TouchableOpacity>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.title} numberOfLines={1}>{creator}</Text>
                    <Text style={styles.role} numberOfLines={1}>{role}</Text>
                </View>
            </View>
            <Text style={styles.description} numberOfLines={2}>{title}</Text>
        </View>
        <View style={styles.belowContainer}>
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{time}</Text>
                {/* <Text style={styles.date}>{date}</Text> */}
            </View>
            <View style={styles.groupContainer}>
                <Link href={`/announcement/${id}`} >   
                    <View style={styles.readAnnouncement}> 
                        <Text style={styles.readText}>Read Announcement</Text>
                        <Ionicons name="navigate" size={24} color="white" />
                    </View>
                </Link>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
        position: "relative"
    },
    subContainer: {
        padding: 18
    },
    titleContainer : {
        flexDirection: "row",
        alignItems: "center",
        gap: SIZES.xSmall
    },
    subTitleContainer: {
        
    },
    title: {
        color: COLORS.white,
        fontSize: 15
    },
    readText: {
        color: "white",
        fontSize: 13
    },
    role: {
        color: COLORS.white,
        fontSize: 12
    },
    description: {
        color: COLORS.lightWhite,
        marginTop: SIZES.small
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: SIZES.xSmall
    },
    time: {
        color: COLORS.white,
        fontSize: SIZES.small
    },
    date: {
        color: COLORS.lightWhite,
    }, 
    renderItem : { 
        width: 40, 
        height: 40, 
        borderRadius: 20,  
    }, 
    groupContainer: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    plusIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.white,
        justifyContent: 'center',
    },
    belowContainer : {
        borderTopWidth: 1,
        padding: 18,
        borderColor: COLORS.border,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        gap: SIZES.large
    },
    moreIcon : {
        position: "absolute",
        top: 18,
        right: 15,
    },
    readAnnouncement: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 5,
        cursor: "pointer"
    },
    menuOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    fileContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        backgroundColor: COLORS.lightWhite,
        paddingVertical: 10,
        borderRadius: 50,
        marginTop: 15
    },
      menuOptionText: (color) => ({
        marginLeft: 10,
        color: color
    }),
})

export default TaskCard