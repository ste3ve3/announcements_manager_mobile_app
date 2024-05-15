import { useMemo } from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, ScrollView, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../theme';
import HeaderIcon from '../../components/home/elements/HeaderIcon';
import HomeContainer from '../../components/home/HomeContainer';
import PopupModal from '../../components/global/PopupModal';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import DataChecker from '../../components/global/DataChecker';
import { useFetcher } from '../../api';
import { useLocalSearchParams } from "expo-router"
import TaskCard from '../../components/home/elements/TaskCard';

export default function App() {
  const { keyword } = useLocalSearchParams()
  const navigate =  useNavigation();
  const { data , isLoading, isError } = useFetcher(`/announcement?keyword=${keyword}`);  
  const { announcements } = useMemo(() => {
        if (data?.data?.length) {
        return { announcements: data?.data };
        }
        return { announcements: [] };
    }, [data?.data]);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
            headerStyle : {
              backgroundColor: COLORS.tertiary
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigate.goBack()}>
                <Entypo name="arrow-long-left" size={24} color={COLORS.lightWhite} />
              </TouchableOpacity>
            ),            
            headerTitle: ""
        }}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.titleText}>Search results for {keyword}:</Text>
        <DataChecker
            title="Search results"
            isLoading={isLoading}
            isError={isError}
            isEmpty={!isLoading && !isError && !announcements?.length}
        >
            {
                announcements.map((item, index) => (
                    <View style={styles.mapContainer} key={index}>
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
                    </View>
                ))
            } 
        </DataChecker>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary
  },
  mapContainer: {
    paddingHorizontal: 15, 
    paddingVertical: 7
  },
  titleText: {
    paddingHorizontal: 15, 
    paddingBottom: 20,
    fontSize: SIZES.large,
    color: COLORS.primary
  }
});