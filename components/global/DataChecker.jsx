import React from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { COLORS } from '../../theme';

const DataChecker = ({ title, isLoading, isError = null, isEmpty, children, customEmptyMessage, customLoaders }) => {
    if (isLoading) {
        if (customLoaders) return customLoaders;
        return (
            <View style={{ justifyContent: "center", alignItems: "center", gap: 10 }}>
                <ActivityIndicator size="large" color="#A84448" />
                <Text style={{ color: "#A84448"}}>{title ? title : 'Items'} loading, please wait...</Text>
            </View>  
        );
    }
    if (isError) {  
        return (
            <View style={{ paddingVertical: 15, paddingHorizontal: 15, backgroundColor: COLORS.primary, margin: 10, borderRadius: 10 }}>
                <View severity="error" variant="outlined" style={{ gap: 5 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: COLORS.white }}>Error!</Text>
                    <Text style={{ fontSize: 15, color: COLORS.white }}>{isError || 'Oops, Something went wrong due to unknown error. Try to refresh the page and try again.'}</Text>
                </View>
            </View>
        );
    }
    if (isEmpty) {
        return (
            <View style={{ paddingVertical: 15, paddingHorizontal: 15, backgroundColor: COLORS.secondary, margin: 10, borderRadius: 10 }}>
                <View severity="info" variant="outlined" style={{ gap: 5 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: COLORS.white }}>No {title ? title?.toLowerCase() : 'items'} found!</Text>
                    <Text style={{ fontSize: 15, color: COLORS.white }}>
                        {customEmptyMessage
                            ? customEmptyMessage
                            : `No ${title ? title?.toLowerCase() : 'items'} found in our system!`}
                    </Text>
                </View> 
            </View>
        );
    }
    return <>{children}</>;
};

export default DataChecker;
