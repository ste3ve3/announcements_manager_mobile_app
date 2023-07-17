import { Text, TouchableOpacity, FlatList, StyleSheet, View } from "react-native"
import { SIZES, COLORS } from "../../../theme";

const dates = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      day: '24',
      weekDay: 'Mon',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      day: '25',
      weekDay: 'Tue',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      day: '26',
      weekDay: 'Wen',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bzz',
      day: '27',
      weekDay: 'Thu',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97frr',
      day: '28',
      weekDay: 'Fri',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29dh76',
      day: '29',
      weekDay: 'Sat',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29dhhh6',
      day: '30',
      weekDay: 'Sun',
    },
  ];

const HomeCalendar = () => {
  return (
    <View>
        <FlatList
        data={dates}
        renderItem={({ item }) => (
            <TouchableOpacity style = {styles.container}>
                <Text style = {styles.day(item.day, SIZES.xLarge, "bold")}>{item.day}</Text>
                <Text style = {styles.day(item.day, SIZES.medium, "normal")}>{item.weekDay}</Text>
            </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: SIZES.large,
        paddingVertical: SIZES.xSmall,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLORS.border
    },
    day : (item, size, weight) => ({
        fontSize: size,
        fontWeight: weight,
        color: item === "26" ? COLORS.secondary : COLORS.primary
    })
})

export default HomeCalendar