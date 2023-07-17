import { Text, TouchableOpacity, View, StyleSheet, Image, FlatList } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { COLORS, SIZES } from "../../../theme";
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';


const TaskCard = ({title, description, time, date, groupMembers, isImportant}) => {
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
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                {isImportant && <Entypo name="star" size={24} color={COLORS.primary} />}
            </View>
            <Text style={styles.description} numberOfLines={2}>{description}</Text>
        </View>
        <View style={styles.belowContainer}>
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{time}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.groupContainer}>
                {
                    groupMembers.slice(0, 3).map((item, index) => renderItem(item, index))
                }
                {
                    groupMembers.length > 3 && (
                        <TouchableOpacity style={styles.plusIconContainer} >
                            <Ionicons name="add" size={20} color="white" />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
        <View style={styles.moreIcon}>
                <Menu>
                    <MenuTrigger customStyles={triggerStyles}>
                        <MaterialIcons name="more-vert" size={24} color={COLORS.lightWhite} />
                    </MenuTrigger>
                    <MenuOptions customStyles={optionsStyles}>
                        <MenuOption onSelect={() => {}}>
                        <View style={styles.menuOption}>
                            <Feather name="check-circle" size={24} color="green" />
                            <Text style={styles.menuOptionText("green")}>Mark as done</Text>
                        </View>
                        </MenuOption>
                        <MenuOption onSelect={() => {}}>
                        <View style={styles.menuOption}>
                            <MaterialIcons name="edit" size={24} color={COLORS.primary} />
                            <Text style={styles.menuOptionText(COLORS.primary)}>Edit</Text>
                        </View>
                        </MenuOption>
                        <MenuOption onSelect={() => {}}>
                        <View style={styles.menuOption}>
                            <MaterialIcons name="delete" size={24} color="red" />
                            <Text style={styles.menuOptionText("red")}>Delete</Text>
                        </View>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
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
    title: {
        color: COLORS.white,
        fontSize: 18
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
        fontSize: SIZES.medium
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
    menuOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
      menuOptionText: (color) => ({
        marginLeft: 10,
        color: color
    }),
})

export default TaskCard