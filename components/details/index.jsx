import { useMemo } from "react"
import { View, Text,ScrollView, StyleSheet, TouchableOpacity,Dimensions, Linking } from "react-native"
import { useSearchParams } from "expo-router"
import { useFetcher } from "../../api"
import DataChecker from "../global/DataChecker"
import { COLORS, SIZES } from "../../theme"
import HTML from 'react-native-render-html';
import { MaterialIcons } from '@expo/vector-icons';

const AnnouncementDetailsContainer = () => {
    const { id } = useSearchParams()
    const { data , isLoading, isError } = useFetcher(`/announcement/getSingleAnnouncement?announcementId=${id}`); 
    const { announcementDetails } = useMemo(() => {
    if (data?.data) {
        return { announcementDetails: data?.data };
    }
    return { announcementDetails: {} };
    }, [data?.data]);

    function HTMLView({ htmlContent }) {
        const contentWidth = Dimensions.get('window').width;
        const tagsStyles = {
            p: {
              color: COLORS.lightWhite, 
              textAlign: "justify"
            },
            img: {
              width: '100%', 
            },
          };
        return (
            <View style={styles.textBody}>
                <HTML source={{ html: htmlContent }} contentWidth={contentWidth} tagsStyles={tagsStyles} imagesMaxWidth={contentWidth}/>
            </View>
        );
    }

    const openLink = async (fileUrl) => {
        const url = fileUrl
        const supported = await Linking.canOpenURL(url);
      
        if (supported) {
          await Linking.openURL(url);
        } else {
          console.error(`Don't know how to open URL: ${url}`);
        }
    };

      
  return (
    <ScrollView style={styles.container}>
        <DataChecker
            title="Announcement details"
            isLoading={isLoading}
            isError={isError}
            isEmpty={!isLoading && !isError && (typeof announcementDetails === 'object' && Object.keys(announcementDetails).length === 0)}
        >
            <Text style={styles.title}>{announcementDetails?.title}</Text>
            <View style={styles.titleContainer}>
                <TouchableOpacity style={styles.plusIconContainer} >
                    <Text style={{ color: COLORS.white, fontSize: 20 }}>{announcementDetails?.createdBy?.firstName.charAt(0)}</Text>
                </TouchableOpacity>  
                <View>
                    <Text style={styles.titleName} numberOfLines={1}>{announcementDetails?.createdBy?.firstName +" "+ announcementDetails?.createdBy?.lastName}</Text>
                    <Text style={styles.role} numberOfLines={1}>{announcementDetails?.createdBy?.role}</Text>
                </View>
            </View>
            { 
                announcementDetails?.announcementFile ?
                <TouchableOpacity style={styles.fileContainer} onPress={() => openLink(announcementDetails?.announcementFile)}>
                    <MaterialIcons name="picture-as-pdf" size={24} color="black" />
                    <Text numberOfLines={1}>Read the announcement file</Text>
                </TouchableOpacity>
                 :
                <HTMLView htmlContent={announcementDetails?.announcementBody} />
            }
        </DataChecker>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 15, 
    },
    title: {
        color: COLORS.secondary,
        fontWeight: "bold",
        fontSize: SIZES.large
    },
    textBody: {
        borderWidth: 1,
        borderColor: COLORS.secondary,
        paddingHorizontal: 15,
        marginTop: 15,
        borderRadius: 10
    },
    titleName: {
        color: "white",
        fontWeight: "bold",
        fontSize: SIZES.medium
    },
    titleContainer : {
        flexDirection: "row",
        alignItems: "center",
        gap: SIZES.xSmall,
        marginTop: 7
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
    role: {
        color: "white",
        fontSize: 12
    },
    fileContainer: {
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: COLORS.lightWhite,
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 15,
        height: 450
    },
})

export default AnnouncementDetailsContainer