import { Text, TouchableOpacity, FlatList, StyleSheet, View } from "react-native"
import { SIZES, COLORS } from "../../../theme";

const dates = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'All',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Day Session',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Evening Session',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bzz',
      name: 'Weekend Session',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97frr',
      name: 'School of Law',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29dh76',
      name: 'School of Business Management and Economics',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29dhh879',
      name: 'School of Education',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29dhghj689',
      name: 'School of Graduate Studies',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29dhfgh33',
      name: 'School of Professional and Executive Programmes',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29dxcvbx345',
      name: 'Center for Economic Governance and Leadership',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29dhhg980',
      name: 'Center for Modern Languages',
    },
  ];

const HomeCalendar = ({ setCategory }) => {
  return (
    <View>
        <FlatList
        data={dates}
        renderItem={({ item }) => (
            <TouchableOpacity style = {styles.container} onPress={() => setCategory(item.name)}>
                <Text style={styles.item}>{item.name}</Text>
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
        paddingHorizontal: SIZES.xSmall,
        paddingVertical: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLORS.border,
    },
    item: {
      backgroundColor: COLORS.secondary,
      color: COLORS.white,
      paddingHorizontal: 30,
      paddingVertical: 7,
      borderRadius: 10
    }
})

export default HomeCalendar