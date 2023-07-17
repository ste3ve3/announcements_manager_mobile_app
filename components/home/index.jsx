import { ScrollView, StyleSheet, View } from "react-native"
import HomeCalendar from "./elements/HomeCalendar"
import Filter from "./elements/Filter"
import TaskCard from "./elements/TaskCard"
import { tasks } from "./elements/tasks"
import { MenuProvider } from 'react-native-popup-menu';
import NewTask from "./elements/NewTask"

const HomeContainer = () => {
  return (
    <>
        <ScrollView style={styles.container}>
            <HomeCalendar />
            <Filter />
              
                {
                    tasks.map((item, index) => (
                        <View style={styles.mapContainer} key={index}>
                            <MenuProvider skipInstanceCheck={true}>
                                <TaskCard 
                                    title={item.title}
                                    description={item.description}
                                    time={item.time}
                                    date={item.date}
                                    isImportant={item.isImportant}
                                    groupMembers={item.groupMembers}
                                />
                            </MenuProvider> 
                        </View>
                    ))
                }           
        </ScrollView>
        <NewTask />
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    mapContainer: {
        paddingHorizontal: 15, 
        paddingVertical: 7
    }
})

export default HomeContainer