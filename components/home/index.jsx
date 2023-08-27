import { useMemo, useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import HomeCalendar from "./elements/HomeCalendar"
import Filter from "./elements/Filter"
import TaskCard from "./elements/TaskCard"
import { tasks } from "./elements/tasks"
import { MenuProvider } from 'react-native-popup-menu';
import NewTask from "./elements/NewTask"
import { useFetcher } from "../../api"
import DataChecker from "../global/DataChecker"

const HomeContainer = () => {
    const [creatorId, setCreatorId] = useState('')
    const [category, setCategory] = useState('')
    const { data , isLoading, isError } = useFetcher(`/announcement?creatorId=${creatorId}&category=${category}`, {
        revalidateOnFocus: true,
        refreshInterval: 5000,
      });  
    const { announcements } = useMemo(() => {
        if (data?.data?.length) {
          return { announcements: data?.data };
        }
        return { announcements: [] };
      }, [data?.data]);
  
  return (
    <>
        <ScrollView style={styles.container}>
            <HomeCalendar setCategory={setCategory}/>
            <Filter setCreatorId={setCreatorId}/>
                <DataChecker
                    title="Announcements"
                    isLoading={isLoading}
                    isError={isError}
                    isEmpty={!isLoading && !isError && !announcements?.length}
                >
                    {
                        announcements.map((item, index) => (
                            <View style={styles.mapContainer} key={index}>
                                <MenuProvider skipInstanceCheck={true}>
                                    <TaskCard 
                                        title={item.title}
                                        role={item.staffCreator.role}
                                        id={item._id}
                                        firstName={item.staffCreator.firstName}
                                        creator={`${item.staffCreator.firstName} ${item.staffCreator.lastName}`}
                                        document={item.announcementFile}
                                        time={item.time}
                                        date={item.date}
                                        isImportant={item.isImportant}
                                        groupMembers={item.groupMembers}
                                    />
                                </MenuProvider> 
                            </View>
                        ))
                    } 
                </DataChecker>          
        </ScrollView>
        {/* <NewTask /> */}
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